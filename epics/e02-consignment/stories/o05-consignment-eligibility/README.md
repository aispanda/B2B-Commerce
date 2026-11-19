# O05 · Choose consignment checkout when eligible

**Owner** · Pending confirmation · [Execution](#solution-and-execution) · [migrate/DELIVERY.md at 2a4b77e1772f4828f595d40c882e7c4f77bc4007](https://github.com/aispanda/Reusable-Delivery/blob/2a4b77e1772f4828f595d40c882e7c4f77bc4007/migrate/DELIVERY.md) · MIGRATE

**Outcome** · As an eligible hospital buyer, I want a consignment checkout option on the cart so that I can request stock under my hospital's consignment arrangement.

**Demo result** · NOT RUN. Earlier Salesforce access checks covered demo discovery. No observed buyer-to-SAP run was found.

**Acceptance** · Pending. The production design, runtime checks and human acceptance remain open. The [records-only demo](../consignment-consumption-demo/README.md) has its own criteria.

MVP eligibility is at customer-account level and sourced from SAP. Existing product entitlements apply. Each submitted order has one selected type. A synchronized Salesforce account flag is a design option. More granular eligibility is a post-MVP candidate.

## Acceptance criteria

The identifiers below are the existing workbook row and note references. The acceptance wording is verbatim.

| Criterion | Original wording | Proposed verification | Result |
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

Repeat platform access verification against the intended Salesforce and SAP test environments before executing these checks.

## Material blockers

**6.1–6.3 · Contract and test prerequisites pending**

- **Goal** · Provide the SAP eligibility contract for eligible, ineligible and revoked accounts.
- **Blocker** · The SAP field, customer key, update cadence and submit-time validation are unconfirmed.
- **Current fix** · Proposed. Assign the SAP customer master owner to supply a versioned mapping and synthetic eligible and ineligible examples.
- **Documentation** · [Shared design and prerequisites](../../README.md#decisions-and-next-tasks)

**Next** · Pending confirmation. Confirm the SAP eligibility owner and obtain the versioned mapping and examples. This advances 6.1–6.3. [E02 decisions](../../README.md#decisions-and-next-tasks)

## Files

- [README.md](README.md) — Requirements, checks, and execution status
- [E02 README](../../README.md) — Shared design and source reconciliation

## Review and history

The 12 November draft preserves all three notes in source order. Note labels identify workbook row and ordinal. Proposed verification adds coverage detail for review. Full original-source verification and human acceptance remain Pending.

19 November migration review compared each note against the workbook and the current shared ClickUp parent. Criteria and note labels match. Ownership and runtime status are unchanged. The updated guide adds demo replay and closeout admin guidance. Production settings remain proposed. [Prior story](https://github.com/aispanda/B2B-Commerce/blob/f5cc54121bf0153cb7d78a6446b55fcd603211d2/epics/e02-consignment/stories/o05-consignment-eligibility/README.md)
