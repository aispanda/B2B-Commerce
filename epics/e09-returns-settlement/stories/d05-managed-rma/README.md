# D05: Process a fulfilled return with managed RMA

As a Customer Care agent, I want to authorize a return, record receipt and close an RMA so credit processing reflects the items received.

**Demo result, 13 November 2026.** One unit passed through the receipt-first Lightning path. Salesforce closed the return, posted one $12.50 credit memo and processed one simulated $12.50 refund. The ClickUp item was closed for the demo scope. Partial receipt, rejection, fees, store credit and live payments were outside this run. Verify the intended Customer Care user's access in the new org.

## Acceptance criteria

| ID | Agreed criterion | Observed demo result |
|---|---|---|
| AC-01 | From a fictional fulfilled managed line, an agent selects item, eligible quantity and reason and creates one RMA with a trackable reference. | A one-unit submission through RMA Return Items created one trackable Return Order. |
| AC-02 | Receipt and close record the actual returned quantity and status. Partial receipt or ineligible/unfulfilled quantity is handled without duplicating a return or promising a credit early. | Closed with expected 1, received 1, rejected 0 and returned 1. Partial receipt and the ineligible/unfulfilled case were not run. |
| AC-03 | Capture Order Summary, RMA and return line state before and after. Reconcile any credit event with the credits story. | Reconciled Order Summary, Return Order and line, credit memo, and the refund against the fixture payment. This was simulated finance verification for D05. |

## Build and test

| Step | Action |
|---|---|
| RMA-00 | Run the [target preflight](demo-kit/README.md#preflight) against an authorized isolated Salesforce org. |
| RMA-01 | Verify the standard **RMA Return Items** and **RMA Create Credit Memo and Ensure Refunds** flows and the intended Lightning agent's access. Use the receipt-first path. |
| RMA-04 | Confirm entitlement, the intended persona and fixture eligibility before running the one-unit scenario. |
| RMA-05 | Apply the [layout selections](demo-kit/README.md#layouts) to the layouts assigned to the demo persona. Run the [synthetic fixture setup](demo-kit/README.md#fixture) so the fulfilled unit has a paid invoice and a linked simulated payment method. |
| RMA-02 | Open the fixture Order Summary in Lightning. Run **RMA Return Items**, select one fulfilled unit and an allowed reason, review $12.50, submit once, and finish. Under **Related → Return Orders → return → Related → Return Order Line Items**, set **Quantity Received** to 1 and leave **Quantity Rejected** at 0. On the parent Return Order, save **Status** as **Closed**. Use **Setup → Time-Based Automations** if the scheduled path is still queued. |
| RMA-03 | Run the [reconciliation command](demo-kit/README.md#verification). In Lightning, follow **Credit Memos → Credit Memo Lines**, **Invoices → Payment Line Invoices**, and **Order Payment Summary → Refunds** from the order. Use **View All** where the card truncates columns. Retain the UI evidence for the target run. |

Reconciliation for this fixture requires one returned unit, a $12.50 Order Summary total, one posted $12.50 credit memo with $0 balance, one processed $12.50 refund against the simulated payment, $12.50 remaining refundable and zero process exceptions. The Refund page should show **Simulated refund - no money moved**. If the result is ambiguous, inspect the scheduled path and existing return, exception and financial records before retrying.

See [review findings and rechecks](reviews.md).

## Files

### Story and reviews

- [README.md](README.md) — Story, acceptance criteria, and execution steps
- [reviews.md](reviews.md) — Review findings and verification scope

### Scripts and configuration

- [demo-kit/README.md](demo-kit/README.md) — Setup and execution commands
- [.gitignore](demo-kit/.gitignore) — Keeps generated fixture state out of Git
- [layouts.json](demo-kit/layouts.json) — Fields and related lists for demo layouts
- [merge-layouts.py](demo-kit/merge-layouts.py) — Merges selections into target layouts
- [run.py](demo-kit/run.py) — Checks prerequisites, creates fixtures, and verifies results
- [sfdx-project.json](demo-kit/sfdx-project.json) — Salesforce project settings for the demo kit
- [stages.apex](demo-kit/stages.apex) — Creates order, fulfillment, invoice, and payment records

### Salesforce metadata

- [DemoRmaRefundAdapter.cls](demo-kit/force-app/main/default/classes/DemoRmaRefundAdapter.cls) — Simulates refunds without external calls
- [DemoRmaRefundAdapter.cls-meta.xml](demo-kit/force-app/main/default/classes/DemoRmaRefundAdapter.cls-meta.xml) — Declares Apex class version and status
- [DemoRmaRefund.namedCredential-meta.xml](demo-kit/force-app/main/default/namedCredentials/DemoRmaRefund.namedCredential-meta.xml) — Defines the simulator’s placeholder endpoint
