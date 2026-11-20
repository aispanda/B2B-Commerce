"""Map saved Document AI OCR to a Solicitation draft preview."""
import argparse
from datetime import datetime
import json
from pathlib import Path
import re


TARGETS = {
    "Title__c", "Issuing_Organization__c", "Solicitation_Number__c",
    "Notice_Type__c", "Published_Event_Date__c", "Published_Event_Time__c",
}


def page_tokens(document, number):
    text = document.get("text")
    if not text:
        return []
    page = next((page for page in document.get("pages", []) if page["pageNumber"] == number), {})
    tokens = []
    for token in page.get("tokens", []):
        layout = token["layout"]
        vertices = layout.get("boundingPoly", {}).get("normalizedVertices", [])
        if not vertices:
            continue
        ranges = [(int(s.get("startIndex", 0)), int(s["endIndex"]))
                  for s in layout["textAnchor"]["textSegments"]]
        value = "".join(text[start:end] for start, end in ranges).strip()
        if value:
            x, y = (sum(v.get(axis, 0) for v in vertices) / len(vertices)
                    for axis in ("x", "y"))
            start, end = ranges[0][0], ranges[-1][1]
            raw = text[start:end]
            trimmed_start = start + len(raw) - len(raw.lstrip())
            trimmed_end = start + len(raw.rstrip())
            tokens.append((value, x, y, trimmed_start, trimmed_end))
    return tokens


def within(tokens, box):
    left, top, right, bottom = box
    return [token for token in tokens if left <= token[1] <= right and top <= token[2] <= bottom]


def locate(tokens, anchor):
    candidates = within(tokens, anchor["box"])
    words = anchor["text"].casefold().split()
    matches = []
    for index in range(len(candidates) - len(words) + 1):
        span = candidates[index:index + len(words)]
        if [word.casefold() for word, *_ in span] == words:
            matches.append(span)
    return matches[0] if len(matches) == 1 else None


def read_field(tokens, field):
    box = field.get("box")
    anchor_tokens = []
    if "anchor" in field:
        anchor_tokens = locate(tokens, field["anchor"])
        if anchor_tokens is None:
            raise ValueError("missing or ambiguous anchor")
        origin = anchor_tokens[-1][1:3]
        box = [delta + origin[index % 2] for index, delta in enumerate(field["offset"])]
    if "continuation_depth" in field:
        left, top, right, bottom = box
        values = within(tokens, box)
        if values:
            first_line = min(token[2] for token in values)
            zone = [field.get("continuation_left", left), top, 1.0,
                    bottom + field["continuation_depth"]]
            if any((token[2] > first_line + 0.005 or token[1] > right or token[1] < left) and token not in values and token not in anchor_tokens
                   for token in within(tokens, zone)):
                raise ValueError("possible wrapped value")
    pieces = []
    previous_end = None
    for word, _, _, start, end in within(tokens, box):
        if previous_end is not None and start != previous_end:
            pieces.append(" ")
        pieces.append(word)
        previous_end = end
    value = "".join(pieces)
    if not value:
        return None
    if "pattern" in field and not re.fullmatch(field["pattern"], value):
        raise ValueError("unrecognized value format")
    kind = field.get("type", "text")
    if kind == "date":
        return datetime.strptime(re.sub(r"\s+,", ",", value), "%B %d, %Y").date().isoformat()
    if kind == "time":
        return datetime.strptime(value, "%I:%M %p").strftime("%H:%M:%S.000Z")
    if kind != "text" or len(value) > 255:
        raise ValueError("unsupported type or text length")
    return value


def map_document(document, templates):
    matches = []
    for template in templates:
        signature = template["signature"]
        if not signature or any(not anchor["text"].strip() for anchor in signature):
            raise ValueError("template requires a nonempty signature")
        tokens = page_tokens(document, template["page"])
        if all(locate(tokens, anchor) is not None for anchor in signature):
            matches.append((template, tokens))
    if len(matches) != 1:
        return {"status": "ambiguous-template" if matches else "unknown-template",
                "candidates": [template["id"] for template, _ in matches], "fields": {}}

    template, tokens = matches[0]
    fields, issues, seen = {}, [], set()
    for field in template["fields"]:
        target = field["target"]
        if target not in TARGETS or target in seen:
            raise ValueError(f"unsupported or repeated destination: {target}")
        seen.add(target)
        try:
            value = read_field(tokens, field)
            if value is not None:
                fields[target] = value
            elif field.get("required"):
                issues.append(f"{target}: required value absent")
        except ValueError:
            issues.append(f"{target}: invalid or ambiguous value")
    if "Solicitation_Number__c" not in fields:
        issues.append("Missing solicitation identity")
    return {"status": "invalid-fields" if issues else "matched", "template": template["id"],
            "fields": {} if issues else fields, "issues": issues}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("document", type=Path)
    parser.add_argument("templates", nargs="+", type=Path)
    args = parser.parse_args()
    result = map_document(json.loads(args.document.read_text(encoding="utf-8")),
                          [json.loads(path.read_text(encoding="utf-8")) for path in args.templates])
    print(json.dumps(result, indent=2))


if __name__ == "__main__":
    main()
