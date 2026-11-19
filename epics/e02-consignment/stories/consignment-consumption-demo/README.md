# CONS-POC-01 · Demonstrate hospital consignment from receipt through consumption

**Owner** · Pending confirmation · [Story and execution record](build-plan.md#execution-record) · [MIGRATE guide at 2a4b77e1772f4828f595d40c882e7c4f77bc4007](https://github.com/aispanda/Reusable-Delivery/blob/2a4b77e1772f4828f595d40c882e7c4f77bc4007/migrate/DELIVERY.md#copyable-story)

**Outcome** · As a consignment coordinator, I want to demonstrate how a hospital's fill-up shipment becomes consigned stock and how reported usage advances to billing readiness, so the team can validate the record model and the review experience in Salesforce.

**Demo result** · 19 November 2026. In Developer Edition, the maker ran the synthetic fill-up, receipt, usage, replay and simulated billing through Salesforce CLI. Chrome showed the populated stock and usage screens and the Order Summary through Shipment Item in the current demo session. Separate coordinator and billing clerk identities remain unverified. [Run and evidence references](build-plan.md#19-november-2026-live-run)

**Acceptance** · Pending human decision and independent runtime review. Receipt layout verification passed in the demo session. Production fulfillment, stock, consumption and billing remain owned by SAP. The demo covers one synthetic account, site and SKU. Buyer checkout changes, SAP integration, Field Service, actual billing, automated replenishment and production stock enforcement are outside the demo. [Scenario and record design](scenario.md) · [E02 consignment ordering](../../README.md)

## Proposed scenario checks

- **Where / who** · Sign in to the authorized Developer Edition demo org as the existing demo operator and open the synthetic Order Summary. The direct entry link is in the originating chat. Separate coordinator access is Pending. Salesforce verified the Contact-backed test user, site membership, and billing access. Portal identity and billing saves are pending. [Entry and role evidence](build-plan.md#browser-order-management-trace)
- **Start with** · Use the completed synthetic stock, receipt, and usage records for read-only review. Their direct links are in the originating chat. For a live replay, use a fresh synthetic fixture with stock at zero, a confirmed delivery, and a Recorded receipt. [Fixture](fixture.json) · [Receipt test evidence](build-plan.md#browser-receipt-posting-test)

**Demo sequence** · CHK-08 → CHK-04 → CHK-07 → CHK-09 (billing clerk portal check Pending).

1. **CHK-01** · Trace the synthetic order, fulfillment product, and Shipment Item → Verify the single hospital destination, matching SKU, ten boxes, blank PO, and $0 due. AC-01.
2. **CHK-02** · Check the exact shipment line and post the receipt after delivery confirmation → Verify stock moves from zero while Shipped to ten after posting. AC-02.
3. **CHK-03** · Record, verify, and post three boxes of usage → Verify 10 on hand and 3 awaiting posting during review, then 7 on hand and 0 awaiting posting with billing Not Ready. AC-03.
4. **CHK-04** · The coordinator uses the Consumption Path in the browser to inspect Reported, Verified, and Posted Usage → The Path displays the stage chevrons, key fields, guidance, and the relevant quantities during review and after posting. AC-03, AC-06.
5. **CHK-05** · Try early billing, then progress posted usage to Ready to Bill and Billed (Demo) → Verify early billing is rejected, the charge is $72 at $24 per box, the fictional invoice is recorded, and stock stays at seven. AC-04.
6. **CHK-06** · Replay the receipt and usage keys and void an unposted two-box report → Verify one movement per key, preserved statuses and invoice evidence, and zero stock effect from the void. AC-05.
7. **CHK-07** · The presenter opens the stock and usage pages and all three list views → The relevant values, actions, linked movements, and list rows or filter results are visible. AC-06.
8. **CHK-08** · The presenter follows the order through fulfillment to the exact delivered Shipment Item and opens its Receipt → The Receipt page shows matching shipment evidence, the source reference, and its posting action. AC-01, AC-02, AC-06.
9. **CHK-09** · The billing clerk opens the posted usage and exercises the billing transition and invoice reference controls → The billing update saves and displays the fictional invoice reference. AC-04, AC-06.

| Check ID | Status | Observed result and evidence |
|---|---|---|
| CHK-01 | Pass · API | Activated $0 order, blank PO, fulfilled ten-box line and linked Delivered Shipment Item. [CLI evidence](build-plan.md#cli-records-and-metadata) |
| CHK-02 | Pass · API | Shipped fixture left stock at zero. The dated Delivered line matched the receipt key and source ID. Posting raised stock to ten. [Live verifier and shipment evidence](build-plan.md#cli-records-and-metadata) |
| CHK-03 | Pass · API | At Verified, 10 on hand and 3 awaiting posting. At Posted Usage, 7 on hand and 0 awaiting posting, with Billing Status Not Ready. [CLI evidence](build-plan.md#cli-records-and-metadata) |
| CHK-04 | Partial · Chrome | The demo user saw the Path chevrons and the guidance for all three stages. The populated stock page showed the final 7/0 balance. Earlier balances and actual coordinator-role transitions were not observed in Chrome. [Browser evidence](build-plan.md#browser-observations) |
| CHK-05 | Pass · API | Early billing returned a validation error. The posted charge was $72 and both billing stages left seven on hand. The final invoice reference was preserved. [CLI evidence](build-plan.md#cli-records-and-metadata) |
| CHK-06 | Pass · API | Replay preserved one movement per receipt or usage key and the invoice reference. The separate Voided movement had zero effect on stock. [CLI evidence](build-plan.md#cli-records-and-metadata) |
| CHK-07 | Pass · Chrome within demo session | Stock showed site, SKU, 7/0 and three linked movements. Usage showed quantity three, billing details, and edit controls. Stock list showed the demo row. Both movement queues were empty after completion. [Browser evidence](build-plan.md#browser-observations) |
| CHK-08 | Pass · Chrome in demo session | Traced the order through the delivered ten-box Shipment Item. The dedicated Receipt layout showed matching shipment evidence. A fresh ten-box receipt was posted in Chrome, and the stock page rose from 0 to 10. [Browser posting test](build-plan.md#browser-receipt-posting-test) [Browser trace](build-plan.md#browser-order-management-trace) · [Receipt decision](build-plan.md#receipt-layout-decision) |
| CHK-09 | NOT RUN | Salesforce verified the Contact-backed replacement and scoped record access. The Contact action reached the correct active storefront, which still requested sign-in. Billing saves remain NOT RUN. [Browser evidence](build-plan.md#browser-observations) |

## Acceptance criteria

The original criterion IDs and wording are carried forward. The fill-up behavior and production boundary come from SRC16. The names, sample amounts and fictional invoice reference are demonstration choices. [Prior story](https://github.com/aispanda/B2B-Commerce/blob/634d5eef66584da696dd658615d77bb856259a75/epics/e02-consignment/stories/consignment-consumption-demo/README.md#acceptance-criteria)

| Criterion ID | Criterion | Coverage and evidence |
|---|---|---|
| AC-01 | The presenter can trace a fictional accepted fill-up for 10 boxes from the order to the correct Fulfillment Order, Fulfillment Order Product, Shipment and Shipment Item. The fixture has one hospital destination, an empty PO and $0 due. | CHK-01 and CHK-08. The order chain was visible in the demo session. |
| AC-02 | The presenter can distinguish Shipped from Delivered and post a receipt only after verifying delivery evidence. The posted receipt references the exact Shipment Item and moves the stock from zero to 10 boxes. | CHK-02 and CHK-08. The receipt was also posted successfully in Chrome. |
| AC-03 | The Consumption Path guides **Reported → Verified → Posted Usage**. The stock page shows 10 last confirmed and 3 awaiting posting during review. Posting shows 7 confirmed and 0 awaiting posting while Billing Status is still **Not Ready**. | CHK-03 and CHK-04. Prior-stage balances were checked through CLI. |
| AC-04 | The billing clerk marks posted usage **Ready to Bill** for $72 before tax (3 × $24) and records a fictional invoice reference for **Billed (Demo)**. Both transitions leave 7 on hand. Unposted usage cannot advance to Ready to Bill. | CHK-05 and CHK-09. The distinct billing clerk session remains unverified. |
| AC-05 | Replaying the same receipt or usage key leaves one movement, its current status, and any demo invoice reference intact. A report voided before posting contributes zero. | CHK-06. |
| AC-06 | The walkthrough uses the two custom record pages and existing Order Management pages. The stock page shows site, SKU, balances and movement history. The receipt layout shows source shipment evidence and the consumption layout shows review and billing evidence. | CHK-04, CHK-07, CHK-08 and CHK-09. The Receipt layout passed in the demo session. Billing clerk verification remains open. |

## Material blockers

**S-05 / CHK-08 · Resolved**

- **Goal** · Show shipment evidence, the source reference, and the posting control on the receipt.
- **Blocker** · The demo profile assigned the Consumption layout to Receipt records.
- **Current fix** · Saved the Receipt layout, then posted a fresh receipt in Chrome and verified the stock increase from 0 to 10. [Verification](build-plan.md#receipt-layout-decision)
- **Documentation** · [Salesforce layout assignment](https://help.salesforce.com/s/articleView?id=platform.layouts_assigning.htm&type=5)

**S-05 / CHK-09 · Contact-backed user active, portal check pending**

- **Goal** · Verify the Contact-backed demo billing clerk can open posted usage and save both billing fields in the intended browser session.
- **Blocker** · The Contact action reaches the correct active storefront, but My Profile is blank and the site requests sign-in. The clerk session remains unverified.
- **Current fix** · Verified the clerk’s Contact, site membership and fixture access. Confirmed the storefront URL in Setup and opened its standard sign-in page. [Contact-first steps and provisioning evidence](build-plan.md#contact-backed-billing-clerk)
- **Documentation** · [Salesforce Contact-first user setup](https://help.salesforce.com/s/articleView?id=platform.networks_create_external_users.htm&language=en_US&type=5) · [Salesforce Experience Cloud login-as requirements](https://help.salesforce.com/s/articleView?id=logging_in_as_another_user.htm&language=en_US&type=5)

**Next** · S-05 / CHK-09. Sign in as the demo clerk and confirm their name. Open the posted usage, save Ready to Bill and Billed (Demo), and verify 7 on hand. [Contact-first steps and provisioning evidence](build-plan.md#contact-backed-billing-clerk)

## Files

### Story, design and review

- [README.md](README.md) — Scope, acceptance criteria, and execution status
- [scenario.md](scenario.md) — Hospital walkthrough, record model, and sample data
- [build-plan.md](build-plan.md) — Configuration, package review, and live test
- [design-review.md](design-review.md) — Jev and Claude findings and dispositions

### Fixture, verification and project settings

- [verify_live_fixture.apex](verify_live_fixture.apex) — Loads and verifies the live synthetic walkthrough

- [fixture.json](fixture.json) — Synthetic shipment, movements, and expected balances
- [verify_fixture.py](verify_fixture.py) — Checks source metadata and fixture arithmetic offline
- [sfdx-project.json](salesforce/sfdx-project.json) — Salesforce DX package and API version

### Salesforce stock metadata

- [Consignment_Stock__c.object-meta.xml](salesforce/force-app/main/default/objects/Consignment_Stock__c/Consignment_Stock__c.object-meta.xml) — Stock object with private sharing
- [Account__c.field-meta.xml](salesforce/force-app/main/default/objects/Consignment_Stock__c/fields/Account__c.field-meta.xml) — Links stock to the hospital account
- [Confirmed_On_Hand__c.field-meta.xml](salesforce/force-app/main/default/objects/Consignment_Stock__c/fields/Confirmed_On_Hand__c.field-meta.xml) — Subtracts posted usage from posted receipts
- [Location__c.field-meta.xml](salesforce/force-app/main/default/objects/Consignment_Stock__c/fields/Location__c.field-meta.xml) — Links stock to the receiving location
- [Posted_Receipts__c.field-meta.xml](salesforce/force-app/main/default/objects/Consignment_Stock__c/fields/Posted_Receipts__c.field-meta.xml) — Sums quantities on posted receipts
- [Posted_Usage__c.field-meta.xml](salesforce/force-app/main/default/objects/Consignment_Stock__c/fields/Posted_Usage__c.field-meta.xml) — Sums quantities on posted usage
- [Product__c.field-meta.xml](salesforce/force-app/main/default/objects/Consignment_Stock__c/fields/Product__c.field-meta.xml) — Links stock to the product
- [Reference_Unit_Rate__c.field-meta.xml](salesforce/force-app/main/default/objects/Consignment_Stock__c/fields/Reference_Unit_Rate__c.field-meta.xml) — Holds the illustrative unit price
- [Stock_Key__c.field-meta.xml](salesforce/force-app/main/default/objects/Consignment_Stock__c/fields/Stock_Key__c.field-meta.xml) — Defines the unique stock import key
- [Stock_State__c.field-meta.xml](salesforce/force-app/main/default/objects/Consignment_Stock__c/fields/Stock_State__c.field-meta.xml) — Summarizes availability from posted quantities
- [Stocking_Unit__c.field-meta.xml](salesforce/force-app/main/default/objects/Consignment_Stock__c/fields/Stocking_Unit__c.field-meta.xml) — Restricts the demo stocking unit to Box
- [Usage_Awaiting_Posting__c.field-meta.xml](salesforce/force-app/main/default/objects/Consignment_Stock__c/fields/Usage_Awaiting_Posting__c.field-meta.xml) — Sums reported and verified usage
- [Keep_Stock_Identity.validationRule-meta.xml](salesforce/force-app/main/default/objects/Consignment_Stock__c/validationRules/Keep_Stock_Identity.validationRule-meta.xml) — Protects the stock key and identifying fields

### Salesforce movement metadata

- [Consignment_Movement__c.object-meta.xml](salesforce/force-app/main/default/objects/Consignment_Movement__c/Consignment_Movement__c.object-meta.xml) — Movement object with parent-controlled sharing
- [Billing_Status__c.field-meta.xml](salesforce/force-app/main/default/objects/Consignment_Movement__c/fields/Billing_Status__c.field-meta.xml) — Tracks the simulated billing handoff
- [Consignment_Stock__c.field-meta.xml](salesforce/force-app/main/default/objects/Consignment_Movement__c/fields/Consignment_Stock__c.field-meta.xml) — Defines the stock master-detail relationship
- [Demo_Charge_Before_Tax__c.field-meta.xml](salesforce/force-app/main/default/objects/Consignment_Movement__c/fields/Demo_Charge_Before_Tax__c.field-meta.xml) — Calculates the charge for posted usage
- [Demo_Invoice_Reference__c.field-meta.xml](salesforce/force-app/main/default/objects/Consignment_Movement__c/fields/Demo_Invoice_Reference__c.field-meta.xml) — Stores a fictional invoice reference
- [Event_Date__c.field-meta.xml](salesforce/force-app/main/default/objects/Consignment_Movement__c/fields/Event_Date__c.field-meta.xml) — Stores the receipt or usage date
- [Event_Key__c.field-meta.xml](salesforce/force-app/main/default/objects/Consignment_Movement__c/fields/Event_Key__c.field-meta.xml) — Defines the unique movement import key
- [Posting_Status__c.field-meta.xml](salesforce/force-app/main/default/objects/Consignment_Movement__c/fields/Posting_Status__c.field-meta.xml) — Defines the movement posting states
- [Quantity__c.field-meta.xml](salesforce/force-app/main/default/objects/Consignment_Movement__c/fields/Quantity__c.field-meta.xml) — Stores boxes received or used
- [Review_Note__c.field-meta.xml](salesforce/force-app/main/default/objects/Consignment_Movement__c/fields/Review_Note__c.field-meta.xml) — Captures review or void details
- [Source_Reference__c.field-meta.xml](salesforce/force-app/main/default/objects/Consignment_Movement__c/fields/Source_Reference__c.field-meta.xml) — Identifies receipt or usage evidence
- [Source_Shipment_Item_Id__c.field-meta.xml](salesforce/force-app/main/default/objects/Consignment_Movement__c/fields/Source_Shipment_Item_Id__c.field-meta.xml) — Stores the verified Shipment Item ID
- [Unit_Rate__c.field-meta.xml](salesforce/force-app/main/default/objects/Consignment_Movement__c/fields/Unit_Rate__c.field-meta.xml) — Stores the agreed usage rate
- [Consumption.recordType-meta.xml](salesforce/force-app/main/default/objects/Consignment_Movement__c/recordTypes/Consumption.recordType-meta.xml) — Scopes usage and billing picklists
- [Receipt.recordType-meta.xml](salesforce/force-app/main/default/objects/Consignment_Movement__c/recordTypes/Receipt.recordType-meta.xml) — Scopes receipt posting values
- [Keep_Movement_Identity.validationRule-meta.xml](salesforce/force-app/main/default/objects/Consignment_Movement__c/validationRules/Keep_Movement_Identity.validationRule-meta.xml) — Protects the movement key and type
- [Lock_Posted_Evidence.validationRule-meta.xml](salesforce/force-app/main/default/objects/Consignment_Movement__c/validationRules/Lock_Posted_Evidence.validationRule-meta.xml) — Protects posted quantity, rate, and evidence
- [Require_Movement_Evidence.validationRule-meta.xml](salesforce/force-app/main/default/objects/Consignment_Movement__c/validationRules/Require_Movement_Evidence.validationRule-meta.xml) — Checks quantity, rate, and source evidence
- [Valid_Billing_Stage.validationRule-meta.xml](salesforce/force-app/main/default/objects/Consignment_Movement__c/validationRules/Valid_Billing_Stage.validationRule-meta.xml) — Enforces posted usage before billing advances
- [Valid_Posting_Stage.validationRule-meta.xml](salesforce/force-app/main/default/objects/Consignment_Movement__c/validationRules/Valid_Posting_Stage.validationRule-meta.xml) — Enforces posting transitions by record type

### Salesforce layouts and Path

- [Consignment_Movement__c-Consignment Consumption Layout.layout-meta.xml](salesforce/force-app/main/default/layouts/Consignment_Movement__c-Consignment%20Consumption%20Layout.layout-meta.xml) — Shows the usage report and billing fields
- [Consignment_Movement__c-Consignment Receipt Layout.layout-meta.xml](salesforce/force-app/main/default/layouts/Consignment_Movement__c-Consignment%20Receipt%20Layout.layout-meta.xml) — Shows shipment and receipt evidence
- [Consignment_Stock__c-Consignment Stock Layout.layout-meta.xml](salesforce/force-app/main/default/layouts/Consignment_Stock__c-Consignment%20Stock%20Layout.layout-meta.xml) — Shows balances and related movements
- [Consignment_Usage_Posting.pathAssistant-meta.xml](salesforce/force-app/main/default/pathAssistants/Consignment_Usage_Posting.pathAssistant-meta.xml) — Guides review and posting of usage

### Salesforce pages, views, tabs and access

- [Consignment_Stock_Record_Page.flexipage-meta.xml](salesforce/force-app/main/default/flexipages/Consignment_Stock_Record_Page.flexipage-meta.xml) — Renders stock details and movement history
- [Consignment_Movement_Record_Page.flexipage-meta.xml](salesforce/force-app/main/default/flexipages/Consignment_Movement_Record_Page.flexipage-meta.xml) — Renders movement details and usage chevrons
- [Stock_Balances.listView-meta.xml](salesforce/force-app/main/default/objects/Consignment_Stock__c/listViews/Stock_Balances.listView-meta.xml) — Shows stock balances by site and product
- [Usage_Awaiting_Posting.listView-meta.xml](salesforce/force-app/main/default/objects/Consignment_Movement__c/listViews/Usage_Awaiting_Posting.listView-meta.xml) — Shows reported and verified usage
- [Ready_to_Bill.listView-meta.xml](salesforce/force-app/main/default/objects/Consignment_Movement__c/listViews/Ready_to_Bill.listView-meta.xml) — Shows usage waiting for billing
- [Consignment_Demo_Operator.permissionset-meta.xml](salesforce/force-app/main/default/permissionsets/Consignment_Demo_Operator.permissionset-meta.xml) — Provides access to demo objects and fields
- [Consignment_Billing_Clerk.permissionset-meta.xml](salesforce/force-app/main/default/permissionsets/Consignment_Billing_Clerk.permissionset-meta.xml) — Grants edit access to two billing fields
- [Consignment_Stock__c.tab-meta.xml](salesforce/force-app/main/default/tabs/Consignment_Stock__c.tab-meta.xml) — Adds the Consignment Stock navigation tab
- [Consignment_Movement__c.tab-meta.xml](salesforce/force-app/main/default/tabs/Consignment_Movement__c.tab-meta.xml) — Adds the Consignment Movements navigation tab
- [Consignment External Billing Test.profile-meta.xml](salesforce/force-app/main/default/profiles/Consignment%20External%20Billing%20Test.profile-meta.xml) — Defines the dedicated external test profile
