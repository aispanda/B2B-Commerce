# O06 · Review and submit a consignment fill-up

**Owner** · Pending confirmation · [Execution](#solution-and-execution) · [migrate/DELIVERY.md at 2a4b77e1772f4828f595d40c882e7c4f77bc4007](https://github.com/aispanda/Reusable-Delivery/blob/2a4b77e1772f4828f595d40c882e7c4f77bc4007/migrate/DELIVERY.md) · MIGRATE

**Outcome** · As an eligible hospital buyer, I want to review a consignment fill-up request without an immediate payment so that the supplier can supply stock for later consumption.

**Demo result** · NOT RUN. Earlier Salesforce access checks covered demo discovery. No observed buyer-to-SAP run was found.

**Acceptance** · Pending. The production design, runtime checks and human acceptance remain open. The [records-only demo](../consignment-consumption-demo/README.md) has its own criteria.

Reference prices remain visible. Fill-up has zero due now. SAP owns consumption reporting, consumption pricing, invoicing and payment. The fill-up flow supports a buyer's manual replenishment request. Stock visibility, live stock checks, consumption entry and automated replenishment stay outside this MVP. The PO policy for consumption billing remains with SAP.

## Acceptance criteria

The identifiers below are the existing workbook row and note references. The acceptance wording is verbatim.

| Criterion | Original wording | Proposed verification | Result |
|---|---|---|---|
| 7.1 | Checkout uses one delivery address, a shipping method, products and quantities. | Review and compare the one authorized address, method and each SKU/quantity across cart, checkout and the captured outbound request. | NOT RUN |
| 7.2 | The hospital PO number is optional. | Verify one fill-up with no PO and one with a supplied PO. Check the captured request in both cases and run regular PO validation as a regression check. | NOT RUN |
| 7.3 | Prices are shown for reference with “Amount due now: $0” and a note that invoicing is based on reported consumption. | Compare nonzero SAP-returned reference prices with checkout, verify the $0 amount due and consumption note, and inspect the checkout for no payment authorization or capture. | NOT RUN |
| 7.4 | The buyer can submit an initial fill-up or a later manual replenishment request through this flow. | Run both scenarios using authorized non-production fixtures. Match each submission and confirmed order reference to SAP. | NOT RUN |

## Solution and execution

The proposed design reuses the selected account's catalog, cart and delivery controls. Consignment checkout presents reference pricing, optional PO and the amount due and billing note. The configured no-payment path must be verified. [O05](../o05-consignment-eligibility/README.md) governs access and selected type. [E03](https://github.com/aispanda/B2B-Commerce/tree/main/epics/e03-order-submission) governs SAP acceptance, confirmation and unresolved attempts. [Shared design and evidence](../../README.md)

| Step | Action | Proposed executor | State |
|---|---|---|---|
| Verify platform access | Discover, describe and read the intended Salesforce demo org through Headless 360, then match it with the explicit CLI target. | Discovery executor | Complete for demo discovery. See E02 evidence. |
| Confirm configured checkout route | Identify the supported checkout path for an omitted PO, reference prices and no payment. Record the proposed extension point and regular PO regression. | Salesforce Commerce technical lead, person Pending | Pending |
| Confirm the shared external contract | Confirm the SAP order type, request and acceptance fields, and timeout lookup with the O07/O08 owners. | SAP order integration owner, person Pending | Pending |
| Verify buyer to SAP | Exercise source notes 7.1–7.4 and correlate SAP acceptance, Salesforce order state and buyer confirmation. | QA lead, person Pending | NOT RUN |

Repeat platform access verification against the intended Salesforce and SAP test environments before executing these checks.

## Material blockers

**7.1–7.4 · Contract and test prerequisites pending**

- **Goal** · Verify that an eligible buyer can submit a no-payment fill-up with an optional PO.
- **Blocker** · The configured checkout route and the SAP request, acceptance and recovery contract are unverified.
- **Current fix** · Proposed. Confirm the checkout route and obtain the SAP contract before authorizing a non-production buyer run.
- **Documentation** · [Shared design and prerequisites](../../README.md#decisions-and-next-tasks)

**Next** · Pending confirmation. Confirm the Salesforce Commerce technical lead and identify the configured route for blank PO, reference pricing and no payment. This advances 7.1–7.4. [E02 decisions](../../README.md#decisions-and-next-tasks)

## Files

- [README.md](README.md) — Requirements, checks, and execution status
- [E02 README](../../README.md) — Shared design and source reconciliation

## Review and history

The 12 November draft preserves all four notes in source order. Note labels identify workbook row and ordinal. The story sentence generalizes the supplier name. Proposed verification adds coverage detail for review. Full original-source verification and human acceptance remain Pending.

19 November migration review compared each note against the workbook and the current shared ClickUp parent. Criteria and note labels match. Ownership and runtime status are unchanged. The updated guide adds demo replay and closeout admin guidance. Production settings remain proposed. [Prior story](https://github.com/aispanda/B2B-Commerce/blob/f5cc54121bf0153cb7d78a6446b55fcd603211d2/epics/e02-consignment/stories/o06-consignment-fill-up/README.md)
