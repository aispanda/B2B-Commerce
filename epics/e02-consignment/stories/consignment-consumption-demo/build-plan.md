# Consignment demo configuration and fixture plan

12 November 2026 · Salesforce DX source published for review. Salesforce runtime checks pending. See the [walkthrough](scenario.md) and [acceptance criteria](README.md).

## Configure two objects

| Object | Fields and configuration |
|---|---|
| Consignment Stock (`Consignment_Stock__c`) | Auto-number Name. Private sharing. Required Account, Location and Product2 lookups, subject to target support. Required unique External ID `Stock_Key__c` for account, site and SKU. `Stocking_Unit__c` restricted picklist (Box). `Reference_Unit_Rate__c` currency for the example. Formula and roll-up fields below. |
| Consignment Movement (`Consignment_Movement__c`) | Auto-number Name. Required master-detail `Consignment_Stock__c`. Parent-controlled sharing. Receipt and Consumption record types. Required unique External ID `Event_Key__c`. Restricted `Posting_Status__c` picklist with record-type values. `Quantity__c` Number with zero decimal places. Required `Event_Date__c` and `Source_Reference__c`. Optional `Review_Note__c`. |
| Receipt fields | `Source_Shipment_Item_Id__c` verified 18-character Salesforce ID stored as text in this package. `Event_Date__c` records the actual receiving date. `Source_Reference__c` is the hospital receipt confirmation. |
| Consumption and billing fields | `Unit_Rate__c` stored currency copied manually from the approved demo rate. `Demo_Charge_Before_Tax__c` currency formula showing quantity × rate once Posted Usage. `Billing_Status__c` restricted picklist defaulting to Not Ready for Consumption. `Demo_Invoice_Reference__c` text for Billed (Demo). `Source_Reference__c` records the hospital report and line. |

## Use native Salesforce calculations

| Stock field | Native definition |
|---|---|
| `Posted_Receipts__c` | SUM Movement Quantity where Posting Status is Posted Receipt. |
| `Posted_Usage__c` | SUM Movement Quantity where Posting Status is Posted Usage. |
| `Usage_Awaiting_Posting__c` | SUM Movement Quantity where Posting Status is Reported or Verified. |
| `Confirmed_On_Hand__c` | Formula `Posted_Receipts__c - Posted_Usage__c`. |
| `Stock_State__c` | Formula: Check Balance for a negative result, Awaiting Stock before the first posted receipt, Depleted for zero after receipt, and In Stock for a positive balance. |

