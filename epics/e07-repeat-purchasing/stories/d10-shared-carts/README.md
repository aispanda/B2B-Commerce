# D10 Enable collaborative purchasing with shared carts

Guide: [migrate/DELIVERY.md](https://github.com/aispanda/Reusable-Delivery/blob/769a5099cb7412e9f307a38286f8e2adf74448a8/migrate/DELIVERY.md), commit `769a5099cb7412e9f307a38286f8e2adf74448a8`, route MIGRATE.

Guide upgrade: the earlier draft used `4b5406c3d74f7f56071d193ba3359218d4b70d4d`. For later authorized CARTS-02/03, assign the operator and independent checker and record role, cross-account denial and revocation evidence against AC-01–03. Prior evidence and unrun checks retain the scope recorded below.

**Partial migration draft — not an authoritative replacement.** Original ClickUp requirements and evidence remain authoritative. Sync: Pending — deferred by instruction. This batch performs documentation only; no implementation, org access, fixtures, login, acceptance execution or remote writeback. Accountable owner, dates and live status remain in ClickUp. Independent review of available evidence supports publication as a partial draft. Full source-preservation review and human acceptance: Pending. Actual writer: assigned E07 Codex agent; exact runtime model/reasoning not exposed to this agent, not inferred.

## Acceptance criteria — original IDs and wording

**AC-01.** An eligible cart owner can share one isolated demo cart with an authorized teammate. Verify View Only, Edit and Checkout permissions without submitting an order.

**AC-02.** A user outside the intended account cannot see or open the cart. Revoking access removes the shared cart from the collaborator’s view.

**AC-03.** Record the current Advanced Cart Management setting and the applicable user licenses, same-currency/pricing restriction and ownership behavior.

## Outcome, scope and current evidence

As hospital procurement teammates, I want to share an approved cart with teammates and control who can view, edit or check out. **Post-MVP demo**, separate from Quick Order fixtures. Use standard Advanced Cart Management and owner-managed same-account sharing for two authorized buyers with identical effective pricing/currency. SAP ownership remains unchanged. “Approved cart” is a business input, not a demonstrated approval-enforcement workflow. No custom schema, Apex, LWC or integration is proposed.

SRC07 live description revision **0.4** was read in full during this batch and is newer than the retained revision 0.2 design. Preserve its later result: a synthetic collaborator **Contact was created and read back** under the intended account. Creating an active customer user failed because the standard external-profile route required an org-wide setting. **No customer user or login was created and no welcome email was triggered by that failed attempt.** This is historical source-reported execution, not a fresh org check by this writer. Do not recreate the existing Contact merely because migration occurred.

The available standard higher-tier profile reportedly includes broad permissions including order deletion; no permission grant is implied. The later next action proposes an appropriately restricted custom buyer profile/store membership, subject to verified requirements and authority. The existing buyer still needs an eligible license; two-buyer price/currency parity remains unverified. Historical Share Cart remains OFF and the saved-cart product control was unchecked at the later inspection. AC-01/02 **NOT RUN**; AC-03 **PARTIAL historical discovery**, not Pass. CARTS-01 blocked/partial; CARTS-02/03 Pending.

The source's later implementation request and Contact creation coexist with older read-only authority paragraphs. Preserve this chronology; source instructions and action-specific authorization must be reconciled before any future change. This batch authorizes none of those changes. Later execution identity is reported as **GPT-6.1 Terra (client metadata)**; original discovery model unknown. That historical identity is not this migration writer's identity.

Continuation source check: the latest originating chat turn was read. It records the user’s synthetic-buyer request, Contact creation/readback actions, failed customer-user creation, subsequent profile/access investigation and the same blocked-login conclusion. These action summaries support the chronology retained above; the chat reader does not expose full underlying tool-response bodies, so this is corroborating historical evidence, not a new org verification or acceptance run. The current task text hash is unchanged from the first pass.

## Solution, design and later checks

Owner manages collaborators, role changes, revocation and deletion. View Only permits viewing; Edit adds line/quantity/name changes; Checkout adds purchase capabilities subject to the explicit no-order-submission boundary. Cart ownership differs from resulting order ownership. Buyer or Account Switcher personas are alternatives, not both mandatory; Buyer Manager is excluded by the historical guidance. Verify both eligible licenses and effective pricing/currency; a Buyer permission assignment alone does not establish eligibility.

The revision 0.2 logical model links Account → Contact → User; store/buyer group/entitlements/pricing → WebCart → CartItem → Product. Delivery groups, checkout sessions, validation, taxes/adjustments are standard contextual entities. These are logical dependencies, not verified foreign keys or a physical collaborator-share schema. No custom object or approval engine follows from the model.

Proposed setup sequence remains unexecuted: complete two-buyer/license/pricing and ACM readiness → capture store/Builder before-state → inspect saved-cart PDP action, Cart Menu, Cart Container/Detail and Shared Cart Activity → coordinate explicitly authorized changes/publication → create a separately approved isolated shared-cart fixture → test roles, outside-account discovery/direct URL denial and owner revocation → authorized cleanup. Preview/sample Builder carts are not runtime evidence. Store permission-option changes apply differently to existing versus new shared carts; do not assume disabling a switch revokes grants. Checkout lock behavior and historical 48-hour expiry require current verification before use.

Public references retained: [cart sharing restrictions](https://help.salesforce.com/s/articleView?id=commerce.comm_sharecartsetup.htm&language=en_US&type=5), [licenses](https://help.salesforce.com/s/articleView?id=commerce.comm_b2b_licenses.htm&language=en_US&type=5), [enable sharing](https://help.salesforce.com/s/articleView?id=commerce.comm_enablecartsharing.htm&language=en_US&type=5), [advanced cart setup](https://help.salesforce.com/s/articleView?id=commerce.comm_customize_enablemulticart.htm&language=en_US&type=5), [cart data model](https://developer.salesforce.com/docs/commerce/salesforce-commerce/guide/b2b-b2c-comm-data-model-cart.html), [WebCart reference](https://developer.salesforce.com/docs/platform/object-reference/references/standard-objects/object-webcart.html). These are historical supporting references, not newly verified target behavior.

## Bounded work and review

| Stable step | Work / dependency | Executor and result |
|---|---|---|
| CARTS-01 | Current settings, two proposed buyers, license/permissions and pricing context | Original discovery agent, exact model unknown; Blocked/partial. Later partial setup reported Terra; do not relabel entire step complete. |
| CARTS-02 | Supported configuration and approved isolated demo after prerequisites/scoped authority | Future executor/model Pending; runtime demo NOT RUN |
| CARTS-03 | Fresh independent acceptance evidence and handoff | Independent checker Pending; requires actual runtime results |

Jev **NO VERDICT**: historical 17-question packet prepared, initial network failure and automatic approval rejection prevented successful transmission. A request/threshold rubric is not a result. The live revision 0.4 retains NO VERDICT. Independent runtime verification and human acceptance remain Pending.

## Source disposition and gaps

SRC07 before/saved local story criteria and full current live description agree on AC-01–03; wording is reproduced exactly without sanitization. Revision 0.2 kickoff/design remain historical and must not overwrite revision 0.4 progress. Names, supplied email, client values, private URLs, Contact/User IDs and chat IDs are withheld as `OWNER_BUYER`, `COLLABORATOR_CONTACT`, `COLLABORATOR_USER`, `RESTRICTED_BUYER_PROFILE`, `STORE_MEMBERSHIP`, `SHARED_CART` and restricted mapping references. No actual collaborator login is claimed. The prior design's no-mutation status applies to that earlier revision only.

Dedicated ClickUp tools hit the shared daily quota. The coordinator subsequently inspected the signed-in Comments pane: one priority-change activity and no authored comment/reply were visible; scope is the observed UI, not exhaustive history. The coordinator opened the attached revision 0.2 native design and exported its Markdown. This writer read that export in full: all seven numbered sections are present, including the complete prerequisite, role, logical-model and acceptance/evidence tables. Table cell contents match the retained authored design. The export also preserves the seventh section’s NO VERDICT statement. This closes the missing-table gap for that captured native design; it does not establish every linked source or attachment is complete. The latest source-chat turn is now read; earlier decisions and referenced baseline are still incomplete. The retained historical native Doc text snapshot was read in full during continuation. It contains the setup/runbook, role table and NO VERDICT statement, but omits the detailed data-model and acceptance-matrix table bodies present in the authored Markdown. Thus that older text snapshot alone was insufficient. Retain it as historical evidence; the freshly exported native design supplies the missing tables. Revision 0.2 design statements about no prior mutations and only one contact remain historical and do not override revision 0.4 Contact creation/user-failure evidence. Approved restricted capture storage/retrieval and source-based independent review remain unresolved. No source is superseded.

## Next documentation step — E07-MAP

One executor: this assigned E07 writer; accountable assignment remains in the coordinator/ClickUp record. Inputs: original source revisions, current comments/attachments/linked documents and restricted retrieval approval. Output: completed source-to-destination comparison with every criterion difference classified. Check: preserve stable IDs/wording and historical versus current states; independent reviewer reads originals and draft. Budget: first bounded discovery/draft pass, then report gaps. Stop before remote writeback, implementation or any missing-source completion claim. Preserve current local draft and source references on interruption; coordinator alone publishes. Next action: resolve missing capture/access, then reconcile and request independent documentation-preservation review. Overall migration and portable handoff remain incomplete.

