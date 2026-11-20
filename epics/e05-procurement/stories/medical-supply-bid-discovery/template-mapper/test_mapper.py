import unittest

from mapper import map_document


def document(entries):
    text = ""
    tokens = []
    for value, x, y in entries:
        start = len(text)
        text += value + " "
        segment = {"endIndex": str(len(text))}
        if start:
            segment["startIndex"] = str(start)
        tokens.append({"layout": {
            "textAnchor": {"textSegments": [segment]},
            "boundingPoly": {"normalizedVertices": [{"x": x, "y": y}]},
        }})
    return {"text": text, "pages": [{"pageNumber": 1, "tokens": tokens}]}


TEMPLATE = {
    "id": "example-v1", "page": 1, "signature": [
        {"text": "EXAMPLE BID", "box": [0.1, 0.1, 0.6, 0.2]},
    ], "fields": [{
        "target": "Solicitation_Number__c", "required": True,
        "anchor": {"text": "NUMBER", "box": [0.1, 0.25, 0.3, 0.35]},
        "offset": [0.05, -0.02, 0.3, 0.02], "pattern": "[0-9]{3}",
    }],
}


class MapperTests(unittest.TestCase):
    def setUp(self):
        self.entries = [("EXAMPLE", .2, .15), ("BID", .3, .15),
                        ("NUMBER", .21, .31), ("123", .43, .31)]

    def test_box_follows_printed_label(self):
        result = map_document(document(self.entries), [TEMPLATE])
        self.assertEqual(result["status"], "matched")
        self.assertEqual(result["fields"]["Solicitation_Number__c"], "123")

    def test_unknown_layout(self):
        result = map_document(document(self.entries[2:]), [TEMPLATE])
        self.assertEqual(result["status"], "unknown-template")

    def test_ambiguous_layout(self):
        second = dict(TEMPLATE, id="other-v1")
        self.assertEqual(map_document(document(self.entries), [TEMPLATE, second])["status"],
                         "ambiguous-template")

    def test_missing_required_value(self):
        result = map_document(document(self.entries[:-1]), [TEMPLATE])
        self.assertEqual(result["status"], "invalid-fields")
        self.assertEqual(result["fields"], {})

    def test_duplicate_field_anchor_is_rejected(self):
        entries = self.entries + [("NUMBER", .27, .33)]
        self.assertEqual(map_document(document(entries), [TEMPLATE])["status"], "invalid-fields")

    def test_split_identifier_preserves_original_punctuation(self):
        sample = document(self.entries[:-1] + [("123-456", .43, .31)])
        segment = sample["pages"][0]["tokens"][-1]["layout"]["textAnchor"]["textSegments"][0]
        start = int(segment["startIndex"])
        tokens = sample["pages"][0]["tokens"]
        tokens.pop()
        for left, right, x in [(0, 3, .4), (3, 4, .44), (4, 7, .48)]:
            tokens.append({"layout": {
                "textAnchor": {"textSegments": [{"startIndex": str(start + left),
                                                "endIndex": str(start + right)}]},
                "boundingPoly": {"normalizedVertices": [{"x": x, "y": .31}]},
            }})
        config = dict(TEMPLATE, fields=[dict(TEMPLATE["fields"][0], pattern=r"[0-9]{3}-[0-9]{3}")])
        result = map_document(sample, [config])
        self.assertEqual(result["fields"], {"Solicitation_Number__c": "123-456"})

    def test_word_spacing_from_token_leading_whitespace(self):
        sample = document(self.entries[:-1] + [("Medical", .43, .31), ("Supplies", .48, .31)])
        segment = sample["pages"][0]["tokens"][-1]["layout"]["textAnchor"]["textSegments"][0]
        segment["startIndex"] = str(int(segment["startIndex"]) - 1)
        title = dict(TEMPLATE["fields"][0], target="Title__c")
        del title["pattern"]
        config = dict(TEMPLATE, fields=[TEMPLATE["fields"][0], title])
        # Put the identity on a separate row so its required check is independent.
        config["fields"][0] = {"target": "Solicitation_Number__c", "box": [.4, .36, .5, .39]}
        separate = document(self.entries[:-1] + [("Medical", .43, .31), ("Supplies", .48, .31),
                                                 ("123", .43, .38)])
        separate["pages"][0]["tokens"][-2]["layout"]["textAnchor"]["textSegments"][0] = segment
        self.assertEqual(map_document(separate, [config])["fields"].get("Title__c"),
                         "Medical Supplies")

    def test_date_with_space_before_comma(self):
        entries = self.entries + [("March", .41, .41), ("1", .46, .41),
                                 (",", .47, .41), ("2025", .51, .41)]
        date = {"target": "Published_Event_Date__c", "type": "date",
                "box": [.39, .39, .55, .43]}
        config = dict(TEMPLATE, fields=[TEMPLATE["fields"][0], date])
        self.assertEqual(map_document(document(entries), [config])["fields"].get(date["target"]),
                         "2025-03-01")

    def test_wrapped_title_requires_review(self):
        entries = self.entries[:-1] + [("Title", .43, .305), ("Extended", .15, .319), ("123", .43, .38)]
        title = {"target": "Title__c", "required": True,
                 "anchor": {"text": "NUMBER", "box": [.1, .25, .3, .35]},
                 "offset": [.05, -.01, .3, .01], "continuation_depth": .035, "continuation_left": .1}
        config = dict(TEMPLATE, fields=[{"target": "Solicitation_Number__c", "box": [.4, .36, .5, .39]}, title])
        self.assertEqual(map_document(document(entries), [config])["status"], "invalid-fields")

    def test_title_overflow_requires_review(self):
        entries = self.entries[:-1] + [("Title", .43, .305), ("Extended", .75, .305),
                                      ("123", .43, .38)]
        title = {"target": "Title__c", "required": True,
                 "anchor": {"text": "NUMBER", "box": [.1, .25, .3, .35]},
                 "offset": [.05, -.01, .3, .01], "continuation_depth": .035,
                 "continuation_left": .1}
        config = dict(TEMPLATE, fields=[{"target": "Solicitation_Number__c",
                                        "box": [.4, .36, .5, .39]}, title])
        self.assertEqual(map_document(document(entries), [config])["status"], "invalid-fields")

    def test_anchor_is_not_mistaken_for_wrapped_title(self):
        entries = self.entries[:-1] + [("Title", .43, .304), ("123", .43, .38)]
        title = {"target": "Title__c", "required": True,
                 "anchor": {"text": "NUMBER", "box": [.1, .25, .3, .35]},
                 "offset": [.05, -.01, .3, .01], "continuation_depth": .035,
                 "continuation_left": .1}
        config = dict(TEMPLATE, fields=[{"target": "Solicitation_Number__c",
                                        "box": [.4, .36, .5, .39]}, title])
        self.assertEqual(map_document(document(entries), [config])["status"], "matched")

    def test_title_word_left_of_value_box_requires_review(self):
        entries = self.entries[:-1] + [("A", .25, .305), ("Title", .43, .305),
                                      ("123", .43, .38)]
        title = {"target": "Title__c", "required": True,
                 "anchor": {"text": "NUMBER", "box": [.1, .25, .3, .35]},
                 "offset": [.05, -.01, .3, .01], "continuation_depth": .035,
                 "continuation_left": .1}
        config = dict(TEMPLATE, fields=[{"target": "Solicitation_Number__c",
                                        "box": [.4, .36, .5, .39]}, title])
        self.assertEqual(map_document(document(entries), [config])["status"], "invalid-fields")

    def test_erie_template_maps_synthetic_notice(self):
        import json
        from pathlib import Path
        template = json.loads(Path(__file__).with_name("erie-v1.json").read_text())
        entries = [
            ("COUNTY", .443, .121), ("OF", .523, .121), ("ERIE", .579, .121),
            ("DIVISION", .425, .141), ("OF", .486, .141), ("PURCHASE", .56, .141),
            ("INVITATION", .463, .158), ("TO", .536, .158), ("BID", .572, .158),
            ("BID", .133, .381), ("NUMBER", .193, .381), (":", .233, .381),
            ("999999-123", .294, .381), ("OPENING", .159, .412),
            ("DATE", .229, .412), (":", .256, .412), ("June", .307, .413),
            ("30,", .341, .413), ("2025", .381, .413), ("TIME", .626, .412),
            (":", .648, .412), ("2:00", .684, .412), ("PM", .72, .412),
            ("FOR", .138, .444), (":", .156, .444),
            ("Medical", .233, .445), ("Supplies", .309, .445),
        ]
        result = map_document(document(entries), [template])
        self.assertEqual(result["status"], "matched")
        self.assertEqual(result["fields"], {
            "Issuing_Organization__c": "COUNTY OF ERIE DIVISION OF PURCHASE",
            "Notice_Type__c": "INVITATION TO BID",
            "Solicitation_Number__c": "999999-123",
            "Published_Event_Date__c": "2025-06-30",
            "Published_Event_Time__c": "14:00:00.000Z",
            "Title__c": "Medical Supplies",
        })
        self.assertEqual(map_document(document(entries[9:]), [template])["status"],
                         "unknown-template")
