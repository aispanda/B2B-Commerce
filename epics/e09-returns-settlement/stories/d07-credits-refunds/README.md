# D07: Reconcile return credit memos and refunds

Guide: [migrate/DELIVERY.md](https://github.com/aispanda/Reusable-Delivery/blob/9d32dccc738cc544481a6da257c13d438115f122/migrate/DELIVERY.md) @ `9d32dccc738cc544481a6da257c13d438115f122`; route **MIGRATE**. Revision 0.3 published partial migration draft, 12 November 2026 UTC. Original SRC11 revision 0.2 remains authoritative. ClickUp sync: **Pending — deferred by instruction** under [BATCH](https://github.com/aispanda/B2B-Commerce/blob/c72d64e0b45376048bb3d1b5f9579c76224e04c8/BATCH.md). Source replacement and full migration acceptance remain pending.

Accountable story owner: Pending; source task unassigned. The original named user retains scope decisions and final human acceptance, with private identity retained in source context. One E09 writer is assigned for local consolidation; portfolio coordinator controls integration and publication. Initial writer/reviewer plan: gpt-6.1-sol / xhigh; actual runtime model unknown. The user subsequently selected GPT-6.1 Terra / Extra High, and the remaining independent review was explicitly dispatched with gpt-6.1-terra / xhigh.

## Current state

CREDITS-01 is complete only for its bounded 11 November read-only discovery. It observed an unfulfilled product, no payment summaries and an empty accessible invoice list. That historical observation did not establish global or external absence. No credit memo, invoice adjustment or refund was tested. CREDITS-02 remains blocked; CREDITS-03 and human acceptance remain Pending.

The 12 November E09 check passed Headless 360 first and the installed Salesforce CLI second in the intended development environment. It identified a different, shared MANAGED demo order with three fulfilled lines and available return quantities. The proposed D05 line has 40 returnable units, unit amount 15, zero recorded tax and adjustments. No return order or payment summary was returned for the checked summaries; no invoice was returned through the selected summary/original-order reference queries, and both fulfillment orders have null invoice links. These are scoped queries under the connected administrator, not proof of every possible financial relationship or external record. The candidate’s PO reference is null; no evidence yet establishes its PO-only classification or payment terms. No invoice-prerequisite error from running the close process has been observed.

Next action: use the exact one-unit D05 proposal to resolve fixture reservation, intended service/finance access, entitlement, PO-only/payment-terms provenance, currency, invoice/credit prerequisites and shipping/fee policy before requesting authority for RMA close or financial effects. The candidate is not reserved and financial readiness is not established. No RMA, receipt, close, credit or payment operation has occurred.

## Outcome and scope

A service or finance reviewer needs the correct credit outcome for a returned purchase-order order and to know when a separate refund can be tested. This is a post-MVP fictional demo using standard or declarative Salesforce features. Preserve the external-system-owned MVP invoicing and servicing boundary. Verify the credit memo and invoice outcome for an eligible closed managed RMA; document any native capability gap. The separate card story owns test-service and captured-payment prerequisites. A PO reference does not prove a payment or cash refund.

## Acceptance criteria

IDs and wording below are unchanged from original SRC11 revision 0.2. Sanitization affects surrounding context and source links only.

| ID | Agreed criterion | Check and evidence | Result |
|---|---|---|---|
| AC-01 | For a closed demo RMA, trace eligible lines and returned quantity to a standard credit memo or document the exact invoice prerequisite that prevents one. Reconcile amount and status. | Correlate RMA, returned line, credit memo and invoice; reconcile quantities, currency, merchandise, tax, shipping, fees, status and balance, or retain exact evidenced prerequisite/error. | NOT RUN |
| AC-02 | A PO-only order follows the agreed invoice/credit path. There is no claim of money refunded from a PO reference. | Establish approved PO credit treatment and compare durable invoice/credit records; distinguish credit from payment or cash refund. | NOT RUN |
| AC-03 | A card refund is exercised only with the separate card story’s test payment service, an eligible captured test payment and confirmed authorization. Verify full/partial amount and no duplicate refund if in scope. | If separately in scope, retain test-mode service, captured/refundable balance, authorized amount and gateway result; check duplicate refund and asynchronous failures. | NOT RUN; conditional branch remains gated |

The historical order total of 29 is not automatically an expected credit. The new proposal's merchandise-only amount of 15 is also conditional on verified currency, terms and invoice prerequisites. Nonzero tax and alternative shipping/fee treatment are not validated by zero-tax sample data.

## Solution and perspectives

Use standard managed RMA and credit processing after readiness is established. Financial preflight precedes RMA close, because closing can itself trigger credit/refund processing. Reconcile actual financial records and process exceptions before retrying an uncertain operation. The separate immediate-return option is not the receipt-first D05 scenario.

Historical official references: [managed RMA close](https://help.salesforce.com/s/articleView?id=commerce.om_close_a_managed_rma_return_order.htm&language=en_US&type=5), [Order Management flows](https://help.salesforce.com/s/articleView?id=commerce.om_flows.htm&language=en_US&type=5), [payments and invoices](https://help.salesforce.com/s/articleView?id=sf.om_payments.htm&language=en_US&type=5), and [OrderSummary operations](https://developer.salesforce.com/docs/platform/apex-ref/references/apex-ref/apex-connectapi-ordersummary-static-methods.html). These explain the documented platform path; they are not evidence that this org's uninvoiced PO scenario succeeds. No Apex implementation is proposed.

Product and business checks cover PO credit treatment, eligibility, quantities and ownership boundaries. UX checks cover service/finance entry points, labels and empty/error states. Technical checks cover effective entitlement, flow behavior, invoice prerequisites and settlement. QA compares durable records to frozen criteria and arranges fresh independent verification. The human reader must be able to distinguish what was credited from what remains untested. Code tests are N/A for this documentation-only change; later implementation chooses checks appropriate to actual behavior.

### Role-dependent evidence

| Check | Test principal | Intended role | Resource access | Observed result |
|---|---|---|---|---|
| Historical discovery, 11 November | Existing browser session; exact persona not independently proven | Service/finance reviewer | One order and accessible invoices list | Historical read only; no credit/refund test |
| Current platform and readiness, 12 November | Verified active System Administrator; same username/target correlated through MCP and CLI | E09 discovery executor | Successful schema/query reads; candidate summary reports Read/Edit access | Access Pass for that principal; bounded finance queries empty as described above |
| Intended service/finance acceptance | Not yet assigned/tested | Designated service or finance user | Invoice, memo, RMA, payment fields and record visibility Pending | NOT RUN; administrator access is not a role-specific pass |

## Execution

Retain CREDITS-01–03. CREDITS-00/04 are explicit added checkpoints, not changed criteria.

| Step | Action / criteria | Dependencies | One executor / identity | Actual state |
|---|---|---|---|---|
| CREDITS-00 | Verify platform access before new Salesforce work | Authorized target and existing authentication | E09 writer, planned gpt-6.1-sol / xhigh; actual runtime model unknown | Pass in current context: MCP read probes then CLI org list and Organization query. CLI 2.157.8. Recheck after environment/authorization change. |
| CREDITS-01 | Standard credit-flow and invoice/payment discovery; AC-01–03 | Historical source and read authority | Original Codex discovery; exact actual model unknown | Complete at bounded 11 November scope; no financial execution |
| CREDITS-04 | Reconcile D05 candidate and finance prerequisite; AC-01–02 | CREDITS-00, candidate records and current schema | E09 writer, planned gpt-6.1-sol / xhigh; actual runtime model unknown | Bounded read-only check complete; candidate found; invoice/currency/policy/persona gaps remain |
| CREDITS-02 | Configure/reuse supported feature and run approved demo; AC-01–03 | Reserved fulfilled managed quantity; finance preflight before close; receipt and closed RMA; exact authorized effects; card prerequisites if applicable | Pending one authorized executor and exact planned model/tool before dispatch | Blocked; no credit, invoice adjustment or refund executed |
| CREDITS-03 | Independent acceptance, evidence and handoff; AC-01–03 | Frozen criteria and actual CREDITS-02 records | Fresh checker Pending; exact AI identity if used | NOT RUN; human acceptance separately Pending |

### Next bounded step contract

Continue the read-only CREDITS-04 reconciliation using current D03 readiness, D05 proposal and the separately owned card-story evidence only if relevant. One assigned executor must verify the intended service/finance identity, targeted access, invoice prerequisite or supported no-invoice behavior, currency and merchandise/shipping/fee terms. Produce an exact expected-amount table and close-effects statement for the named reserved quantity, or identify the precise remaining input. Historical model identity is not substituted for a new assignment.

Bound: one focused check and at most one changed-hypothesis read-only fallback, maximum 15 minutes. Stop the dependent check at missing authority, persona, source or financial prerequisite. No fixture creation, permission expansion, invoice creation, RMA close, credit, refund or notification is authorized by this step. Inspect partial effects before any later retry. Record identity, intended role, resource access and observed outcome separately. Current Actual: preliminary record checks completed; complete financial test readiness remains blocked.

## Review, source coverage and history

- Original SRC11 revision 0.2, source task status and attachment entries were read in the original authenticated UI earlier on 12 November. Local revised story and discovery files preserve historical content; current attachment byte equality and full comments/replies/linked-source inventory remain unverified. Approved restricted storage owner and successor retrieval are Pending. Local working files are not an approved portable archive.
- Maker checks preserve all three criteria and CREDITS-01–03, distinguish historical/current evidence, and retain conditional card behavior. Fresh independent consolidation review covers this newly authored candidate and available original snapshots; its disposition is recorded in the local handoff. Full source-preservation acceptance is blocked by inventory/retrieval gaps. Live independent verification and human acceptance are NOT RUN/Pending.
- Historical template migration used GPT-6.1 Terra from client metadata; it reviewed document readability and execution instructions. Repairs clarified that total order value is not an expected credit and that finance checks precede close. Those are maker self-reviews, not independent delivery acceptance.
- Historical `jev-1.14.0` review had 20 judgments matching expected directions on the authorized sanitized wording packet. It had no org access and did not verify runtime or human approval. It identified owner/fixture gaps. No new external review transmission occurred here.
- Source task/chat links, private record IDs and human identity are generalized into opaque source/role references. The external production system is generalized without changing its ownership boundary. Criteria have zero wording changes. Original task IDs remain in the private working source map; CREDITS workflow IDs remain here.
- Existing D07 destination is retained; baseline placeholder blob `ef5d1cfa2b61bf00bd0bfc1527f8a04de2fd09bd`. The former template/Field Guide remains historical; current formatting uses the pinned migration guide, including platform access and role-dependent evidence. No source is retired and no authority transition occurs.

## Blockers and handoff

Source portability and complete preservation remain Pending. Runtime blockers are fixture reservation, effective entitlement, designated persona/access, invoice prerequisite, currency, shipping/fee policy and concrete mutation authority. The new fulfilled candidate resolves the earlier lack of an identified fulfilled line, but does not resolve those remaining requirements. A captured test payment and test-service authorization are additionally required for the conditional card branch; none was found in the inspected candidate. Responsible roles: readiness/fixture owner, Customer Care/finance owner, D05/D07 executor and original human decision-maker; named operational assignments remain Pending. Resume only the dependent step once its actual missing inputs are verified. Original service remains authoritative; portfolio coordinator alone handles publication and ClickUp writeback remains deferred.

Preserved conditional source instruction: if a focused unresolved question blocks authorized work, consult **Claude Opus 5.5** only if available and authorized, using minimum permitted context. Record the question, actual model, answer, independent verification and disposition; do not silently substitute a model or treat advice as acceptance. No such consultation occurred during this consolidation. The user's Terra selection governed the dispatched independent reviewer (exact backend identity not independently exposed); it does not retroactively claim this conditional source consultation ran.

### Consolidation review disposition

A fresh independent reviewer explicitly dispatched as **gpt-6.1-terra / xhigh**, following the user's model selection, reviewed the available-source scope and rechecked the repairs on 12 November 2026. **Limited local document review and focused repair recheck: Pass.** Dispatch selection is known; exact backend runtime identity was not independently exposed. The review verified unchanged criteria and the affected claims, with prior D05/D06 reviews reused only for unchanged scope. Current original-service comments, attachment byte equality, complete linked inventory, approved restricted storage and successor retrieval remain unestablished. Full source-preservation acceptance stays blocked; runtime verification and human acceptance remain Pending. This is not publication authorization. Exact reviewed hashes, source coverage and dispositions are recorded in the private local handoff.
