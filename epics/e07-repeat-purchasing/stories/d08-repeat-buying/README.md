# D08 Verify Quick Order and repeat buying tools

Guide: [migrate/DELIVERY.md](https://github.com/aispanda/Reusable-Delivery/blob/4b5406c3d74f7f56071d193ba3359218d4b70d4d/migrate/DELIVERY.md) @ `4b5406c3d74f7f56071d193ba3359218d4b70d4d`; route MIGRATE

**Partial migration draft — not an authoritative replacement.** Original ClickUp requirements and evidence remain authoritative. Sync: Pending — deferred by instruction. This batch performs documentation only; no implementation, org access, fixtures, login, acceptance execution or remote writeback. Accountable owner, dates and live status remain in ClickUp. Independent source-preservation review and human acceptance: Pending. Actual writer: assigned E07 Codex agent; exact runtime model/reasoning not exposed to this agent, not inferred.

## Acceptance criteria — original IDs and wording

**AC-01.** A signed-in buyer can find Quick Order, enter a permitted demo SKU and quantity, and see the correct line and account price in the intended cart. Invalid or unauthorized SKUs are handled clearly.

**AC-02.** Verify one existing order-to-cart reorder and one save/reopen order template. Each creates or updates only the intended demo cart.

**AC-03.** A standard cart export downloads the expected item data. No order is submitted or customer notification sent.

## Outcome, scope and current evidence

As a hospital buyer restocking familiar products, I want to build a cart by SKU or reuse a prior purchase so repeat orders take fewer steps. Prefer native Quick Order, Reorder, Order Templates and Cart Exports. Salesforce provides the buyer experience; SAP retains customer and transaction-pricing ownership. Export is a manual procurement aid. Custom development, automated punchout/EDI, new OMS and payment work are excluded.

SRC05 live description revision 0.2 was read in full during this batch. Historical guest navigation and older menu visibility do not establish absence or functioning authenticated components. A later read-only continuation reported an administrative store record, a linked active buyer and entitlement configuration; none proves a signed-in session, account price or store-specific runtime entitlement. No functional acceptance is established. AC-01–03 remain **NOT RUN**. REPEAT-01 remains blocked on authenticated buyer/effective account, existing template and approved isolated cart baseline; REPEAT-02/03 remain Pending. Preserve completed discovery rather than restarting it.

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
| REPEAT-01 | Read-only component, SKU, order/template and isolated-cart baseline | Existing discovery agent; prior exact model unknown; Blocked. Future exact model assignment required before dispatch. |
| REPEAT-02 | Supported feature and approved demo after REPEAT-01, scoped authority and coordinated cart/Builder access | Implementer Pending; NOT RUN |
| REPEAT-03 | Fresh independent evidence check after implementation/test evidence | Independent checker Pending; NOT RUN; human acceptance separate |
| DOC-01 | Historical documentation migration/publication | Original author reported attached Markdown verified; pasted tables needed paragraph repair. Preserve history, do not replay that write in this batch. |

Jev review of revision 0.2 is historical: reported model `jev-1.14.0`; 26 probability judgments, 25 matching the rubric. CSV comparison scored 0.18 despite explicit source text requiring comparison against the cart baseline; author classified an apparent false negative, not evidence of an executed export. Price comparison scored 0.73 near the threshold. The live description still says no Jev review during that earlier migration; preserve chronology, not an invented pass. The adjacent raw request/response/rubric require independent inspection before relying on the review. No independent functional acceptance or final human acceptance occurred.

## Source disposition and gaps

SRC05 current description and local revision 0.2 preserve AC-01–03 exactly here; criterion text requires no sanitization. Client names, people, private task/chat/instance links, IDs and fixture values become named parameters outside criterion wording. Historical kickoff/continuation remain evidence of limited discovery. Full current comments, linked Markdown bytes, referenced baseline/guide artifacts and prior chat decisions are not completely inventoried/refreshed. The source description reports an attachment readback; this writer has not independently refetched it. Restricted storage approval and cross-laptop retrieval remain unverified. No source is superseded.

## Next documentation step — E07-MAP

One executor: this assigned E07 writer; accountable assignment remains in the coordinator/ClickUp record. Inputs: original source revisions, current comments/attachments/linked documents and restricted retrieval approval. Output: completed source-to-destination comparison with every criterion difference classified. Check: preserve stable IDs/wording and historical versus current states; independent reviewer reads originals and draft. Budget: first bounded discovery/draft pass, then report gaps. Stop before remote writeback, implementation or any missing-source completion claim. Preserve current local draft and source references on interruption; coordinator alone publishes. Next action: resolve missing capture/access, then reconcile and request independent documentation-preservation review. Overall migration and portable handoff remain incomplete.
