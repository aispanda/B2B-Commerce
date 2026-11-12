# Consignment demo scenario and record design

Revision 0.3 · 12 November 2026 · Local Salesforce source and synthetic data. All runtime checks are pending.

## Walk through one hospital order

Use ten cards or sample boxes labeled **one box = one infusion set**. Riverside Demo Hospital stores the boxes in its supply room. The supplier owns them and charges the hospital for the sets it uses. During the demo, move three cards into a **Used in care** group and leave seven in an **On the shelf** group.

| Actor and action | Salesforce record and state | What the audience sees |
|---|---|---|
| The demo administrator prepares the fictional hospital, supply room and SKU. | Reuse Account, Location and Product. Create one Consignment Stock record. | 0 confirmed on hand. |
| The buyer requests the first fill-up. The supplier warehouse ships ten boxes. | Start at the accepted Order and Order Summary. Follow the Fulfillment Order, Fulfillment Order Product, Shipment and Shipment Item. | The fill-up has a blank optional PO and $0 due. Shipment is **Shipped** and on hand is 0. |
| The hospital stockroom confirms ten arrived. The supplier’s consignment coordinator verifies and records the receipt. | Create a **Recorded** Receipt with the exact **Delivered** Shipment Item and a dated hospital receipt reference. Mark **Posted Receipt**. | Confirmed on hand rises to 10. The fill-up remains $0 due. |
| Hospital care staff open three boxes and use the three sets. The stockroom sends the supplier the SKU, three used boxes, the date and a report reference. | The supplier coordinator enters the report as a **Reported** Consumption movement and checks it against the site and SKU. Set **Verified**. | Seven unopened boxes are physically on the shelf. Salesforce shows **10 last confirmed, 3 awaiting posting**. |
| The supplier consignment coordinator posts the verified usage. | Set the same movement to **Posted Usage**. | Salesforce shows **7 confirmed on hand, 0 awaiting posting**. Billing Status is **Not Ready**. |
| The supplier billing clerk checks the stored $24 rate and makes the charge ready. | Mark **Ready to Bill**. Optionally add a fictional invoice reference and mark **Billed (Demo)**. | The charge for the three used boxes is **$72 before tax**. Confirmed on hand stays at 7. |

### Terms used in the demo

- **Consignment.** The supplier owns the boxes while the hospital stores them. The hospital pays for the units it uses.
- **Fill-up.** An order that puts supplier stock at the hospital. A **Shipment Item** says what and how many boxes were sent. A **receipt** confirms what actually arrived.
- **Consumption.** The hospital used stock in care. A **usage report** gives the supplier the product, date and quantity used.
- **Posted.** The verified receipt or usage is included in the Salesforce stock balance. **Awaiting posting** shows usage already reported and still excluded from that balance.
- **Ready to Bill.** Billing has checked the charge for posted usage. **Billed (Demo)** records a fictional invoice reference.
- **Replenishment.** A later fill-up to replace used stock. **Pickup** removes unused stock when the supplier collects it.

The fixture is a proposal. The current demo org has linked shipment lines for 10 units with **Shipped** status. Its **Delivered** shipment had no actual delivery timestamp and no linked Shipment Item appeared in the bounded line read. No complete 10-unit receipt fixture was verified. Use a dedicated existing fixture if it can be qualified. Otherwise prepare a separate fictional fulfillment chain through the supported Order Management workflow once execution is authorized. Validate the account, product, quantity, fulfillment lineage, delivery evidence, zero due and absent PO together before using it. Keep an already shared demo order out of fixture edits.

### What happens after the first use report

A later manual replenishment is another fill-up order for the same stock position. A second confirmed receipt for three raises the balance from 7 to 10. A later pickup of two unused boxes creates a return movement when physical collection is confirmed. Its proposed statuses are **Recorded → Posted**, with **Voided** for an unposted exception. Posting reduces the balance to 8. A correction before posting can be reviewed or voided. A correction after simulated billing needs a separately traceable reversal and credit decision. Replenishment, pickup and posted corrections are process variants for a later demonstration. Their sample values below show how the record model can extend.

The updated production workbook has separate rules. SAP confirms orders, owns stock and billing, and returns fulfillment records and read-only consumption information to Salesforce. The demo uses manual entries and synthetic billing evidence to show a possible Salesforce workflow. SRC16, Order Process Flows rows 5–13 and MVP Assumptions rows 4–12.

## Standard records and statuses

The fields below are the fields the walkthrough uses. The Salesforce CLI exposed these fields and picklist values on the verified demo org. The stage order in the example describes the proposed fixture. It does not prove that any status transition ran. API names are shown where they matter for mapping.

