# CONS-POC-01 · Demonstrate hospital consignment from receipt through consumption

Guide · [new/DELIVERY.md at 9d32dccc738cc544481a6da257c13d438115f122](https://github.com/aispanda/Reusable-Delivery/blob/9d32dccc738cc544481a6da257c13d438115f122/new/DELIVERY.md) · NEW

Revision 0.3 · 12 November 2026 · Salesforce source published for review. Offline checks passed. Salesforce acceptance checks NOT RUN. ClickUp sync pending.

Origin · Current consignment demo brief and SRC16 order-scenarios workbook. Related work · [E02 consignment ordering](../../README.md), O05 eligibility and O06 fill-up. This new story covers a records-only demonstration and has its own acceptance criteria.

Accountable owner · Pending assignment. Demo administrator, presenter and independent reviewer · Pending assignment.

## Current state

The [scenario and record design](scenario.md) traces one accepted fill-up through fulfillment, delivery, hospital receipt, consumption review and simulated billing. The [Salesforce source project](salesforce/sfdx-project.json) implements the two proposed objects, their layouts and Consumption Path. The [build plan](build-plan.md) records the package review and live test. CLI and Headless 360 matched the intended Developer Edition org in fresh read-only probes. Product Item and Product Consumed were unavailable to the CLI connection. The read-only query found zero visible 10-box Shipment Items on Delivered shipments. A qualifying delivered fixture and authority for org writes are pending.

Independent offline package review passed. Independent Salesforce runtime verification · NOT RUN. Human acceptance · Pending. Acceptance owner and review decision pending.

## Outcome and scope

As a consignment coordinator, I want to demonstrate how a hospital's fill-up shipment becomes consigned stock and how reported usage advances to billing readiness, so the team can validate the record model and the review experience in Salesforce.

The demo uses one fictional account, site and SKU with a supported Salesforce Order Management fixture. It starts from an accepted fill-up order with 10 boxes, a blank optional PO and $0 due. Each box contains one infusion set. Hospital care staff use three sets from three boxes, and the hospital stockroom reports the use. The supplier’s consignment coordinator verifies and posts the usage. Confirmed stock falls from ten to seven. The supplier’s billing clerk separately makes the three used boxes ready to bill at $24 each, or $72 before tax.

Scope is limited to records, layouts, statuses and native formulas and roll-ups. The current production workbook keeps SAP as the source of fulfillment, consumption and billing. Salesforce displays the returned shipment and read-only consumption data. Buyer checkout changes, SAP integration, Field Service enablement, actual billing, automated replenishment and production stock enforcement are outside this demo. Manual replenishment, unused-stock pickup and corrections are traced as follow-on scenarios in the design.

## Acceptance criteria

The stable IDs below are proposed for this demo. The fill-up behavior and production ownership are carried forward from SRC16. The custom object names, manual stage names, sample amounts and simulated invoice reference are design choices for review.

| ID | Observable expected result | Check and evidence | Result |
|---|---|---|---|
| AC-01 | The presenter can trace a fictional accepted fill-up for 10 boxes from the order to the correct Fulfillment Order, Fulfillment Order Product, Shipment and Shipment Item. The fixture has one hospital destination, an empty PO and $0 due. | Capture the synthetic fixture mapping and matched account, site, SKU, quantities, status and amount. | NOT RUN |
| AC-02 | The presenter can distinguish Shipped from Delivered and post a receipt only after verifying delivery evidence. The posted receipt references the exact Shipment Item and moves the stock from zero to 10 boxes. | Record the shipment and receipt states, the linked line, and the stock balance before and after posting. | NOT RUN |
| AC-03 | The Consumption Path guides **Reported → Verified → Posted Usage**. The stock page shows 10 last confirmed and 3 awaiting posting during review. Posting shows 7 confirmed and 0 awaiting posting while Billing Status is still **Not Ready**. | Capture the intended internal role, record access and page state. Compare the entered report and calculated amounts to the fixture. | NOT RUN |
| AC-04 | The billing clerk marks posted usage **Ready to Bill** for $72 before tax (3 × $24) and records a fictional invoice reference for **Billed (Demo)**. Both transitions leave 7 on hand. Unposted usage cannot advance to Ready to Bill. | Compare the stock and movement before and after marking Billed (Demo). Inspect the synthetic reference on the record. | NOT RUN |
| AC-05 | Replaying the same receipt or usage key leaves one movement, its current status, and any demo invoice reference intact. A report voided before posting contributes zero. | Replay the identical seed keys through the chosen load path. Count matching records and compare status, invoice evidence and balances. Void the separate unposted fixture and read the roll-ups. | NOT RUN |
| AC-06 | The walkthrough uses the two custom record pages and existing Order Management pages. The stock page shows site, SKU, balances and movement history. The receipt layout shows source shipment evidence and the consumption layout shows review and billing evidence. | Open each page using the intended internal demo role. Record which fields, related records and Path stages actually render. | NOT RUN |

## Solution

Use the existing hospital account, location, product and shipment chain when a fixture is suitable. Consignment Stock holds the balance. Consignment Movement records receipts and usage under the stock record. A confirmed receipt adds to the roll-up. Posting verified usage changes the stock roll-up. Billing updates a separate picklist and leaves the stock roll-ups unchanged. Use unique event keys and a load that inserts missing records, skips matching records and reports mismatches. The scenario document contains the field mapping and all proposed status values. [Scenario and record design](scenario.md)

## Execution

| Step | Action and criteria | Dependency | One executor and planned tool | State |
|---|---|---|---|---|
| S-01 | Verify platform access in the intended Salesforce demo org. | Authorized existing connection and assigned operator. | Salesforce connection operator, identity Pending. Headless 360 MCP and Salesforce CLI 2.157.8. | Passed for the current executor. Both tools read the same org. |
| S-02 | Qualify or prepare one isolated delivered 10-box fixture and record the source-to-target data mapping. AC-01–02. | S-01 and authority for any fixture changes. | Salesforce demo administrator, identity Pending. Salesforce CLI and supported Order Management fixture workflow. | Pending |
| S-03 | Configure two objects, fields, relationships, roll-ups, record types, layouts and Path in the demo org. AC-02–06. | S-02, validated relationship support and authorized configuration. | Salesforce demo administrator, identity Pending. Salesforce CLI and Setup. | Local source ready. Target validation, deployment and activation NOT RUN. |
| S-04 | Load synthetic records in dependency order, reconcile counts and replay checks. AC-01–05. | S-03 and verified fixture IDs. | Demo data operator, identity Pending. Supported Salesforce import or CLI. | NOT RUN |
| S-05 | Run the walkthrough and capture the intended role, page results and balances. AC-01–06. | S-04 and assigned presenter. | Demo presenter, identity Pending. Salesforce Lightning. | NOT RUN |
| S-06 | Independently compare the evidence to the criteria and record the human acceptance decision separately. | S-05 and frozen story revision. | Independent reviewer, identity Pending. | NOT RUN |

### Next step · S-02

The Salesforce demo administrator qualifies an isolated 10-box fill-up with matching account, site and SKU, an exact Shipment Item, and dated hospital receipt evidence. Use an existing fixture if it meets AC-01 and AC-02. A line in Shipped status stays at zero on hand until receipt is confirmed. Use the authorized demo execution route for any new org data or configuration.

### Platform access evidence

On 12 November 2026, Salesforce Setup showed Headless 360 active and its external client app enabled with MCP and refresh scopes. The initial MCP refresh failed with `invalid_request: scope parameter not supported`. Normal OAuth reconnect succeeded. Headless 360 discover, describe and read-only SOQL succeeded, and the explicit-target CLI query matched the Developer Edition org identity. A read-only Flow Definition search returned zero names containing `Consign`. Fresh discovery found the standard target objects and no exact-name collisions for the two custom objects within the current connection’s visibility.

## Review and decisions

| Decision | Basis and disposition | Verification |
|---|---|---|
| D-01 · Keep the demo records-based | User selected a lightweight Salesforce demo with existing fulfillment records, sample data and chevrons. The user declined Field Service enablement. | Preserved in scope and AC-01–06. |
| D-02 · Use two custom objects with a movement history | Proposed design preserves one stock position and distinct receipt and usage events with native roll-ups. | Exact local metadata and fixture reviewed. Offline tests passed. Runtime NOT RUN. |
| D-03 · Show billing with a fictional reference | Proposed walkthrough decision. Usage posting changes the balance first. Ready to Bill is a separate billing handoff. | Human review pending. Runtime NOT RUN. |
| D-04 · Show shipment visibility in the production baseline | Live SRC16 workbook includes SAP-returned shipment details and read-only buyer consumption visibility. The proof of concept adds manual local records for demonstration. | Workbook read back on 12 November. |

## Blockers and history

- No complete 10-box delivered fixture was verified. The demo administrator must qualify a dedicated fixture with shipment line, delivery evidence, $0 due and the correct account, site and SKU.
- Revision 0.2 clarifies what was used and who acts at each stage. It separates stock posting from billing and records the [Jev and Claude review](design-review.md). The portfolio destination and ClickUp item are pending. Existing E02 sources retain their requirements authority.
- Revision 0.3 stages the Salesforce DX source, synthetic fixture and [offline verifier](verify_fixture.py). SAP remains the source of production fulfillment, consumption and billing. The existing O05/O06 requirements and source links are preserved.
