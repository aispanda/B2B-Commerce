# D05: Process a fulfilled return with managed RMA

Guide: [migrate/DELIVERY.md](https://github.com/aispanda/Reusable-Delivery/blob/9d32dccc738cc544481a6da257c13d438115f122/migrate/DELIVERY.md) @ `9d32dccc738cc544481a6da257c13d438115f122`; route **MIGRATE**.

Revision/status/as-of: **0.3 published partial migration draft, 12 November 2026 UTC**. Prior revision 0.2 local documentation review and repair recheck passed at their recorded scope; current revision 0.3 limited local consolidation review and repair recheck Pass; full migration-draft acceptance blocked; implementation unchanged; AC-01–AC-03 NOT RUN; delivery blocked by readiness. Original ClickUp revision 0.1 remains current and authoritative. Sync: **Pending — deferred by instruction** under [BATCH.md](https://github.com/aispanda/B2B-Commerce/blob/c72d64e0b45376048bb3d1b5f9579c76224e04c8/BATCH.md). This draft does not complete migration or authorize implementation.

Origin: portfolio source **SRC12**; original story **SRC12-D05-STORY**, displayed revision 0.1 dated 11 November 2026, read in the authenticated original service on 12 November 2026. Source task and RMA task IDs are retained in the local reconciliation and original service; private identifiers are omitted here. Accountable owner: **Pending — source assignee is empty**. Story coordinator: the existing dedicated D05 Codex chat; sole E09 migration writer is now assigned to this coordinator agent; publication remains with the portfolio coordinator.

## Current state

The 11 November bounded **RMA-01 read-only discovery is complete at its recorded scope** (SRC12-E01): an active RMA Return Items screen-flow copy and an Order Summary action were observed; receipt/close behavior was mapped from official documentation. No flow was launched, no RMA or financial transaction was executed, and no configuration was changed. The inspected order was Created with an Ordered line and zero fulfillment orders, so it was not a fulfilled-return fixture. This does not establish that no eligible fixture exists elsewhere.

The current original description still labels RMA-01 Pending and org verification NOT RUN. Preserve that source text; this draft reconciles the historical completed discovery without claiming runtime acceptance or updating ClickUp status. Current read-only checks identify a managed fulfilled candidate with available return quantity. Entitlement, intended Customer Care access, independent fixture reservation, actual receipt/close behavior and financial readiness remain unverified. Related D03/D04/D07 findings are attributed reports, not evidence that these prerequisites passed for D05.

The E09 writer assignment is resolved for this separate local consolidation. RMA-00 passed on 12 November and RMA-04 produced a bounded readiness matrix and exact proposed one-unit scenario. The candidate is not reserved; intended-role access and financial prerequisites are unresolved. The coordinator published this partial draft after limited document review. Full source-preservation acceptance still needs approved restricted evidence ownership/retrieval and complete material inventory.

Independent verification: prior revision 0.2 local documentation review and repair recheck **Pass** (limited historical document scope); revision 0.3 limited local consolidation review and repair recheck Pass; full source-preservation review pending; live RMA acceptance review **NOT RUN**. Human acceptance: **required by original story; decision Pending**. Human-reader review is not human acceptance.

## Outcome and scope

As a Customer Care agent, I want to authorize a return, record receipt and close an RMA so credit processing reflects the items received.

Post-MVP demo. Standard Order Management RMA Return Items and close workflow for a fictional managed fulfilled item. Document the standard simple return option as a separate immediate workflow. Use the receipt-first path for the demo. Use OOTB or declarative features; record missing native capability rather than assuming it. Preserve the external-system-owned MVP operating model. Current authority covers discovery, coordination and documentation only.

Dependencies: Order Management Lite or higher, intended agent permissions, independently reserved fictional managed fulfilled quantity, existing-return check, receipt-field access, invoice/payment baseline, and separate authorization for the specific demo mutations and downstream effects. Readiness belongs to **D03 / SRC09**; request intake to **D04 / SRC03**; credits/refunds to **D07 / SRC11**. Exchanges (**D06 / SRC04**) must use separately coordinated fixtures. These references confer no fixture reservation or permission.

## Acceptance criteria

Wording and IDs below are unchanged from the original description displayed on 12 November 2026. No sanitization was needed inside the criteria. Checks elaborate verification; they do not amend the criteria.

| ID | Agreed criterion | Check / evidence to retain | Result |
|---|---|---|---|
| AC-01 | From a fictional fulfilled managed line, an agent selects item, eligible quantity and reason and creates one RMA with a trackable reference. | With approved persona and eligible reserved line, compare existing returns before/after one submission; retain item, allowed quantity, reason and one trackable RMA reference. Historical flow/action visibility is supporting discovery only. | NOT RUN |
| AC-02 | Receipt and close record the actual returned quantity and status. Partial receipt or ineligible/unfulfilled quantity is handled without duplicating a return or promising a credit early. | Record expected/received/rejected quantities and status before/after approved receipt and close. Exercise the selected partial or ineligible/unfulfilled case; compare returns and financial state for duplicates and premature credit promises. | NOT RUN |
| AC-03 | Capture Order Summary, RMA and return line state before and after. Reconcile any credit event with the credits story. | Correlate summary, RMA, return line and applicable financial references; D07 reconciles the actual credit event or evidenced absence. Screen completion alone is insufficient. | NOT RUN |

## Solution

Reuse the standard agent RMA entry point after verifying the active copy and intended persona. Check prior returns and eligible fulfilled quantity, authorize the selected quantity/reason, retain the RMA reference, record actual receipt/rejection, then close the activated RMA under the approved scenario. Coordinate financial consequences with D07 before closing. For ambiguous submission or close failures, inspect existing return and financial records before retrying.

The separate simple-return option starts immediate change-order/credit/refund processing and does not supply the receipt-first tracking stage selected for this demo. Do not exercise both paths against the same reserved quantity. Buyer intake is a request for Customer Care review; a Case alone proves neither return authorization nor receipt, credit or refund.

Historical research in SRC12-E01, retrieved 11 November 2026, supports the standard workflow only. Compatibility and behavior in the intended environment remain subject to verification:

| Official source / supported claim | Limit |
|---|---|
| [Order Management Flows](https://help.salesforce.com/s/articleView?id=sf.om_flows.htm&language=en_US&type=5): documented RMA flows and close-triggered downstream processing. | Does not prove the target org's contractual tier or runtime behavior. |
| [Create a managed RMA](https://help.salesforce.com/s/articleView?id=commerce.om_create_a_managed_rma_return_order.htm&language=en_US&type=5): managed fulfilled eligibility, existing-return check, selection and trackable authorization. | No D05 submission has been tested. Original overview link is also retained in the source inventory. |
| [Close a managed RMA](https://help.salesforce.com/s/articleView?id=commerce.om_close_a_managed_rma_return_order.htm&language=en_US&type=5): expected/received/rejected quantities, receipt fields, activation and close. | Actual layout, access, partial receipt and financial outcomes NOT RUN. |
| [Return types](https://help.salesforce.com/s/articleView?id=commerce.om_return_order_types.htm&language=en_US&type=5) and [simple return](https://help.salesforce.com/s/articleView?id=commerce.om_return_order_items.htm&language=en_US&type=5): separate immediate option. | Not the selected demo path. |
| [Users and permissions](https://help.salesforce.com/s/articleView?id=commerce.om_impl_users.htm&language=en_US&type=5) and [service-flow entry point](https://help.salesforce.com/s/articleView?id=commerce.om_add_service_flow_to_object_page.htm&language=en_US&type=5): persona grants and declarative action placement. | Existing-session action visibility does not prove Customer Care execution access. |

Product/business checks cover post-MVP boundaries, eligibility and quantity/state transitions. UX checks cover labels, entry point and error/empty states for the intended persona. Technical checks cover entitlement, active definitions and financial effects. QA checks cover each criterion and fresh independent verification. No code/configuration change is proposed by this migration; code tests are N/A for this documentation pass. Later implementation must choose repeatable checks appropriate to its actual change.

### Role-dependent evidence

| Check | Test identity / source | Intended role | Target resource access | Observed outcome |
|---|---|---|---|---|
| Historical flow/action inspection, 11 November | Existing authenticated browser session; identity and profile were not independently established. Do not relabel this as a proven administrator. | Customer Care agent | Setup inventory and active flow canvas readable; action visible on one summary in that session. | Discovery observed; action never launched. Customer Care outcome Pending. |
| Fixture eligibility, 11 November | Same unverified session | Customer Care agent servicing an eligible managed return | One summary readable; lifecycle type not displayed. | Created/Ordered, zero fulfillment orders; inspected fixture unsuitable. Other fixtures not ruled out. |
| Intended persona and receipt/close | NOT RUN | Designated Customer Care agent, not yet identified | Flow execution, object/field/record access and receipt layout Pending. | Runtime behavior Pending; AC-01–AC-03 NOT RUN. |
| Current access preflight, 12 November | Connected active System Administrator, correlated between MCP and CLI | Discovery executor; intended Customer Care agent remains unidentified | Both minimal probes succeeded; candidate summary reports Read/Edit access for this principal. | Tool access Pass. Receipt layout, flow execution and intended-role behavior NOT RUN. |

## Execution

Preserve RMA-01, RMA-02 and RMA-03. Added IDs are planning/checkpoint additions; none changes an acceptance criterion. Exact future AI assignments must be resolved before dispatch; planned identity and actual identity are separate.

| Step | Action / AC IDs | Dependencies | One executor; planned model/tool | State / result |
|---|---|---|---|---|
| RMA-00 | **Verify platform access** before new Salesforce discovery, review, testing or writes | Intended org/alias and existing credentials; exact executor assignment; read-only authority | AI: D05 coordinator agent; planned gpt-6.1-sol / xhigh, actual runtime model unknown; Headless 360 MCP then Salesforce CLI | Pass, 12 November 07:14–07:16 UTC. Both reached the intended environment after routine authentication renewal. |
| RMA-01 | Verify standard RMA screen flow/action and map eligibility, receipt/close; AC-01–03 | Historical source revision 0.1 and existing authenticated read access | AI: original D05 Codex agent; historical plan workspace default, no override; exact actual model unknown | Complete at bounded discovery scope, SRC12-E01, 11 November. No runtime acceptance. |
| RMA-04 | Reconcile readiness and define one eligible receipt-first scenario; AC-01–03 | RMA-00; D03 entitlement/persona/fixture evidence and D07 financial baseline | AI: D05 coordinator agent; planned gpt-6.1-sol / xhigh, actual runtime model unknown | Bounded read-only check complete, 12 November; candidate found, execution readiness blocked by reservation, intended persona, entitlement and finance gaps. |
| RMA-02 | Configure/reuse supported feature and run the approved demo; AC-01–03 | RMA-00/04; approved quantities; coordinated fixture; separate mutation authority | Pending — one authorized Salesforce executor and exact tool/model assignment required | Blocked. No configuration, receipt, close, credit or payment executed. |
| RMA-03 | Independent acceptance check, evidence and handoff; AC-01–03 | Actual RMA-02 evidence and frozen criteria; fresh reviewer access | Pending — one fresh independent checker; exact AI model/reasoning if AI | NOT RUN. Human acceptance separately Pending. |
| RMA-DOC-01 | Reconcile source/evidence and prepare local sanitized draft | Current source read; guide/BATCH; local exclusive claim | AI: D05 primary agent; planned gpt-6.1-sol / xhigh from workspace configuration; tools GitHub connector, read-only ClickUp UI, local file tools | Complete for local drafting and maker checks (25 passed); actual runtime model identifier unknown, configuration is not proof of actual model. |
| RMA-DOC-02 | Independent documentation/source-preservation review | Frozen draft; actual originals; approved restricted retrieval; reviewer assignment | Fresh AI reviewer planned gpt-6.1-sol / xhigh, inherited configuration without override; actual exact model unknown (runtime metadata unavailable) | Local review Pass; both repairs passed focused recheck. Full source-based acceptance blocked by inventory/access gaps. |

### Current bounded results and next step

RMA-00 ran Headless 360 discover → describe → read (limits and user context), then CLI org list and an Organization query. Both passed in the intended development environment. The CLI is version 2.157.8. Initial MCP OAuth refresh failed with a scope error; renewing the existing authorization restored it. No scopes, permissions or org configuration were changed. Planned executor: gpt-6.1-sol / xhigh; actual runtime model unknown. The current connected user is a System Administrator, not a validated Customer Care persona.

RMA-04 checked two known fictional summaries. The older product remains Ordered with zero fulfilled/returnable quantity. The shared split-order demo has MANAGED lifecycle, three FULFILLED product lines with 40, 20 and 30 available to return, and two Closed/Fulfilled fulfillment orders. Its summary still says Created; preserve that status without treating it as line eligibility. No existing return orders, payment summaries, or invoices linked to the checked summaries were returned. For the selected split order, original-order invoice and credit-reference checks were also empty, and both fulfillment orders had null invoice links. Results are scoped to the queried relationships and current principal, not proof of global or external absence.

Proposed test: reserve one unit from the 40-unit line, unit amount 15 with recorded zero tax/adjustments; reason Other; one RMA, expected 1, received 1, rejected 0. Check the older unfulfilled product as the negative eligibility case without submitting an extra return. The candidate has a null PO reference in the fresh query, so its PO-only classification and payment terms are not established. Financial expected amount is conditional on verified PO-path suitability, approved merchandise-only treatment, confirmed currency and invoice prerequisite; no cash refund is expected from the absent payment fixture. Exact private references and the proposal are in the local working handoff, whose approved restricted portability remains Pending. This is a proposal, not permission or a readiness pass.

Before seeking mutation approval, resolve fixture ownership/reservation against D03/D06, intended Customer Care identity and flow/receipt access, effective entitlement, PO-only/payment-terms provenance, invoice/credit prerequisite, currency and shipping/fee treatment. Refresh records immediately before an authorized run. RMA close may trigger credit/refund processing, so approval must name those effects and finance checks before close. No flow was launched, RMA created, receipt recorded, order closed, credit issued or payment processed. Ambiguous failures require record/financial reconciliation before any retry.

## Review and decisions

| ID / decision | Scope / evidence | Disposition and recheck |
|---|---|---|
| DEC-01 Receipt-first path | Original story revision 0.1 and kickoff instruction | Retained. Simple return remains a separately documented immediate alternative. |
| DEC-02 Preserve discovery result | SRC12-E01 versus original stale Pending status | Historical RMA-01 retained as complete at discovery scope. Actual ACs remain NOT RUN; remote status untouched. |
| DEC-03 No duplicate deployment inferred | Existing active flow/action observed in SRC12-E01 | Verify compatibility/persona before RMA-02; do not infer need for a new flow from migration. |
| DEC-04 Finance before close | Original dependency and dated official research | D07 readiness is required before a close exercise. PO reference does not prove refund; card processing remains separately gated. |
| REV-01 Maker preservation/privacy check | Draft revision 0.2 versus current original criteria and source map | Pass: 25 maker static checks on frozen initial candidate; affected final checks repeated successfully after repairs. Full restricted portability unverified. |
| REV-02 Fresh independent document check | Fresh D05 reviewer; planned inherited gpt-6.1-sol / xhigh, actual exact model unknown (no runtime metadata). Reviewed frozen initial SHA256 `242487a17aa896625b692febc43b48d5b90a99b2456efbd49a818b1640118c1d`, actual original task UI and historical evidence. | Local document quality sound; two minor corrections: distinguish inspected link entries from read contents, and pin reviewed BATCH. Both applied; focused independent repair recheck Pass on reviewed candidate `cf2f63c7b6d0ad1a5e8165174051ae07ea09806713272a3d0920824170a13cc0`. The final edits to that prior revision only recorded review/check outcomes. This revision 0.3 adds substantive readiness and assignment changes, covered by the separate limited consolidation review and repair recheck recorded below. Full source-preservation acceptance blocked; RMA-03 NOT RUN. |
| REV-03 Design review / Jev | Original story says applicability pending after discovery | No D05 Jev review performed. D07's text review and D04's unrun guide review do not verify D05. |

## Blockers and history

All current blockers below were reconciled on 12 November 2026 UTC. No partial business changes require recovery.

| Blocker | Impact / attempts | Responsible role; smallest next action / resume condition |
|---|---|---|
| Full source inventory and restricted retrieval incomplete | Connector task refresh returned RATE_LIMIT_EXCEEDED (100/100). Browser read the full displayed description and visible Comments/Activity; inspected three related-task entries and seven link entries. Linked contents are not implied to have been read. No attachment artifact was visible, but complete API inventory and linked-context review are not established. No approved portable capture/index owner or reviewer retrieval is confirmed. | Portfolio coordinator/source access owner (actual person Pending): establish approved restricted storage and retrieval, complete material originals/history/attachments inventory and let the fresh reviewer retrieve them. Blocks draft acceptance/portability, not local drafting. |
| E09 assignment resolved; publication separate | Sole local writer recorded by portfolio coordinator on 12 November. Four story candidates are staged separately. | Portfolio coordinator evaluates reviewed candidates and controls integration/publication; no ClickUp writeback. |
| D05 readiness incomplete | A current managed fulfilled candidate is identified, but not reserved. Entitlement and intended agent grants remain unestablished. | D03 readiness coordinator + D05 executor: use the RMA-04 proposal; resume after verified entitlement, intended persona and independently reserved fulfilled managed quantity. |
| Receipt/financial baseline and mutation authority absent | No activated D05 RMA, tested receipt layout, confirmed invoice/payment state or approved receipt/close exercise. | D05/D07 coordinators: define exact scenario and effects; obtain the separate demo authorization already required by the original story. |
| Acceptance not executed | AC-01–03, live independent check and human acceptance remain pending. | Execute RMA-02/03 only after prerequisites; capture actual decisions/evidence. |

Migration history:

- Original guide was Field Guide v1 + operational addition v1.1 in the original service (no Git SHA established). Preserve its historical executor assignment and completed discovery; do not retrofit an invented model ID.
- Portfolio BATCH previously pinned `migrate/DELIVERY.md` @ `769a5099cb7412e9f307a38286f8e2adf74448a8` (earlier setup `4b5406c3d74f7f56071d193ba3359218d4b70d4d`). This rollout deliberately uses `9d32dccc738cc544481a6da257c13d438115f122`.
- Compared the two consumed migration guides: the newer guide adds the platform-access section/first Execution checkpoint and explicit role-dependent Actual fields. Affected checks: new RMA-00, dependencies for RMA-04/02/03 and role matrix. Historical discovery remains dated; RMA-00 access and RMA-04 read-only readiness were subsequently run in this consolidation; intended-persona/runtime acceptance remains NOT RUN.
- The GitHub source was a navigation placeholder, blob `23d85c12bcb0921609540b941affb19d15e424d5`. This partial draft populates existing D05, preserving AC-01–03 and RMA-01–03. No new story/task is created.
- Sanitization: client-branded title/context becomes generic D05 wording; private task/chat links become opaque source references; org/record URLs and fixture identifiers remain in original restricted context. Criteria wording has zero changes. No requirement is retired or silently broadened.
- Original descriptions/attachments remain in the original service. A complete verbatim preservation capture in approved restricted storage must precede any future description replacement. This pass does not replace descriptions, claim complete source capture, publish, synchronize or transition authority.

### Consolidation review disposition

A fresh independent reviewer explicitly dispatched as **gpt-6.1-terra / xhigh**, following the user's model selection, reviewed the available-source scope and rechecked the repairs on 12 November 2026. **Limited local document review and focused repair recheck: Pass.** Dispatch selection is known; exact backend runtime identity was not independently exposed. The review verified unchanged criteria and the affected claims, with prior D05/D06 reviews reused only for unchanged scope. Current original-service comments, attachment byte equality, complete linked inventory, approved restricted storage and successor retrieval remain unestablished. Full source-preservation acceptance stays blocked; runtime verification and human acceptance remain Pending. This is not publication authorization. Exact reviewed hashes, source coverage and dispositions are recorded in the private local handoff.
