# D02 Verify administrator Login as Buyer

[E06 Buyer access and administration](../../README.md)

Guide: [migrate/DELIVERY.md](https://github.com/aispanda/Reusable-Delivery/blob/9d32dccc738cc544481a6da257c13d438115f122/migrate/DELIVERY.md), commit `9d32dccc738cc544481a6da257c13d438115f122`, route MIGRATE.

Historical guide upgrade: the earlier draft used `4b5406c3d74f7f56071d193ba3359218d4b70d4d`. For later authorized LOGIN-02/03, assign the operator and independent checker and record evidence for buyer context and return to the administrator session. Prior evidence and unrun checks retain the scope recorded below.

Partial documentation draft 0.3. Review contract/status frozen 12 November 2026; the coordinator records publication and exact-revision review disposition. Original sources retain requirements authority. Owners, dates and live delivery status: per ClickUp. Sync: **Pending — deferred by instruction**. Documentation only: no ClickUp writeback, org changes, browser login/session switch, implementation or acceptance execution.

Origin: SRC13. E06-B is the original Login-as-Buyer discovery/runbook; E06-C is the original buyer-journey record. Private originals resolve through the restricted inventory.

## Current state

The proposed guide upgrade is from `769a5099cb7412e9f307a38286f8e2adf74448a8` to `9d32dccc738cc544481a6da257c13d438115f122`. The complete pinned guides were compared. Added rules require platform access verification first, including both Headless 360 MCP and Salesforce CLI before Salesforce work, and explicit role-dependent verification evidence. They affect the new ACCESS-01 gate and future LOGIN-02/03 checks; they do not invalidate the historically scoped LOGIN-01 observations or change AC-01–03. The rollout's pinned guide supersedes BATCH's older guide pin for this candidate only; all batch writer, publication, privacy and deferred-sync boundaries remain in force.

The coordinator's current assignment resolves the earlier ownership conflict: one E06 writer owns D01 and D02 in isolated local staging; the coordinator retains publication. Current public inputs were refreshed at commit `c3a0d345233d9ff0a7a1fd250f1ca1502bc1a147`. GitHub read and repository capability checks passed in this environment. A prior source-description and comment refresh returned RATE_LIMIT_EXCEEDED; this pass does not retry the exhausted quota or claim fresh task contents. No Salesforce access probe or browser session switch ran. Current writer exact runtime variant/reasoning metadata remains unknown.

E06-C records successful standard Contact login on 8 November and a later resumed buyer session (E06-C, section “Purchase-order step PO-01 — resumed buyer session”). This is historical buyer access, not fresh login or admin-return proof. E06-B's 11 November inspection found the standard Contact action exposed, an active/published LWR site and both active existing users matching selected site-member profiles. No missing membership or license blocker was demonstrated for this login path. Do not transfer D01's account-switcher license gate to D02.

Fresh sign-in, storefront buyer/account confirmation, logout and return-to-admin checks were **NOT RUN** because shared-session switching was excluded. Effective permissions and authentication policies were not exhaustively audited. A visible button and profile membership do not establish runtime success.

The last successful current-task read listed LOGIN-01 Pending and org verification NOT RUN; this pass could not refresh it. E06-B reports LOGIN-01 complete only for bounded historical discovery; retain this unsynchronized distinction. Delivery, independent verification and human acceptance remain Pending.

## Outcome and scope

An already authorized administrator opens the storefront as the existing fictional buyer and returns to admin using Contact → Log in to Experience as User. Preserve the SAP-owned MVP model. No new account grants, cart changes or order submission. This batch does not perform login/logout or identity verification.

## Acceptance criteria

AC-02 and AC-03 preserve the last successfully retrieved source wording and current GitHub base exactly. In AC-01 only the client store name is replaced by named parameter **SOURCE_STORE**; the restricted original supplies its value. Fresh independent amendment review remains pending at candidate freeze; previous source review retains only its recorded scope.

| ID | Source criterion with declared sanitization | Fresh result |
|---|---|---|
| AC-01 | An already authorized admin uses the standard action and sees the SOURCE_STORE storefront under the expected demo buyer and account. | NOT RUN for fresh acceptance |
| AC-02 | The operator returns to the admin session. The runbook records the path, site membership and what to do if Salesforce asks for identity verification. | NOT RUN for fresh acceptance |
| AC-03 | The verified demo involves no new account grants, cart changes or order submission. | NOT RUN for fresh acceptance |

## Solution and preserved future operator runbook

Reuse the existing standard action and membership. The historical report found administrator and shopper profiles selected as site members, with no permission-set membership listed. It did not identify a need to change membership. The source-linked [Salesforce login-as permissions article](https://help.salesforce.com/s/articleView?id=000395861&language=en_US&type=1) is historical guidance, not fresh verification.

This runbook is retained for a later authorized test; it is not to be executed in this documentation batch:

1. Coordinator reserves the shared session, confirms other session-sensitive workers stopped and records the authorized starting internal administrator identity. Use normal authentication if expired.
2. Reconfirm the existing fictional buyer/contact/account, active user and site membership. Stop on discrepancy or absent action; do not create a buyer or grant access.
3. After separate authorization, invoke the standard action once and select SOURCE_STORE if prompted. The authorized operator completes normal identity verification. Do not copy codes, reset credentials, bypass verification or weaken MFA/session security.
4. Observe expected site, buyer and account. If account identity is not visible, leave that check Pending rather than infer it from the Contact. Avoid cart, checkout, reorder and submission actions.
5. Use storefront Log Out, return to the original admin tab and compare the ending profile identity with the authorized starting administrator; verify the same administrator and access to the original Contact/admin page. Reauthentication may be required. Closing a tab is not proof of cleanup or automatic return.
6. Record starting/ending identities, their match, site/account evidence, prompts and no business-data changes. If a runtime membership, security or other error occurs, record its exact text with sensitive values redacted and stop; resume read-only diagnosis without changing access or security. A fresh checker verifies AC-01–03 before acceptance.

Historical empty-cart evidence must not be replayed as setup: later source context reports an existing order. Preserve business data and do not recreate that journey.

## Role-dependent evidence

Named parameters resolve through the existing restricted index, owned by the originating coordinating session: SOURCE_ADMIN is E06-B's observed internal administrator; SOURCE_BUYER is its existing fictional buyer; SOURCE_ACCOUNT is its intended fictional account; SOURCE_STORE retains its original declared mapping. Do not put their private values in public Git. Maker access to E06-B is confirmed locally; independent and portable retrieval remain unverified.

| Evidence scope | Test identity | Intended role | Target resource access | Observed outcome / limit |
|---|---|---|---|---|
| E06-B, November 11 historical inspection | SOURCE_ADMIN; internal System Administrator profile | Authorized administrator supporting the existing demo buyer | Contact, site workspace/members and user list opened | Standard action visible; site Active/Published; both active users' profiles selected as site members. No buyer session switch. |
| E06-C, November 8 historical session and resumed-session report | SOURCE_BUYER through standard administrator Login as | Existing external fictional buyer | Storefront and buyer profile/cart surfaces in that report | Buyer session reported signed in. Historical access only; no D02 logout/admin-return result established. |
| LOGIN-02 fresh test | Pending capture of actual starting admin, impersonated buyer and ending admin | Authorized administrator and existing external buyer | Pending direct access to intended storefront, buyer/account context and original admin page under the same authorized starting/ending administrator | NOT RUN. Neither privileged API access nor Contact visibility proves buyer access. If account context is unobservable, leave that subcheck Pending. |
| LOGIN-03 fresh check | Pending independently assigned checker | Independent verifier of AC-01–03 | Pending access to exact LOGIN-02 evidence and required restricted originals | NOT RUN. Maker review and another story's login report cannot close D02 acceptance. |

## Execution and resume conditions

| Step | Action / acceptance mapping | Dependencies | One executor; planned identity/tool | State / result |
|---|---|---|---|---|
| ACCESS-01 | Verify platform access before dependent platform work | Intended account/org mapping and existing read authority | Assigned D02 executor; exact planned AI model/reasoning must be resolved before dispatch; GitHub connector, ClickUp connector, Headless 360 MCP then Salesforce CLI | GitHub read and permissions Pass for this assessment; ClickUp refresh Blocked by daily quota; Salesforce NOT RUN. New gate does not retroactively claim old browser checks used MCP/CLI. |
| MIG-D02-00 | Compare guide/base story and historical evidence; preserve AC IDs and identify gaps | Pinned guide, immutable base and available originals | Assigned E06 writer, Codex; exact runtime variant/reasoning not exposed, unknown | Complete for bounded consolidation only; candidate, checks and source limitations in local handoff. |
| MIG-D02-01 | Confirm current E06 writer and coordinator handoff | Retrievable coordinator assignment | Originating coordinating session | Complete: one E06 writer owns D01/D02; coordinator alone publishes. Earlier ownership blocker resolved; no cross-chat message needed. |
| MIG-D02-02 | Prepare local candidate and maker preservation checks | MIG-D02-01, available originals and explicit source limitations | Same assigned E06 writer | Candidate prepared; maker result recorded against exact files in handoff. No migration acceptance. |
| MIG-D02-REVIEW | Independently compare exact candidate to criteria, originals and privacy boundaries | Frozen writer revision and available original evidence; inaccessible scope explicitly retained | Fresh review agent, planned gpt-6.1-sol with high reasoning; shared with D01-M03 | Pending at candidate freeze; exact-hash review records actual scope/disposition. Prior reviews retain only their original revision/scope. |
| MIG-D02-PUBLISH | Publish/read back reviewed documentation | Independent review disposition; current branch/blob lease, privacy check and coordinator ownership | Originating portfolio coordinator only | Pending. Writer must not publish, change root files, register or cross-epic links. |
| LOGIN-01 | Historical bounded discovery | Original historical inputs and authority | Historical maker as recorded in E06-B | Complete only for bounded discovery in E06-B; remote Pending at last successful read. Fresh runtime checks not implied. |
| LOGIN-02 | Existing standard login/logout-only test; AC-01–03 | ACCESS-01 Salesforce MCP+CLI Pass, explicit session-switch authority, reserved shared session, existing access and normal verification | One authorized operator; actual operator and intended roles recorded at execution | Pending / NOT RUN. No session-switch action authorized by this documentation rollout. |
| LOGIN-03 | Independent evidence check | LOGIN-02 exact evidence and independent source access | One fresh checker; planned identity resolved before dispatch | Pending / NOT RUN. Human acceptance follows separately. |
| LOGIN-HUMAN | Record human acceptance | LOGIN-03 result and any unresolved findings | Accountable human; named owner per authoritative task | Pending. Required by original story; no acceptance decision inferred. |

### Bounded review contract: MIG-D02-REVIEW (status at candidate freeze)

- Accountable owner: per authoritative task, not freshly retrieved. Executor: one fresh independent review agent shared with D01-M03, planned exact model `gpt-6.1-sol`, reasoning `high`; actual identity from dispatch metadata, without guessing internal version.
- Inputs: frozen candidate; current public base `c3a0d345233d9ff0a7a1fd250f1ca1502bc1a147`, D02 blob `9c6adddbe353101471d011c860f67b17aa1ba09e`; pinned guide, E06-B original runbook, relevant E06-C passages, earlier source review, and current E06 assignment.
- Operation/output: independent six-criterion preservation and source/delta review covering D01 and D02, with findings, correction, verification and candidate hashes in the local packet.
- Check: D02's only criterion sanitization remains SOURCE_STORE; historical login does not prove fresh buyer/account context or admin return. D01's account-switcher license gate is not a demonstrated D02 blocker. Verify source step IDs, future authorization gates and public-content privacy.
- Authority/boundary: current documentation assignment only. No source supersession, ClickUp writeback, Salesforce work, buyer-session switch or acceptance execution.
- Limits/recovery: first consolidation pass bounded to 30 minutes including review preparation. Missing source access limits review, not a fabricated Pass. Fixes require affected rechecks; coordinator refreshes current branch/blob before publication.
- Actual: NOT RUN at candidate freeze; authoritative result belongs to the separate exact-hash review. Ownership is resolved by current assignment, so the earlier pending messaging request is no longer a dependency.

Before subsequent Salesforce work, ACCESS-01 must discover/describe a supported Headless 360 read operation, use dispatch_readonly against the intended org, then inspect `sf org list --json` and perform a minimal read-only API call using the intended alias. Keep raw identifiers/credentials restricted. Record both target matches, tool/runtime versions, timestamp, result and any redacted exact error. A failed required connection blocks dependent Salesforce work. No OAuth/security changes are implied. API connectivity is not storefront-role verification.

## Linked-source reconciliation

E06-E's later reconciliation records an existing user-placed order and explicitly supersedes older statements that no demo order exists. The same description retains historical successful standard buyer login and a resumed buyer session. It does not record a fresh D02 logout or return-to-admin acceptance result. Its order, confirmation and email details are separate scope and cannot satisfy D02 criteria or authorize repeating that journey.

E06-D is a draft ordering baseline. Its customer-access and SAP-ownership boundaries remain context; no ordering, consignment, invoice or service criteria are imported into this login-only story. Preserve the existing fictional buyer, site and business data.

## Preservation map

AC-01 has only the declared SOURCE_STORE substitution; AC-02/03 and LOGIN step IDs retained. Private identities, instance/record/task/chat links and evidence paths are replaced with opaque references. Historical success, fresh NOT RUN, bounded no-change evidence and future end-to-end acceptance remain separate. This pass made no live changes, which does not satisfy the unrun future demo criterion.

## Historical source completeness and review

The following paragraphs preserve the prior draft's source-read/review history. They are historical observations, not new reads in this consolidation. References to current tasks, comments and chats below describe that earlier continuation.


Continuation source read: both current story descriptions were refreshed through task.get_many and remain revision 0.1 with unchanged criteria and source update timestamps. Their attachment/doc arrays remain empty. Dedicated comment reads still return RATE_LIMIT_EXCEEDED (100/100); native historical guide/template page listing fails with the same limit. This connector failure is not evidence that comments or pages are empty. The coordinator subsequently inspected each current task’s authenticated Comments pane read-only in Chrome. Each visible pane showed only the priority change and no authored comment or reply. This is a scoped UI observation, not proof that inaccessible or unrendered history is absent.

The full linked ordering-baseline task description (E06-D) and buyer-journey task description (E06-E) were read in this continuation. E06-D is itself a draft summary derived from a workbook; reading it does not establish completeness of the original workbook or its source decisions. E06-E contains mixed dated history and a later reconciliation; the later finding takes precedence over older no-order text. No other story's criteria or acceptance results transfer into E06.

Local originals E06-A/B/C match their earlier full-read hashes. Both source chats have unchanged update timestamps and no older-page cursor; prior full turn-envelope reads remain applicable, but omitted tool-result bodies are still not captured originals. The local Markdown template adaptation (E06-F) was fully read as supporting method context. It does not substitute for a fresh read of the native historical guide/template. The pinned operational migration guide and CODE-QUALITY.md were read at `769a5099cb7412e9f307a38286f8e2adf74448a8`; the documentation-only override remains in force.

The visible current comment panes have now been inspected; completeness of inaccessible or unrendered comment history is not established. Native historical guide/template, original workbook reconciliation and material evidence behind linked summaries remain incomplete. Independent review of the available evidence supports publication as a partial draft. Full source-preservation review and required-source retrieval remain Pending. Human acceptance is Pending. No full-source, implementation or migration-completion claim is made.

Historical next step recorded by the prior writer: the coordinator provides the reviewed original-workbook slice where material to E06, and an authorized reader resolves any material inaccessible comment history and native historical method pages once access is available. The independent reviewer compares this candidate against the available originals and records the remaining access gaps. The writer avoided repeated quota retries. The coordinator performed the scoped browser read recorded above. One E06 writer prepares a separate candidate; coordinator alone publishes. Writer: Codex runtime family GPT-6; exact variant/reasoning setting not exposed, recorded unknown. Maker checks are not independent acceptance.


## Proposed revision record and review gaps

- Public input: D02 at commit `c3a0d345233d9ff0a7a1fd250f1ca1502bc1a147`, blob `9c6adddbe353101471d011c860f67b17aa1ba09e`; BATCH blob `8c46032d37b71955f566aba4839069729e5bd5e0`. Pinned guide content blob `3bfb15ed0369b00f03cdaea1f260cd45a65d9c6d` at the guide commit above.
- Source-to-candidate disposition: AC-01 retains only the pre-existing SOURCE_STORE sanitization; AC-02/03 remain exact prior-source wording. LOGIN-01/02/03 are unchanged IDs. New ACCESS and MIG task IDs supplement them. Runbook and linked-source reconciliation retained. No new implementation, permissions, fixtures, runtime result or acceptance has been invented.
- E06-B and E06-C local hashes still match the earlier inventory. This proves file continuity, not today's org state. SRC13 description/comments could not be refreshed because of RATE_LIMIT_EXCEEDED; retain original sources and source-authority boundaries. No raw private source capture was placed in the repository or this public proposal.
- Current maker review: compare preserved AC rows, changed guide rules, task dependencies, role/access/outcome separation, links and public-content privacy. Fresh independent amendment review: Pending at candidate freeze; reviewer planned as gpt-6.1-sol with high reasoning. Required full-source access remains incomplete. Exact planned and actual model identity must not be guessed.
- Full source inventory, restricted storage/retrieval portability, material historical method/workbook gaps and source freshness remain Pending. Prior partial-draft review does not certify this amendment or a complete migration. ClickUp sync remains Pending — deferred by instruction; human acceptance remains Pending.
- Evidence-backed model feedback: the platform-access and role-evidence additions address D02's real boundary between administrator Contact visibility and untested buyer/login-return behavior. Earlier rollout friction was ownership coordination: per-story fan-out reached D01 and D02 while BATCH requires one E06 writer. The current retrievable coordinator assignment resolves this conflict. Future fan-out should carry that assignment with the scoped handoff. No shared-template change is made here.


- Consolidation source read: E06-A and E06-B reread fully; relevant E06-C login/resumed-session passages reread, not the whole file. Local hashes checked separately. The historical reports record earlier native Field Guide reads; this preserves those reads without claiming current native-page access. The source refresh, original-workbook and restricted portability gaps remain.
- Human acceptance requirement: required; actual decision: Pending. Current exclusive E06 ownership is resolved, but publication, full preservation and live delivery remain separate pending work.
