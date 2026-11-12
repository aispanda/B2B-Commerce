# D09: Show shipment tracking for a fictional order

Guide: [MIGRATE route, `migrate/DELIVERY.md` @ `9d32dccc738cc544481a6da257c13d438115f122`](https://github.com/aispanda/Reusable-Delivery/blob/9d32dccc738cc544481a6da257c13d438115f122/migrate/DELIVERY.md). Previous guide: ClickUp Markdown template v1.3, derived from Field Guide v1 and operational addition v1.1; its link is in restricted context. Batch used `769a5099cb7412e9f307a38286f8e2adf74448a8`; this rollout explicitly selects the newer guide. Changes include recording test identity, intended role, access to the target resource and actual outcome for role-dependent checks; recheck the buyer tests and related evidence.

Revision/status/as-of: Published partial migration draft, 12 November 2026. Full source preservation, implementation and acceptance remain open. ClickUp synchronization: Pending — deferred by batch instruction. Accountable owner: Pending. Origin: original task and source details are restricted; the existing task ID and URL remain in the restricted handoff. Public source-index mapping, access owner and independent retrieval: Pending. This draft does not supersede the original.

Existing portfolio navigation retained: [E10 Shipment tracking integration](https://github.com/aispanda/B2B-Commerce/tree/main/epics/e10-shipment-tracking). Classification in the original portfolio placeholder: post-MVP demo, distinct from reusable integration and the [O09 order-history baseline](https://github.com/aispanda/B2B-Commerce/tree/main/epics/e04-post-order/stories/o09-order-history). The user's later clarification excludes SAP from this proof of concept; it does not by itself establish any new release date or change the demo classification.

## Current state

An earlier read-only Builder check found the standard tracking component bound to an order-status expression. A direct shipment-status mapping and buyer runtime behavior remain unverified. A related readiness chat reports a fictional split order and four original shipments, but a later read found three additional tracking-demo shipments on the same order. The candidate's suitability, reservation and isolation for this story remain unverified.

The readiness chat later reported that a demo buyer could sign in but did not see the target order in order history, and its direct detail page did not show order details. No shipment tracking was observed for that buyer. This is a related-task report, not this story's independent runtime acceptance. The cause is not established. The same report says an administrator could view one date on an internal shipment page; that does not establish buyer visibility.

Next eligible documentation step: finish source coverage and independent source review, including the exact scope-change wording and restricted source index; the coordinator has assigned this chat as the sole E10 writer for D09. Before any Salesforce discovery, verify platform access for the current executor through both Headless 360 MCP and Salesforce CLI; the readiness chat's earlier checks are historical, scoped to its executor, and do not transfer automatically. Independent verification of the demo: NOT RUN. Human acceptance: required according to the originating story; decision and accepting person Pending.

## Outcome and scope

As a signed-in buyer, I want to see shipment progress for the correct fictional order, so I know where its delivery stands. The work concerns a standard or declarative storefront demonstration, including a truthful empty state and isolation between buyers. The separate shipment-integration implementation is outside this story; its [portfolio placeholder](https://github.com/aispanda/B2B-Commerce/tree/main/epics/e10-c-carrier-visibility) is a navigation reference, not proof of implementation. No real shipment or customer notification is part of the demo. The user later clarified that SAP is out of scope for this proof of concept; the original SAP wording in AC-03 is preserved below and the effect of that instruction is recorded explicitly.

## Acceptance criteria

Original wording and stable IDs as observed in the task on 12 November, carried forward for traceability. No acceptance check has passed.

| ID | Original agreed criterion | Verification and state |
|---|---|---|
| AC-01 | An authorized demo buyer sees the expected status for the correct order and shipment using the standard component. No other buyer’s tracking data is visible. | Test intended buyer, target order and shipment, source-to-display status, and cross-account isolation. NOT RUN for this story. |
| AC-02 | Check a demo order with a populated shipment and one without a shipment. Empty states use truthful wording and do not imply shipment. | Record populated and empty cases for the intended buyer. NOT RUN. |
| AC-03 | Document source fields, prerequisites and any needed SAP mapping as post-MVP. No actual shipment, carrier message or customer email is triggered. | Document in-scope source fields, prerequisites and side-effect evidence. Later user instruction excludes SAP from this proof of concept; preserve this original clause historically and reconcile its changed applicability and affected checks before final acceptance. NOT RUN. |

**Difference classification:** AC-01 and AC-02 are verbatim. AC-03 is verbatim as history; user explicitly excluded SAP from this POC after the original text, affecting the SAP-mapping portion only. No new substitute requirement or completion is inferred. The remaining source-field, prerequisite and no-real-side-effects obligations remain. The ClickUp original still contains the earlier wording because writeback is deferred. Reviewer must verify this reconciliation against the original instruction and source, and capture the approved current criterion wording before migration acceptance.

## Solution

Assess whether the placed standard component can show the correct shipment status for a verified fixture; do not assume order status and shipment status are equivalent. If supported standard/declarative configuration cannot satisfy the criteria, document the precise gap instead of treating sample content as buyer proof. Confirm the intended shipment among the shared order's records before exposing order-level lists. Check correct and unauthorized buyers as separate test identities with target-record access and rendered behavior recorded. [Salesforce order data expressions](https://help.salesforce.com/s/articleView?id=commerce.comm_components_expressions_order.htm&language=en_US&type=5) provide expression context, not runtime proof. Original source, fixture identifiers and the readiness report are restricted.

## Execution

| Step | Action / criteria | Dependencies | One executor | State / result |
|---|---|---|---|---|
| SHIP-00 | Verify platform access before any Salesforce work | Exact intended org and current executor identified | Automation: Headless 360 MCP and Salesforce CLI, versions Pending; accountable operator Pending | Pending; previous readiness checks are not this executor's current proof. |
| SHIP-01 | Reconcile fixture, status mapping and shared records / AC-01–03 | SHIP-00, current read access and authorized fixture use | AI: Codex desktop; future exact model and reasoning Pending | Blocked until dependencies are established; prior placement inspection remains valid historical evidence. |
| SHIP-02 | Configure or reuse supported feature and test populated, empty and cross-account cases / AC-01–03 | SHIP-01, authorized test identities and action authority | Executor Pending | Blocked; no runtime pass claimed. |
| SHIP-03 | Fresh independent verification and evidence; human acceptance | SHIP-02 and frozen current criteria | Independent checker Pending | Pending. |
| MIG-01 | Reconcile current source, scope change and source mapping | Current source access, authorized restricted index; sole D09 writer assigned | AI: Codex desktop; exact model unknown | In progress: this local draft; independent source review and publication pending. |

### Next step: MIG-01

- Accountable owner Pending; executor Codex desktop, exact actual model and reasoning unknown (not exposed in this session). The portfolio coordinator controls writer assignment and publication.
- Inputs: original task revision 0.3 and its attached revision 0.2, current chat's later POC scope correction, pinned guide, batch boundaries and related readiness evidence. The original was read in the authenticated browser on 12 November; comments displayed no user comments. Connector returned daily-limit error. Coordinator assignment recorded at 07:05 UTC on 12 November. Confirm restricted index and full attachment/evidence access before preservation is accepted.
- Operation/output: complete the source-to-draft comparison, confirm permitted restricted-source retrieval, and provide this partial draft for full independent source review. Retain original task and story IDs in the restricted mapping. The portfolio coordinator owns integration and publication.
- Check: reviewer verifies original AC wording, the explicit scope correction, privacy, historical/current distinctions, target-role evidence, source access and stable step IDs. Expected: all differences classified and no claims of runtime completion. Verification remains NOT RUN.
- Authority/boundary: documentation-only rollout; no ClickUp writeback, Salesforce changes, publication or deployment. Local draft is not an authority transition. Proportionate retry: refresh sources once if changed; if ownership or access cannot be established, record the exact dependency and stop the dependent write.
- Actual: partial reconciliation drafted locally; coordinator assignment confirmed; source-based independent review and source-index portability remain Pending.

## Review and decisions

Prior Jev 1.14.0 reviewed sanitized story revision 0.2, not Salesforce runtime. Its follow-up review of the then-current SAP ownership language predates the user's later SAP-out-of-scope instruction; that result is historical and does not settle the new scope.

On 12 November 2026, Jev 1.14.0 reviewed the sanitized pre-review draft with SHA-256 `d4cdfa761b31d047142fbb2875ecc7b8e854ff3c6b0d7fcc5ad9d6c26de20267`; later revisions add the review, privacy corrections, portfolio pointers and confirmed writer assignment. All 11 positive checks exceeded 0.70 and the false completion-claim check scored 0.02. These are focused text judgments, not evidence that the source criteria were faithfully migrated, the POC works, or acceptance occurred. Exact request and result remain in the local review packet; independent retrieval and approved restricted storage remain Pending. No repair was indicated by these questions. Live TypeSafe documentation could not be retrieved; the request used the previously successful local API format. A later source-comparison review could not be submitted because automatic approval review rejected transmission of the proposed locally sourced source/candidate packet to the external service. Fresh source-based independent review and human acceptance remain Pending.

Maker review: Codex desktop, model identity not exposed, checked human readability (scope, current limits and next action) and AI execution precision (separate identities, source discrepancy, stop boundaries and pending outcomes). Original AC wording was compared against the browser source. This is self-review, not a fresh independent check. No AI review substitutes for runtime acceptance.

## Blockers and history

- **2026-11-12, access and source preservation:** ClickUp connector returned its daily limit; authenticated browser displayed the original description and comments. Complete structured capture, independently retrievable restricted index, attachment and decision provenance remain to be confirmed. Impact: no migration acceptance. Resume when the coordinator and reviewer can access the complete sources.
- **2026-11-12, writer ownership resolved:** coordinator assigned this chat as sole E10 portfolio writer, scoped to D09, in the overnight coordination record. Coordinator retains publication and cross-epic integration. The writer staged the candidate for coordinator publication.
- **Buyer demonstration:** status-to-component mapping, authorized fixture isolation, intended buyer record access and runtime tests are open. Related readiness evidence reports buyer login succeeded but target order details were absent; no cause is asserted. Resume after current-executor platform access and a permitted, evidence-backed read-only investigation.
- **History:** original source revision 0.1 contains AC-01–03; revision 0.3 adds historical discovery and the prior Jev review. The user subsequently excluded SAP from this POC and split integration into a separate chat. This migration adds the newer guide's access and role-specific evidence checks without claiming those checks passed.

## Delivery-model feedback

The pinned rollout and the portfolio batch specify different guide commits; the rollout explicitly resolves the guide version. The initial dispatch lacked a recorded E10-family writer claim, which the coordinator has now supplied. Recording both the version override and the writer claim together in the initial dispatch would make parallel handoffs less likely to overlap. This is an observed coordination issue, not a request to relax either boundary.
