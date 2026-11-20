# E02 · Scan barcodes for internal consignment

**Owner** · Pending confirmation · [Delivery guide · MIGRATE · a06a646](https://github.com/aispanda/Reusable-Delivery/blob/a06a646d44542ba9c41c68da10dffbf01b2fd3c7/migrate/START.md)

**Outcome** · As an internal consignment coordinator, I want to scan or enter a barcode on my phone so that I can identify site stock, record receipts and usage, and submit count discrepancies for review.

**Demo result** · NOT RUN on a phone. The lookup is deployed and its app page activated for the administrator demo user. Mobile navigation, camera scanning and intended coordinator access remain unverified.

**Acceptance** · The workflow direction is confirmed. Human acceptance of the implementation is pending. Adjustment posting requires a future movement design. This story uses Salesforce for the consignment workflow.

## Proposed scenario checks

- **Where / who** · Use the Salesforce mobile app on a physical phone as an authorized coordinator in the demo org. The administrator test entry is **Mobile Only → Menu → Consignment Stock Lookup**. Verify the menu and intended coordinator access before replay. [Salesforce BarcodeScanner compatibility](https://developer.salesforce.com/docs/platform/mobile-offline/guide/use-barcodescanner-compatibility.html)
- **Start with** · Use the E02 synthetic stock position at zero confirmed on hand, a 10-box fill-up Shipment Item, a dated receipt reference and a three-box usage report. Confirm the fixture and its links before replay. The previous demo stock has seven boxes. A separate synthetic ten-unit delivered line and zero-stock position have been prepared; verify their links and receipt absence before replay. [E02 scenario and fixture](https://github.com/aispanda/B2B-Commerce/blob/634d5eef66584da696dd658615d77bb856259a75/epics/e02-consignment/stories/consignment-consumption-demo/scenario.md)

**Demo sequence** · SC-01 → SC-02 → SC-03 → SC-04 → SC-05

1. **SC-01** · Scan a fixture barcode in the Salesforce mobile app → one matching product and the authorized account/site stock position appear. The coordinator reviews the product and quantity before saving. AC-01
2. **SC-02** · Cancel or deny camera access, then enter the same barcode manually → the same product, stocking unit and stock position appear. AC-01
3. **SC-03** · Select the matching delivered Shipment Item and record dated receipt evidence for 10 boxes → the Receipt starts as **Recorded**, with confirmed on hand at **0**. Advance it to **Posted Receipt** → confirmed on hand is **10**. AC-02
4. **SC-04** · Enter the usage date, report reference and three boxes. Verify the Consumption movement → confirmed on hand is **10**, with **3** awaiting posting. Advance it to **Posted Usage** → confirmed on hand is **7**, with **0** awaiting posting. AC-02
5. **SC-05** · Count six boxes against seven confirmed and submit the discrepancy → the review record shows expected **7**, counted **6**, variance **−1**, the site and product, and who submitted it and when. Confirmed on hand is **7**. AC-03
6. **SC-06** · Try an unknown code, a code with multiple mappings and an inaccessible site → the coordinator cannot save a movement. A valid code with leading zeros resolves identically through scan and manual entry. AC-01
7. **SC-07** · Try a mismatched Shipment Item and replay the same receipt and usage references → the mismatch is rejected, each valid event is counted once, and confirmed on hand is **7**. AC-02
8. **SC-08 · Proposed** · In the authorized checkout test path, exercise an eligible and an ineligible buyer → the eligible buyer submits a fill-up in Salesforce and a fill-up request leaves stock posting pending receipt. The ineligible buyer cannot submit a fill-up. AC-04

| Check ID | Status | Observed result and evidence |
| --- | --- | --- |
| SC-01 | NOT RUN | Pending intended-device and app verification. |
| SC-02 | NOT RUN | Pending camera fallback test. |
| SC-03 | NOT RUN | A fresh synthetic zero-stock position and unused ten-unit delivered line have been created. Receipt workflow remains NOT RUN. |
| SC-04 | NOT RUN | Pending a fresh usage report and posting test. |
| SC-05 | NOT RUN | Pending the discrepancy review workflow and destination. |
| SC-06 | NOT RUN | Pending identifier and access tests. |
| SC-07 | NOT RUN | Pending shipment match and replay tests. |
| SC-08 | NOT RUN | Pending access to the authorized checkout test path. |

## Acceptance criteria

| Criterion ID | Criterion | Coverage and evidence |
| --- | --- | --- |
| AC-01 | Use native scanning in the Salesforce mobile app with a manual fallback. | SC-01, SC-02, SC-06 |
| AC-02 | Reuse E02’s receipt and consumption movements. | SC-03, SC-04, SC-07 |
| AC-03 | Capture count discrepancies for review until an adjustment movement is defined. | SC-05 |
| AC-04 | Use Salesforce for fill-up checkout and eligibility. | SC-08 · Salesforce path and eligibility rules pending verification. The eligible/ineligible scenario is proposed. |

## Material blockers

**SC-03–SC-04 · Fixture prepared**
- **Goal** · Demonstrate receiving ten boxes and using three, starting from zero.
- **Blocker** · The receipt and usage actions are not implemented for this barcode experience.
- **Current fix** · Build and verify the actions using the prepared synthetic shipment and zero-stock position.

**SC-03, SC-07 · Shipment validation pending**
- **Goal** · Record a receipt only against the matching delivered shipment item.
- **Blocker** · The existing E02 process relies on manual shipment checks; automatic mismatch rejection is unverified.
- **Current fix** · Add and test a server-side shipment match and replay check before saving. Not yet implemented.
- **Documentation** · [Salesforce Shipment Item](https://developer.salesforce.com/docs/platform/object-reference/references/standard-objects/object-shipmentitem.html)

**SC-05 · Review destination pending**
- **Goal** · Record a count difference for review without changing stock.
- **Blocker** · The reviewers and Salesforce review destination are not yet confirmed.
- **Current fix** · Confirm the review destination and implement the record and review path. Not yet verified.

**SC-08 · Checkout path pending**
- **Goal** · Let eligible buyers submit a fill-up in Salesforce and prevent ineligible submissions.
- **Blocker** · The store's Salesforce eligibility and submission path has not been verified.
- **Current fix** · Identify the configured checkout and test eligible and ineligible buyers. Not yet verified.

## Scope correction

The user clarified that this story uses Salesforce for the entire workflow. The previously recorded SAP blocker and SAP submission requirement are withdrawn. SC-08 remains NOT RUN until the Salesforce fill-up path is verified.

## Migration and scope history

- The previous story used [NEW guide revision 2a4b77e](https://github.com/aispanda/Reusable-Delivery/blob/2a4b77e1772f4828f595d40c882e7c4f77bc4007/new/DELIVERY.md). The earlier review used MIGRATE at revision f425953. The migration route adds source mapping and criterion reconciliation, and requires an Outcome-and-story-link ClickUp description after publication. Existing checks retain their IDs and NOT RUN results.
- [Published story before correction](https://github.com/aispanda/B2B-Commerce/blob/331bb445c6ca6339a2e45b57f8f924053d108d4e/epics/e02-consignment/stories/internal-consignment-barcode/story.md) → this story. AC-01–AC-03 retain their wording. AC-04 was changed by the user's Salesforce-only correction. SC-08 was updated and remains NOT RUN. The SAP blocker was withdrawn.
- [E02 demo scenario](https://github.com/aispanda/B2B-Commerce/blob/634d5eef66584da696dd658615d77bb856259a75/epics/e02-consignment/stories/consignment-consumption-demo/scenario.md) → SC-03–SC-05 fixture expectations. The demo records are reusable, subject to fixture and access verification.
- The historical research preceded the Salesforce-only correction. The current Salesforce-only UI specification is [design.md](design.md). It uses mobile Screen Flow actions for stock transactions.
- [ClickUp story](https://app.clickup.com/t/90141836417/1k59juump80) → this story. Created in ABCMed Storefront on 19 November 2026. The saved outcome and story link were read back. Owner is pending and status is To Do.

- Guide update: MIGRATE `f425953` → `302385554c48443a020000c51d75cec7888dbb4f`. Scenario IDs, agreed criteria, NOT RUN results and Salesforce-only correction are retained. The newer guide adds explicit gate-decision and scoped-exception recording; applicable steps must be reconciled before dispatch or closeout. Modules consulted: story, using, states, agreement, privacy, execution, review and publication. Migration and portable evidence remain pending.

- Current guide update: MIGRATE `302385554c48443a020000c51d75cec7888dbb4f` → `a06a646d44542ba9c41c68da10dffbf01b2fd3c7`. The revised guide pins the route and triggered modules. Modules consulted: agreement, privacy, story, execution, states, platform, automation, review, publication, using and CODE-QUALITY. All agreed acceptance wording, scenario IDs and NOT RUN results are retained. Design and review evidence were reconciled below. Restricted review evidence portability remains pending.

## Execution

| Step | Action | Executor | State |
| --- | --- | --- | --- |
| S-01 | Verify platform access. Headless 360 discover, describe and read-only Organization query passed. CLI org listing and read-only limits query passed for the same POC org on 19 November 2026. Portable restricted evidence and intended-user access remain pending. | Current executor | Passed for these read checks; evidence handoff pending |
| S-02 | After S-01, verify the intended mobile role, fixture, barcode-to-stock mapping and review destination for discrepancies. Qualify the checkout test path for SC-08. | Pending confirmation | Pending |
| S-03 | Implement the reviewed lookup and mobile Screen Flow actions in separately testable slices. Validate SC-01–SC-07 against the design. | Pending confirmation | Pending |
| S-04 | After manual validation, implement the required Gemini LangGraph evidence workflow. | Pending confirmation | Pending |

**Lookup slice** · Deployed to the demo org on 20 November 2026; all three specified Apex tests passed. CodeRabbit and fresh Claude Opus 5.5 reviewed snapshot `281c85940a23b05270195ff52131c24d80c510ca7607ccba2cfbd7dcf2ea39f5`. The **Consignment Stock Lookup** app page was activated for system administrators and added to the Mobile Only menu. Administrator phone scan and manual lookup are NOT RUN. Intended coordinator role and access remain pending. Portable deployment and review evidence remain pending.

**Design review** · On 20 November 2026, Claude Opus 5.5 (High) reviewed the draft design in-app and returned 18 location-specific suggestions. The revised [design](design.md) addresses the mobile action constraint, scanner lifecycle and fallback, role mapping, duplicate submissions and posting, and acceptance coverage. The existing 100-result cap was retained. The lookup already dismissed the scanner, and distinct failure messages remain an implementation item. Mobile Flow visibility and refresh, reviewer assignments, and sample label mappings require org and phone validation. The private review transcript is retained separately. The revised design is pending a recheck before implementation handoff.

**Governance** · Google’s [Gemini Fullstack LangGraph Quickstart](https://github.com/google-gemini/gemini-fullstack-langgraph-quickstart) is required for this story's repeatable verification workflow. First validate the checklist manually using a synthetic case and a case with missing or conflicting evidence. The local deterministic fixture check is evidence for SC-03 preparation only. Reuse Quickstart scaffolding for the bounded evidence workflow, keep pass/fail checks deterministic, and restrict the Gemini node to summarizing sanitized evidence. Verify approved Gemini credential access at execution without recording its value. Live Google integration is pending. For each changed code slice, run the relevant checks, then CodeRabbit first and a fresh Claude Opus 5.5 session last on the recorded revision. The design review is separate from code review and human acceptance.

**Next** · Verify **Menu → Consignment Stock Lookup** and scan or type the synthetic SKU on the authorized administrator's phone for SC-01–SC-02. Verifier: Pending confirmation. Prerequisites: Salesforce mobile sign-in and camera access. · [Execution](#execution)

## Files

| File | Purpose |
| --- | --- |
| [story.md](story.md) | Requirements, demo checks and execution record |
| [design.md](design.md) | Mobile screens, Salesforce setup and acceptance walkthrough |

**ClickUp synchronization** · The [new ClickUp story](https://app.clickup.com/t/90141836417/1k59juump80) contains the outcome and current story link. The saved description was read back.
