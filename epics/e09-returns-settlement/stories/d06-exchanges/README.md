# D06: Demonstrate even and RMA exchanges

**Migration draft; original task remains authoritative.** Current guide: [migrate/DELIVERY.md at `56695c71dd26986eea09ebfa23e60826f1ee9359`](https://github.com/aispanda/Reusable-Delivery/blob/56695c71dd26986eea09ebfa23e60826f1ee9359/migrate/DELIVERY.md), route MIGRATE. Earlier work and reviews used `9d32dccc738cc544481a6da257c13d438115f122`; the earlier batch baseline was `769a5099cb7412e9f307a38286f8e2adf74448a8`. Preserve those review scopes and the batch write and review boundaries.

**Revision / as of:** Published partial migration draft, 12 November 2026 UTC. Documentation: limited independent review and repair recheck passed. Full source-preservation acceptance remains pending. Implementation: blocked. Scenario tests: NOT RUN. Human acceptance: required by the existing execution record; decision Pending. Accountable implementation owner: Pending. Origin: original task and execution records, restricted mapping Pending. ClickUp synchronization: Pending — explicitly deferred.

## Current state

Both exchange templates were visible in an earlier inspection. A fresh read of the order-servicing setup service reports neither exchange flow installed. The generic setup response does not identify the license tier and does not prove that the intended Customer Care user can access an exchange action. The automated setup service has unresolved existing-order and shared-configuration implications; an alternative manual setup path is documented but its suitability for this environment remains unverified. Dedicated fixtures, effective equal-price eligibility, compatible product scope, and a safe RMA settlement path remain unverified. No exchange scenario or acceptance test has been run.

Next eligible **documentation** action: complete the restricted source and attachment inventory, then arrange independent review of any additional material and the final draft. The sole E09 local consolidation writer is assigned, planned gpt-6.1-sol / xhigh, actual runtime model unknown; future operational executors remain separately assigned before dispatch. A limited independent review and repair are recorded below, but they do not establish full source coverage. The next implementation-related investigation is EXCHANGE-01G, blocked until the assigned executor and authoritative org-specific setup/compatibility evidence are available. Independent delivery verification: NOT RUN.

## Outcome and scope

As a Customer Care agent, I want to replace an eligible product variant using the standard exchange workflow. This is a post-MVP demo: same-price even exchange before fulfillment, and a separate post-fulfillment exchange with RMA when licensed and safely testable. Use standard or declarative features, retain the existing external system-of-record boundary, and record any native capability gap. Never take live payment for the demo.

## Acceptance criteria

The following wording and IDs match the source task; no criterion was changed for this draft.

| ID | Agreed criterion and observable expected result | Planned evidence | Result |
|---|---|---|---|
| AC-01 | Verify same-price variant eligibility and confirm the standard pre-fulfillment exchange outcome using a dedicated fictional test line. | Eligible variant and effective price, dedicated line, action and before/after result. | NOT RUN |
| AC-02 | If Growth and suitable fixtures are available, demonstrate the post-fulfillment Exchange with RMA path and show the price difference as a demo accounting outcome without taking live payment. | Entitlement, different fulfilled line, return/closure prerequisites, safe settlement and observed accounting outcome. | NOT RUN |
| AC-03 | Keep the two test scenarios distinct. Record order, exchange and RMA references and stop safely if licensing, fulfillment or settlement prerequisites are missing. | Fixture matrix, restricted references, stop conditions and observed results. | NOT RUN |

## Solution and verification plan

Use the standard Even Exchange flow for the pre-fulfillment same-value variant and the standard Exchange with RMA flow on a separate eligible fulfilled line. The [Salesforce simple exchange guide](https://help.salesforce.com/s/articleView?id=commerce.om_exchange_order_items.htm&language=en_US&type=5) describes cancellation and replacement with no financial change. The [RMA setup guide](https://help.salesforce.com/s/articleView?id=sf.om_exchanges_rma_setup.htm&language=en_US&type=5) describes configuration prerequisites. Neither document proves this environment's license, compatibility, setup or observed behavior. Receipt, closure and financial side effects must be established before the RMA test. Record entry labels, errors and accessible target record under the intended role; API access by an administrator is not proof of Customer Care access.

## Execution

One executor per bounded step. Assign a named human or exact AI model and reasoning before dispatch; do not infer an executor from a product family. Historic EXCHANGE identifiers are retained.

| Step | Action / criteria | Dependencies | Executor | State and evidence |
|---|---|---|---|---|
| EXCHANGE-00 | Verify platform access | Authorized target environment; MCP and CLI | AI: Codex desktop; actual model not independently exposed | Complete for current session, approximately 06:04–06:06 UTC on 12 November 2026: MCP discover → describe → read returned HTTP 200; CLI org list and a read-only Organization query returned success against the intended development environment. The MCP user-info read identified a System Administrator profile. Initial CLI lookup failed because `sf` was absent from PATH; its installed executable then needed permission to write its local log. Durable access evidence: Pending approved restricted storage and retrieval, to be mapped to SRC04. Recheck after environment or authorization changes. |
| EXCHANGE-01A / 01B | Refresh readiness and RMA sources; AC-01–03 | Source access | AI: prior Codex session, GPT-6.1 Terra per historical client metadata | Complete as dated historical reads; refresh before relying on their evolving fixtures. |
| EXCHANGE-01C | Establish Growth entitlement and intended-user exchange-action access; AC-01–03 | EXCHANGE-00; authoritative entitlement source and target-user access | Pending assignment | Blocked; generic setup access is not tier or intended-user proof. |
| EXCHANGE-01D | Verify a same-parent pair at equal current effective prices; AC-01 | EXCHANGE-00; catalog and buyer-pricing context | Pending assignment | Blocked; sampled listed prices did not establish an eligible pair. |
| EXCHANGE-01E-R | Reconcile readiness source and fixture allocation; AC-01–03 | Current source access | AI: Codex desktop; exact model not independently rechecked | Complete as a dated read; no distinct exchange fixture allocation was evidenced. |
| EXCHANGE-01E | Reserve distinct pre-fulfillment and fulfilled/unreturned fictional lines; AC-01–03 | EXCHANGE-00; eligible records and fixture owner | Human: fixture owner Pending | Blocked — ownership and eligibility not established. |
| EXCHANGE-01F | Establish safe RMA receipt, closure and settlement; AC-02–03 | Relevant RMA and finance evidence | Human: authorized decision-maker Pending | Blocked — decision and safe path missing. |
| EXCHANGE-01G | Establish supported existing-order setup path and current B2B compatibility; AC-01–03 | EXCHANGE-00; official documentation and org-specific authoritative evidence | AI: Codex desktop proposed; exact planned model and reasoning Pending | Blocked for dispatch until executor identity is resolved; org-specific answer and configuration effects unverified. |
| EXCHANGE-02A | Select supported configuration and define authorized bounded change; AC-01–03 | 01C–01G as applicable, coordination and authority | Pending assignment | Pending. |
| EXCHANGE-02B | Execute same-price even exchange; AC-01, AC-03 | Eligible action and dedicated line, effects checked | Pending assignment | NOT RUN. |
| EXCHANGE-02C | Execute RMA exchange if licensed and safe; AC-02–03 | Separate fulfilled line, safe receipt and settlement | Pending assignment | NOT RUN. |
| EXCHANGE-03A | Fresh independent comparison of evidence with frozen criteria; AC-01–03 | Scenario evidence; reviewer source access | AI or human reviewer Pending | NOT RUN. |
| EXCHANGE-03B | Final acceptance | Independent review and evidence | Human: acceptance owner Pending identification in approved restricted context | Pending. |

### Next bounded task: complete the source inventory

- **Owner / executor:** Portfolio coordinator owns publication. The assigned sole E09 local writer uses planned gpt-6.1-sol / xhigh; actual runtime identity unknown. Independent review covers changed portions; full source inventory remains Pending.
- **Inputs:** SRC04 original task, visible comments and attachments; latest execution snapshot; pinned guide and batch policy. Confirm approved restricted storage, access owner and retrieval method; do not assume the local map is approved portable storage.
- **Operation / output:** Inventory each relevant artifact, version/read completeness and disposition. Compare any newly discovered decisions or criteria with this draft and classify differences. Record exact inaccessible sources as gaps without copying private data to the public draft.
- **Check / evidence:** Preserve version references and reviewer-retrievable evidence; arrange independent source-based review of newly inventoried material and any affected draft claims. Documentation review is not delivery or human acceptance.
- **Boundary and recovery:** Documentation only; no ClickUp writeback, publication or Salesforce mutation. One focused retry for an unavailable source; record the precise missing source or access and stop the dependent check. Inspect partially written drafts before retrying.
- **Actual:** NOT RUN for the complete inventory. Earlier partial source reads and limited review are recorded below.

## Review and decisions

- Human-reader and AI-execution hats: earlier v1.3 maker self-reviews covered that documentation revision. The present writer checked this draft for readable scope, pending states, bounded tasks and source-criterion fidelity; this is maker self-review, not independent or human acceptance. The writer compared the three criteria against the v1.4 snapshot programmatically; all matched.
- **Limited independent draft review:** A fresh Codex subagent, exact model unavailable from client metadata, compared the live original criteria, v1.4 snapshot, pinned guide, batch policy and draft. It confirmed AC-01–03 and identified five findings: fixture wording overstated allocation, setup-path wording was too broad, sanitization needed classification, durable access-check evidence was missing, and prior self-reviews needed their scope preserved. The writer corrected all five; the reviewer rechecked corrected draft SHA-256 `e4d97decc13b16d0a9477fc4403bcbe89d8035c75194b563fbef3318264d957d` and marked each resolved. This review did not inventory all linked artifacts or independently read complete comments. The added review record and next-task update were not independently re-reviewed; full migration acceptance remains Pending.
- Historical Jev and Claude checks reviewed sanitized document structure, not implementation, org state or delivery acceptance. Preserve their underlying restricted records for review; do not treat their model opinions as runtime evidence.
- Original user authority permits story execution subject to its existing prerequisites; this migration rollout itself authorizes documentation only. Do not expand shared permissions, run a payment/refund, consume another story's fixture or alter shared pages without the applicable authority and safety checks.
- Role-dependent test plan: test identity Pending; intended role Customer Care agent; access to target Order Summary Pending; actual action visibility and behavior NOT RUN. The setup read used the connected administrative context only.

### Bounded Jev and Claude review — 12 November 2026

TypeSafe **jev-1.14.0** evaluated nine typed questions over a sanitized summary, not the complete story or source evidence. Its results supported the pending test and acceptance states, distinct test records, no-live-payment boundary, and separation of administrator and intended-user access. The model's judgments do not establish Salesforce behavior or source completeness.

**Claude Opus 5.5 Medium** reviewed a sanitized summary against the guide change and recommended clarifying the draft's publication history, recording the newer guide revision, and checking role-dependent access. The contradictory publication line is corrected below. On follow-up, Claude agreed that the previously observed administrator probes apply to that executor and environment; Customer Care role, target-record access and scenario behavior remain unverified. The review did not inspect the full story, source attachments or org. The review details remain in restricted working evidence; accessibility to a successor remains pending.

**Guide change and affected checks:** Compared with `9d32dccc738cc544481a6da257c13d438115f122`, the current guide adds conditional Salesforce MCP/CLI recovery instructions: consult the matching recovery guide when a check fails, and skip recovery guides when both pass. The earlier administrator probes remain historical evidence for their session; repeat the platform check if the executor environment or authorization changes. This documentation update has not received a fresh independent review; source-preservation acceptance, scenario tests and human acceptance remain pending.

## Blockers and source history

| Source / revision | Destination or disposition | Difference and limit |
|---|---|---|
| SRC04: original ClickUp task, revision 0.1 plus visible handoffs, read 12 November 2026 | Outcome, AC-01–03 and historical status in this draft | Criteria copied verbatim. Private task link and client identity withheld; named external system generalized as the external system of record; named human acceptance owner withheld here pending approved restricted mapping and retrieval. No source replacement. |
| Latest execution snapshot v1.4, 11 November 2026 | Execution and blocker history | Historical evidence, not present runtime proof. Full restricted mapping and retrieval verification Pending. |
| D06 GitHub placeholder blob `3231ba9041a625bed22357f34dd8d591600999c3` | Target story path retained | Placeholder had no criteria; this draft adds them from the source, without changing meaning. |
| Template v1.3 and Field Guide | Superseded as format guidance for this migration only; historical source remains | Exact previous GitHub-guide revision is N/A: this story previously used the ClickUp template. The batch baseline `769a509` is recorded above; the new guide adds platform access checks and role-sensitive evidence. |

**Known gaps:** Historical setup observations require refreshing before implementation. Current access checks show only tool connectivity and administrative context. License, safe fixtures, price equality, supported setup path and RMA settlement remain unresolved. A named owner and exact executor are required before operational steps. The existing local source map identifies the task as SRC04; its approved restricted storage, access owner and authorized-reader retrieval test remain Pending. Durable platform-access evidence, complete attachment/linked-document inventory and fresh independent source-based review are Pending. The partial GitHub migration draft has been published; ClickUp writeback and migration completion remain pending.

## Consolidation checkpoint — 12 November 2026

The E09 writer reran Headless 360 and CLI access checks in order; both passed under a verified System Administrator principal after routine authentication renewal. This does not replace the intended Customer Care exchange check. Read-only RMA discovery found three fulfilled lines on a shared managed demo order; none is reserved for D06, and the proposed D05 one-unit line must not be consumed by an exchange without coordination. These lines do not resolve the pre-fulfillment same-parent/equal-effective-price requirement, Growth entitlement, setup compatibility or safe settlement. Historical independent review applies only to unchanged sections; this checkpoint and documentation-assignment changes were covered by the limited consolidation review below.

### Consolidation review disposition

A fresh independent reviewer explicitly dispatched as **gpt-6.1-terra / xhigh**, following the user's model selection, reviewed the available-source scope and rechecked the repairs on 12 November 2026. **Limited local document review and focused repair recheck: Pass.** Dispatch selection is known; exact backend runtime identity was not independently exposed. The review verified unchanged criteria and the affected claims, with prior D05/D06 reviews reused only for unchanged scope. Current original-service comments, attachment byte equality, complete linked inventory, approved restricted storage and successor retrieval remain unestablished. Full source-preservation acceptance stays blocked; runtime verification and human acceptance remain Pending. This is not publication authorization. Exact reviewed hashes, source coverage and dispositions are recorded in the private local handoff.
