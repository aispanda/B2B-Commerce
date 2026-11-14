# BG01: Prepare system-driven Commerce and Order Management flows

**POC scope decision:** Duplicate-event replay and provider-timeout recovery checks for tax reversals and refunds are excluded from this POC by the requester. References below to these checks are retained as broader requirements and do not block POC completion. Next, verify intended-user access and remaining applicable return and refund scenarios.


Guide: [migrate/DELIVERY.md](https://github.com/aispanda/Reusable-Delivery/blob/2b915c38dc21b793f9ed4aee9230c613991e79d1/migrate/DELIVERY.md) @ `2b915c38dc21b793f9ed4aee9230c613991e79d1`. Route **MIGRATE** for this upgrade. Original route **NEW**.
Revision/status/as-of: **1.4, 13 November 2026**. Documentation updated. Existing automation reused for order summaries, exceptions and settlement. Tax recording and three dummy reversal scenarios verified. Broader tests and human acceptance remain open.
Origin: **AUTH-BG01**, the human instruction to track system-driven flows separately. Original inventory and runtime evidence are retained in restricted project records.
Accountable owner: **Pending**. The task has no assigned owner.

## Current state

| System flow | Verified result |
|---|---|
| Create Order Summary | Existing capability confirmed for the agreed scope. Reuse the org’s current producer. |
| Create Process Exception | **Complete (Default)**. The active flow maps supported events to Process Exception records. |
| Create Tax Transaction | **Complete (Dummy UI Test)**. The standard template was copied and activated with human approval. A fresh dummy PO placed through the buyer browser received one provider transaction reference shared across its tax lines. Salesforce confirmed zero payment summaries and process exceptions. **BG-E04** records the browser confirmation and backend readback in the restricted project record. |
| Record Tax Reversals | **Complete (Dummy UI Test)** for full cancellation, cancellation of one of two units, and a managed return. Stripe test mode matched each −$18.69 USD reversal to its original transaction. The uncancelled unit retained $18.69 tax. The managed return also posted a credit memo and processed a simulated refund. Evidence: BG-E07–09. Replay, provider failure, and intended-user checks remain open. |
| Ensure Refunds for Excess Funds | **Complete (Dummy Test)** for full cancellation. The isolated gateway processed the expected simulated refund. Evidence **BG-E06** is retained in the restricted flow inventory. |
| RMA Create Credit Memo and Ensure Refunds | **Complete (Dummy UI Test)** for one received unit. Lightning and backend reconciliation confirmed one posted credit memo and one simulated refund. See [D05](../../../e09-returns-settlement/stories/d05-managed-rma/README.md) for evidence scope and [the execution kit](../../../e09-returns-settlement/stories/d05-managed-rma/demo-kit/README.md) for replay. |

Next eligible action is to prepare the duplicate-event and recovery checks in **S-07** once an executor is assigned. Independent implementation verification is **NOT RUN**. Human acceptance requirement and decision for full BG01 remain **Pending**. Demo results apply to the tested scenarios.

## Outcome and scope

As a commerce operations owner, I want applicable system-driven order, exception, tax and settlement flows classified, configured and verified in an isolated environment, so that business events produce the intended result once and failures can be reconciled without unintended financial activity.

The six flows above are core scope. Assess external-channel exceptions and B2C bots for applicability. Map the Checkout Flow Template and its subflows separately. Manual Screen flows and buyer entry remain in [D04](../../../e09-returns-settlement/stories/d04-return-request/README.md). [D03](../d03-servicing-readiness/README.md) owns servicing readiness, [D05](../../../e09-returns-settlement/stories/d05-managed-rma/README.md) owns the managed-return business scenario, and [D07](../../../e09-returns-settlement/stories/d07-credits-refunds/README.md) owns separate finance acceptance. Use synthetic orders, test providers and authorized roles. Preserve production settlement ownership.

## Acceptance criteria

| ID | Agreed criterion and observable expected result | Check/evidence | Result |
|---|---|---|---|
| BG-AC01 | Every supplied inventory row has metadata type, launch/caller, scope disposition, source and uncertainty recorded. Core system flows, manual Screen flows and CheckoutFlow remain distinct. | Private workbook/JSON/query reconciliation; named omissions and retrieval gaps. | Inventory reconciled. Independent review and successor source access Pending. |
| BG-AC02 | The chosen ingestion path creates one correctly linked order summary and related records, with intended lifecycle. Replayed activation or competing ingestion paths do not create duplicates. | Activation, missing prerequisite, duplicate and high-scale coexistence cases; original-order/delivery-group/summary links. | Existing managed summary coverage verified and accepted for reuse. Replay and high-scale coexistence NOT RUN. |
| BG-AC03 | Supported exception events produce correctly categorized/correlated records visible to the designated operations role. Unsupported types, duplicate events and creation failures have explicit outcomes. | Event mapping, recognized/unrecognized types, role access, redacted error content and replay behavior. | Default active flow and event mapping verified. Intended-role, unsupported-event and replay tests NOT RUN. |
| BG-AC04 | Eligible order completion records the correct external tax transaction; eligible return/cancellation records the corresponding reversal once, with correct original transaction, currency and amount. Tax calculation, reporting/reversal and cash refund are separately reconciled. | Nonzero/zero tax, partial return, cancellation, duplicate, timeout and unavailable-provider cases in test mode. | Tax recording and three reversal paths passed (BG-E04, BG-E07–09). Zero-tax order, repeat events and provider failure NOT RUN. |
| BG-AC05 | Eligible managed-RMA close processes intended quantities/change orders, creates correct credit and any fee invoice, and performs only the approved payment-credit/refund path. Ineligible and repeated-close cases have verified outcomes. | Return lines, change orders, invoices, credit, payment credit, refundable balances and provider results; partial receipt/rejection and partial failure. | One-unit managed return passed in Lightning. See [D05](../../../e09-returns-settlement/stories/d05-managed-rma/README.md). RMA-06 covers the open intended-user and eligibility checks. Other branches NOT RUN. |
| BG-AC06 | Eligible cancellation completion refunds only currently owed excess funds. Zero/non-cancellation and duplicate/concurrent/delayed events cannot cause additional unintended refunds. | Actual trigger/filter inspection; zero/negative/positive inputs, replay and overlapping cancellation while refund is pending. | Full cancellation returned the expected dummy funds (BG-E06). Zero excess, overlapping events and failure cases NOT RUN. |
| BG-AC07 | Checkout dependencies and related templates have include/defer/exclude decisions supported by actual architecture and license/package evidence. No background action becomes an independent buyer button. | Individual checkout caller/action mapping; external-channel, bot and routing applicability. | NOT RUN beyond the initial inventory and applicability assessment. |
| BG-AC08 | Execution identity, permissions, account boundaries, monitoring, bounded retry and recovery are verified. Transactional tests begin only when isolation and authority cover every downstream effect. | Least-privilege/cross-account checks, test credentials and egress, reserved fixtures, notifications, audit trail and recovery rehearsal. | Test isolation verified for the recorded demo runs. Full role, account-boundary, monitoring and recovery checks NOT RUN. |
| BG-AC09 | One current detailed GitHub story and a short ClickUp task are linked and read back; public artifacts contain reusable requirements and official references without client-specific evidence. | Published content, link and privacy checks. | GitHub and ClickUp links were verified at initial publication. Current revision keeps the same linked story and folder. |

## Solution

Reuse the standard automation. Map each event, filter, action, downstream effect and failure path before changing it. Tax calculation occurs at checkout. The transaction flow runs on Order Summary Created Event and stores the external reference. For reversal, trace the change order and resulting reversal back to that original reference, amount and currency. Reconcile refunds separately using the payment summary and provider result. See [research and planned checks](research.md) for reusable contracts and official sources.

Use Playwright or another browser tool as the intended user for user acceptance. Use Salesforce MCP or CLI to verify backend event, order, tax and settlement state. Before retrying, reconcile provider state and any pending work.

## Execution

Historical executor labels below reflect recorded roles. Exact historical AI models and reasoning remain unverified. Resolve the model and reasoning before future AI dispatch.

| Step | Action / AC IDs | Dependencies | One executor; model + reasoning / tool | State / result link |
|---|---|---|---|---|
| S-01 | Verify platform access. | Intended account and authority | AI documentation executor, Salesforce MCP/CLI and connectors | Read checks performed. Refresh in the actual executor’s context. |
| S-02 | Reconcile the inventory and available source. BG-AC01 | S-01, inventory inputs | AI documentation executor, Sheets and Salesforce read tools | Complete at recorded scope. Source access gaps remain. |
| S-03 | Publish and verify story links. BG-AC09 | S-01/02, publication authority | AI documentation executor, GitHub and ClickUp | Initial publication and link readback passed. |
| S-04 | Inspect the reversal template’s filters, inputs, and test-order eligibility. BG-AC04 | Fresh S-01, restricted fixture access, named executor | AI demo operator, Flow Builder and Salesforce CLI | Verified the event, active change-order decision, item mapping and original test tax reference. |
| S-05 | Confirm isolated reversal fixture and test boundaries. BG-AC04/08 | S-04, access and approval for test effects | AI demo operator, Salesforce CLI | Verified the test-mode provider, original transaction and zero payment or fulfillment records for the tested fixture. |
| S-06 | Reuse or prepare the standard reversal flow and verify configuration. BG-AC04 | S-04/05, authority for reversal activation | AI demo operator, Flow Builder | Both standard copies active with human approval. |
| S-07 | Run remaining functional and failure checks. BG-AC02–08 | S-05/06, isolated fixtures and scoped authority | QA executor Pending | Full and partial cancellation and managed return passed in Lightning. Salesforce and Stripe test results matched (BG-E07–09). Further checks NOT RUN. |
| S-07A | Resolve checkout callers, template applicability and related access gaps. BG-AC07/08 | Fresh S-01 and approved source access | Salesforce admin Pending | Initial inventory assessed. Architecture and role checks Pending. |
| S-08 | Review implementation and evidence independently. BG-AC01–09 | Frozen criteria, S-06/07/07A evidence | Independent reviewer Pending | NOT RUN. |
| S-09 | Record human acceptance and release decision, if required. | S-08 and confirmed policy | Human acceptance owner Pending | Pending. |

### Next step: S-07

- **Accountable owner and executor:** Pending. Assign one verifier and record model and reasoning if AI.
- **Tools:** Salesforce CLI or MCP and Stripe test logs. Use a browser as the intended user for any user-facing verification.
- **Inputs:** Isolated fixture, baseline provider and order references, supported replay mechanism and authority for its effects.
- **Operation and output:** Verify duplicate-event handling and document the provider failure and recovery scenario.
- **Check:** BG-AC04/08. Reconcile the number, amount and original reference of provider reversals and any exception or retry.
- **Authority and boundary:** Synthetic records and test provider only. Establish the supported replay route and its effects first.
- **Limits and recovery:** Reconcile Salesforce and provider state before any controlled retry. Stop on a duplicate or unexpected effect.
- **Actual:** NOT RUN. BG-E07–09 verify the three first-run paths.

## Review and decisions

| Finding or decision | Reviewer and scope | Disposition | Recheck/evidence |
|---|---|---|---|
| AUTH-BG01 scope split | Human requester, system-driven flow scope | Keep manual screens in D04 and settlement ownership in linked stories. | Original scope and criteria retained. |
| Tax flow activation | Human requester, transaction flow in the demo org | Approved and executed. | BG-E04, automatic dummy-order recording verified. |
| Tax reversal activation | Human requester, reversal flow in the demo org | Approved and executed. | BG-E07, one-item dummy cancellation and test provider response verified. |
| Documentation migration | Maker, current guide and prior BG01 revision | Preserve criteria and completed evidence. Keep org identifiers and raw test evidence in restricted project records. | Verify criteria, public links and ClickUp pointers on readback. |
| Independent implementation review and human acceptance | Pending | Pending | NOT RUN for full BG01. |

## Blockers and history

- **13 November 2026, BG-AC04:** Three reversal paths passed with separate dummy orders. BG-E08 is the one-of-two cancellation. BG-E09 is the fulfilled managed return with an invoice settled by a no-callout payment fixture. The unpaid fixture initially failed the RMA screen’s refundable-payment check. Duplicate events, provider failure and intended-user verification remain open.
- **13 November 2026, BG-AC01/08:** A successor’s access to the restricted inventory and evidence has not been verified. The project source owner must provide approved access before successor execution.
- **Guide upgrade:** Prior guide `56695c71dd26986eea09ebfa23e60826f1ee9359` → current guide `2b915c38dc21b793f9ed4aee9230c613991e79d1`. Applied current execution and verification rules to S-04/07, and the ClickUp link-only format to BG-AC09. The Files inventory is due at story closeout. Existing runtime results carry forward at their recorded scope.
