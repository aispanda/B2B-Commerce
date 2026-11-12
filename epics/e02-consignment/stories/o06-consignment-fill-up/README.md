# O06 Review and submit a consignment fill-up

Guide · [migrate/DELIVERY.md at 9d32dccc738cc544481a6da257c13d438115f122](https://github.com/aispanda/Reusable-Delivery/blob/9d32dccc738cc544481a6da257c13d438115f122/migrate/DELIVERY.md) · MIGRATE

Revision 0.1 · 12 November 2026 · Published partial migration draft. Independent workbook comparison passed. Implementation and runtime checks remain unverified. Human acceptance and ClickUp synchronization Pending. Accountable owner Pending. The source parent task is unassigned.

Origin · SRC16, MVP User Stories row 7 and ClickUp parent section 6. See [E02 design and source reconciliation](../../README.md).

## Outcome and scope

As an eligible hospital buyer, I want to review a consignment fill-up request without an immediate payment so that the supplier can supply stock for later consumption.

Reference prices remain visible. Fill-up has zero due now. SAP owns consumption reporting, consumption pricing, invoicing and payment. The fill-up flow supports a buyer's manual replenishment request. Stock visibility, live stock checks, consumption entry and automated replenishment stay outside this MVP. The PO policy for consumption billing remains with SAP.

## Source acceptance notes and proposed checks

| Source note | Original wording | Proposed verification | Result |
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

**Next step.** The Salesforce Commerce technical lead identifies the intended store's configured checkout route and the supported handling of a blank PO and no payment. Record the configuration revision and a field-to-display sketch for the authorized address, shipping, reference prices and zero due. Inspect it against notes 7.1–7.3 and the O07/O08 dependencies. Resume design selection once the storefront path and SAP contract are both available. Actual NOT RUN.

## Review and history

The 12 November draft preserves all four notes in source order. Note labels identify workbook row and ordinal. The story sentence generalizes the supplier name. Proposed verification adds coverage detail for review. Full original-source verification and human acceptance remain Pending.
