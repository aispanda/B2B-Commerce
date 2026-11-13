# D05: Process a fulfilled return with managed RMA

As a Customer Care agent, I want to authorize a return, record receipt and close an RMA so credit processing reflects the items received.

**Demo result, 13 November 2026.** One unit passed the receipt-first Lightning demo. Salesforce closed the return, posted a $12.50 credit memo and processed a simulated $12.50 refund. The user directed [ClickUp closure for this demo](reviews.md#demo-closeout) after the bounded result was reported. Full AC-02 coverage and verification as the intended Customer Care user remain open. Rejection, fees, store credit and live payments were outside the demo.

## Acceptance criteria

| ID | Agreed criterion | Observed demo result |
|---|---|---|
| AC-01 | From a fictional fulfilled managed line, an agent selects item, eligible quantity and reason and creates one RMA with a trackable reference. | A one-unit submission through RMA Return Items created one trackable Return Order. |
| AC-02 | Receipt and close record the actual returned quantity and status. Partial receipt or ineligible/unfulfilled quantity is handled without duplicating a return or promising a credit early. | Demo passed with expected 1, received 1, rejected 0 and returned 1. Partial receipt and ineligible/unfulfilled checks are **NOT RUN**. See RMA-06. |
| AC-03 | Capture Order Summary, RMA and return line state before and after. Reconcile any credit event with the credits story. | Reconciled Order Summary, Return Order and line, credit memo, and the refund against the fixture payment. D05 verified simulated funds. See [D07](../d07-credits-refunds/README.md) for separate finance acceptance. |

## Build and test

For user acceptance, run the Lightning steps through Playwright or another browser tool while signed in as the intended Customer Care user. Use Salesforce MCP or CLI for backend checks. The historical Lightning demo used an authenticated test session. The intended user and profile were not independently established for that run.

| Step | Action / criteria | Dependencies | One executor and tools | Result / evidence |
|---|---|---|---|---|
| RMA-00 | Verify target access and run the [preflight](demo-kit/README.md#preflight). | Authorized isolated org and credentials | D05 AI coordinator, Salesforce MCP and CLI | Read-only probes passed on 12 November. See [execution evidence](reviews.md#execution-evidence). |
| RMA-01 | Verify the standard **RMA Return Items** and **RMA Create Credit Memo and Ensure Refunds** flows and action. AC-01–03 | RMA-00 for a new run | D05 AI discovery agent, Salesforce Setup | Flows and action observed. See [execution evidence](reviews.md#execution-evidence). |
| RMA-04 | Confirm entitlement, intended persona and fixture eligibility. AC-01–03 | RMA-00, RMA-01, target entitlement and demo actor | D05 AI coordinator, Salesforce MCP and CLI | Read-only readiness check completed. A separate synthetic fixture enabled the demo. Intended-user access remains unverified. |
| RMA-05 | Apply the [layout selections](demo-kit/README.md#layouts) and run the [synthetic fixture setup](demo-kit/README.md#fixture). AC-01–03 | RMA-01, RMA-04 readiness, target layouts and eligible test inputs | D05 AI demo operator, Salesforce CLI | Layouts and paid fulfillment fixture verified for the [demo](reviews.md#demo-verification). |
| RMA-02 | In Lightning, open the fixture Order Summary. Run **RMA Return Items**, select one fulfilled unit and an allowed reason, review $12.50, submit once and finish. Open **Related → Return Orders → return → Related → Return Order Line Items**. Set **Quantity Received** to 1 and leave **Quantity Rejected** at 0. Save **Status** as **Closed** on the parent return. Check **Setup → Time-Based Automations** if the scheduled path is queued. AC-01–02 | RMA-05 and a Lightning session with access | D05 AI demo operator, browser | One return created, received and closed in the [demo](reviews.md#demo-verification). |
| RMA-03 | In Lightning, follow **Credit Memos → Credit Memo Lines**, **Invoices → Payment Line Invoices**, and **Order Payment Summary → Refunds**. Use **View All** where cards truncate columns. Retain UI evidence. AC-01–03 | RMA-02 and scheduled processing complete | D05 AI demo operator, browser | Navigation, credit memo and simulated refund verified in the [demo](reviews.md#demo-verification). |
| RMA-03A | Run the [reconciliation command](demo-kit/README.md#verification) and retain backend results. AC-03 | RMA-02 and scheduled processing complete | Verification runner, Salesforce CLI | Passed against the completed [demo fixture](reviews.md#demo-verification). |
| RMA-06 | Repeat the one-unit Lightning acceptance path as the intended Customer Care user. Test partial receipt and ineligible/unfulfilled quantity and check for duplicate returns or premature credit. AC-01–03 | Approved scenario, eligible isolated fixtures and intended-user access | One assigned verifier, browser. If AI, record model and reasoning before dispatch. | **NOT RUN**. Retained here for D05 acceptance follow-up. |

The recorded plan for RMA-00 and RMA-04 was GPT-6.1 Sol, extra-high reasoning. RMA-01 used the workspace default with no exact plan recorded. The precise planned model and reasoning for RMA-05, RMA-02 and RMA-03 were not established in the run evidence. Exact runtime model identities remain unverified.

Reconciliation for this fixture requires one returned unit, a $12.50 Order Summary total, one posted $12.50 credit memo with $0 balance, one processed $12.50 refund against the simulated payment, $12.50 remaining refundable and zero process exceptions. The Refund page should show **Simulated refund - no money moved**. If the result is ambiguous, inspect the scheduled path and existing return, exception and financial records before retrying.

See [review findings and rechecks](reviews.md).

## Files

Inventory verified at demo closeout.

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