| Record | Reuse or creation source | Fields used in the demo | Status used |
|---|---|---|---|
| Account | Existing fictional hospital account | Name, Account Number when populated | Customer identity. No additional demo status. |
| Product | Existing fictional SKU, `Product2` | Name, Stock Keeping Unit or Product Code, Quantity Unit of Measure, Active | Use an active SKU. |
| Location | Existing hospital site or a dedicated demo location created during authorized setup | Name, Location Type, External Reference if used | Location Type currently offers **Warehouse**. Validate that a suitable existing site is available, or use the supported value for an isolated location during build. No separate demo status. |
| Order and Order Summary | Existing checkout or supported fixture workflow | Order Number, Account, Order Status, PO Number, Order Total; Summary Original Order, Grand Total and Status | Order **Draft → Activated**; Summary **Created**. The fixture's zero due and accepted state require inspection. |
| Order Product Summary | Order Management summary creation | Order Summary, Product, Type, Quantity Ordered, Quantity Fulfilled | Use **Order Product** for Type. Status follows the source record, such as Ordered or Fulfilled. |
| Fulfillment Order and Fulfillment Order Product | Existing fulfillment workflow and its product lines | Fulfillment Order Number, Order Summary, Account, Fulfilled From Location, Fulfilled To Name, Status; line Fulfillment Order, Order Product Summary, Product, Quantity, Quantity Unit of Measure, Type | Fulfillment example **Allocated → Fulfilled**. The product line uses **Order Product** and its parent's fulfillment status. |
| Shipment | Existing shipping workflow | Shipment Number, Fulfillment Order, Destination Location when populated, Status, Actual Delivery Date, Tracking Number if synthetic | **Created → Shipped → In Transit → Delivered**, with **Voided** as an exception. Match the destination to the demo site even when the source uses an address instead of a location lookup. |
| Shipment Item | Existing shipment line | Shipment, Fulfillment Order Product, Order Product Summary, Product, Quantity | Read the Shipment's status. Receipt uses the matched Shipment Item quantity and receiving evidence. |

