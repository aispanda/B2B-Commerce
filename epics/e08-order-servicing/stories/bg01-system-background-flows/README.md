# BG01: Prepare system-driven Commerce and Order Management flows

Guide: [migrate/DELIVERY.md](https://github.com/aispanda/Reusable-Delivery/blob/56695c71dd26986eea09ebfa23e60826f1ee9359/migrate/DELIVERY.md) @ `56695c71dd26986eea09ebfa23e60826f1ee9359`; route **NEW**, using its separate-new-scope rule. Revision 1.0, 12 November 2026. Public documentation only. Implementation, transactional tests and independent implementation verification: **NOT RUN**. Human acceptance: **Pending**.

Origin: AUTH-BG01, the user's verified instruction to create a separate story for system-driven/autolaunched flows using the reusable delivery model. Accountable owner: **Pending — no named assignment supplied**. This new story has separate documentation authority; it does not change the older portfolio migration batch's restrictions for existing items.

## Current state

The supplied workbook and JSON were reviewed, related stories were checked, official references were researched, and read-only platform investigation was performed. Org-specific observations, source revisions and configuration evidence are retained outside this public repository. They are not published here, and their retrieval by a successor executor remains Pending. This public record does not establish the target org's installation status, readiness, permissions, licenses, provider configuration or runtime behavior.

Next delivery step: **S-04**, assign the follow-up executor and make the required source context available through an approved private mechanism, then complete the applicability and dependency audit. Runtime work is blocked on verified isolated test setup and authority covering downstream effects. No flow was enabled or published, and no transactional test was performed in this documentation task.

Independent implementation verification: **NOT RUN**. Human acceptance requirement: **Pending — policy and owner not supplied**; actual decision remains Pending. Publication is not implementation acceptance.

## Outcome and scope

As a commerce operations owner, I want applicable system-driven order, exception, tax and settlement flows classified, configured and verified in an isolated environment, so that business events produce the intended result once and failures can be reconciled without unintended financial activity.

Cover six core capabilities: Create Order Summary, Create Process Exception, Create Tax Transaction, Record Tax Reversals, RMA Create Credit Memo and Ensure Refunds, and Ensure Refunds for Excess Funds. Assess external-channel exception handling and B2C bot templates for actual applicability. Account separately for the Checkout Flow Template and its invoked subflows; `CheckoutFlow` must not be relabeled as ordinary Screen or Autolaunched solely for convenience.

Manually launched Screen flows, buyer buttons and placement remain in [D04, the originating buyer story](../../../e09-returns-settlement/stories/d04-return-request/README.md). A flow's metadata type and its caller are separate classifications: being invoked does not automatically make a Screen flow Autolaunched. [D03](../d03-servicing-readiness/README.md) owns readiness/fixtures, [D05](../../../e09-returns-settlement/stories/d05-managed-rma/README.md) the managed-return business scenario, and [D07](../../../e09-returns-settlement/stories/d07-credits-refunds/README.md) invoice/credit reconciliation and its conditional card-refund demo. BG01 provides automation contracts and test planning without replacing their criteria or consuming shared fixtures.

Preserve the applicable production system's invoicing/settlement ownership until the business owner decides otherwise. No production financial processing, permissions change, deployment, activation or publication is authorized by this story document. Prefer standard capabilities; customize only after an observed gap and a bounded authorized change.

## Acceptance criteria

Stable first-version criteria derived from the requested scope. Detailed behavior/test expectations are **proposed acceptance interpretation**, not recorded human approval. Existing stories' criterion IDs and wording remain unchanged.

| ID | Observable expected result | Check / evidence | Result |
|---|---|---|---|
| BG-AC01 | Every supplied inventory row has metadata type, launch/caller, scope disposition, source and uncertainty recorded. Core system flows, manual Screen flows and CheckoutFlow remain distinct. | Private workbook/JSON/query reconciliation; named omissions and retrieval gaps. | Reconciliation performed; independent/source-access verification Pending |
| BG-AC02 | The chosen ingestion path creates one correctly linked order summary and related records, with intended lifecycle. Replayed activation or competing ingestion paths do not create duplicates. | Activation, missing prerequisite, duplicate and high-scale coexistence cases; original-order/delivery-group/summary links. | NOT RUN |
| BG-AC03 | Supported exception events produce correctly categorized/correlated records visible to the designated operations role. Unsupported types, duplicate events and creation failures have explicit outcomes. | Event mapping, recognized/unrecognized types, role access, redacted error content and replay behavior. | NOT RUN |
| BG-AC04 | Eligible order completion records the correct external tax transaction; eligible return/cancellation records the corresponding reversal once, with correct original transaction, currency and amount. Tax calculation, reporting/reversal and cash refund are separately reconciled. | Nonzero/zero tax, partial return, cancellation, duplicate, timeout and unavailable-provider cases in test mode. | NOT RUN |
| BG-AC05 | Eligible managed-RMA close processes intended quantities/change orders, creates correct credit and any fee invoice, and performs only the approved payment-credit/refund path. Ineligible and repeated-close cases have verified outcomes. | Return lines, change orders, invoices, credit, payment credit, refundable balances and provider results; partial receipt/rejection and partial failure. | NOT RUN |
| BG-AC06 | Eligible cancellation completion refunds only currently owed excess funds. Zero/non-cancellation and duplicate/concurrent/delayed events cannot cause additional unintended refunds. | Actual trigger/filter inspection; zero/negative/positive inputs, replay and overlapping cancellation while refund is pending. | NOT RUN |
| BG-AC07 | Checkout dependencies and related templates have include/defer/exclude decisions supported by actual architecture and license/package evidence. No background action becomes an independent buyer button. | Individual checkout caller/action mapping; external-channel, bot and routing applicability. | NOT RUN |
| BG-AC08 | Execution identity, permissions, account boundaries, monitoring, bounded retry and recovery are verified. Transactional tests begin only when isolation and authority cover every downstream effect. | Least-privilege/cross-account checks, test credentials and egress, reserved fixtures, notifications, audit trail and recovery rehearsal. | NOT RUN |
| BG-AC09 | One current detailed GitHub story and a short ClickUp task are linked and read back; public artifacts contain reusable requirements and official references without client-specific evidence. | Published content, link and privacy checks. | Pass for current files and ClickUp links; earlier research history cleanup Pending |

## Solution

Inspect existing copies before proposing new ones. For each flow, map trigger, conditions, caller, inputs/outputs, side effects and failure paths. Preserve unavailable source or action details as explicit gaps; do not activate a flow to discover behavior. [Research and test strategy](research.md) gives official sources and reusable action contracts.

For settlement, correlate return/change order, credit or fee invoice, payment summary, asynchronous operation, refund and provider log. Queue completion does not prove a provider refunded funds. Use synthetic reserved data and isolated tax/payment services. A purchase-order reference, credit memo, flow success or zero-tax sample is insufficient cash-settlement evidence.

Reuse verified installed behavior where suitable. Replacing all flows can create competing subscribers and duplicate effects. Invoking settlement directly from a buyer button crosses this story's manual/system boundary and is not proposed. Business decisions cover lifecycle ownership, receipt/fees/refunds and providers; operational UX covers truthful status, actionable errors and investigation access. Technical/QA concerns include asynchronous boundaries, replay, permissions and reconciliation.

## Execution

One executor per step. The current documentation maker is Codex desktop; exact backend model/reasoning is not exposed, so it is recorded as unknown. Future AI dispatch requires an exact planned model/reasoning and identity record; no human assignment or review result is invented.

| Step | Action / criteria | Dependencies | One executor / tools | State |
|---|---|---|---|---|
| S-01 | Verify platform access | Intended accounts and existing authority | Current Codex maker; Headless 360 then Salesforce CLI; GitHub/ClickUp connectors | Read checks performed; detailed results retained privately; recheck for successor |
| S-02 | Reconcile inventory and inspect available source; BG-AC01 | S-01, supplied inputs | Current Codex maker; read-only query/retrieve and workbook read | Complete at recorded private scope; unavailable source remains a gap |
| S-03 | Research and publish linked documentation; BG-AC09 | S-01/02, destination/authority | Current Codex maker; official docs, GitHub/ClickUp | Complete for current public files and ClickUp readback; history cleanup remains Pending |
| S-04 | Establish private context access and resolve applicability/source/dependency gaps; BG-AC02–08 | Named assignment, approved context retrieval; refresh S-01 | Human Salesforce administrator — name Pending | Blocked — assignment and private retrieval Pending |
| S-05 | Establish isolated fixture/provider plan and business treatment | S-04; D03/D05/D07 coordination | Human fixture/finance coordinator — name Pending | Blocked — setup, ownership and authority missing |
| S-06 | Prepare minimal inactive configuration or confirm reuse | S-04/05; concrete change authority | Human Salesforce builder — name Pending | NOT RUN |
| S-07 | Run bounded functional/failure tests | S-05/06; authority covering all test effects | Human QA executor — name Pending | NOT RUN |
| S-08 | Fresh independent review of behavior, access, recovery and evidence | Frozen criteria, S-06/07 evidence | Independent human reviewer — name Pending | NOT RUN; before implementation handoff/release |
| S-09 | Record human acceptance and release decision if required | S-08; acceptance policy/owner resolved | Human acceptance owner — name Pending | Pending; no release authorized |

### Next step: S-04

- **Owner/executor:** Accountable owner and one named administrator Pending. Tools: Headless 360 discover → describe → dispatch_readonly, then Salesforce CLI verified against the intended environment.
- **Inputs:** Current story, private original inventory and read evidence, source scope/version, official references, actual store architecture and related readiness/settlement stories. The originating task/request owner controls access; approved archive owner and successor retrieval are still unverified.
- **Operation/output:** One bounded read-only audit of the actual summary producer/high-scale path, tax provider and Order Events settings, source/action access, runtime identity/permissions, checkout callers and related-template applicability. Resolve conflicting source/reporting surfaces explicitly. Record an include/defer/exclude decision and an exact unmet prerequisite for each gap.
- **Check:** BG-AC02–08. Each required field has an observation, a supported official claim or a named uncertainty. Privately retain date, environment, role, API version, expected/observed behavior and redacted errors. Administrator access does not prove service/buyer-role access. Dependency checks remain partial unless comprehensive coverage is established.
- **Authority/boundary:** Read-only investigation. Stop before security/setup changes, event publication, fixture creation, activation, RMA closure, invoices, credit or payment calls. No safe transactional setup is established by this public document.
- **Limits/recovery:** One focused audit and at most one different supported read route per missing component. Inspect partial retrieval results rather than blindly retrying. Resume dependent work only when its specific missing input is verified.
- **Actual:** NOT RUN as a distinct follow-up step. Completed current-session observations remain private S-01/02 history.

## Review, decisions and source map

| Source / finding | Disposition |
|---|---|
| AUTH-BG01 — verified human scope-split instruction | Separate NEW story; manual Screen scope remains with origin |
| INV-BG01 workbook and INV-BG02 JSON | Read unchanged; exact source revisions and reconciliation retained locally outside public Git |
| ORG-BG01 — read-only platform evidence | Retained outside public Git; no public installation/readiness claims |
| DOC-BG01 — official sources | Claim-specific links in research; no runtime proof inferred |
| Privacy publication review | Org-specific evidence publication rejected by automatic approval review. Public version excludes those findings and evidence hashes. Private sharing/retrieval remains unresolved. |
| Maker review — human-reader and AI-execution perspectives | Current maker checked scope, next-step controls, source limitations and distinctions between documentation, test results and acceptance |
| Independent implementation verification / human acceptance | NOT RUN / Pending; maker review is not either |

## Blockers and history

The user separately authorized creation of this story and its ClickUp/GitHub documentation. Related work was checked before creation; no existing story found in the checked scope covers this cross-capability background-template contract. Existing D04/D05/D07 requirements and source descriptions were not rewritten. The new folder is separate from concurrent writers' existing story paths; no shared register was changed.

Unresolved dependencies: named accountable owner and follow-up executor; approved private context retrieval; complete action/source and architecture evidence; effective permissions and licenses; isolated fixtures/provider services; financial policy; and authority for actual effects. These block implementation claims, not the reusable public documentation. No inherited fixture reservation or financial permission is assumed.

12 November 2026, revision 1.0: read-only investigation and reusable story/research prepared. Publication was revised to exclude internal org configuration after automatic review rejected the evidence-file upload. Public documentation is not a portable execution handoff until the required private context is accessible. GitHub folder/story/research and ClickUp title, description, status, unassigned owner, unset due date and four related-story associations were read back successfully. The ClickUp task remains To Do because implementation is untested.

**Publication-history issue:** The first research revision included org-specific configuration observations (no credentials or client names). The current research file was replaced with official-reference-only content. Automatic approval review rejected a proposed history reset; that earlier revision therefore remains in repository history. Removing only this session's documentation revisions and replacing them with the identical current sanitized files requires explicit approval. Preserve all prior history and any concurrent edits. Until cleanup is verified, do not claim the entire Git history is free of internal observations.
