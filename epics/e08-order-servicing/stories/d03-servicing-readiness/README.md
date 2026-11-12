# D03 — Verify Order Management and prepare safe demo fixtures

Guide: [MIGRATE+NEW — migration delivery guide at `9d32dccc738cc544481a6da257c13d438115f122`](https://github.com/aispanda/Reusable-Delivery/blob/9d32dccc738cc544481a6da257c13d438115f122/migrate/DELIVERY.md). The prior pilot used `1b612704b10c3923a253450e0191f9a78c36c38a`; the earlier migration draft used `769a5099cb7412e9f307a38286f8e2adf74448a8`. The upgrade adds role-specific execution evidence: test identity, intended role, target-resource access and observed behavior. OM-04.7 is affected and remains open for the buyer; prior administrator and access results retain only their observed scope.

Revision: published partial migration draft 3. Reconciled from the original source story, later demo history, and the scoped platform and page checks recorded below. Classification: Demo readiness. Original requirements remain authoritative. Sync: **Pending — deferred by instruction** under the documentation-only batch override. Owner, dates and live task status remain in ClickUp; accountable implementation owner and future executor are Pending assignment.

## Current state

Initial discovery documented active cancel, return, RMA and credit/refund flow copies and inactive exchange/reship templates. Actual Lite/Growth provisioning and intended-agent effective permissions were not established. A later user-authorized split-shipment demo was built according to SRC09's execution reports: a separate managed summary, three product lines, two fulfillment orders, four shipments and six shipment items. All three product summaries were reported fulfilled. Later updates reported both standard relationships populated on all six shipment items and four fictional dates saved in a dedicated Shipment Date field. A later administrator browser check visibly showed Shipment Date on one refreshed internal shipment page. A separate buyer session did not find the demo order in Order History, and the order-detail page showed no order details; buyer shipment-date visibility remains unverified.

Fixture creation and relationship history above are historical source reports. Scoped access and page observations are separately recorded in the pilot below; they are not full scenario acceptance. The currently retrieved task description and local model snapshot still say no demo records were built; that statement predates the later source-chat execution and is superseded for the split-shipment demo only. The original readiness criteria, finance baseline, fixture reservations and independent acceptance are not thereby complete.

Independent runtime acceptance: **NOT RUN** in this migration. Human final acceptance: required by the source story; **Pending**. Migration completion: **Pending** current comments, attachment-byte/guide traceability, required restricted-context retrieval and full source-preservation review. The initial documentation batch used source records. The later Salesforce reads are recorded in the platform access pilot below.

## Outcome and scope

Know which standard service flows are available and which separate fictional fixtures are safe for later servicing tests. Keep SAP as the production system of record and preserve the original buyer-journey PO order. Active definitions and visible actions do not establish entitlement, eligibility, effective access or successful processing.

The later user request added an internal split-shipment demo: product A20, B30 and C40 distributed over four shipments on distinct fictional dates. This outcome supplements, rather than replaces, AC-01–03. The user clarified four shipments, not necessarily four fulfillment orders. The historical implementation assumed shipments 2–4 originate from warehouse B; only shipment 1 from A and A's remaining ten units from B were explicitly specified. That assumption still needs confirmation where material.

The user subsequently requested Shipment Date for the administrator and the signed-in buyer on the buyer's own record (SRC09; scoped evidence E08-P3). This is an authorized extension of the demo outcome, not a change to AC-01–03; it reopens buyer-specific checks under OM-04.7 and affects independent acceptance under OM-04.8. The earlier internal-only/UI-excluded source description is historical for this extension. Actual buyer access, isolation and storefront presentation remain pending; the later observe-only handoff does not authorize configuration changes.

## Acceptance criteria

Wording and IDs below are unchanged from the current original task. Sanitization affects surrounding identities and links, not these criteria.

| ID | Agreed criterion | Historical evidence and remaining check | Result |
|---|---|---|---|
| AC-01 | Record the observed license/entitlement and availability of Cancel Item, Return Item, RMA Return Items, credit memo/refund, exchange and reship flows. | E08-A records licenses, active copies and templates. Exact provisioned tier and intended-agent grants remain unverified; no service flow runtime pass follows from visibility. | Partial evidence; acceptance NOT RUN |
| AC-02 | Identify a fictional managed Order Summary and fulfilled line with sufficient unreturned quantity, or document the smallest safe fixture setup. Identify a separate pre-fulfillment line for even exchange. | E08-A proposes independent fixtures; SRC09 later reports a managed fulfilled split-shipment demo. Current unreturned/return-initiated quantities, servicing allocation and a separate pre-fulfillment exchange line are not established by that demo report. | Partial evidence; acceptance NOT RUN |
| AC-03 | Record fulfillment, payment and invoice state and the policy for reserving independent fixtures. Do not advance the existing PO order or trigger downstream effects during discovery. | E08-A records the initial visibility-scoped baseline and proposed reservation policy. Later fixture creation has its own user authority; the completed demo's payment/invoice state, side-effect evidence and reservation ledger require reconciliation. | Partial evidence; acceptance NOT RUN |

## Evidence and source authority

| Reference | Authority and read scope | Limits/disposition |
|---|---|---|
| SRC09 | Original source chat, both pages of available turn history inspected, including user decisions and latest execution reports | Controls later authorized scope and reported chronology. Tool-output bodies were not comprehensively captured or independently replayed. |
| E08-A | Local dated readiness report, read for discovery findings, capability matrix and fixture policy | Historical initial read-only observations; its unbuilt-fixture statements predate the demo. Not evidence of current global inventory. |
| E08-B | Local story snapshot aligned to template v1.2; current task revision 0.1 and full description retrieved | Original AC wording and OM step IDs; stale no-demo/connection-blocked statements are not current outcomes. |
| E08-C | Local split-shipment model and ERD; relevant model, scenario, diagnostic, review and limitation sections inspected | Design evidence; not an executable recipe or current runtime result. Local file is not proven byte-identical to the online attachment. |
| E08-D | Historical independent model review and Jev review recorded in E08-B/C and SRC09 | Codex design corrections and 40 Jev typed judgments, model `jev-1.14.0`, concern the model and supplied source summaries. No live-org acceptance. |

The restricted source index is maintained by the migration coordinator; an authorized reviewer requests E08 references through that coordinator. Cross-executor retrieval of all required private artifacts is not yet proven. No public link to restricted originals is implied. Historical template/sample URLs were not independently openable in the source work; native Field Guide was read then, but has not been freshly retrieved here. The pinned public guide governs this migration under BATCH's override.

## Reconciled demo history and solution

The retained model separates fulfillment assignments from physical shipment contents. Its [official Order Summary ERD reference](https://developer.salesforce.com/docs/commerce/salesforce-order-management/guide/order-management-order-summary-erd.html) is a model reference, not proof of the target org. The two-fulfillment-order grouping is scenario-specific; a single final fulfilled state does not demonstrate incremental multi-day fulfillment behavior.

| Shipment | Fictional origin assumption | Contents | Quantity |
|---|---|---|---:|
| S1 | Warehouse A | A10 | 10 |
| S2 | Warehouse B | A10, B10 | 20 |
| S3 | Warehouse B | B20, C20 | 40 |
| S4 | Warehouse B | C20 | 20 |

This gives A20/B30/C40, four fulfillment products and six shipment items. SRC09 reports standard summary/fulfillment creation, initial allocation trouble corrected, then internal product/quantity visibility. Initially the shipment-item relationship IDs and dates existed only as description text. Later the two direct relationships on every shipment item were reported populated and verified through the browser console. A subsequent date-field save was initially blocked by an access-scope approval check; the user explicitly approved System Administrator-only visibility. The field was then reported created, confirmed as Date, and four values populated through MCP. The first refreshed administrator page check did not show the field; a later separate administrator check did display the expected date on one shipment. That later result supersedes only the earlier administrator-page observation; it does not establish buyer visibility. Token-refresh reliability also remained unproven after connection repair; this is historical tooling evidence, not a present access diagnosis.

Keep existing progress complete as historical reported work; do not recreate fixtures merely to align documentation. Verify existing IDs and partial effects before any future authorized change. Inspect fulfillment-managed quantities separately from shipment-item sums and `QuantityShipped`. Retain invoice, payment, return quantities and intended-persona page access as separate checks. The actual implementation/configuration remains in the original environment; this public repository contains documentation only.

## Execution and pending gates

| Step | Reconciled state | Next evidence; future executor |
|---|---|---|
| OM-00 | Verify platform access — Passed for the read-only pilot | One executor: Codex pilot session. Headless 360 MCP and Salesforce CLI verified against the intended developer environment. Recheck for a new executor environment or changed authorization. [Pilot evidence](#platform-access-pilot) |
| OM-01 | Bounded discovery completed historically; readiness partial | Read-only exact tier, persona grants and current eligibility evidence; owner/executor Pending |
| OM-02 | Original servicing demo readiness not accepted | Isolated fixture, finance baseline, active-flow inputs and permitted effects; owner/executor Pending |
| OM-03 | Independent acceptance NOT RUN | Fresh comparison with all three unchanged criteria; independent checker Pending |
| OM-04.1–03 | Historical connection/schema/fixture work progressed enough to build the demo; not all preflight checks evidenced | Preserve successful access/build history; audit missing side-effect and supported-path proof rather than restart automatically |
| OM-04.4–05 | Source reports order/summary and split-shipment records created | Verify existing records/relationships before any repair; implementation executor Pending |
| OM-04.6 | Source reports totals and six relationship pairs verified | Independent quantities, lifecycle/intermediate-state and financial checks NOT RUN |
| OM-04.7 | Rework — administrator page displayed the expected Shipment Date on one shipment; buyer Order History did not show the demo order and its direct detail page showed no order details. | A scoped record-access query reported no read access for the buyer on the tested summary and one shipment. Commerce authorization, buyer shipment view and date visibility remain unverified. Future executor and model Pending. |
| OM-04.8 | Independent demo acceptance NOT RUN | Frozen unchanged criteria plus additional user outcome, actual runtime evidence, then human decision |

Fixture policy remains proposed until actual reservations are recorded: separate pre-fulfillment exchange/cancel allocations; separate fulfilled return, exchange and reship allocations; coordinate one RMA close with its credit reconciliation; keep shipment populated/empty controls and any future test-card fixture distinct. A populated shipment is not a reservation or authorization to service it.

**RMA dependency (D04).** A usable managed fulfilled line and reservation have not been established. The split-shipment report alone does not prove sufficient unreturned quantity or that this shared order is safe to allocate. Before a return test, the returns owner must verify the actual fulfilled, canceled, returned and return-initiated quantities, any competing reservation or return, the intended agent's access, and the payment/invoice baseline and downstream flow effects. The earlier two-unit line is a proposed separate fixture, not an existing or approved fixture. Coordinate the reservation and finance prerequisites with the returns and credit work; no return, receipt, close or financial operation is authorized by this documentation step.

### Platform access pilot

- **Headless 360 MCP**. On 2026-11-12 05:37 UTC, Discover and Describe identified the API limits operation. `dispatch_readonly` returned HTTP 200 and the expected limits response. The Codex executor reached the configured server through a local tool context.
- **Salesforce CLI 2.157.8**. The org list matched the intended developer environment and a read-only API limits request succeeded. The environment and account details remain in the restricted project context.
- **Scoped read and user-role checks, OM-04.7.** A later executor rechecked both connections against the same developer environment and confirmed the Date field, administrator API access and layout. On one refreshed internal shipment page the administrator saw the expected fictional date. The test buyer signed in to the storefront, but the demo order was absent from Order History and the direct detail page displayed no order details. A scoped record-access query reported no read access for this buyer on the tested summary and one shipment; it does not establish all Commerce API authorization behavior. This buyer-path mismatch does not establish its cause; buyer shipment/date rendering and independent runtime acceptance remain NOT RUN. Full identities, target references and diagnostic outputs are restricted evidence E08-P3; a durable restricted index mapping and authorized cross-executor retrieval remain Pending.
- **Partial access change.** Before the subsequent observe-only direction, an executor created a permission set through metadata MCP granting Shipment and Shipment Date read, without edit, View All or Modify All; it was read back and remains unassigned. No buyer assignment or sharing change was made. The administrator retained access. The set has not undergone an independent least-privilege review. Do not treat its creation as buyer access; inspect existing partial effects before further changes.
- **Shared fixture collision.** A current read found three later tracking-proof-of-concept shipments linked to the same summary in addition to the four original scenario shipments. Their purpose and access treatment require reconciliation; do not delete or move them by assumption, and do not expose them to a buyer without an appropriately scoped decision.

### Next bounded step: OM-04.7 buyer-access diagnosis

- **Accountable owner:** Pending. **One executor:** Pending — AI client and exact planned model/reasoning, or named human, not yet assigned. Do not dispatch until assignment is resolved. Actual: NOT RUN for this next diagnosis.
- **Inputs and dependencies:** current story and E08-P3; original acceptance criteria; authenticated administrator and authorized buyer test identities; existing unassigned permission set and sharing state; confirmed inventory of the original and later POC shipments. Recheck OM-00 for a new execution environment. Confirm access to restricted source context and the current action boundary before any Salesforce action.
- **Operation/output:** one read-only diagnosis proposing the smallest supported buyer access and presentation path for the user's own eligible order, including a treatment for the separate POC records. Produce a short configuration and access-boundary proposal; no mutation in this step.
- **Acceptance check:** document test identity, intended buyer role, target-resource access, record-level boundaries, actual storefront result and a negative cross-account check plan; distinguish administrator, impersonated buyer, API and rendered-page observations. A fresh independent reviewer checks the proposal against the user's scoped outcome before any material access change. Runtime acceptance remains NOT RUN.
- **Authority and stop:** current rollout authorizes documentation and read-only diagnosis only. Do not assign permissions, alter sharing, change data, publish a site, or perform service transactions under this step. Bound the next attempt to 10 minutes, one focused read per evidence layer and one justified alternate, with no new paid tools or purchases; record failures rather than repeatedly retrying. Stop on uncertain ownership, missing source access, an unverified isolation boundary, or unclear authority; inspect partial effects before retrying. BATCH keeps publication with the coordinator and ClickUp synchronization deferred.

### Documentation reconciliation and remaining gaps

The writer compared the current original task description and AC-01–03 in the ClickUp UI with this story: wording is unchanged. The ClickUp task remains TO DO and unassigned; its description is historical for later user-authorized demo work. The ClickUp MCP returned RATE_LIMIT_EXCEEDED (daily 100/100); the visible comments pane showed an activity entry, but complete comments/replies and attachment-byte comparison remain unverified. Historical original-source captures, approved restricted storage and cross-executor retrieval remain unresolved. One fresh independent reviewer must compare the candidate to the accessible original sources and evidence before coordinator publication; full migration acceptance remains Pending.

Future authorized runtime planning must name one executor and expected evidence for each AC before implementation: tier/grant/flow matrix for AC-01; current managed/fulfilled/unreturned state plus separate pre-fulfillment reservation for AC-02; finance baseline, protected-order and side-effect/reservation checks for AC-03; internal pages, distinct dates, joins and quantity reconciliation for the additional demo. Inspect partial effects before retries. This batch assigns none of those live operations.

Maker checks cover source attribution, arithmetic, unchanged criteria and sanitization. The writer is Codex; exact model version/reasoning was not exposed reliably in this task. An independent reviewer verified all three criteria against the original description and checked the reported execution chronology. Full source-preservation review remains Pending. Runtime and human acceptance are recorded separately. No implementation tests apply to this documentation-only change.

