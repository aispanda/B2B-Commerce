# D04: Let a buyer initiate a self-service return

**Revised, implementation in progress, 12 November 2026.** Current migration update: [migrate/DELIVERY.md](https://github.com/aispanda/Reusable-Delivery/blob/2a4b77e1772f4828f595d40c882e7c4f77bc4007/migrate/DELIVERY.md) @ `2a4b77e1772f4828f595d40c882e7c4f77bc4007`, route MIGRATE+NEW. Previous guide/review scope remains historical; no tests were rerun. [Migration guide, pinned revision](https://github.com/aispanda/Reusable-Delivery/blob/5afb6cd4c85ee888b4f1ccf63f95f33648b351e8/migrate/DELIVERY.md); route **MIGRATE+NEW**. Accountable owner: Pending. Independent implementation review and human acceptance: Pending. The approved restricted source/evidence index and intended-reader access remain Pending.

## Current state

The user's clarified outcome is buyer self-service: an eligible buyer starts a return from an order without having to contact an agent or wait for manual approval on the normal path. System ownership, policy, logistics and financial timing remain decisions.

An administrator inspected standard return-flow screens through item selection, reason and review with synthetic fulfilled orders and stopped before submission. A read-only buyer component was deployed and passed deployment validation and three local checks: positive quantity/order matching, malformed-input fail-closed behavior and 15/18-character ID matching. The component visibly rendered its header in an administrator preview, but has not been runtime-tested in the buyer context. Separately, the standard buyer read path returned a signed-in buyer's own test order, while two specific standard Commerce API requests for another account's order were denied. This does not prove secure return submission. No end-to-end buyer return has been demonstrated.

**Next:** test the read-only component with the buyer's own order and an unauthorized order, while resolving its Builder visibility/configuration issue. Continue with verified development tools and preserve exact observed results. Org inspection found Aura components in the existing service flows; Salesforce's documented LWR limitation means those flows cannot run unchanged there. [Salesforce LWR limitations](https://help.salesforce.com/s/articleView?id=experience.networks_lwr_flow_limitations.htm&language=en_US&type=5).

## Outcome and scope

As a signed-in business buyer, I want to initiate a return for eligible items from my order, so that I receive a trustworthy return reference and instructions without contacting support for the normal path.

Cover order access, eligible item and quantity selection, policy and reason information, review, confirmation, accurate status, secure access and safe retries. A return document is offered only if the chosen provider supports it. Exchange, reshipment, cancellation, receipt and settlement remain distinct outcomes coordinated with their respective stories. In parallel, assess all manual screen templates for buyer suitability; template availability alone is not proof of buyer access or a working storefront experience.

## Acceptance criteria

The following **SS-AC** criteria are proposed, observable checks for the user-authorized scope change; precise business policy and financial behavior remain to be decided. They do not assert that the earlier criteria were unchanged or that these checks passed.

| ID | Expected result | Check / evidence | Result |
| ---| ---| ---| --- |
| SS-AC-01 | A signed-in authorized buyer can open an order and find a clear Return items entry for an eligible order. | Actual LWR storefront as intended buyer; eligible and ineligible order; record entry, empty and unavailable states. | NOT RUN |
| SS-AC-02 | The buyer can choose eligible items and positive permitted quantities, provide any required reason, and review clear instructions, fees and outcome before confirming. | Partial/multiple items, unavailable and excess quantities, reason, review and errors; retain screenshots and policy source. | NOT RUN |
| SS-AC-03 | On confirmation, the eligible buyer can initiate one return without a required human-approval step, and sees a reference and accurate status/next steps only after the responsible system confirms persistence. | Fictional fulfilled order, before/after records, no-agent path, persisted reference and visible buyer confirmation. Model/ownership Pending. | NOT RUN |
| SS-AC-04 | Unauthorized and unauthenticated users cannot view or submit a return; stale eligibility, duplicate/concurrent requests and uncertain responses are handled safely. Sharing and object/field permissions are enforced, or a narrowly scoped service boundary is documented, enforced and tested. | Buyer A/B, guest denial, direct ID tampering, effective-account switching and intended buyer-role access; over-quantity, duplicate/concurrent and timeout/retry scenarios; server-side evidence. | NOT RUN as a complete criterion. Two specific standard Commerce API cross-account reads were denied; custom return write and remaining cases are untested. |
| SS-AC-05 | The confirmation accurately states whether a label or other return document is available; provider failure retains the return reference and offers a recoverable next step. | Chosen provider and authorized test evidence; success, failure and access tests. Provider/policy Pending. | NOT RUN |
| SS-AC-06 | Initiation produces only the approved return, financial and integration side effects, and accurately reports their actual status. Receipt, credit and refund timing follow the agreed return model and system owner; no unconfirmed outcome is claimed. | Compare return, order, inventory, audit, notification, credit and payment evidence; inspect integration and financial configuration before submitting. | NOT RUN |
| SS-AC-07 | The delivered buyer journey is usable with keyboard and assistive technology, and failures are understandable without exposing internal details. | Published test route, intended buyer identity, keyboard/screen-reader and error checks; supported browsers and accessibility target Pending. | NOT RUN |

## Solution

Add an LWR-compatible buyer interaction on order details. Derive buyer and account from trusted session context; deny unauthenticated access, reauthorize the order and recheck eligible quantities and policy server-side. Enforce sharing and object/field permissions, or document and test a narrowly scoped privileged service boundary; execution mode is a design decision. Use the agreed system to create a tracked return or process the selected return model; persist a confirmed reference and reconcile uncertain responses before retrying.

The existing RMA flow provides a reference for selection, reasons, preview and Create Return Order. Its buyer suitability and direct LWR execution are not established. A managed RMA does not inherently require human approval. A simple-return path can create a credit memo and conditionally start refund processing on submission; exact timing and ownership are business and architecture decisions. Never represent an unconfirmed credit or refund as complete. [Salesforce return types](https://help.salesforce.com/s/articleView?id=commerce.om_return_order_types.htm&language=en_US&type=5) · [Create Return Order action](https://help.salesforce.com/s/articleView?id=platform.flow_ref_elements_om_actions_create_return_order.htm&language=en_US&type=5).

Pending decisions include return window and exclusions, item quantities and bundles, reasons and fees, auto-acceptance rules, label/freight provider, authoritative return system, financial settlement, notifications, abuse/throttling policy and exception handling. Whether any refunds require human approval, or buyers must choose refund versus replacement, remains undecided. One service-flow test displayed a single reason inconsistent with separately inspected active return-line reasons; its consequence is unverified and requires mapping review before submission.

## Execution

| Step | Action | State |
|---|---|---|
| PLATFORM-01 | Verify the intended environment and platform access; record failures and use a verified fallback for independent authorized work. | Partial; development CLI worked, another connector had an authentication error. |
| INTAKE-01 | Preserve historical support-form discovery. | Complete for historical scope; no buyer self-service acceptance implied. |
| SS-01 / SS-02 | Diagnose and test the isolated read-only component, then implement supported buyer initiation with verified security and agreed policy. | In progress; buyer-context component runtime and submission NOT RUN. |
| SS-03 | Test positive/negative access, eligibility, duplicate and error recovery, side effects and accessibility with fictional fixtures. | Partial standard read checks only; full checks NOT RUN. |
| INVENTORY-01 | Assess each remaining manual screen template for actor, buyer applicability, adaptations and safe test status. | In progress. |
| SS-04 | Independent review of the implemented revision and evidence; human acceptance separately. | Pending. |

## Review and history

The user explicitly changed the former Case-only story to self-service. Preserve the following prior criteria verbatim as **historical and superseded by that authorized scope change**, not passed:

> **AC-01:** A signed-in demo buyer can submit a request with the needed details using the standard component and sees neutral ‘request received’ wording.
>
> **AC-02:** Customer Care can find the correctly scoped fictional Case. A request alone leaves order, RMA, inventory and payment states unchanged.
>
> **AC-03:** Buyer identity and Case visibility are restricted to the authorized context. Check routing and unintended notifications before any test submission.

A prior JEV documentation review applies only to the previous revision. The separate research review was rejected before a verdict. Claude Opus 5.5 reviewed a sanitized summary in one bounded pass and then performed a targeted recheck of the full public draft, as reported by the coordinator. The recheck identified guest denial, permission/service boundaries, abuse policy and evidence-wording gaps; the maker incorporated and checked the repairs. Independent recheck of those repairs is NOT RUN; JEV review remains Pending. Suggested mandatory user-mode execution, refund approval and refund/replacement selection are not adopted as policy; the enforceable security boundary and business choices remain decisions. Human acceptance remains Pending. Original descriptions, attachments and decisions require approved restricted retention and authorized-reader access; client identity, environment and record identifiers, internal routes and private evidence mappings remain restricted.

## Files

- [README.md](README.md) — Scope, checks and current status

**Next · SS-01:** Salesforce implementer, assignment Pending, to test the read-only component with the intended buyer and a cross-account negative case after platform access is verified. Buyer submission, complete security checks and acceptance remain NOT RUN.
