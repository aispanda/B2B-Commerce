# ROUTE-01: Implement Connected Commerce order routing POC

Guide: [NEW delivery guide](https://github.com/aispanda/Reusable-Delivery/blob/2b915c38dc21b793f9ed4aee9230c613991e79d1/new/DELIVERY.md) · Revision 10 · 16 November 2026  
Status: Package installed. Checkout reservations and end-to-end routing passed for single-location and split-location scenarios. The shortage test verified a failed attempt and automatic recovery after restocking. Final exception, manual recovery, independent review and human acceptance remain pending.

**Outcome:** As an order operations user, route test orders to suitable fulfillment locations using Salesforce's Connected Commerce Order Routing and Omnichannel Inventory.

**Current state:** Commerce Order Routing 258.0 is installed. Both checkout and routing tests completed with the expected warehouse allocations. The dedicated second warehouse and its test SKU are synced to OCI.

## Execution checklist

Run one eligible task at a time. The executor checks the input and current org state, performs the bounded operation, compares the result with the expected output, and records Pass, Fail, or NOT RUN with evidence. On failure, record the mismatch and smallest corrective step. Reconcile partial effects before retrying. Start the next task only when its prerequisites pass.

**Executor assignments.** Codex (GPT‑6.1 Sol) owns the tasks assigned to it below. Use Medium reasoning for access checks and routine configuration, and High for flow analysis, debugging, and diagnosis. The review uses a fresh GPT‑6.1 Sol session with High reasoning. The accountable owner is pending. The business requester records the POC acceptance decision.

| Task / processing type | Executor | Inputs and dependency | Expected output and pass check | Guidance |
| --- | --- | --- | --- | --- |
| S-01 · Verify platform access · Read-only | Codex | Intended POC org, approved MCP connection and CLI alias | Successful Headless 360 and CLI reads verified against the same org. Record evidence privately. | [MCP recovery][mcp], [CLI recovery][cli] |
| S-02a · Inventory existing setup · Read-only | Codex | S-01, Setup Assistant, Installed Packages, and Flows | Record OMS/OCI entitlements, routing package/version, active triggers, running identities, and existing Order Summary and Fulfillment Order automation. Identify overlaps and choose the supported package path. | [Prerequisites][prereq], [Routing flows][routing] |
| S-02b · Verify OCI readiness · Configuration and readback | Codex | S-02a, OCI settings, permissions, and intended B2B store | Resolve the reported Expired status or document why it is stale. Confirm the intended role can use OCI and the store can use the planned inventory source. If access or provisioning fails, record the exact blocker before routing installation. | [OCI setup][oci], [Prerequisites][prereq] |
| S-03a · Design test fixtures · Test design | Codex | S-02b, product catalog, existing locations, and downstream integrations | Fixture matrix with two synthetic SKUs, two eligible locations in a group, stock quantities, expected routes and exception cases. Verify test effects stay within the POC and use simulated downstream services. | [Location graph][graph], [Automated routing][auto] |
| S-03b · Seed fixture inventory · Configuration and data setup | Codex | S-03a fixture matrix and intended store | Test locations and group are synced. Inventory lookup returns the expected quantities by SKU and location. Record the baseline for test reconciliation. | [OCI setup][oci], [Location graph][graph] |
| S-04a · Install package · Setup | Codex | S-02a/S-02b pass, S-03b baseline, intended POC org | Installed package and version read back. Reuse the matching installed package if present. Record component names and activation state, including any flows activated by installation. | [Install Connected Commerce Order Routing][install] |
| S-04b · Inspect flow contracts · Flow analysis | Codex | S-04a, installed components and existing automation | Map flow versions, triggers, inputs, outputs, filters, subflows, OCI actions, and faults to the routing journey. Identify which paths are eligible for Flow Builder testing and which need their normal trigger. | [Routing flows][routing], [OCI routing actions][actions], [Debug considerations][debug] |
| S-04c · Configure and activate · Setup | Codex | S-04b map, verified inventory source, and test scope | Read back required flow versions, entry criteria, and relevant settings. Verify routing has one entry path for the test orders and record the previous configuration for recovery. | [Routing flows][routing], [OCI setup][oci] |
| S-05a · Trace flow logic · Debug/Test Mode | Codex | S-04c versions, eligible fixture and expected branches | Record actual inputs, decisions, action outputs, and faults. Use the supported debug/test mode and rollback where available. Verify external side effects before running. Use the normal trigger and logs for unsupported paths. | [Flow Builder debugger][builder], [Debug considerations][debug] |
| S-05b · Route a single-location order · End-to-end test | Codex | S-05a pass, fresh eligible PO test order, one location can fill it | One expected route and linked fulfillment order for the correct locations, SKUs, and quantities. Reconcile Order Summary and OCI reservation before and after. | [Automated routing][auto], [OCI routing actions][actions] |
| S-05c · Route a split order · End-to-end test | Codex | S-05b pass, fresh order and stock that requires two locations | Verify the configured policy allows the split, the route uses the expected locations, and fulfillment/reservation quantities sum to the order with no duplicates. | [Automated routing][auto], [OCI routing actions][actions] |
| S-05d · Exercise insufficient stock · Failure test | Codex | S-05c pass, fixture that reaches the routing failure path | Trace the failed route to its process exception and verify no unintended fulfillment or reservation change. If checkout blocks the order first, record that result and use an eligible routing fixture to exercise the exception separately. | [Routing flows][routing], [OCI routing actions][actions] |
| S-05e · Recover the failed order · Intended-role test | Codex | S-05d exception, suitable corrected stock and authorized operations role | Open the supported manual recovery screen as the intended role. Verify the resulting fulfillment orders rejoin the routing process once and reconcile inventory. | [Routing flows][routing] |
| S-06a · Review results · Independent verification | Fresh GPT‑6.1 Sol session | S-05 evidence, active configuration readback, and AC-01 through AC-05 | Record findings and disposition by criterion. Send any mismatch back to the relevant task for correction and recheck. | [Delivery guide][guide] |
| S-06b · Decide acceptance · Human review | Business requester | S-06a findings and POC demo evidence | Record accepted, changes requested, or pending with the decision source. | [Delivery guide][guide] |

### Next eligible task · S-01

- **Executor** — Codex, GPT‑6.1 Sol, Medium reasoning. Use the approved Headless 360 MCP client and installed Salesforce CLI.
- **Input** — Confirm the intended org and existing connection from the restricted project access notes. Use the current executor session.
- **Operation** — Discover and describe a minimal Headless 360 read, then dispatch it read-only. Check the CLI org list privately and run `sf org list limits --target-org <alias> --json`.
- **Output and check** — Record tool, target match, timestamp, and sanitized result. Both reads must pass before S-02a. Access verification permits only the scoped read operations in this task.
- **Recovery** — If the MCP tool list is stale, follow the reconnect guide and refresh the session before retrying once. If a read still fails, record the exact redacted error and resume condition. Keep the task open.
- **Actual, 16 November 2026** — PASS: Headless 360 discover, describe and read-only Organization query matched the intended POC. Salesforce CLI org list and limits read matched the same org and passed. Metadata Experts was not exposed in this session and is not required for this read. S-02a is in progress. OCI Availability API access returned true and one enabled location group was listed. The installed-package list contained no plainly named routing package; the Setup Assistant previously reported Not Installed. Unmanaged components and current triggers still need inspection.

## Setup diagnostics · 16 November 2026

- **S-02a:** Reviewed installed packages and active flow definitions. Found checkout subflows and order tax event automation. No routing package or active fulfillment-routing flow was identified in those reads. Install status in Setup Assistant remains Not Installed.
- **S-02b:** The demo store shows its OCI integration enabled and uses its location group as the inventory source. A read of a stocked demo SKU returned 100 units available to order and fulfill at both group and warehouse levels. This verifies the admin availability path. Buyer reservation and order routing remain untested. The Setup Assistant job's expiration cause was not exposed in the UI.
- **Retry side effects:** Attempted navigation triggered Basic Setup Retry. The audit trail shows changes to the Commerce Account, Order and Product layouts and Commerce Account Lightning page, plus recalculation of the Commerce Shopper permission set group. No pre-retry versions were identified in the workspace. Compare against a known good version before restoring any metadata.
- **Next:** Verify the affected pages and shopper access, then prepare the isolated two-location fixture for S-03. Use the current store inventory evidence to guide manual checks rather than repeating the broad setup retry.

## Checkout and routing execution · 16 November 2026

- **S-03:** A dedicated second warehouse was added and published to OCI. Existing demo stock was preserved. A new $1 synthetic SKU was added to the demo catalog and stocked only at the second warehouse (five units). The first test SKU was stocked only at the original warehouse.
- **S-04:** Salesforce Setup Assistant shows Order Routing Installed. The installed package list confirms Commerce Order Routing 258.0. Schedule Routing, Determine Route by Splits, and Execute Routing were active after installation. Determine Route by Splits and Distance was inactive. The active flow metadata shows that route selection and execution use scheduled paths.
- **S-05b:** An isolated buyer placed one synthetic purchase order for one stocked item. OCI group availability went from 100 available and zero reserved to 99 available and one reserved. The order and one Order Summary were created. The routing schedule completed, and its transfer instruction selected the original warehouse for one item. Salesforce subsequently recorded execution as successful with zero connection failures. FO-0013 was Allocated at the original warehouse for one test unit and the shipping line.

- **S-05c:** A separate isolated PO with one unit of each SKU activated and produced one Order Summary. OCI group availability fell from 99 to 98 for the original SKU and from 5 to 4 for the new SKU, increasing reserved quantities by one each. The schedule completed and both transfer executions succeeded with zero connection failures. FO-0014 allocated one test-supply unit at the second warehouse. FO-0015 allocated one sensor unit and the shipping line at the original warehouse.

## Shortage and recovery investigation · 16 November 2026

- **S-05d PARTIAL:** PO 00000134 / Order Summary 1Osbm000004YSvdCAG reserved two synthetic units at the location group. Temporarily reducing the dedicated test warehouse on-hand from 5 to 1 produced zero available-to-fulfill at the two locations; the first routing attempt found no route and scheduled a retry one day later. No fulfillment order was created.
- The test-only schedule OSRS-0003 was advanced to 03:26:50 UTC on 17 November to exercise retry promptly. Salesforce Time-Based Automations showed it queued beyond the scheduled time. Test warehouse on-hand was restored to 5; the group held 3 reservations and the warehouse 1 at the last check. The retry completed after restocking. The order had two attempts and one allocated fulfillment order (FO-0016) for both units at the test warehouse. No process exception was created. This verifies automatic recovery after restocking. Use a fresh shortage fixture for the terminal exception and manual recovery tests.
- **S-05e PARTIAL:** As Rajeev, opened the active Create Fulfillment Orders screen using an Order Summary record and verified product selection appears. It is absent from the current Order Summary Actions & Recommendations Add menu. No manual fulfillment was submitted; manual recovery requires a fresh order that reached the exception state.
- **Outstanding:** Capture the actual process exception after retry exhaustion and verify manual recovery and reservation transfer once, including a supported way for operations users to launch it. Do not treat the first failed attempt or opening the screen as a pass for either scenario.

## Proposed test fixtures

These are synthetic cases for S-03a. Confirm isolation and actual stock before use. Use fresh orders for each case.

| Case | Starting stock and order | Expected evidence |
| --- | --- | --- |
| Single location | Location A has 10 units each of SKU X and Y. Location B has 10 of Y only. Order 4 of X and 4 of Y. | A fulfills both lines. Verify the linked fulfillment order and the reservation quantities for both SKUs. |
| Split | Location A has 10 of X only. Location B has 10 of Y only. Order 4 of each SKU. | If the configured policy permits one split, A fulfills X and B fulfills Y. Totals match the order. |
| No route | Use a synthetic order with a valid reservation and a controlled fulfillment-location shortage, if supported by the confirmed OCI setup. | Capture the routing exception and reconcile reservations. Record a checkout rejection separately if the order never reaches routing. |
| Manual recovery | Reuse the no-route exception after making a suitable location available. | Verify the operations user can create fulfillment orders through the supported screen and they rejoin the process once. |

## Acceptance checks

- **AC-01:** Required access, entitlements, existing automation and OCI readiness are verified; blockers are documented. NOT RUN.
- **AC-02:** Synthetic inventory and location fixtures support the planned scenarios. NOT RUN.
- **AC-03:** The suitable package and flows are installed/configured and activated without duplicate routing. NOT RUN.
- **AC-04:** Debug and end-to-end tests show the expected routing, reservation and fulfillment-order outcomes, including an exception and recovery. Unsupported debug paths are recorded and tested through their supported entry point. Single and split storefront scenarios passed. Insufficient-stock routing and manual recovery PARTIAL; process exception and manual creation remain NOT RUN.
- **AC-05:** Evidence, independent review and acceptance decision are recorded. NOT RUN.

[guide]: https://github.com/aispanda/Reusable-Delivery/blob/2b915c38dc21b793f9ed4aee9230c613991e79d1/new/DELIVERY.md
[mcp]: https://github.com/aispanda/Reusable-Delivery/blob/2b915c38dc21b793f9ed4aee9230c613991e79d1/docs/salesforce-mcp.md
[cli]: https://github.com/aispanda/Reusable-Delivery/blob/2b915c38dc21b793f9ed4aee9230c613991e79d1/docs/salesforce-cli.md
[prereq]: https://help.salesforce.com/s/articleView?id=commerce.comm_csa_automations_features.htm&type=5
[oci]: https://help.salesforce.com/s/articleView?id=commerce.oci_impl_implement_b2b_d2c.htm&type=5
[graph]: https://help.salesforce.com/s/articleView?id=commerce.oci_impl_create_location_graph_b2b_d2c.htm&type=5
[install]: https://help.salesforce.com/s/articleView?id=commerce.om_impl_order_routing_flow.htm&type=5
[routing]: https://help.salesforce.com/s/articleView?id=commerce.om_routing_flows_dom.htm&type=5
[auto]: https://help.salesforce.com/s/articleView?id=sf.om_automated_order_routing.htm&type=5
[actions]: https://help.salesforce.com/s/articleView?id=commerce.om_routing_with_omnichannel_inventory.htm&type=5
[debug]: https://help.salesforce.com/s/articleView?id=platform.flow_considerations_troubleshooting.htm&type=5
[builder]: https://help.salesforce.com/s/articleView?id=platform.flow_test_debug.htm&type=5
