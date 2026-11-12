# D08 Verify Quick Order and repeat buying tools

Guide: [migrate/DELIVERY.md](https://github.com/aispanda/Reusable-Delivery/blob/9d32dccc738cc544481a6da257c13d438115f122/migrate/DELIVERY.md), commit `9d32dccc738cc544481a6da257c13d438115f122`, route MIGRATE.

Guide upgrade: the previous published draft used `769a5099cb7412e9f307a38286f8e2adf74448a8`. The new guide adds a first platform access check for MCP and CLI, and role-dependent test evidence covering test identity, intended role, target access and observed outcome. Platform-dependent steps now depend on that check. Existing evidence remains historical and unverified checks remain NOT RUN. An earlier draft used `4b5406c3d74f7f56071d193ba3359218d4b70d4d`. For later authorized REPEAT-02/03, assign the operator and independent checker and record cart, price, reorder, template and export evidence against AC-01–03. Prior evidence and unrun checks retain the scope recorded below.

**Partial migration draft — not an authoritative replacement.** Original ClickUp requirements and evidence remain authoritative. Sync: Pending — deferred by instruction. The earlier documentation batch performed no implementation, org access, fixtures, login, acceptance execution or remote writeback. A later separately authorized read-only CLI access probe is recorded below. Accountable owner, dates and live status remain in ClickUp. Independent review of available evidence supports publication as a partial draft. Full source-preservation review and human acceptance: Pending. Historical batch writer: assigned E07 Codex agent; exact runtime model/reasoning was not exposed, not inferred. The current consolidation writer is identified below.

## Acceptance criteria — original IDs and wording

**AC-01.** A signed-in buyer can find Quick Order, enter a permitted demo SKU and quantity, and see the correct line and account price in the intended cart. Invalid or unauthorized SKUs are handled clearly.

**AC-02.** Verify one existing order-to-cart reorder and one save/reopen order template. Each creates or updates only the intended demo cart.

**AC-03.** A standard cart export downloads the expected item data. No order is submitted or customer notification sent.

## Outcome, scope and current evidence

As a hospital buyer restocking familiar products, I want to build a cart by SKU or reuse a prior purchase so repeat orders take fewer steps. Prefer native Quick Order, Reorder, Order Templates and Cart Exports. Salesforce provides the buyer experience; SAP retains customer and transaction-pricing ownership. Export is a manual procurement aid. Custom development, automated punchout/EDI, new OMS and payment work are excluded.

SRC05 live description revision 0.2 was read in full during this batch. Historical guest navigation and older menu visibility do not establish absence or functioning authenticated components. A later read-only continuation reported an administrative store record, a linked active buyer and entitlement configuration; none proves a signed-in session, account price or store-specific runtime entitlement. No functional acceptance is established. AC-01–03 remain **NOT RUN**. REPEAT-01 remains blocked on authenticated buyer/effective account, existing template and approved isolated cart baseline; REPEAT-02/03 remain Pending. Preserve completed discovery rather than restarting it.

Continuation source check: the latest two source-chat turns were read. After the documentation/Jev review, the user requested implementation; the subsequent author report says the storefront remained a guest session, buyer-facing inventory and acceptance remained blocked, and no Salesforce changes occurred in that attempt. Opening a sign-in page is not successful authentication. This later request does not expand this documentation batch’s authority. The chat reader exposes action summaries and author conclusions, not complete underlying tool-result payloads; no fresh runtime verification is claimed.

Parameters to retrieve through the restricted source owner: `BUYER_ACCOUNT`, `BUYER_USER`, `PERMITTED_SKU`, `PRODUCT_VARIANT`, `CURRENT_ACCOUNT_PRICE`, `PRIOR_ORDER`, `ORDER_SUMMARY`, `TEMPLATE_ID`, `ISOLATED_CART` and exclusive usage window. Historic fixture IDs/prices are examples, not disposable fixtures or current SAP evidence. No template or cart window has been established.

## Solution and checks

Inspect existing native placement first: if Quick Order exists but is hard to find, propose the smallest navigation change; if actually absent, propose one supported native placement and navigation only if needed. Exact page/component support is unverified. Coordinate shared Builder/publication changes; do not infer authority from a design proposal.

- AC-01: compare SKU, active variant, quantity and current account price in the intended cart; verify clear invalid/unauthorized SKU feedback without unintended cart effects.
- AC-02: correlate the prior order to the intended cart; verify reorder lines and save/reopen template quantities. Confirm only the designated cart changes.
- AC-03: inspect downloaded CSV SKU/Quantity and selected fields against the cart baseline. No checkout, order submission or customer notification.

Public technical references retained from the historical source: [LWR components](https://help.salesforce.com/s/articleView?id=commerce.comm_components.htm&type=5), [cart import/export](https://help.salesforce.com/s/articleView?id=commerce.comm_cartimportexport.htm&language=en_US&type=5), [enable export](https://help.salesforce.com/s/articleView?id=commerce.comm_enablecartimportexport.htm&language=en_US&type=5), [export components](https://help.salesforce.com/s/articleView?id=commerce.comm_addimportexportcomp.htm&language=en_US&type=5), [Order Templates](https://help.salesforce.com/s/articleView?id=commerce.comm_ordertemplates.htm&language=en_US&type=5). Sources describe product behavior; not freshly fetched here. The Order Templates body failed retrieval during the original kickoff and remains a guidance gap. Export prerequisites/settings and historical 48-hour availability require current verification.

## Bounded work and review

| Stable step | Work / dependency | Executor and result |
|---|---|---|
| ACCESS-01 — Verify platform access | Before platform discovery, review, build, tests or writes: resolve intended org and minimally probe Headless 360 MCP and Salesforce CLI; record redacted results, timestamps and identity source. | AI: Codex desktop, GPT-6.1 Terra; reasoning not exposed. CLI read-only probe passed; Headless 360 unavailable in this session. Blocked pending MCP access; see ACCESS-01 record. |
| REPEAT-01 | Read-only component, SKU, order/template and isolated-cart baseline; requires ACCESS-01 | Existing discovery agent; prior exact model unknown; Blocked. Future exact model assignment required before dispatch. |
| REPEAT-02 | Supported feature and approved demo after REPEAT-01, scoped authority and coordinated cart/Builder access | Implementer Pending; NOT RUN |
| REPEAT-03 | Fresh independent evidence check after implementation/test evidence | Independent checker Pending; NOT RUN; human acceptance separate |
| DOC-01 | Historical documentation migration/publication | Original author reported attached Markdown verified; pasted tables needed paragraph repair. Preserve history, do not replay that write in this batch. |

Jev review of revision 0.2 is historical: reported model `jev-1.14.0`; 26 probability judgments, 25 matching the rubric. CSV comparison scored 0.18 despite explicit source text requiring comparison against the cart baseline; author classified an apparent false negative, not evidence of an executed export. Price comparison scored 0.73 near the threshold. The live description still says no Jev review during that earlier migration; preserve chronology, not an invented pass. During continuation, the retained full request, response and rubric were inspected. The request file hash matches the response metadata, and the recorded source hash matches the retained local revision 0.2 Markdown. All 26 scores were recomputed against the rubric: only CSV comparison disagrees. The submitted packet itself includes the required baseline-comparison text. This supports the recorded textual disagreement, not an executed export or independent functional acceptance. The independent documentation reviewer must still inspect these artifacts before accepting this reconciliation. No independent functional acceptance or final human acceptance occurred.

## Source disposition and gaps

SRC05 current description and local revision 0.2 preserve AC-01–03 exactly here; criterion text requires no sanitization. Client names, people, private task/chat/instance links, IDs and fixture values become named parameters outside criterion wording. Historical kickoff/continuation remain evidence of limited discovery. The current task description was refreshed and its text hash is unchanged from the first pass. Dedicated ClickUp tools hit the shared daily quota. The coordinator subsequently inspected the signed-in Comments pane: one priority-change activity and no authored comment/reply were visible; this is an observed-UI result, not proof of exhaustive comment history. The coordinator downloaded the current linked revision 0.2 Markdown; this writer read it locally in full and verified byte-for-byte equality with the retained original (SHA-256 recorded in the restricted inventory). AC-01–03, tables, checks and historical states match; attachment retrieval is no longer an open gap for this captured version. The latest two source-chat turns were read; older material decisions and referenced baseline/guide artifacts are not fully inventoried. The source description’s attachment-readback report is now supported by the coordinator’s fresh download and this writer’s local byte comparison. Restricted storage approval and cross-laptop retrieval remain unverified. No source is superseded.

## Role-dependent checks

For AC-01–03 record the test identity, intended buyer role, access to each target storefront/order/cart/template, observed action and expected versus actual behavior. An admin query or guest page is not buyer-role evidence. All role-dependent checks remain NOT RUN.

## Next documentation step — E07-MAP

One executor: this assigned E07 writer; accountable assignment remains in the coordinator/ClickUp record. Inputs: original source revisions, current comments/attachments/linked documents and restricted retrieval approval. Output: completed source-to-destination comparison with every criterion difference classified. Check: preserve stable IDs/wording and historical versus current states; independent reviewer reads originals and draft. Budget: first bounded discovery/draft pass, then report gaps. Stop before remote writeback, implementation or any missing-source completion claim. Preserve current local draft and source references on interruption; coordinator alone publishes. Next action: resolve missing capture/access, then reconcile and request independent documentation-preservation review. Overall migration and portable handoff remain incomplete.


## Migration review of this candidate

Draft consolidated by the assigned sole E07 writer in separate staging; coordinator retains integration and publication. Compared source AC-01–03 and stable REPEAT IDs; wording unchanged, no criteria sanitization. Restricted identifiers remain represented by named parameters. Previous Jev results and guest/session observations remain historical. Human-reader and AI-execution maker checks are Pending on this candidate; fresh independent source-based review is Pending. ClickUp synchronization deferred by batch instruction. Candidate publication and portability are Pending; source description remains authoritative.



## ACCESS-01 — current executor platform check

12 November 2026, approximately 02:07 EST. Executor: Codex desktop, GPT-6.1 Terra (client model metadata); reasoning setting not exposed. Intended environment: restricted demo org. Headless 360 MCP: unavailable in this executor's tool inventory; discover/describe/read-only dispatch NOT RUN in this session. Historical MCP results remain evidence only for the earlier session. Salesforce CLI: `sf org list --json` returned one connected alias; `sf org display` matched the intended demo org and reported API version 68.0; a read-only WebStore query succeeded and returned the intended B2B demo store. The first sandboxed CLI attempt failed with EPERM opening the CLI log; the authorized normal-configuration retry succeeded. The authenticated CLI principal's exact identity/role is Pending; the observed resource was the administrative WebStore record, not a buyer cart. No buyer role, target cart access or buyer-visible behavior was tested. **ACCESS-01 Blocked** until Headless 360 is restored and minimally verified in this executor context; retain successful CLI results and recheck when environment or authority changes. No scope, permission or credential changes were made.

**Consolidation:** 12 November 2026. Sole E07 writer assignment recorded by coordinator. This published partial draft preserves original criteria and stable IDs. Independent review of the consolidation and repairs passed at this scope. Full original-source review remains pending. ClickUp synchronization deferred; original source remains authoritative. No functional acceptance claimed.

## Repeat purchasing access and fixture recheck

On 12 November 2026, Headless 360 and Salesforce CLI read checks passed in the intended development environment after the MCP connection recovered. The scoped administrator read found the demo account in the store's buyer group and the candidate SKU in an account-related policy.

Buyer-session access, the SKU's store-specific entitlement and current price, the order or template baseline, and an approved isolated cart remain pending. The Quick Order and repeat purchase tests remain NOT RUN.
