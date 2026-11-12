# O05 Choose consignment checkout when eligible

Guide · [migrate/DELIVERY.md at 9d32dccc738cc544481a6da257c13d438115f122](https://github.com/aispanda/Reusable-Delivery/blob/9d32dccc738cc544481a6da257c13d438115f122/migrate/DELIVERY.md) · MIGRATE

Revision 0.1 · 12 November 2026 · Published partial migration draft. Independent workbook comparison passed. Implementation and runtime checks remain unverified. Human acceptance and ClickUp synchronization Pending. Accountable owner Pending. The source parent task is unassigned.

Origin · SRC16, MVP User Stories row 6 and ClickUp parent section 5. See [E02 design and source reconciliation](../../README.md).

## Outcome and scope

As an eligible hospital buyer, I want a consignment checkout option on the cart so that I can request stock under my hospital's consignment arrangement.

MVP eligibility is at customer-account level and sourced from SAP. Existing product entitlements apply. Each submitted order has one selected type. A synchronized Salesforce account flag is a design option. More granular eligibility is a post-MVP candidate.

## Source acceptance notes and proposed checks

| Source note | Original wording | Proposed verification | Result |
|---|---|---|---|
| 6.1 | Eligible customers see Checkout as Consignment alongside regular Checkout. | Sign in with access to one eligible and one ineligible customer. Select the eligible customer and verify both checkout options. | NOT RUN |
| 6.2 | Ineligible customers see regular Checkout only and cannot submit a consignment request by bypassing the button. | Select the ineligible customer and verify regular checkout only. Exercise the authorized non-production service path with ineligible, revoked and switched-account fixtures. Verify server-side denial and no SAP submission. | NOT RUN |
| 6.3 | The selected order type is carried through checkout and submission to SAP. | Trace the selected type through persisted cart/checkout state and the outbound SAP request. Verify account and type binding after checkout reload and before submit. | NOT RUN |

## Solution and execution

The proposed design uses the current authorized account and its SAP eligibility decision for the cart options. The server validates current buyer access and eligibility before proceeding with consignment and again before dispatch. The SAP field, sync and freshness rules, revalidation and Salesforce storage remain design decisions. [Shared design and failure behavior](../../README.md)

| Step | Action | Proposed executor | State |
|---|---|---|---|
| Verify platform access | Discover, describe and read the intended Salesforce demo org through Headless 360, then match it with the explicit CLI target. | Discovery executor | Complete for demo discovery. See E02 evidence. |
| Verify eligibility source | Confirm the SAP field, customer key, eligible/ineligible sample, freshness and submit-time validation. | SAP customer master/integration owner, person Pending | Pending |
| Map and verify enforcement | Determine where the selected account and intent are persisted and rechecked in the configured checkout. Execute source-note checks after authorized implementation. | Salesforce Commerce technical lead, person Pending | Pending |

**Next step.** The SAP customer master/integration owner supplies a versioned eligibility field/key mapping and a synthetic eligible/ineligible pair. Include the update cadence, revocation window and expected submit-time validation. Review the two values and decision path against notes 6.1–6.3. Record the contract in the restricted source system and reference the revision here. Resume after the owner and mapping are identified. Actual NOT RUN.

## Review and history

The 12 November draft preserves all three notes in source order. Note labels identify workbook row and ordinal. Proposed verification adds coverage detail for review. Full original-source verification and human acceptance remain Pending.
