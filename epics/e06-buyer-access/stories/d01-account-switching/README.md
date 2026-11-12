# D01 Switch between authorized buyer accounts

[E06 Buyer access and administration](../../README.md)

Guide: [migrate/DELIVERY.md](https://github.com/aispanda/Reusable-Delivery/blob/9d32dccc738cc544481a6da257c13d438115f122/migrate/DELIVERY.md), commit `9d32dccc738cc544481a6da257c13d438115f122`, route MIGRATE.

Historical guide upgrade: the earlier draft used `4b5406c3d74f7f56071d193ba3359218d4b70d4d`. For later authorized ACC-02/03, assign the operator and independent checker and record evidence for authorized switching and unauthorized account denial. Prior evidence and unrun checks retain the scope recorded below.

Partial documentation draft 0.3. Review contract/status frozen 12 November 2026; the coordinator records publication and exact-revision review disposition. Original sources retain requirements authority. Owners, dates and live delivery status: per ClickUp. Sync: **Pending — deferred by instruction**. Documentation only: no ClickUp writeback, org changes, browser login/session switch, implementation or acceptance execution.

Origin: SRC14. E06-A is the original account-switching discovery report; E06-C is buyer-journey evidence. Resolve private originals through the restricted inventory.

## Current state

The guide upgrade from `769a5099cb7412e9f307a38286f8e2adf74448a8` to `9d32dccc738cc544481a6da257c13d438115f122` adds platform-access preflight and role-dependent verification evidence. ACC-00 is the first execution gate; later Salesforce work requires Headless 360 MCP discovery, describe and dispatch_readonly, followed by Salesforce CLI authentication inventory and a minimal read-only API check against the intended org. Historical browser results are preserved within their original scope; they do not satisfy the new gate. AC-01–03 are unchanged.

The coordinator's current assignment resolves the earlier competing E06 proposals: one E06 writer owns both D01 and D02 in isolated local staging; the coordinator retains GitHub publication. Current public inputs were refreshed at commit `c3a0d345233d9ff0a7a1fd250f1ca1502bc1a147`. GitHub read and repository capability checks passed in this environment; source refresh is blocked by the previously observed ClickUp daily quota. No Salesforce probe or browser session change was performed during this documentation pass. Exact current writer variant/reasoning metadata is unavailable and recorded unknown.

E06-A's 11 November read-only discovery found the existing buyer on **External Apps Login**, while the source requires Customer Community Plus or higher. The store Accounts view showed one account rather than the two-account fixture. This is historical evidence of a delivery blocker, not a fresh org inspection or proof no second Account exists elsewhere.

Effective Account Switcher User permission, compatible buyer/object/field access, target-account sharing, External Managed Account with Buy For, and the authenticated menu remain unverified. Assignment names or missing page related lists do not prove effective permission/record absence. Eligible license capacity was not inventoried. The buyer permission-set license is not proof of the required external-user license.

At the last successful source read, the remote task said ACC-01 Pending and org verification NOT RUN; this pass does not claim a fresh task read. The later local report supplies bounded discovery evidence but does not complete full ACC-01. Preserve both states without silently updating ClickUp. No switching or negative-access test ran. Independent verification and human acceptance remain Pending.

## Outcome and scope

An authorized purchaser switches between two fictional business accounts in the same LWR store so each cart/order uses the selected account. Preserve one customer per cart/order and SAP customer/transaction-pricing authority. Use standard/declarative Salesforce features and record unsupported capability. Access grants, license changes, new fixtures, publication, orders and notifications are excluded. This story is independent of Order Management and checkout email.

## Acceptance criteria

IDs and wording below preserve the last successfully retrieved source criteria and the current GitHub base exactly. Source freshness and full migration acceptance remain Pending.

| ID | Source criterion | Fresh result |
|---|---|---|
| AC-01 | Only the two authorized demo accounts are listed. An unauthorized account is unavailable and its data is inaccessible. | NOT RUN for fresh acceptance |
| AC-02 | After switching, the account name is clear and catalog, price, cart and order history follow the selected account. No mixed-account cart or order is created. | NOT RUN for fresh acceptance |
| AC-03 | A second reader verifies both contexts from storefront evidence. Use existing carts or a reversible demo cart and stop before order submission. | NOT RUN for fresh acceptance |

## Solution and historical evidence

The source proposes the standard profile menu and effective-account model. E06-A reports a candidate path involving eligible license, compatible purchasing permissions, two business accounts in the same store buyer-group context, Buy For relationship, target-account Read Only access and the LWR Account Switcher menu. These are historical research findings, not verified deployed configuration.

The signed-out storefront showed Log In, so authenticated menu configuration was not inspected. The buyer was active. Assignments included Buyer and a custom variation-read set; no separately named Account Switcher/Buyer Manager assignment was shown, but underlying effective permissions were not audited. Ordinary contact-account association and store membership do not establish target-account authorization.

Historical source references: [Account Switcher setup](https://help.salesforce.com/s/articleView?id=commerce.comm_buy_on_behalf.htm&language=en_US&type=5) and [buyer licensing](https://help.salesforce.com/s/articleView?id=commerce.commerce_buyer_and_buyer_mgr_perm_sets.htm&language=en_US&type=5). This migration pass did not refresh platform documentation.

## Role-dependent evidence

Private parameters resolve through the existing restricted inventory owned by the originating coordinating session. SOURCE_BUYER and SOURCE_ACCOUNT denote the intended existing fictional buyer and account in E06-A; the second approved account and unauthorized test target remain unresolved. This writer can retrieve E06-A locally; portable retrieval is not established.

| Evidence scope | Identity or role used | Intended role | Target resource access | Observed outcome / limit |
|---|---|---|---|---|
| E06-A, November 11 storefront observation | Signed-out visitor | Authenticated purchaser switching authorized accounts | Public storefront header opened | Log In visible. Authenticated profile menu and switching NOT RUN. |
| E06-A, November 11 internal observation | Existing authenticated administrator; exact principal not captured in E06-A | Administrative observer of buyer prerequisites | Store Accounts, Account/Contact and buyer User Detail opened | One account in that store view; active buyer on External Apps Login; assignment names observed. This does not prove the buyer can access a second account. Do not borrow D02's observed administrator identity as a D01 observation. |
| ACC-01 remaining inspection | Pending actual executor/principal capture | Authorized administrative observer | Exact license capacity, effective permissions, target account, Buy For/share and menu evidence Pending | NOT RUN for the missing checks; historical findings are not today's org state. |
| ACC-02 authorized runtime test | Pending actual buyer and both selected accounts | Purchaser authorized for exactly two fictional accounts | Both intended storefront account contexts plus an approved unauthorized-account check | NOT RUN. API administrator access cannot substitute for buyer evidence, isolation or denial. |
| ACC-03 independent check | Pending assigned independent checker | Fresh verifier of AC-01–03 | Exact buyer-context evidence and required restricted originals | NOT RUN. No implementation or acceptance claim. |

## Execution and resume conditions

| Step | Action / acceptance mapping | Dependencies | One executor; planned identity/tool | State / result |
|---|---|---|---|---|
| ACC-00 | Verify platform access before dependent platform work | Intended account/org mapping and existing authority | Assigned executor; GitHub/ClickUp connector as needed; Headless 360 MCP then Salesforce CLI for org work | GitHub read/capability Pass for documentation; ClickUp refresh Blocked by daily quota; Salesforce NOT RUN. No dependent org work performed. |
| D01-M00 | Reconcile pinned guide, current public base and available source evidence | Available immutable inputs; explicit limits on inaccessible sources | Current assigned E06 writer, Codex; exact runtime variant/reasoning unknown | Complete for bounded consolidation only; current candidate revision and source coverage recorded in handoff. |
| D01-M01 | Resolve exclusive E06 writer and publication ownership | Coordinator's retrievable assignment | Originating coordinating session | Complete: one writer covers D01 and D02; coordinator alone publishes. Earlier ownership blocker resolved. |
| D01-M02 | Prepare local candidate and maker preservation checks | D01-M00/01; no claim of refreshed inaccessible sources | Same E06 writer | Candidate prepared; maker check result recorded against exact files in handoff. |
| D01-M03 | Independent source/delta review | Frozen candidates and accessible originals | Fresh review agent, planned gpt-6.1-sol with high reasoning | Pending at candidate freeze; review scope and disposition recorded separately by exact hash. Prior review does not certify this revision. |
| D01-M04 | Integrate, publish and read back eligible partial draft | Review disposition, current branch/blob lease and privacy checks | Portfolio coordinator only | Pending. No root, index, register or cross-epic edits by this writer. |
| ACC-01 | Inventory prerequisites and exact gaps | ACC-00 before new org inspection; eligible approved buyer and second fixture evidence | Assigned authorized observer; exact planned identity before future dispatch | Historical bounded evidence available; full inventory Blocked. Remote Pending at last successful source read. |
| ACC-02 | Configure/demo against AC-01–03 | ACC-01; separate scoped implementation/session authority | Assigned authorized operator; planned exact AI model/reasoning resolved before dispatch; actual principal/role recorded at execution | Pending / NOT RUN; outside this documentation batch. |
| ACC-03 | Independent acceptance, evidence and handoff | Exact ACC-02 evidence and required source access | Fresh assigned checker; planned identity before future dispatch | Pending / NOT RUN. Required human acceptance remains Pending separately. |
| ACC-HUMAN | Record human acceptance decision | ACC-03 evidence and unresolved findings | Accountable human per authoritative task; actual owner not freshly retrieved | Pending. No human acceptance decision inferred. |

### Bounded review contract: D01-M03 (status at candidate freeze)

- Accountable business owner: per authoritative task, not freshly retrieved. Executor: one fresh independent review agent shared with the D02 review, planned exact model `gpt-6.1-sol`, reasoning `high`; actual identity will be reported from dispatch metadata, without guessing internal model version.
- Inputs: frozen D01/D02 candidates; current public base `c3a0d345233d9ff0a7a1fd250f1ca1502bc1a147`; E06-A/B local originals, relevant E06-C passages, prior source-read/review records, pinned guide and current E06 assignment.
- Operation/output: independently compare six criteria, source step IDs, historical findings, new platform/role gates, ownership, privacy and source limitations. Produce findings with location, impact, correction and verification; retain candidate hashes in the local review packet.
- Check: no criterion drift beyond D02's existing SOURCE_STORE substitution; no D01 license blocker transferred to D02; no admin/API observation promoted to buyer evidence; no publication or completed-migration claim.
- Authority/boundary: current documentation assignment only. No ClickUp writes, Salesforce operations, browser session changes or business acceptance.
- Limits/recovery: bounded first consolidation pass of 30 minutes including review preparation. Reviewer stops dependent verification where originals are unavailable and reports the gap. Corrections require affected rechecks; coordinator refreshes the branch/blob before publication.
- Actual: NOT RUN at candidate freeze; authoritative review result belongs to its exact-hash report.

Before later Salesforce work, ACC-00 must discover/describe a supported Headless 360 read operation, use dispatch_readonly against the intended org, then inspect `sf org list --json` and perform a minimal read-only API check against the intended alias. Record the target match, actual principal and intended role, tool/runtime versions, time, expected/observed outcome and redacted errors for both tools. Keep identifiers/credentials restricted. A failed required connection blocks dependent work; no OAuth or security change is implied. Connectivity does not establish storefront-role behavior.

For later delivery, the fixture owner identifies an eligible authorized fictional buyer and an approved second account. Resume read-only verification of exact permissions, Buy For/share and menu evidence before separately authorized changes. Preserve original ACC-01/02/03 steps; this draft grants no implementation authority.

## Linked-source reconciliation

E06-D, the linked ordering-baseline task, explicitly retains a clear selected customer, only authorized accounts and one customer per cart/order; selecting another customer uses a separate order. It also preserves customer-specific catalog, prices and data access. These are draft baseline requirements and align with D01 AC-01/02; they do not prove account-switcher configuration or authorize a new grant. SAP remains authoritative for customer and transaction pricing. No consignment, invoice or other linked baseline scope is added to D01.

E06-E's current reconciliation records an existing order after earlier no-order notes. That is a separate buyer-journey observation, not proof of switching or isolation. Any later authorized D01 check must preserve existing carts/orders and still stop before order submission under AC-03.

## Preservation map

AC-01–03 unchanged. License names, SAP ownership, behavior, blockers and original step IDs retained. Client/store/user names, task/chat/record identifiers and instance URLs are omitted or represented by opaque source references. Sanitization is identity/location-only. Prior review applies only to its recorded revision; this amendment needs its own exact-revision review. Full source runbook/evidence remains authoritative; no completed implementation is invented or restarted.

## Historical source completeness and review

The following preserves the prior draft's source-read/review history. These are historical observations, not new source reads in this pass. In particular, references to current tasks, comments and chats below describe the earlier continuation.

Continuation source read: both current story descriptions were refreshed through task.get_many and remain revision 0.1 with unchanged criteria and source update timestamps. Their attachment/doc arrays remain empty. Dedicated comment reads still return RATE_LIMIT_EXCEEDED (100/100); native historical guide/template page listing fails with the same limit. This connector failure is not evidence that comments or pages are empty. The coordinator subsequently inspected each current task’s authenticated Comments pane read-only in Chrome. Each visible pane showed only the priority change and no authored comment or reply. This is a scoped UI observation, not proof that inaccessible or unrendered history is absent.

The full linked ordering-baseline task description (E06-D) and buyer-journey task description (E06-E) were read in this continuation. E06-D is itself a draft summary derived from a workbook; reading it does not establish completeness of the original workbook or its source decisions. E06-E contains mixed dated history and a later reconciliation; the later finding takes precedence over older no-order text. No other story's criteria or acceptance results transfer into E06.

Local originals E06-A/B/C match their earlier full-read hashes. Both source chats have unchanged update timestamps and no older-page cursor; prior full turn-envelope reads remain applicable, but omitted tool-result bodies are still not captured originals. The local Markdown template adaptation (E06-F) was fully read as supporting method context. It does not substitute for a fresh read of the native historical guide/template. The pinned operational migration guide and CODE-QUALITY.md were read at `769a5099cb7412e9f307a38286f8e2adf74448a8`; the documentation-only override remains in force.

The visible current comment panes have now been inspected; completeness of inaccessible or unrendered comment history is not established. Native historical guide/template, original workbook reconciliation and material evidence behind linked summaries remain incomplete. Independent review of the available evidence supports publication as a partial draft. Full source-preservation review and required-source retrieval remain Pending. Human acceptance is Pending. No full-source, implementation or migration-completion claim is made.

Historical next step recorded by the prior writer: the coordinator provides the reviewed original-workbook slice where material to E06, and an authorized reader resolves any material inaccessible comment history and native historical method pages once access is available. The independent reviewer compares this candidate against the available originals and records the remaining access gaps. The writer avoided repeated quota retries. The coordinator performed the scoped browser read recorded above. One E06 writer prepares a separate candidate; coordinator alone publishes. Writer: Codex runtime family GPT-6; exact variant/reasoning setting not exposed, recorded unknown. Maker checks are not independent acceptance.

## Consolidation revision and remaining gaps

- Public base: `c3a0d345233d9ff0a7a1fd250f1ca1502bc1a147`, D01 blob `9c135698062408654111d9f7da4e752edee7c00a`; guide content blob `3bfb15ed0369b00f03cdaea1f260cd45a65d9c6d`. Earlier guide pins above remain historical provenance.
- E06-A and E06-B were reread fully; relevant E06-C historical login/resumed-session passages were reread. File hashes, previous review scope and source limitations are retained in the local handoff packet. E06-C is not claimed fully reread in this consolidation. The historical kickoff reports a full native Field Guide read; current native-page access remains unavailable, so preserve the earlier read without treating it as a refresh.
- Missing current source refresh, material original-workbook reconciliation, inaccessible method/comment history and approved restricted capture/retrieval portability prevent full migration completion. No private source capture is newly placed in public Git or treated as approved storage.
- Existing source criteria, historical bounded discovery and still-unrun delivery checks remain distinct. Human acceptance required: yes; actual decision: Pending. ClickUp sync: Pending — deferred by instruction. Only the coordinator may publish a reviewed partial draft.