The coordinator posts the movement by saving its status. Salesforce then recalculates the parent roll-ups and on-hand formula. The distinct posted values let both roll-ups filter on one picklist. A separate Movement Type field and a Flow are unnecessary. Use record-type value assignments for the UI and a validation rule to enforce valid combinations on record saves and imports. [Roll-up summary fields](https://help.salesforce.com/s/articleView?id=fields_about_roll_up_summary_fields.htm&type=5)

## Guard the handoffs

- Require a positive whole-box quantity and event reference. Verify that a Receipt uses the exact delivered Shipment Item and hospital receipt confirmation before posting. The coordinator performs this check manually while the shipment reference is text.
- Permit Receipt **Recorded → Posted Receipt** and Consumption **Reported → Verified → Posted Usage**. Permit **Voided** before posting. Block changes to status, stock, quantity, rate and source evidence once posted. Keep posted movements and their parent stock protected from deletion for the demo role.
- Permit **Not Ready → Ready to Bill → Billed (Demo)** on Consumption. Both billing milestones require Posted Usage, and Billed (Demo) requires the fictional invoice reference. Only the billing fields advance in that step. Keep billing fields out of the Receipt layout.
- Show the Consumption posting stages in Lightning Path. Put Billing Status, Unit Rate, Demo Charge Before Tax and Demo Invoice Reference together on the same page. On Stock, show Confirmed On Hand and Usage Awaiting Posting side by side above the movement history. Verify Path rendering of the Voided exception. [Salesforce Path setup](https://help.salesforce.com/s/articleView?id=path_create.htm&language=en_US)

A future requirement to create a separate billing task or send a notification when usage becomes Ready to Bill could use an after-save record-triggered Flow. It would need a first-transition check and a durable deduplication key if it creates records. Headless 360 found zero Flow Definitions with names containing `Consign` in the demo org. That query does not identify differently named flows. [Record-triggered Flow](https://trailhead.salesforce.com/content/learn/modules/record-triggered-flows/get-started-with-triggered-flows)

## Prepare and verify the data

1. Resolve the isolated fictional Account, Location and Product2. Verify the order and fulfillment chain through Shipment Item. Qualify an actual delivery confirmation for the exact 10-box line. A Shipped line leaves stock at zero. A qualifying 10-box delivered fixture remains pending.
2. Load one stock record, then the Receipt at Recorded after delivery is confirmed. Enter the Consumption movement at Reported during the walkthrough. Populate the fields from [fixture.json](fixture.json). Replace the receipt’s fixture alias with the resolved Shipment Item ID and preserve the site, SKU and units.
3. Resolve unique keys before writing. Insert missing rows, skip matching rows and report mismatches. Keep posting and billing statuses and the fictional invoice reference during replay. The fixture uses one receipt per shipment line and one usage movement per hospital report line.
4. Run AC-01 through AC-06 in Lightning using the intended demo roles, including Path and layout visibility, early billing rejection, replay and void. Confirm that billing and the fictional invoice reference leave stock at seven. Production inventory, usage and billing remain owned by SAP.

## Review the exact package

The [Salesforce DX project](salesforce/sfdx-project.json) has 2 custom objects, 23 fields, 2 record types, 6 validation rules, 3 page layouts and 1 Path. The package contains the custom-object metadata only. Existing Order Management configuration and SAP interfaces remain under their current ownership.

| Story check | Package evidence | Runtime evidence required |
|---|---|---|
| AC-01 | The fixture includes the fictional order key, SKU, box unit, blank PO and $0 due. It leaves the Shipment Item ID unresolved. | Trace the exact Order Summary, Fulfillment Order Product and Shipment Item to the same site and SKU in the authorized fixture. |
| AC-02 | Receipt starts Recorded. Only Posted Receipt contributes to the received roll-up. Source evidence validation checks the 18-character ID and matching receipt key. | The coordinator must verify the referenced line is Delivered, matches the ten boxes, and has dated hospital receipt evidence. The text ID rule checks format and key consistency. |
| AC-03 | Consumption Path, statuses and roll-up filters are in source. The local fixture verifies 10 confirmed and 3 pending until posting, then 7 confirmed and 0 pending with billing still Not Ready. | Confirm Path and roll-up refresh in Lightning for the coordinator. |
| AC-04 | Separate billing rule requires previously posted usage. The charge formula uses the stored rate. The local fixture checks $72 before tax and 7 on hand through both billing stages. | Verify early billing is rejected and the billing clerk can enter the fictional invoice reference without changing quantity or stock. |
| AC-05 | Both external IDs are unique. The local verifier checks duplicate replay, a mismatched key payload and a pre-posting void. | Use insert-missing, skip-matching semantics. Confirm stored status and reference survive replay. Verify the coordinator and billing clerk lack Delete access to both objects. |
| AC-06 | Three layouts and one Consumption Path are defined in source. | Assign layouts to the demo profiles and record types, show Path on the Consumption record page and verify the stock related list. |

Run `python3 verify_fixture.py` from the story folder. It reads the packaged roll-up filters, record-type values and Path, then tests the fixture arithmetic and expected transitions offline. Salesforce CLI source conversion and a local Metadata API WSDL check passed. The WSDL check evaluated merged objects in schema element order. The Salesforce formula compiler, reference target support, profile layout assignment and runtime access still need org validation.

## Exact live test for the next executor

1. Confirm authority for the target Developer Edition org and any fixture writes. Verify org identity through CLI and Headless 360. Current probes matched and found zero visible 10-box lines on Delivered shipments. Qualify an existing isolated fixture or obtain authority to create an isolated one through the supported Order Management process. Keep a Shipped line out of receipt posting until the actual delivery evidence matches.
2. When authorized for target validation, run the following from `salesforce/` using the verified development org alias. Review the Location lookup target, roll-up filter parsing, formulas, related-list metadata and Path in the result. Then deploy through the approved demo route.

   ```sh
   sf project deploy start --dry-run --source-dir force-app --target-org <verified-demo-alias> --test-level NoTestRun --wait 15 --json
   ```

3. In the authorized org, assign the Stock layout and both Movement layouts to the demo profile and appropriate record types. Verify Path is enabled, add it to the Consumption Lightning record page and activate the page for the demo audience. Keep the Stock record privately owned and share the demo record with the intended reviewers. The stock coordinator needs movement create and edit access and billing read access. Give the billing clerk read access to the stock and permission to edit the movement billing fields. Grant neither actor Delete on either object. Check effective permissions before demonstrating.
4. Populate Stock from the fixture’s hospital, site, SKU, stock key, stocking unit and USD demo rate. Resolve the real Shipment Item ID and substitute it in `Source_Shipment_Item_Id__c` and the `REC/` key. Enter the dated receipt and quantity of ten with the Receipt record type. After delivery verification, post and read ten on hand. Enter the dated usage report with the Consumption record type, three boxes and a stored USD 24 unit rate. If the org uses multiple currencies, use USD on the demo records.
5. At Reported and Verified, confirm `10 on hand / 3 awaiting posting` and reject early billing. At Posted Usage, confirm `7 on hand / 0 awaiting posting / Not Ready`. Mark Ready to Bill and confirm USD 72 and seven on hand. Mark Billed (Demo) with `DEMO-INV-001` and verify the balance is still seven. Replay the same keys and void the separate unposted two-box test movement. Capture both actor views, final movement counts, preserved invoice reference and unchanged balance against AC-01–06.

Salesforce dry-run reference. [Deploy start](https://developer.salesforce.com/docs/platform/salesforce-cli-reference/guide/cli_reference_project_deploy_start.html)
