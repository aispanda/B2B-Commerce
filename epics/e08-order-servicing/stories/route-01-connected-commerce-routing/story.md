# ROUTE-01: Implement Connected Commerce order routing POC

Guide: [new/DELIVERY.md @ 2b915c3](https://github.com/aispanda/Reusable-Delivery/blob/2b915c38dc21b793f9ed4aee9230c613991e79d1/new/DELIVERY.md) · route NEW  
Revision/status/as-of: Revision 3 · 16 November 2026 · Documentation: execution checklist and solution documented · Build: NOT RUN · Test: NOT RUN · Acceptance: Pending  
Origin: **Pending — missing item.** The originating request reference is not recorded here; add it (restricted index if client-identifying).  
Accountable owner: **Pending — missing item**

## Current state

- **Verified (earlier session, needs recheck):** The target POC's Commerce Setup Assistant reported routing *Not Installed* and Order Management *Complete*. The OCI switch was on, but the assistant's OCI setup attempt showed *Expired*. A Salesforce CLI read passed. Headless 360 authenticated, but its tools were unavailable in that session.
- **Unverified:** OCI add-on entitlement and readiness, any installed routing package, existing Order Summary / Fulfillment Order automation.
- **Next eligible step:** S-01 · Verify platform access · Codex (GPT‑6.1 Sol, Medium).
- **Independent verification:** NOT RUN (S-06a). **Human acceptance:** required (business requester records the POC decision, S-06b); actual decision Pending.

## Outcome and scope

As an order operations user, I want test orders routed automatically to suitable fulfillment locations using Salesforce's Connected Commerce Order Routing and Omnichannel Inventory (OCI), so that fulfillment orders and inventory reservations are created for the right locations, and orders that cannot be routed reach a manual recovery path.

- **In scope:** Connected Commerce Order Routing package (B2B/D2C), OCI reservation lifecycle for routed orders, single-location, split and insufficient-stock cases, the supported manual recovery screen flow, synthetic fixtures in the POC org.
- **Excluded:** production orgs; real customer, product or inventory data; B2C Commerce; Growth Order Routing (proposal — choose only if S-02a finds Connected Commerce unsuitable); returns, exchanges and reshipment reservations; changes to OAuth scopes or security settings.
- **Assumptions (verify in S-02a/S-02b):** Order Management license present; OCI add-on licensed; the intended B2B store can use OCI as its inventory source.
- **Dependencies:** approved Headless 360 MCP connection and Salesforce CLI alias for the POC org (restricted access notes); authorization to install packages and activate flows in the POC org (**Pending — confirm reference** before S-04a).

## Acceptance criteria

| ID | Agreed criterion and observable expected result | Check/evidence | Result |
|---|---|---|---|
| AC-01 | Required access, entitlements, existing automation and OCI readiness are verified; blockers are documented. | S-01, S-02a, S-02b readbacks recorded privately with sanitized summary | NOT RUN |
| AC-02 | Synthetic inventory and location fixtures support the planned scenarios. | S-03a matrix; S-03b availability readback by SKU and location | NOT RUN |
| AC-03 | The suitable package and flows are installed/configured and activated without duplicate routing. | S-04a package/version readback; S-04b flow map; S-04c single-entry-path readback | NOT RUN |
| AC-04 | Debug and end-to-end tests show the expected routing, reservation and fulfillment-order outcomes, including an exception and recovery. Unsupported debug paths are recorded and tested through their supported entry point. | S-05a–S-05e traces, before/after reservation and fulfillment-order reconciliation | NOT RUN |
| AC-05 | Evidence, independent review and acceptance decision are recorded. | S-06a findings table; S-06b decision with source | NOT RUN |

## Solution

**Approach.** Install the Salesforce-supplied routing package rather than building routing flows. For B2B/D2C, Salesforce installs it from **Commerce Setup Assistant → Additional Setup → install the order routing package** ([Install Connected Commerce Order Routing][install]). Growth Order Routing is a separate two-link package for orgs with the Growth license ([Install Growth Order Routing][growth]); it is the fallback only if S-02a shows Connected Commerce is not applicable.

**How the routing works (documented behavior, not yet observed in this org).**
1. Automated routing flows pick up order summaries and route their **inventory reservations** to fulfillment locations ([Routing via Flows][routing]).
2. **Find Routes with Fewest Splits** finds the smallest location set that can fill the order: single locations first, then pairs, trios; optional maximum splits; bounded at 1,000,000 iterations or 10,000 results ([Automated Order Routing][auto]).
3. **Order Routing Rank by Average Distance** ranks those sets by straight-line distance from each location's Visitor Address to the recipient postal code ([Automated Order Routing][auto]).
4. With OCI, *Find Routes with Fewest Splits Using OCI* combines availability lookup and split search ([Connect API resource][fewest-oci]).
5. When routing fails, the process creates a **process exception**; a user runs the included screen flow to create fulfillment orders manually, and an automated flow returns them to the main process ([Routing via Flows][routing]). Rerouting uses the Order Summary Routing Schedule object and the Order Summary Routing Attempts field ([Routing via Flows][routing]).

**OCI reservation lifecycle** ([Routing with Omnichannel Inventory][actions], [OCI Flow core actions][oci-actions]):

| Moment | OCI action | Effect to reconcile in tests |
|---|---|---|
| Availability check | Get Availability | ATF, ATO, on hand, reserved, safety stock per location or group (≤100 products × ≤100 locations) |
| Order placed | Create Reservation | Reserved at location or location group |
| Route chosen | Transfer Reservation | Source: Reserved → On Hand; destination: On Hand → Reserved; optional all-or-nothing |
| Shipped | Fulfill Reservation | Removes Reserved; **location only, never a group** |
| Cancelled or unroutable | Release Reservation | Reserved → On Hand at location or group |

**Platform interfaces.** The same Order Management operations are exposed as Flow core actions, standard invocable actions (`/services/data/vXX.X/actions/standard/<action>`), Connect REST resources and Apex `ConnectApi` methods; flow inputs/outputs map to `ConnectApi` classes ([Order Management actions][om-actions]). Order Management actions need API 48.0+ and the Order Management license; OCI actions need API 52.0+ and the separately purchased OCI add-on ([OCI Flow core actions][oci-actions]).

**Risks and failure behavior.**
- Duplicate routing if existing custom fulfillment automation stays active alongside the package (S-02a, S-04c).
- Package installation may activate flows on install; S-04a records activation state before any test order.
- Reservation drift: fulfillment at a group is unsupported; quantities must be reconciled before and after every test (S-05b–S-05e).
- Checkout may block insufficient-stock orders before routing; S-05d then needs a routing-eligible fixture.

**Limits of sources.** Help pages describe intended behavior; none list the package's component names. The Spring '21-era demo flow "Create Fulfillment Order OmniChannel Inventory" was not found in current documentation; whether the package contains it or a successor is answered only by S-04a readback. OCI handling of returns and reship is undocumented in the pages read and is out of scope.

## Execution

Run one eligible step at a time: check inputs and current org state, perform the bounded operation, compare the result with the expected output, record Pass, Fail or NOT RUN with evidence. On failure, record the mismatch and smallest corrective step; reconcile partial effects before retrying. Codex uses Medium reasoning for access checks and routine configuration and High for flow analysis, debugging and diagnosis.

| Step | Action / AC IDs | Dependencies | One executor; model + reasoning / tool | State / result link |
|---|---|---|---|---|
| S-01 | Verify platform access · read-only · AC-01 · Guidance: [MCP][mcp], [CLI][cli] | Intended POC org, approved MCP connection, CLI alias | AI · GPT‑6.1 Sol · Medium; Headless 360 MCP + Salesforce CLI | Pending |
| S-02a | Inventory existing setup (entitlements, routing package/version, active triggers, running identities, existing Order Summary/Fulfillment Order automation); choose package path · read-only · AC-01 · Guidance: [Prerequisites][prereq], [Routing flows][routing] | S-01 | AI · GPT‑6.1 Sol · Medium | Pending |
| S-02b | Verify OCI readiness; resolve or explain *Expired*; confirm role and store inventory source · configuration and readback · AC-01 · Guidance: [OCI setup][oci], [Prerequisites][prereq] | S-02a | AI · GPT‑6.1 Sol · Medium | Pending |
| S-03a | Design fixture matrix: two synthetic SKUs, two locations in one group, quantities, expected routes and exception cases; simulated downstream services · AC-02 · Guidance: [Location graph][graph], [Automated routing][auto] | S-02b | AI · GPT‑6.1 Sol · High | Pending |
| S-03b | Seed fixture inventory; sync locations and group; record availability baseline · AC-02 · Guidance: [OCI setup][oci], [Location graph][graph] | S-03a | AI · GPT‑6.1 Sol · Medium | Pending |
| S-04a | Install or reuse routing package; read back package, version, components and activation state · AC-03 · Guidance: [Install][install] | S-02a, S-02b, S-03b; install authority | AI · GPT‑6.1 Sol · Medium | Pending |
| S-04b | Map flow versions, triggers, inputs/outputs, filters, subflows, OCI actions and faults; mark debug-eligible paths · AC-03, AC-04 · Guidance: [Routing flows][routing], [OCI actions][actions], [Debug considerations][debug] | S-04a | AI · GPT‑6.1 Sol · High | Pending |
| S-04c | Configure and activate; confirm one entry path for test orders; record prior configuration for recovery · AC-03 · Guidance: [Routing flows][routing], [OCI setup][oci] | S-04b | AI · GPT‑6.1 Sol · Medium | Pending |
| S-05a | Trace flow logic in supported Debug/Test mode with rollback · AC-04 · Guidance: [Flow debugger][builder], [Debug considerations][debug] | S-04c, eligible fixture | AI · GPT‑6.1 Sol · High | Pending |
| S-05b | Route a single-location order; reconcile reservation and fulfillment order · AC-04 · Guidance: [Automated routing][auto], [OCI actions][actions] | S-05a | AI · GPT‑6.1 Sol · High | Pending |
| S-05c | Route a split order; quantities sum to order, no duplicates · AC-04 · Guidance: [Automated routing][auto], [OCI actions][actions] | S-05b | AI · GPT‑6.1 Sol · High | Pending |
| S-05d | Exercise insufficient stock; trace to process exception; no unintended reservation or fulfillment change · AC-04 · Guidance: [Routing flows][routing], [OCI actions][actions] | S-05c | AI · GPT‑6.1 Sol · High | Pending |
| S-05e | Recover the failed order through the manual screen flow as the intended operations role (browser tool); fulfillment orders rejoin once; inventory reconciles · AC-04 · Guidance: [Routing flows][routing] | S-05d, corrected stock, authorized role | AI · GPT‑6.1 Sol · High; Playwright or browser tool | Pending |
| S-06a | Independent review of evidence against AC-01–AC-05 · AC-05 · Guidance: [Delivery guide][guide] | S-05 evidence, configuration readback | AI · fresh GPT‑6.1 Sol session · High | Pending |
| S-06b | Decide POC acceptance · AC-05 · Guidance: [Delivery guide][guide] | S-06a findings, demo evidence | Human · business requester (**Pending — name**) | Pending |

### Next step: S-01

- **Accountable owner; one executor:** Pending; Codex.
- **Model and reasoning:** GPT‑6.1 Sol · Medium.
- **Inputs:** intended org and existing connection from the restricted project access notes; this guide revision's [MCP recovery][mcp] and [CLI recovery][cli] guides only if a check fails.
- **Operation/output:** Headless 360 MCP — discover, describe a minimal read, dispatch it read-only. CLI — check `sf org list --json` privately, then run `sf org list limits --target-org <ALIAS> --json`. Output: tool, target match, timestamp and sanitized result.
- **Check:** AC-01 (access portion). Both reads return successfully against the same intended org. Evidence kept in restricted storage; sanitized summary here.
- **Authority/boundary:** read-only operations only. No OAuth scope, security-setting or configuration change.
- **Limits/recovery:** if the MCP tool list is stale, follow the reconnect guide, refresh the session and retry once. If a read still fails, record the redacted error and resume condition; keep S-01 open and block S-02a onward.
- **Actual:** NOT RUN. Prior CLI probe passed, but authenticated Headless 360 tools were absent from that session (historical).

## Review and decisions

| Finding/decision | Reviewer, model + reasoning and reviewed revision/scope | Disposition/repair | Recheck/evidence |
|---|---|---|---|
| D-01 Use the Salesforce routing package rather than custom routing flows | Maker proposal (Claude Opus 5.5, revision 3) | Proposed; accountable owner to confirm | NOT RUN |
| D-02 Connected Commerce over Growth Order Routing | Maker proposal (Claude Opus 5.5, revision 3) | Proposed; confirm after S-02a licensing readback | NOT RUN |
| R-01 Revision 3 template alignment | Maker review (Claude Opus 5.5, human-reader and AI-execution perspectives) | Added missing guide sections, solution and sources; kept task IDs and AC wording | Independent review NOT RUN |

## Blockers and history

- **Open gaps (Pending):** accountable owner; origin reference; install/activation authority for the POC org; business requester name; ClickUp item link and sync.
- **Revision 3 (16 November 2026):** restructured to guide sections at the same guide SHA; added Origin/owner headers, user story, AC table, Solution with documented routing and reservation behavior, Review and decisions, Files. Corrected the Automated Order Routing link to the `commerce.` article. No criterion wording or task IDs changed; all checks remain NOT RUN.
- **Revision 2 (historical):** execution checklist documented.

## Files

- [story.md](story.md) — story, solution and execution record

[guide]: https://github.com/aispanda/Reusable-Delivery/blob/2b915c38dc21b793f9ed4aee9230c613991e79d1/new/DELIVERY.md
[mcp]: https://github.com/aispanda/Reusable-Delivery/blob/2b915c38dc21b793f9ed4aee9230c613991e79d1/docs/salesforce-mcp.md
[cli]: https://github.com/aispanda/Reusable-Delivery/blob/2b915c38dc21b793f9ed4aee9230c613991e79d1/docs/salesforce-cli.md
[prereq]: https://help.salesforce.com/s/articleView?id=commerce.comm_csa_automations_features.htm&type=5
[oci]: https://help.salesforce.com/s/articleView?id=commerce.oci_impl_implement_b2b_d2c.htm&type=5
[graph]: https://help.salesforce.com/s/articleView?id=commerce.oci_impl_create_location_graph_b2b_d2c.htm&type=5
[install]: https://help.salesforce.com/s/articleView?id=commerce.om_impl_order_routing_flow.htm&type=5
[growth]: https://help.salesforce.com/s/articleView?id=commerce.om_impl_growth_order_routing_flow.htm&type=5
[routing]: https://help.salesforce.com/s/articleView?id=commerce.om_routing_flows_dom.htm&type=5
[auto]: https://help.salesforce.com/s/articleView?id=commerce.om_automated_order_routing.htm&type=5
[actions]: https://help.salesforce.com/s/articleView?id=commerce.om_routing_with_omnichannel_inventory.htm&type=5
[oci-actions]: https://help.salesforce.com/s/articleView?id=platform.flow_ref_elements_oci_actions_list.htm&type=5
[om-actions]: https://developer.salesforce.com/docs/platform/api-action/guide/actions-obj-order-management.html
[fewest-oci]: https://developer.salesforce.com/docs/atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_routing_find_routes_with_fewest_splits_using_oci.htm
[builder]: https://help.salesforce.com/s/articleView?id=platform.flow_test_debug.htm&type=5
[debug]: https://help.salesforce.com/s/articleView?id=platform.flow_considerations_troubleshooting.htm&type=5
