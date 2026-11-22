# BID-01 · Turn public medical supply bids into Salesforce records

**Owner** · Pending confirmation · [Checklist](checklist.json) · [Acceptance criteria and verification](scenarios.json) · [Delivery guide](https://github.com/aispanda/Reusable-Delivery/blob/a06a646d44542ba9c41c68da10dffbf01b2fd3c7/migrate/START.md)

**Outcome** · As a medical supply sales coordinator, I want relevant public RFQs and invitations to bid turned into Salesforce records for review so that I can identify bids worth pursuing before their deadlines.

**Scope** · Public solicitations, bounded batch extraction, and reviewable drafts in the designated Salesforce test org. Bid submission, production writes, automatic Opportunity creation, exhibits, and general instruction text are outside the pilot.

**Operations** · An operator selects notices from an official buyer portal and starts intake from an explicit batch manifest. Eligibility is checked against the official portal. Intake matches each PDF to a reviewed, versioned extraction configuration. Unknown layouts, missing identity, and unsupported or conflicting values go to review. The reviewer inspects Salesforce drafts and source pages, decides whether to pursue the bid, and may link existing Opportunities.

**Demo result** · NOT RUN for the end-to-end demo. Historical observations from 19–21 November 2026 include a one-page extraction and transfer smoke test, signed-in pilot operator access to the draft and PDF, and a separate 22-page extraction comparison. The intended reviewer and full scenario surfaces remain unverified.

**Acceptance** · Pending human decision. All six formal scenarios are NOT RUN. Historical observations below do not close any criterion.

## Requirements and verification

See [acceptance criteria and scenario checks](scenarios.json).

**AC-06 access decision** · The owner selected an on-demand short-lived signed link after Salesforce authorization. Holders can open the exact approved PDF until it expires. QA-03a covers this proposed implementation. QA-03 covers review of the draft and its source evidence.

**Open product decisions** · Define the relevance rules, decide who checks portal status, confirm required extraction fields, and decide whether a retry of the same intake event reuses its document record.

## Intake and review design

- **Extraction** · Keep original PDFs and raw JSON in private Cloud Storage with distinct durable references. Map source-supported header fields and requested-item rows, including item number, separate product code, original description, quantity and unit. Keep source pages for review. Preserve separate opening and quotation events. Leave unverified time zones and blank fields unset. The existing pilot stores readable item rows in long text. A structured line-item object remains a design choice for downstream reporting.
- **Source history** · Identify the Solicitation by source or buyer plus solicitation ID. The proposed Solicitation Document child keeps each received PDF reference, received date, review status, reviewer-selected document type and notes. For a known bid, create a new child marked Needs Review and preserve the reviewed parent and earlier evidence. The reviewer decides Duplicate or Amendment and approves any parent refresh. Missing identity goes to review. General concurrency and replay handling are pending.
- **Reviewer access** · Trusted Salesforce server code checks the user's access to the parent, child, objects and relevant fields. The authenticated integration may issue an expiring read-only URL for the authorized object and version. Bind the request to that document and keep signed URLs out of persisted fields and logs. The child and the action are still in design.
- **Opportunity and reporting** · Use the existing optional Solicitation lookup. Several Opportunities can point to one Solicitation. A Solicitation report counts the bid once. Revisit the relationship only if an Opportunity needs multiple links or link-specific data.
- **Template authoring** · Use a representative PDF and versioned configuration workbook. AI can propose fields and labels. An author reviews field definitions, source anchors and mapping, then checks a source comparison before activation. Record type mapping, routing thresholds, registry and activation remain proposed. The live boundary between the mapper, LangGraph and any downstream orchestration remains open.

## Historical observations and coverage gaps

| Supported check | Observed pilot work | Evidence still needed |
|---|---|---|
| QA-01 | The Erie extraction fixture is historical and expired. | Official portal discovery and qualification of open, expired and unverifiable notices. |
| QA-02 | One-page Form Parser smoke test returned JSON. The local positional mapper routed an unfamiliar held-out layout to review. A separate zero-training Custom Extractor run covered the full 22-page fixture and extracted the title and both item groups. | Multi-file reconciliation and source-based quality review. The RFQ payment terms were blank on page 4, while the focused retest still returned policy text from page 6. Hold this field out of intake until validated. |
| QA-03 | A one-page operator script created a historical draft. A later signed-in operator saw the grouped Details and opened the source PDF. The verified deadline and time zone were blank. The sample had no item schedule. | Designated reviewer access, full item and exception data, durable source references, and a recorded pursuit decision. |
| QA-03a | Owner selected the temporary link pattern. The historical operator opened the PDF with existing signed-in sessions. | Build and verify authorized, denied, exact-object and expiry behavior in the test org. |
| QA-04 | A sequential smoke replay found the same source key and left the draft unchanged. | New child records and human disposition for both arrivals, controlled parent updates, retained evidence and concurrent handling. |
| QA-05 | The test schema includes the optional lookup and the pilot layout shows the Opportunities related list. | Two links and one unlinked record, plus a solicitation report count of one. |

The selected full-document labels were saved, including the original OCR description and the separate code on the same item. Overlap suitability for training remains open. The 28 candidate field descriptions are in the local workbook with their prior versions preserved. The linked workbook is the earlier baseline. Applying the workbook candidates, measuring held-out quality, and human review of source discrepancies remain pending. The full-document extraction tests made no Salesforce writes.

The reviewed offline mapper and LangGraph preview remain available through the draft code slice. Code review and local checks apply to their recorded revisions. Live routing and an end-to-end batch remain pending. Follow the recorded CodeRabbit-first, Greptile while its free allowance is available, Codex, and fresh Opus-last review sequence for applicable code changes. Record the evidence for the exact revision and keep acceptance separate.

## Material blockers

- **LEG-01, QA-02, QA-03** · Confirm billing and processing authorization, independent Salesforce access checks and the designated reviewer before dependent live validation.
- **S-06, S-07, S-09, S-29, QA-02** · Apply and read back the selected prompts in a suitable test version before the next comparison. Review the remaining field disagreements against the source. Prompt matching alone cannot establish correct extraction.
- **LEG-02A, S-28, S-30, LEG-03, QA-03a, QA-04** · Review and implement child-document intake, signed-link access, and review-first amendment handling before running the full intake pilot.
- **LEG-04, AC-01 to AC-06** · Assign an independent verifier and record the human acceptance decision once the required scenario evidence is available.

## Files

- [Checklist](checklist.json) · Build and setup tasks, dependencies, and task evidence references.
- [Acceptance criteria and verification](scenarios.json) · Acceptance criteria, verification cases, and required surfaces. Fixture aliases resolve in authorized storage when assigned.
- [Document extraction configuration workbook](https://github.com/aispanda/B2B-Commerce/blob/02397197115665121481ba2279f3bffdce7904e5/epics/e05-procurement/stories/medical-supply-bid-discovery/document-extraction-configuration.xlsx) · Published baseline example.
- [ABCMed emergency medical-supply demo scenario](https://github.com/aispanda/B2B-Commerce/blob/02397197115665121481ba2279f3bffdce7904e5/epics/e05-procurement/stories/medical-supply-bid-discovery/emergency-medical-supply-demo-scenario.md) · Demo narrative and future possibilities.
- [Claude solution design review](https://github.com/aispanda/B2B-Commerce/blob/02397197115665121481ba2279f3bffdce7904e5/epics/e05-procurement/stories/medical-supply-bid-discovery/claude-solution-design-review.md) · Historical design alternatives.
- [Document AI batch requests](https://docs.cloud.google.com/document-ai/docs/send-request#batch-processing) · Batch inputs and output.
- [Salesforce access references](https://github.com/aispanda/Reusable-Delivery/tree/main/references) · CLI and MCP access checks.
- [Cloud Storage signed URLs](https://docs.cloud.google.com/storage/docs/access-control/signed-urls) and [Salesforce Apex security](https://developer.salesforce.com/docs/platform/lwc/guide/apex-security) · Document access design references.
- [Draft mapper and LangGraph code review](https://github.com/aispanda/B2B-Commerce/pull/6) and [review process update](https://github.com/aispanda/Reusable-Delivery/pull/6) · Code history and review rules.

**Task ID migration** · The 27 checklist task IDs keep their saved meanings. Legacy story execution IDs S-01, S-02, S-02a, S-03 and S-04 now map to LEG-01, LEG-02, LEG-02A, LEG-03 and LEG-04 respectively. Those references retain their old meaning in dated historical material.

**Next** · Finish the S-06 test-version readback, complete the source comparison in S-07, then sign off the rerun with the intended reviewer in S-29. Already-known disagreements can be resolved in S-09 now. Executor and reviewer assignment remain pending.
