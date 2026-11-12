# D01 Switch between authorized buyer accounts

[E06 Buyer access and administration](../../README.md)

Guide: [migrate/DELIVERY.md](https://github.com/aispanda/Reusable-Delivery/blob/769a5099cb7412e9f307a38286f8e2adf74448a8/migrate/DELIVERY.md), commit `769a5099cb7412e9f307a38286f8e2adf74448a8`, route MIGRATE.

Guide upgrade: the earlier draft used `4b5406c3d74f7f56071d193ba3359218d4b70d4d`. For later authorized ACC-02/03, assign the operator and independent checker and record evidence for authorized switching and unauthorized account denial. Prior evidence and unrun checks retain the scope recorded below.

Migration draft 0.1. Original sources retain requirements authority. Owners, dates and live delivery status: per ClickUp. Sync: **Pending — deferred by instruction**. Documentation only: no ClickUp writeback, org changes, browser login/session switch, implementation or acceptance execution.

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

## Preservation map

AC-01–03 unchanged. License names, SAP ownership, behavior, blockers and original step IDs retained. Client/store/user names, task/chat/record identifiers and instance URLs are omitted or represented by opaque source references. Sanitization is identity/location-only and awaits independent comparison. Full source runbook/evidence remains authoritative; no completed implementation is invented or restarted.

## Source completeness and review

Full current task description was read using task.get_many. Dedicated current-comment reads hit the daily MCP limit. Bulk attachment/doc arrays were empty, but embedded source links still require completeness checks. Local originals E06-A/B/C were fully read; source-chat turn envelopes had no older page but omitted task tool-result bodies. Current linked baseline, comments and historical guide/template completeness remain unresolved. A separate observer reports independently reading both task descriptions; independent review of these drafts and all required evidence is still Pending. Human acceptance is Pending. No full-source or migration-completion claim is made.

Immediate next step: recover missing comments/material linked inputs, compare all criteria and sanitization with originals, and obtain independent preservation review. One E06 writer edits this local epic; coordinator alone publishes. Writer: Codex runtime family GPT-6; exact variant/reasoning setting not exposed, recorded unknown. Maker checks are not independent acceptance.
