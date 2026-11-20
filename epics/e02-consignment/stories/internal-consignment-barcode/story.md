# E02 · Scan barcodes for internal consignment

**Owner** · Pending confirmation · [Story and execution record](#execution) · [Delivery guide · NEW · 2a4b77e](https://github.com/aispanda/Reusable-Delivery/blob/2a4b77e1772f4828f595d40c882e7c4f77bc4007/new/DELIVERY.md)

**Outcome** · As an internal consignment coordinator, I want to scan or enter a barcode on my phone so that I can identify site stock, record receipts and usage, and submit count discrepancies for review.

**Demo result** · NOT RUN. The target org, app entry point, intended role and fixture links are pending verification.

**Acceptance** · The workflow direction is confirmed. Human acceptance of the implementation is pending. Adjustment posting requires a future movement design. SAP remains the production authority for consignment fulfillment, inventory and billing.

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
8. **SC-08** · In the authorized checkout test path, exercise an eligible and an ineligible buyer → the eligible fill-up uses the existing SAP submission path and a fill-up request leaves stock posting pending receipt. The ineligible buyer cannot submit a fill-up. AC-04

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
| AC-04 | Keep fill-up checkout on the existing eligibility and SAP submission path. | SC-08 · [O05 eligibility](../o05-consignment-eligibility/README.md) · [O06 fill-up](../o06-consignment-fill-up/README.md) |

## Material blockers

**SC-08 · Pending**

- **Goal** · Show an eligible buyer's fill-up request is accepted by SAP.
- **Blocker** · The checkout-to-SAP request and response are unverified.
- **Current fix** · Confirm the SAP contract and test one synthetic request and acceptance.
- **Documentation** · [E02 scope, evidence and proposed SAP handoff](https://github.com/aispanda/B2B-Commerce/blob/634d5eef66584da696dd658615d77bb856259a75/epics/e02-consignment/README.md). This documents the gap and proposed design. A verified solution URL is pending.

## Execution

| Step | Action | Executor | State |
| --- | --- | --- | --- |
| S-01 | Verify platform access. Confirm the authorized demo org, run Headless 360 MCP discover, describe and a minimal read-only dispatch, and verify Salesforce CLI org listing and a read-only API check against the same org. Capture results privately where required. Applies to SC-01–SC-08. | Pending confirmation | Pending |
| S-02 | After S-01, verify the intended mobile role, fixture, barcode-to-stock mapping and review destination for discrepancies. Qualify the checkout test path for SC-08. | Pending confirmation | Pending |

**Next** · Assign the Salesforce access verifier and confirm the authorized demo org for [S-01](#execution). Owner pending confirmation.

## Files

| File | Purpose |
| --- | --- |
| [story.md](story.md) | Requirements, demo checks and execution record |

**ClickUp synchronization** · Pending GitHub publication and readback.
