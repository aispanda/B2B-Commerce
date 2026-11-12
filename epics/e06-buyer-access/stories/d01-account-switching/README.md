# D01 Switch between authorized buyer accounts

[E06 Buyer access and administration](../../README.md)

Guide: [migrate/DELIVERY.md](https://github.com/aispanda/Reusable-Delivery/blob/769a5099cb7412e9f307a38286f8e2adf74448a8/migrate/DELIVERY.md), commit `769a5099cb7412e9f307a38286f8e2adf74448a8`, route MIGRATE.

Guide upgrade: the earlier draft used `4b5406c3d74f7f56071d193ba3359218d4b70d4d`. For later authorized ACC-02/03, assign the operator and independent checker and record evidence for authorized switching and unauthorized account denial. Prior evidence and unrun checks retain the scope recorded below.

Migration draft 0.2. Original sources retain requirements authority. Owners, dates and live delivery status: per ClickUp. Sync: **Pending — deferred by instruction**. Documentation only: no ClickUp writeback, org changes, browser login/session switch, implementation or acceptance execution.

Origin: SRC14. E06-A is the original account-switching discovery report; E06-C is buyer-journey evidence. Resolve private originals through the restricted inventory.

## Current state

E06-A's 11 November read-only discovery found the existing buyer on **External Apps Login**, while the source requires Customer Community Plus or higher. The store Accounts view showed one account rather than the two-account fixture. This is historical evidence of a delivery blocker, not a fresh org inspection or proof no second Account exists elsewhere.

Effective Account Switcher User permission, compatible buyer/object/field access, target-account sharing, External Managed Account with Buy For, and the authenticated menu remain unverified. Assignment names or missing page related lists do not prove effective permission/record absence. Eligible license capacity was not inventoried. The buyer permission-set license is not proof of the required external-user license.

The current task still says ACC-01 Pending and org verification NOT RUN. The later local report supplies bounded discovery evidence but does not complete full ACC-01. Preserve both states without silently updating ClickUp. No switching or negative-access test ran. Independent verification and human acceptance remain Pending.

## Outcome and scope

An authorized purchaser switches between two fictional business accounts in the same LWR store so each cart/order uses the selected account. Preserve one customer per cart/order and SAP customer/transaction-pricing authority. Use standard/declarative Salesforce features and record unsupported capability. Access grants, license changes, new fixtures, publication, orders and notifications are excluded. This story is independent of Order Management and checkout email.

## Acceptance criteria

IDs and wording below are exact copies from the current task; no criterion text changed.

| ID | Source criterion | Fresh result |
|---|---|---|
| AC-01 | Only the two authorized demo accounts are listed. An unauthorized account is unavailable and its data is inaccessible. | NOT RUN for fresh acceptance |
| AC-02 | After switching, the account name is clear and catalog, price, cart and order history follow the selected account. No mixed-account cart or order is created. | NOT RUN for fresh acceptance |
| AC-03 | A second reader verifies both contexts from storefront evidence. Use existing carts or a reversible demo cart and stop before order submission. | NOT RUN for fresh acceptance |

## Solution and historical evidence

The source proposes the standard profile menu and effective-account model. E06-A reports a candidate path involving eligible license, compatible purchasing permissions, two business accounts in the same store buyer-group context, Buy For relationship, target-account Read Only access and the LWR Account Switcher menu. These are historical research findings, not verified deployed configuration.

The signed-out storefront showed Log In, so authenticated menu configuration was not inspected. The buyer was active. Assignments included Buyer and a custom variation-read set; no separately named Account Switcher/Buyer Manager assignment was shown, but underlying effective permissions were not audited. Ordinary contact-account association and store membership do not establish target-account authorization.

Historical source references: [Account Switcher setup](https://help.salesforce.com/s/articleView?id=commerce.comm_buy_on_behalf.htm&language=en_US&type=5) and [buyer licensing](https://help.salesforce.com/s/articleView?id=commerce.commerce_buyer_and_buyer_mgr_perm_sets.htm&language=en_US&type=5). This migration pass did not refresh platform documentation.

## Execution and resume conditions

| Source step | Preserved disposition |
|---|---|
| ACC-01 | Bounded evidence available; full inventory blocked by eligible buyer/second fixture and unverified menu/permission/sharing evidence. Remote task Pending. |
| ACC-02 | Pending configuration/demo after prerequisites and separate authorization; outside this batch. |
| ACC-03 | Pending independent acceptance, evidence and handoff. |

For later delivery, the fixture owner must identify an eligible authorized fictional buyer and approved second account. Resume read-only checks of exact permissions, Buy For/share and menu evidence before any separately scoped change. This draft grants no implementation authority.

## Linked-source reconciliation

E06-D, the linked ordering-baseline task, explicitly retains a clear selected customer, only authorized accounts and one customer per cart/order; selecting another customer uses a separate order. It also preserves customer-specific catalog, prices and data access. These are draft baseline requirements and align with D01 AC-01/02; they do not prove account-switcher configuration or authorize a new grant. SAP remains authoritative for customer and transaction pricing. No consignment, invoice or other linked baseline scope is added to D01.

E06-E's current reconciliation records an existing order after earlier no-order notes. That is a separate buyer-journey observation, not proof of switching or isolation. Any later authorized D01 check must preserve existing carts/orders and still stop before order submission under AC-03.

## Preservation map

AC-01–03 unchanged. License names, SAP ownership, behavior, blockers and original step IDs retained. Client/store/user names, task/chat/record identifiers and instance URLs are omitted or represented by opaque source references. Sanitization is identity/location-only and awaits independent comparison. Full source runbook/evidence remains authoritative; no completed implementation is invented or restarted.

## Source completeness and review

Continuation source read: both current story descriptions were refreshed through task.get_many and remain revision 0.1 with unchanged criteria and source update timestamps. Their attachment/doc arrays remain empty. Dedicated comment reads still return RATE_LIMIT_EXCEEDED (100/100); native historical guide/template page listing fails with the same limit. This connector failure is not evidence that comments or pages are empty. The coordinator subsequently inspected each current task’s authenticated Comments pane read-only in Chrome. Each visible pane showed only the priority change and no authored comment or reply. This is a scoped UI observation, not proof that inaccessible or unrendered history is absent.

The full linked ordering-baseline task description (E06-D) and buyer-journey task description (E06-E) were read in this continuation. E06-D is itself a draft summary derived from a workbook; reading it does not establish completeness of the original workbook or its source decisions. E06-E contains mixed dated history and a later reconciliation; the later finding takes precedence over older no-order text. No other story's criteria or acceptance results transfer into E06.

Local originals E06-A/B/C match their earlier full-read hashes. Both source chats have unchanged update timestamps and no older-page cursor; prior full turn-envelope reads remain applicable, but omitted tool-result bodies are still not captured originals. The local Markdown template adaptation (E06-F) was fully read as supporting method context. It does not substitute for a fresh read of the native historical guide/template. The pinned operational migration guide and CODE-QUALITY.md were read at `769a5099cb7412e9f307a38286f8e2adf74448a8`; the documentation-only override remains in force.

The visible current comment panes have now been inspected; completeness of inaccessible or unrendered comment history is not established. Native historical guide/template, original workbook reconciliation and material evidence behind linked summaries remain incomplete. Independent review of the available evidence supports publication as a partial draft. Full source-preservation review and required-source retrieval remain Pending. Human acceptance is Pending. No full-source, implementation or migration-completion claim is made.

Immediate next step: the coordinator provides the reviewed original-workbook slice where material to E06, and an authorized reader resolves any material inaccessible comment history and native historical method pages once access is available. The independent reviewer compares this candidate against the available originals and records the remaining access gaps. The writer avoided repeated quota retries. The coordinator performed the scoped browser read recorded above. One E06 writer prepares a separate candidate; coordinator alone publishes. Writer: Codex runtime family GPT-6; exact variant/reasoning setting not exposed, recorded unknown. Maker checks are not independent acceptance.
