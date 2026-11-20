# E02 · Scan barcodes for internal consignment

**Owner** · Pending confirmation · [Story and execution record](#execution) · [Delivery guide · MIGRATE · f425953](https://github.com/aispanda/Reusable-Delivery/blob/f425953ee7617ebc1232829a84dd44694609dfbe/migrate/DELIVERY.md)

**Outcome** · As an internal consignment coordinator, I want to scan or enter a barcode on my phone so that I can identify site stock, record receipts and usage, and submit count discrepancies for review.

**Demo result** · NOT RUN. The target org, app entry point, intended role and fixture links are pending verification.

**Acceptance** · The workflow direction is confirmed. Human acceptance of the implementation is pending. Adjustment posting requires a future movement design. This story uses Salesforce for the consignment workflow.

## Proposed scenario checks

- **Where / who** · Use a physical phone with the Salesforce mobile app and an authorized internal coordinator in the designated demo org. Verify the entry point and role before replay. [Salesforce BarcodeScanner compatibility](https://developer.salesforce.com/docs/platform/mobile-offline/guide/use-barcodescanner-compatibility.html)
- **Start with** · Use the E02 synthetic stock position at zero confirmed on hand, a 10-box fill-up Shipment Item, a dated receipt reference and a three-box usage report. Confirm the fixture and its links before replay. Use a fresh isolated fixture for a rerun that requires new movements. [E02 scenario and fixture](https://github.com/aispanda/B2B-Commerce/blob/634d5eef66584da696dd658615d77bb856259a75/epics/e02-consignment/stories/consignment-consumption-demo/scenario.md)

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
| SC-03 | NOT RUN | Pending matching shipment and receipt fixture. |
| SC-04 | NOT RUN | Pending usage fixture and posting test. |
| SC-05 | NOT RUN | Pending discrepancy review workflow. |
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

## Scope correction

The user clarified that this story uses Salesforce for the entire workflow. The previously recorded SAP blocker and SAP submission requirement are withdrawn. SC-08 remains NOT RUN until the Salesforce fill-up path is verified.

## Migration and scope history

- The previous story used [NEW guide revision 2a4b77e](https://github.com/aispanda/Reusable-Delivery/blob/2a4b77e1772f4828f595d40c882e7c4f77bc4007/new/DELIVERY.md). This review uses MIGRATE at revision f425953. The migration route adds source mapping and criterion reconciliation, and requires an Outcome-and-story-link ClickUp description after publication. Existing checks retain their IDs and NOT RUN results.
- [Published story before correction](https://github.com/aispanda/B2B-Commerce/blob/331bb445c6ca6339a2e45b57f8f924053d108d4e/epics/e02-consignment/stories/internal-consignment-barcode/story.md) → this story. AC-01–AC-03 retain their wording. AC-04 was changed by the user's Salesforce-only correction. SC-08 was updated and remains NOT RUN. The SAP blocker was withdrawn.
- [E02 demo scenario](https://github.com/aispanda/B2B-Commerce/blob/634d5eef66584da696dd658615d77bb856259a75/epics/e02-consignment/stories/consignment-consumption-demo/scenario.md) → SC-03–SC-05 fixture expectations. The demo records are reusable, subject to fixture and access verification.
- The local barcode research preceded the Salesforce-only correction. Its SAP assumptions are historical and do not govern this story. A publication-safe current design and portable link are pending.
- ClickUp search returned no barcode story. The related order-scenarios parent is not established as this story's item. Item identification and synchronization remain pending.

## Execution

| Step | Action | Executor | State |
| --- | --- | --- | --- |
| S-01 | Verify platform access. Headless 360 discover, describe and read-only Organization query passed. CLI org listing and read-only limits query passed for the same POC org on 19 November 2026. Portable restricted evidence and intended-user access remain pending. | Current executor | Passed for these read checks; evidence handoff pending |
| S-02 | After S-01, verify the intended mobile role, fixture, barcode-to-stock mapping and review destination for discrepancies. Qualify the checkout test path for SC-08. | Pending confirmation | Pending |

**Next** · Verify the mobile role, synthetic fixture, barcode mapping and discrepancy review destination for S-02. Executor pending confirmation. · [Execution](#execution)

## Files

| File | Purpose |
| --- | --- |
| [story.md](story.md) | Requirements, demo checks and execution record |

**ClickUp synchronization** · Pending. A matching barcode story item has not been identified. Confirm the intended item and edit authority before synchronization.
