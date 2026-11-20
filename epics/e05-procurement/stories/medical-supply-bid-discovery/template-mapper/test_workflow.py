import unittest
from unittest import mock

from langsmith.run_helpers import get_tracing_context

import workflow
from test_mapper import TEMPLATE, document
from workflow import run_preview


ENTRIES = [("EXAMPLE", .2, .15), ("BID", .3, .15),
           ("NUMBER", .21, .31), ("123", .43, .31)]


class WorkflowTests(unittest.TestCase):
    def test_matching_layout_returns_a_draft_preview(self):
        result = run_preview(document(ENTRIES), [TEMPLATE])
        self.assertEqual(result["route"], "draft-preview")
        self.assertEqual(result["mapping"]["fields"], {"Solicitation_Number__c": "123"})

    def test_unknown_layout_routes_to_review(self):
        result = run_preview(document(ENTRIES[2:]), [TEMPLATE])
        self.assertEqual(result["route"], "review")
        self.assertEqual(result["mapping"]["status"], "unknown-template")
        self.assertEqual(result["mapping"]["fields"], {})

    def test_ambiguous_layout_routes_to_review(self):
        result = run_preview(document(ENTRIES), [TEMPLATE, dict(TEMPLATE, id="other")])
        self.assertEqual(result["route"], "review")
        self.assertEqual(result["mapping"]["status"], "ambiguous-template")

    def test_missing_identity_routes_to_review(self):
        result = run_preview(document(ENTRIES[:-1]), [TEMPLATE])
        self.assertEqual(result["route"], "review")
        self.assertEqual(result["mapping"]["status"], "invalid-fields")

    def test_step_cap_stops_before_routing(self):
        result = run_preview(document(ENTRIES), [TEMPLATE], step_limit=1)
        self.assertEqual(result, {"route": "blocked", "reason": "step-limit"})

    def test_preview_disables_tracing_even_when_env_enables_it(self):
        seen = []
        real_mapper = workflow.map_document

        def observe_tracing(doc, templates):
            seen.append(get_tracing_context()["enabled"])
            return real_mapper(doc, templates)

        with (mock.patch.dict("os.environ", {"LANGSMITH_TRACING": "true"}),
              mock.patch.object(workflow, "map_document", observe_tracing)):
            run_preview(document(ENTRIES), [TEMPLATE])
        self.assertEqual(seen, [False])

    def test_missing_ocr_text_routes_to_review(self):
        result = run_preview({"pages": [{"pageNumber": 1}]}, [TEMPLATE])
        self.assertEqual(result["route"], "review")
        self.assertEqual(result["mapping"]["status"], "unknown-template")
        self.assertEqual(result["mapping"]["fields"], {})
