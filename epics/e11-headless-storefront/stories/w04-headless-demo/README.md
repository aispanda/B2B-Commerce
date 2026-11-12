# W04 Design and build the first headless storefront demo

**Partial migration draft.** Requirements/source authority remains SRC17; this portfolio page does not supersede its original story or constitute design/build acceptance. Accountable owner, dates and live status remain in ClickUp. Sync: Pending — deferred by instruction. This batch performs source reconciliation and documentation only, with no org actions, implementation or ClickUp writeback.

Guide: [migrate/DELIVERY.md](https://github.com/aispanda/Reusable-Delivery/blob/769a5099cb7412e9f307a38286f8e2adf74448a8/migrate/DELIVERY.md), commit `769a5099cb7412e9f307a38286f8e2adf74448a8`, route MIGRATE. Publication base: `74bb883329189dd3801460865b5ee91a1a76a43a`. This is the first W04 migration draft, not an upgrade of accepted W04 work. [Batch boundaries](../../../../BATCH.md) apply; later QA planning does not authorize execution now.

## Outcome and boundaries

Deliver a coherent desktop/mobile custom buyer experience using the existing Salesforce B2B Commerce backend where verified. The first headless demo is separate from the deferred autonomous storefront-creation kit (SRC18/E12/W05). No kit installer or automatic store creation is added here. Preserve the existing storefront, catalog and separately owned tax, media, ordering and servicing work; do not assume a second WebStore.

Free components, GitHub and Cloud Run are the stated delivery direction. No paid template or unapproved infrastructure spend. The original research stack is a proposal, not evidence of integration. Expanded demo scope includes Shopping Lists, profile/addresses, quotes/PDFs, tracking and service; promotions, invoices and configurable products require applicability checks. Returns, RMA, warranty, replacement, repair, exchange and refund require supported buyer completion or an explicit agent handoff. This expanded demo is not a silent rewrite of the separate SAP MVP rollout.

## Authority and evidence ledger

| Concern | Source and disposition | Limit |
|---|---|---|
| Requirements | Current SRC17 ClickUp description, read in full; stable AC-01–13 below. Later originating-chat instructions guide reconciliation. | Local story differs on AC-13; authority decision required before adopting that rewrite. Earlier source turns, original proposal and linked workbooks not exhaustively reconciled. |
| Implementation | Dedicated local prototype, renderer and component-evaluation artifacts inspected at hashes recorded in restricted inventory. | Local directory is not a Git repository; no HEAD/branch/remote could be resolved there. No authoritative implementation repository or deployment revision established. Do not claim none exists elsewhere. |
| Historical design evidence | Retained v2.3 manifest hash `af1390def0a4e4a5a58c63279f8928f7004dbfba55fb2c898be87f9b9136250d` matches local bytes. Static-review report and earlier source records remain scoped evidence. | Hash match proves identity, not visual correctness, live integration or human acceptance. Review packets and all images not independently re-audited in this batch. |
| Current design artifact | Local README and latest source turn point to replacement gallery; gallery SHA256 `cad7e0c86238dd859e0d6bc07e8bd0a50008cad0ae7c6509dac1af963d62a202`. Sitemap has25 entries. | Latest author reported22 page groups/24 responsive views and blocked visual browser preview. No fresh visual or runtime check in this batch. Current gallery is not automatically covered by v2.3 reviews. |

The current task returned no attachment or attached-Doc entries in the bulk response; this is not a complete inventory of linked sources. Source description hash, local artifact hashes and reviewed chat scope are in the restricted inventory. An independent reviewer verified all 13 criteria against the original description and checked the recorded conflicts against available evidence. Approved portable retrieval and full source-preservation review remain Pending. BATCH requires an explicit original-story/code authority decision before W04 migration acceptance.

## Acceptance criteria — original IDs preserved

AC-01 replaces the named individual with `ACCOUNTABLE_HUMAN`; that role remains mapped through the restricted source owner. All other criterion sentences retain the current original description’s wording. AC-13’s appended documentation-link label is separated from its requirement text; the technical reference is retained below. No local rewritten criterion silently replaces an original.

AC-01: Keep Home B; preserve the seven existing journey screens and recovery states, and render the missing flows in a new desktop/mobile revision. ACCOUNTABLE_HUMAN accepts the revised bundle with its manifest hash; Home A/B selection is already settled.

AC-02: SKU, variant, pack size, quantity and buyer price stay consistent across product, cart and order.

AC-03: Render loading, no results, empty cart, missing-image placeholders, unavailable price, invalid PO and uncertain-order recovery before design approval.

AC-04: The concept identifies synthetic behavior; tax, shipping and email are never presented as verified.

AC-05: Target WCAG 2.2 AA. Record desktop/mobile, keyboard, screen-reader, contrast, focus, labels and complete-process assessments; automated checks alone do not establish conformance.

AC-06: Live claims match Salesforce readback. Test two buyer accounts through UI and direct requests for product, price, address, cart and order isolation; reject unauthorized supplied account IDs. Verify uncertain-order recovery.

AC-07: Repository, working branch, remote, component licenses and Cloud Run target are recorded before publishing.

AC-08: Independent QA and final human acceptance are recorded; unresolved failures remain visible.

AC-09: Wireframes cover quick-order entry/validation, sign-in/request-access states, authorized account/delivery selection, filter/sort state, order history and reorder. Unsupported access processes remain explicitly unverified.

AC-10: Use a server-side BFF; keep OAuth secrets server-side and the administrative MCP identity separate from shopper identity. Verify the supported auth flow and account permission on each sensitive operation.

AC-11: Compare native LWR and React using the same tasks and named conditions. Record completion, time, errors, functional coverage, maintenance effort, security, accessibility, performance and cost before a replacement decision.

AC-12: Preserve the proposal's Web Vitals targets: p75 LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1, separately for desktop/mobile when sufficient measurements exist. Map each slice through capability, epic, sub-epic, scenario, process, story and AC; update the existing workbooks/guide after locating them.

AC-13. Map each buyer action to a wireframe and an org verification check. Label sample outcomes. For each live action, verify buyer permission, the resulting Salesforce record and isolation from the other buying account.

All integrated-behavior acceptance remains **NOT RUN / not established** in this migration. Historical static design checks apply only to their reviewed bundles. S13 expanded-design acceptance and final S32 human acceptance remain Pending; selecting Home B does not fill either record.

## Reconciliation findings — not silently resolved

- **AC-13:** current original says to map each buyer action and verify live permission/record/isolation. Local STORY expands this to “relevant standard or configurable” actions, eligibility/service handoffs and permitted integrated outcomes. Retain original wording above; classify the local wording as an unapproved reconciliation candidate until originating authority is verified.
- **Cart badge:** current task/local story describe distinct product lines, while the latest source-thread changes and current shared template say total item quantities across lines. This is a material behavior difference. Record/resolve it before adopting or testing the next prototype; do not rewrite historical fixture checks.
- **Current design revision:** task calls the131-screen v2.3 bundle current; local README/latest source turn use a replacement gallery. Preserve both histories and determine which exact bundle is next for S13. The latest user requested replacement wireframes and functional/data/action parity, expressly allowing a redesigned UI rather than copying old visual flaws.
- **Design system:** local STORY/handoff record SLDS as selected and an isolated React preview evaluation. Current task still lists earlier StackZero/shadcn/Magic UI candidates. Preserve the local decision evidence for reconciliation; do not portray a preview component evaluation as production adoption. The evaluated package pins React19.2.0, SLDS React11.0.0-alpha.10 and SLDS CSS2.25.0-alpha.2; current compatibility/license/browser validation remains separate.
- **Scope and workflow:** original earlier deferrals coexist with an expanded-scope section that explicitly supersedes them. S16 also has both an earlier browser-runner definition and a later Playwright/CI/live-smoke refinement. Retain both below as source chronology; coordinator must freeze one executable contract, environment and authority before dispatch.

## Observed source chronology and remaining work

The latest two originating-chat turns describe read-only guest/buyer storefront inspection, then a new sitemap/register and replacement wireframes. Findings include Quick Order, quantity-based badge, recovery/registration, catalog pricing/sort, profile/addresses, template creation form, export empty state, order/reorder entry and quote Notes Exchange/Duplicate to Cart. These are source-reported observations and authored design inputs, not fresh org tests by this writer. Actual downstream reorder, quote-PDF buyer access, tracking, invoices and returns remain unverified. The latest user instruction is to preserve functionality, data and actions while improving the layout; it does not prove full parity is achieved.

An older local HTML concept is explicitly synthetic, resets local state and is not connected to Salesforce. Historical v2.2/v2.3 Jev/Claude/UX and artifact checks are retained as reported scoped results, including uncertainty and repair history; they do not establish browser interaction, WCAG conformance, account isolation, deployment or acceptance. Latest source-thread tool summaries are not complete raw execution payloads. No review or acceptance check was rerun in this documentation batch.

## Source execution IDs and bounded planning

The following outline preserves source step IDs and proposed executors. These are historical/planned identities, not current dispatch records. Resolve exact model IDs/reasoning, tool versions, permissions, inputs, runtime and dependencies before execution. Earlier completed results retain their evidence scope; the new gallery needs affected rechecks. Duplicate S16 descriptions are unresolved source refinements, not two concurrently assigned executors. The original numbering is retained.

- S04a — LLM, independent Codex — Map the buyer journey and its branches. Output: ordered journey map. TARGET_STORE journey workbook
- S04b — LLM, independent Codex — Check Salesforce capabilities and available org evidence. Output: configuration matrix. Commerce Connect APIs
- S04c — LLM, independent Codex — Draw the expanded branches using Home B patterns. Output: responsive wireframes. Wireflow practice
- S15a — LLM, Codex / GPT-6 Astra — After wireframe approval, document the shared components and their states in Storybook. Output: reusable component examples. Storybook stories
- S16 — Automation, Playwright in GitHub Actions — Test the assembled buyer journey with synthetic data on pull requests and run live smoke checks on the Cloud Run demo. Output: test results and traces. Playwright CI
- 1. S01 — LLM: Codex / GPT-6 Astra — Reconcile the proposal, brief and gap register. Output: versioned requirements and acceptance criteria. Story template.
- 2. S02 — LLM: Jev 1.14.0 — Categorize skill suitability and judge whether the proposed journey is reviewable. Output: typed answers. TypeSafe primitives.
- 3. S03 — Automation: skill-installer / pinned GitHub revision — Install the reviewed UI and React skills for later use. Output: installed paths and source SHA. Skill source.
- 4. S04 — LLM: Codex / GPT-6 Astra — Specify the existing journey plus AC-09 flows and accepted Home B refinements. Output: a new wireframe specification. Wireflow practice.
- 5. S05 — Automation: versioned local drawing script — Render the specification into viewable boards. Output: desktop/mobile PNGs. Pillow drawing reference.
- 6. S06 — LLM: independent Codex / GPT-6 Astra — Review story wording and single-owner steps. Output: at most five concrete edits. Content structure.
- 7. S07 — LLM: Codex / GPT-6 Astra — Apply accepted writing corrections. Output: revised story and dispositions. Field Guide.
- 8. S08 — LLM: Jev 1.14.0 — Judge purchasing-information clarity in the rendered wireframes. Output: atomic judgments with probabilities. Image judgments.
- 9. S09 — LLM: Claude Opus 5.5 — If material design findings remain, propose targeted repairs from the complete evidence packet. Output: structured findings only. Review contract.
- 10. S10 — LLM: Codex / GPT-6 Astra — Apply accepted design repairs to the wireframe specification. Output: revised candidate. Wireflow practice.
- 11. S11 — Automation: local drawing script — Render any changed candidate with unchanged fixture data. Output: revised boards. Drawing reference.
- 12. S12 — LLM: Jev 1.14.0 — Recheck changed semantic evidence; preserve unresolved findings. Output: review delta. Evaluation patterns.
- S12a — LLM: Claude Opus 5.5 — Independently recheck changed design findings. Output: closure or remaining findings. Field Guide.
- 13. S13 — Human: ACCOUNTABLE_HUMAN — Review the reconciled Home B wireframe bundle and record approval with its manifest hash; the Home B selection is already recorded. Output: approver, candidate, decision and date. Wireflow review.
- 14. S14 — Automation: Git CLI — Establish the isolated repository and working branch; verify branch and remote. Output: source-control receipt. Git branching.
- 15. S15 — LLM: Codex / GPT-6 Astra — Build the synthetic concept from the approved revised wireframes and map each slice to the project hierarchy. Output: clickable journey and traceability record. Web interface guidelines.
- 16. S16 — Automation: browser test runner — Check desktop/mobile flows, quantities, failure states, automated accessibility and measured performance. Output: screenshots, test conditions and report; flag checks needing human assessment. Playwright practices.
- 17. S17 — Human: ACCOUNTABLE_HUMAN — Assess the concept with keyboard/screen-reader tasks and identify the allowed test org, two buyers and integration scope. Output: human findings and implementation checkpoint. Accessibility evaluation and Salesforce reference.
- 18. S18 — LLM: Codex / GPT-6 Astra — Specify the server-side BFF, shopper authentication and account/delivery boundaries in AC-06/10. Output: verified-documentation design and two-account test matrix. Commerce APIs.
- 19. S19 — Automation: scoped API probe — Probe allowed shopper auth, product/pricing readback and two-account isolation across AC-06 resources, including direct requests. Output: sanitized evidence and explicit untestable cases. Commerce APIs.
- 20. S20 — LLM: Jev 1.14.0 — Judge whether API evidence supports each integration claim. Output: supported/uncertain signals. Citation checks.
- 21. S21 — LLM: Codex / GPT-6 Astra — Implement product selection and cart using verified contracts. Output: source changes. Salesforce sample.
- 22. S22 — Automation: API/browser test suite — Run two-account UI isolation checks for available AC-06 resources and compare cart lines/prices with Salesforce. Output: results and explicitly deferred order checks. API testing.
- 23. S23 — Human: ACCOUNTABLE_HUMAN — Authorize the specific demo-order test and its environment. Output: bounded order-test permission. Field Guide approval contract.
- 24. S24 — LLM: Codex / GPT-6 Astra — Implement PO checkout and order details, including uncertain-submission recovery. Output: code ready for S26 review. Commerce APIs.
- 25. S25 — Automation: scoped order test — Submit the authorized demo order and reconcile Salesforce readback before any retry; verify order isolation through UI and direct requests. Output: correlated order and isolation evidence. API testing.
- 26. S26 — LLM: independent Codex / GPT-6 Astra — Audit AC-01–12 and compare native LWR/React evidence under matched conditions; retain unmeasured items. Output: findings, comparison report and workbook/guide updates. Proposal comparison criteria and Accessibility testing.
- 27. S27 — LLM: Codex / GPT-6 Astra — Repair accepted implementation findings. Output: scoped patch. React skill.
- 28. S28 — Automation: affected regression suite — Rerun checks affected by the patch. Output: fresh test evidence. Playwright practices.
- 29. S29 — LLM: independent Codex / GPT-6 Astra — Recheck repaired findings against the frozen criteria. Output: closure or remaining failures. Field Guide.
- 30. S30 — Human: ACCOUNTABLE_HUMAN — Approve the concrete deployment target, access and cost scope. Output: release decision. Cloud Run deployment.
- 31. S31 — Automation: GitHub Actions — Deploy the approved branch to the verified target. Output: deployment receipt and smoke checks. Cloud Run action.
- 32. S32 — Human: ACCOUNTABLE_HUMAN — Review the buyer journey, manual assessment and LWR/React comparison evidence. Output: acceptance, limitations and a recorded retain/replace/defer decision. Field Guide.

The frozen source review method uses bounded candidates and exact artifact checks, required clarity thresholds and separate human decisions; model scores are not quality percentages or runtime passes. The later source user waived Claude for the immediate register/wireframe-refresh task; do not infer that all future conditional independent reviews are cancelled. Retain prior model judgments rather than tuning away failed criteria. Future material behavior/access/data changes require fresh independent review after writer checks, per the pinned guide.

For later execution, the coordinator must map checks to ACs before implementation: render/recovery/traceability checks (AC-01–04/09/12/13); manual plus automated accessibility (AC-05); UI and direct-request two-account authorization/readback and uncertain-order recovery (AC-06/10/13); source/license/host receipt (AC-07); fresh independent findings and human decisions (AC-08); matched-task comparison and measured Web Vitals (AC-11/12). Assign one executor per bounded check and retain revision, environment, expected/observed result and evidence. Run repository-owned repeatable checks locally/CI once code authority exists; no command success is asserted here.

Public supporting references: [Salesforce Commerce APIs](https://developer.salesforce.com/docs/commerce/salesforce-commerce/guide/b2b-d2c-comm-storefront-apis-parent.html), [Salesforce headless reference](https://github.com/trailheadapps/commerce-b2b-headless), [SLDS React](https://github.com/salesforce/design-system-react), [WCAG2.2](https://www.w3.org/TR/WCAG22/), [Web Vitals](https://web.dev/articles/vitals), [Storybook](https://storybook.js.org/docs/get-started/whats-a-story), [Playwright CI](https://playwright.dev/docs/ci), [Cloud Run revision tags](https://cloud.google.com/run/docs/rollouts-rollbacks-traffic-migration). These preserve technical references; they were not newly browsed for compatibility during migration.

## Next documentation contract — W04-MAP

Executor: sole assigned E11 writer; exact actual model/reasoning metadata not exposed. Accountable assignment remains with the coordinator/ClickUp record. Input: original full task, relevant decisions, linked workbooks/proposal, source/code authority and restricted retrieval arrangement. Output: reconciled criterion/decision/source map and next reviewed bundle identity. Check: preserve AC-01–13 and all material differences, distinguish historical evidence from current unrun checks, and obtain independent source-based documentation review. Stop before missing-source completeness claims or implementation; source-tool writes and deployment remain outside this batch. Preserve local candidate on interruption; only coordinator publishes. Completion gate: outstanding authority decision, source completeness, privacy and reviewer access resolved. No source is superseded and no live delivery or overall migration completion is claimed.