Relevant source model: [Order Summary relationships](https://developer.salesforce.com/docs/commerce/salesforce-order-management/guide/order-management-order-summary-erd.html) · [Fulfillment Order creation and fields](https://developer.salesforce.com/docs/commerce/salesforce-order-management/guide/order-management-fulfillment-orders.html) · [Shipment Item relationships and quantity](https://developer.salesforce.com/docs/platform/object-reference/references/standard-objects/object-shipmentitem.html).

## Proposed custom objects and fields

Use two objects. **Consignment Stock** holds one balance per hospital account, location and SKU in the chosen stocking unit. **Consignment Movement** holds each receipt or consumption event with a required master-detail link to its stock. Use Receipt and Consumption record types to show the appropriate fields and stages. Keeping both movement types under the stock record supports multiple shipments and usage reports with standard roll-ups. The name and field list are design proposals. [Salesforce roll-up summary fields](https://help.salesforce.com/s/articleView?id=fields_about_roll_up_summary_fields.htm&type=5)

| Object | Field | Type and rule |
|---|---|---|
| Consignment Stock | Name | Auto Number. Human-readable site and SKU are visible in the highlights and record fields. |
| Consignment Stock | Account, Location, Product | Required lookups. The fixture mapping resolves the hospital, confirmed ship-to and existing SKU. |
| Consignment Stock | Stock Key | Required unique External ID text, assigned consistently from account, site and SKU during import. The PoC uses one stocking unit per SKU. |
| Consignment Stock | Unit of Measure | Required restricted picklist for the demo stocking unit. Match the shipment and consumption quantities to this unit. |
| Consignment Stock | Reference Unit Price | Currency. Fictional rate shown for the demo. Copy the agreed price to each consumption record to preserve the reported amount when this reference changes later. |
| Consignment Stock | Received Quantity, Consumed Quantity, Usage Awaiting Posting | Native SUM roll-ups over movement Quantity. Filter respectively by **Posted Receipt**, **Posted Usage**, and **Reported** or **Verified**. |
| Consignment Stock | On Hand, Stock State | Formulas. On Hand equals received minus consumed. Stock State shows **Awaiting Stock** before the first posted receipt, **In Stock** for a positive balance, **Depleted** at zero after a receipt, and **Check Balance** for a negative result. |
| Consignment Movement | Name, Consignment Stock | Auto Number and required master-detail. |
| Consignment Movement | Record Type, Posting Status | Record type selects Receipt or Consumption. Distinct posted values allow the roll-ups to filter by posting status alone. |
| Consignment Movement | Event Key | Required unique External ID text. Use `REC/<shipment item ID>` or `USE/<hospital key>/<report key>/<line key>` for this PoC. On replay, skip an existing key whose source fields match. Report a mismatch for manual reconciliation. Keep existing status and invoice evidence when replaying seed data. |
| Consignment Movement | Event Date, Quantity, Source Reference | Required date, positive whole-box quantity and trace reference. Receipt source is the shipment line and receipt reference. Consumption source is the report and report line. |
| Consignment Movement | Source Shipment Item ID | Receipt only. Store the verified 18-character Salesforce Shipment Item ID. This uses a text field in the proposal until lookup-target support is verified in the demo org. Verify the ID, quantity, product, destination and delivered evidence before posting. |
| Consignment Movement | Unit Price, Demo Charge Before Tax | Consumption only. Store the agreed demo rate on the movement. Once posted, show quantity times the stored rate. |
| Consignment Movement | Billing Status, Demo Invoice Reference, Review Note | Billing has its own picklist. Demo Invoice Reference is required for **Billed (Demo)**. Review Note records why a discrepancy or void needs attention. Use a fictional invoice reference. |

| Record type | Status values | Effect |
|---|---|---|
| Receipt | **Recorded → Posted Receipt**. **Voided** before posting. | Only Posted Receipt adds to received quantity. Use one receipt per Shipment Item. |
| Consumption | **Reported → Verified → Posted Usage**. **Voided** before posting. | Only Posted Usage reduces the confirmed balance. Reported and Verified count as Usage Awaiting Posting. |
| Consumption billing | **Not Ready → Ready to Bill → Billed (Demo)**. | Billing readiness requires Posted Usage. Billing does not change stock. |

Use layouts, Path, standard roll-ups, formulas and validation rules. See the [build plan](build-plan.md). Review and status advancement are manual. Before posting, compare cumulative usage with the received quantity. A negative balance displays **Check Balance** and requires review. This PoC does not establish concurrent stock controls or a production billing interface.

## Synthetic records to prepare

Names and keys below are illustrative. During fixture setup map them to authorized fictional records and verify relationships before loading movements. The receipt key uses the resolved Shipment Item ID. Load missing event keys only. Use Recorded for a new receipt and Reported for new usage. Leave the current status and invoice reference intact when a replay finds a matching event. Keep a source-to-target import manifest and reconcile the count, event keys, and balance after loading.

| Key | Record | Sample values and relationship |
|---|---|---|
| `HOSP-DEMO-01` | Account and receiving Location | Riverside Demo Hospital / Supply Room. Record the confirmed site mapping. |
| `INF-SET-DEMO` | Product | Fictional infusion set, unit **Box**. |
| `FILL-DEMO-01` | Order chain | One accepted fill-up for 10 boxes. PO blank, $0 due, one hospital destination. Resolve its Order Summary, order product, Fulfillment Order and Fulfillment Order Product. |
| `SHIP-DEMO-01` | Shipment and Shipment Item | Line quantity 10, matching SKU and fulfillment line. Confirm delivery date and receipt evidence. Capture the Shipment Item ID. |
| `STOCK-DEMO-01` | Consignment Stock | Hospital + Supply Room + infusion set, Box, $24.00 reference unit price. Load the stock record before its movements. |
| `REC/<shipment item ID>` | Receipt | Quantity 10, confirmed receipt date, shipment line ID and receipt reference. Load Recorded and post during the walkthrough. |
| `USE/HOSP-DEMO-01/HOSP-USE-001/1` | Consumption | Quantity 3, usage date after receipt, $24.00 rate, hospital report reference. Create as Reported and advance manually. |
| `DEMO-INV-001` | Demo invoice reference | Enter on the same Consumption record after Ready to Bill. Expected value $72.00. No separate Invoice fixture is required. |
| `USE/HOSP-DEMO-01/HOSP-VOID-001/1` | Voided consumption check | Quantity 2, linked to the same stock. Void before posting and confirm it contributes zero. |

To illustrate follow-on work later, a replenishment receipt needs its own order, delivered shipment line and receipt key. An unused-stock pickup needs the original position, pickup evidence, a distinct event key and a posted return quantity. Add the return roll-up and define reversals before implementing these variants.

## Layouts and chevrons

| Record page | What the presenter and reviewer need |
|---|---|
| Consignment Stock Lightning page | Highlights for Account, Site, SKU, On Hand and Stock State. A stock balance section shows Posted Receipts, Posted Usage, Usage Awaiting Posting, Unit of Measure and Reference Unit Price. Related movements display posting status, date, quantity and source reference. Each movement opens its Receipt or Consumption layout. |
| Receipt record layout | Stock, status, date and quantity at the top. Shipment Item reference, receipt evidence and review note below. Show the status field to move Recorded to Posted Receipt after delivery verification. |
| Consumption record layout and Lightning page | Place Path above the record details. Use **Reported → Verified → Posted Usage** for the normal progression. Display Billing Status, Unit Price, Demo Charge Before Tax and Demo Invoice Reference together in the separate Billing section. Verify how Path renders Voided in the demo org. |
| Existing Order Management record pages | Use the existing pages to show the order, fulfillment and shipment chain and to verify the Shipment Item quantity. The demo presenter returns to the receipt and stock pages to show the stock effect. |

Salesforce supports Path on custom objects and lets a path use an object, picklist and record type. [Salesforce Path](https://help.salesforce.com/s/articleView?id=path_overview.htm&type=5)
