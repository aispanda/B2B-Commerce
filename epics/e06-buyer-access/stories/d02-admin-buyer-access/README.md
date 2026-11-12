# D02 Verify administrator Login as Buyer

[E06 Buyer access and administration](../../README.md)

Guide: [migrate/DELIVERY.md](https://github.com/aispanda/Reusable-Delivery/blob/769a5099cb7412e9f307a38286f8e2adf74448a8/migrate/DELIVERY.md), commit `769a5099cb7412e9f307a38286f8e2adf74448a8`, route MIGRATE.

Guide upgrade: the earlier draft used `4b5406c3d74f7f56071d193ba3359218d4b70d4d`. For later authorized LOGIN-02/03, assign the operator and independent checker and record evidence for buyer context and return to the administrator session. Prior evidence and unrun checks retain the scope recorded below.

Migration draft 0.2. Original sources retain requirements authority. Owners, dates and live delivery status: per ClickUp. Sync: **Pending — deferred by instruction**. Documentation only: no ClickUp writeback, org changes, browser login/session switch, implementation or acceptance execution.

Origin: SRC13. E06-B is the original Login-as-Buyer discovery/runbook; E06-C is the original buyer-journey record. Private originals resolve through the restricted inventory.

## Current state

E06-C records successful standard Contact login on 8 November and a later resumed buyer session (E06-C, section “Purchase-order step PO-01 — resumed buyer session”). This is historical buyer access, not fresh login or admin-return proof. E06-B's 11 November inspection found the standard Contact action exposed, an active/published LWR site and both active existing users matching selected site-member profiles. No missing membership or license blocker was demonstrated for this login path. Do not transfer D01's account-switcher license gate to D02.

Fresh sign-in, storefront buyer/account confirmation, logout and return-to-admin checks were **NOT RUN** because shared-session switching was excluded. Effective permissions and authentication policies were not exhaustively audited. A visible button and profile membership do not establish runtime success.

The current task still lists LOGIN-01 Pending and org verification NOT RUN. E06-B reports LOGIN-01 complete only for bounded historical discovery; retain this unsynchronized distinction. Delivery, independent verification and human acceptance remain Pending.

## Outcome and scope

An already authorized administrator opens the storefront as the existing fictional buyer and returns to admin using Contact → Log in to Experience as User. Preserve the SAP-owned MVP model. No new account grants, cart changes or order submission. This batch does not perform login/logout or identity verification.

## Acceptance criteria

AC-02 and AC-03 are exact current-task copies. In AC-01 only the client store name is replaced by named parameter **SOURCE_STORE**; the restricted original supplies its value. Independent preservation review remains pending.

| ID | Source criterion with declared sanitization | Fresh result |
|---|---|---|
| AC-01 | An already authorized admin uses the standard action and sees the SOURCE_STORE storefront under the expected demo buyer and account. | NOT RUN for fresh acceptance |
| AC-02 | The operator returns to the admin session. The runbook records the path, site membership and what to do if Salesforce asks for identity verification. | NOT RUN for fresh acceptance |
| AC-03 | The verified demo involves no new account grants, cart changes or order submission. | NOT RUN for fresh acceptance |

## Solution and preserved future operator runbook

Reuse the existing standard action and membership. The historical report found administrator and shopper profiles selected as site members, with no permission-set membership listed. It did not identify a need to change membership. The source-linked [Salesforce login-as permissions article](https://help.salesforce.com/s/articleView?id=000395861&language=en_US&type=1) is historical guidance, not fresh verification.

This runbook is retained for a later authorized test; it is not to be executed in this documentation batch:

1. Coordinator reserves the shared session, confirms other session-sensitive workers stopped and records the authorized internal administrator. Use normal authentication if expired.
2. Reconfirm the existing fictional buyer/contact/account, active user and site membership. Stop on discrepancy or absent action; do not create a buyer or grant access.
3. After separate authorization, invoke the standard action once and select SOURCE_STORE if prompted. The authorized operator completes normal identity verification. Do not copy codes, reset credentials, bypass verification or weaken MFA/session security.
4. Observe expected site, buyer and account. If account identity is not visible, leave that check Pending rather than infer it from the Contact. Avoid cart, checkout, reorder and submission actions.
5. Use storefront Log Out, return to the original admin tab and verify actual administrator identity and page access. Reauthentication may be required. Closing a tab is not proof of cleanup or automatic return.
6. Record starting/ending identities, site/account evidence, prompts and no business-data changes. A fresh checker verifies AC-01–03 before acceptance.

Historical empty-cart evidence must not be replayed as setup: later source context reports an existing order. Preserve business data and do not recreate that journey.

## Execution and resume conditions

| Source step | Preserved disposition |
|---|---|
| LOGIN-01 | Historical bounded discovery complete in E06-B; current task remains Pending. Fresh runtime checks not implied. |
| LOGIN-02 | Pending coordinated, separately authorized login/logout-only test with existing access. No session-switch action authorized here. |
| LOGIN-03 | Pending independent evidence check and human acceptance. |

## Linked-source reconciliation

E06-E's later reconciliation records an existing user-placed order and explicitly supersedes older statements that no demo order exists. The same description retains historical successful standard buyer login and a resumed buyer session. It does not record a fresh D02 logout or return-to-admin acceptance result. Its order, confirmation and email details are separate scope and cannot satisfy D02 criteria or authorize repeating that journey.

E06-D is a draft ordering baseline. Its customer-access and SAP-ownership boundaries remain context; no ordering, consignment, invoice or service criteria are imported into this login-only story. Preserve the existing fictional buyer, site and business data.

## Preservation map

AC-01 has only the declared SOURCE_STORE substitution; AC-02/03 and LOGIN step IDs retained. Private identities, instance/record/task/chat links and evidence paths are replaced with opaque references. Historical success, fresh NOT RUN, bounded no-change evidence and future end-to-end acceptance remain separate. This pass made no live changes, which does not satisfy the unrun future demo criterion.

## Source completeness and review

Continuation source read: both current story descriptions were refreshed through task.get_many and remain revision 0.1 with unchanged criteria and source update timestamps. Their attachment/doc arrays remain empty. Dedicated comment reads still return RATE_LIMIT_EXCEEDED (100/100); native historical guide/template page listing fails with the same limit. This connector failure is not evidence that comments or pages are empty. The coordinator subsequently inspected each current task’s authenticated Comments pane read-only in Chrome. Each visible pane showed only the priority change and no authored comment or reply. This is a scoped UI observation, not proof that inaccessible or unrendered history is absent.

The full linked ordering-baseline task description (E06-D) and buyer-journey task description (E06-E) were read in this continuation. E06-D is itself a draft summary derived from a workbook; reading it does not establish completeness of the original workbook or its source decisions. E06-E contains mixed dated history and a later reconciliation; the later finding takes precedence over older no-order text. No other story's criteria or acceptance results transfer into E06.

Local originals E06-A/B/C match their earlier full-read hashes. Both source chats have unchanged update timestamps and no older-page cursor; prior full turn-envelope reads remain applicable, but omitted tool-result bodies are still not captured originals. The local Markdown template adaptation (E06-F) was fully read as supporting method context. It does not substitute for a fresh read of the native historical guide/template. The pinned operational migration guide and CODE-QUALITY.md were read at `769a5099cb7412e9f307a38286f8e2adf74448a8`; the documentation-only override remains in force.

The visible current comment panes have now been inspected; completeness of inaccessible or unrendered comment history is not established. Native historical guide/template, original workbook reconciliation and material evidence behind linked summaries remain incomplete. Independent review of the available evidence supports publication as a partial draft. Full source-preservation review and required-source retrieval remain Pending. Human acceptance is Pending. No full-source, implementation or migration-completion claim is made.

Immediate next step: the coordinator provides the reviewed original-workbook slice where material to E06, and an authorized reader resolves any material inaccessible comment history and native historical method pages once access is available. The independent reviewer compares this candidate against the available originals and records the remaining access gaps. The writer avoided repeated quota retries. The coordinator performed the scoped browser read recorded above. One E06 writer prepares a separate candidate; coordinator alone publishes. Writer: Codex runtime family GPT-6; exact variant/reasoning setting not exposed, recorded unknown. Maker checks are not independent acceptance.
