# Internal consignment barcode experience

Status: proposed specification for coordinator review. The lookup component has been coded and reviewed locally. The transaction screens below are specified for implementation. Salesforce configuration and physical phone validation are pending.

## Intended user journey

An internal coordinator opens a Salesforce mobile page, scans a product barcode or enters a barcode/SKU, checks the matching account and site, and identifies the stock position. The story also calls for receipt, consumption and count-discrepancy actions.

## Current lookup draft

```text
Find consignment stock

Barcode or SKU
[                            ]
[ Scan barcode ]  [ Find stock ]

Product name
Stock record · SKU
Account · Location
Confirmed on hand: quantity and unit
```

- **Scan barcode** opens the Salesforce mobile scanner. A successful scan starts the lookup. If scanning is cancelled or unavailable, a message directs the user to enter the code manually.
- **Barcode or SKU** is the manual text field. **Find stock** is the filled, branded button that submits it. The scan button uses Salesforce's default button style.
- Each matching position shows the product, stock record, SKU, account, location and confirmed balance. Selecting the product opens its stock record. Messages cover no matches, multiple matches and lookup errors.
- The draft uses standard Salesforce Lightning components. Actual appearance depends on the Salesforce app and its styling; no rendered phone design has been approved.

## Gaps in the original lookup draft

- Choose the page and entry point for coordinators, and verify role and site access.
- Review the layout, labels, button priority, results and error states with a coordinator on a physical phone.
- Collect representative labels, verify their decoded value equals the SKU on each supported phone platform, and verify site selection. The local lookup already calls dismiss after scanning. It currently uses one generic error message, so the distinct camera outcomes below require implementation.
- Design and verify the receipt and consumption screens, confirmations and safeguards, including shipment matching and replay handling.
- Decide where discrepancies appear and who reviews them, then design count entry and review without posting an adjustment.
- Verify the Salesforce fill-up and eligibility path. The story's Salesforce-only correction supersedes SAP references in the historical research.

## Source materials

- [Current published story and scenario checks](https://github.com/aispanda/B2B-Commerce/blob/main/epics/e02-consignment/stories/internal-consignment-barcode/story.md)
- [Salesforce BarcodeScanner compatibility](https://developer.salesforce.com/docs/platform/mobile-offline/guide/use-barcodescanner-compatibility.html)

## Proposed Salesforce mobile design for implementation

This section defines the target UI. The earlier sketch documents the current code. Use a Lightning App Page with the One Region template and a navigation item named **Consignment Stock**. The exact internal Lightning app and named users are org assignments to verify before activation. “Coordinator,” “Poster,” and “Reviewer” describe permission groups to configure, not existing Salesforce roles. One person may hold more than one permission group when authorized.

| Permission group | Actions |
| --- | --- |
| Coordinator | Find and select accessible stock. Record a receipt, report usage, verify usage and submit a count discrepancy. |
| Poster | Post a recorded receipt or verified usage for authorized stock. |
| Reviewer | View assigned discrepancies and mark them reviewed. |

### Screen 1 · Find consignment stock

```text
Consignment Stock
┌─ Find consignment stock ───────────┐
│ Barcode or SKU                     │
│ [                                 ]│
│ [ Scan barcode ]  [ Find stock ]   │
│                                    │
│ Demo Infusion Set                  │
│ SKU INF-SET-DEMO · STOCK-101       │
│ Demo Hospital · Supply Room        │
│ 7 boxes confirmed on hand          │
│ [ Select this stock ]              │
└────────────────────────────────────┘
```

1. In the Salesforce mobile app, open the App Launcher, choose the assigned internal app, then tap **Menu → Consignment Stock**. The page opens with an empty field and no results. **Find stock** uses the filled Salesforce brand style. **Scan barcode** uses the standard neutral style. The buttons sit side by side when they fit and stack in the same order on narrow phones.
2. Tap **Scan barcode**, allow the camera if prompted, and point it at the product label. Call the native scanner in single scan mode. Call dismiss after success, cancellation or error to close the scanner. After success, put the decoded value in the field and start the lookup. Verify label symbologies before restricting the scanner to approved types. If a label decodes to a compound GS1 value, resolve the mapping before rollout. Treat the code as text, preserving leading zeros. Trim surrounding whitespace for both input methods. For this slice, the decoded value must match the product's Salesforce SKU.
3. For manual entry, tap **Barcode or SKU**, type or paste the code, and tap **Find stock**. It runs the same lookup. When the scanner is unavailable, disable **Scan barcode** and show **Scanning works in the Salesforce mobile app. Enter the code manually.** On cancel, return focus to the field without an error. On denied or disabled camera permission, show **Camera access is off. Enter the code manually or allow camera access in phone settings.** For other failures, show **Scan failed. Enter the code manually.**
4. Display **Looking up stock…** and disable new scan or lookup requests until the current request finishes. Changing the entered code clears the prior selection and results. Return only positions the user can access. For one product at multiple sites, show each accessible account and location and require an explicit choice. For an unknown code or inaccessible stock, display **No accessible stock matches this code**. If multiple products match, show **This code matches more than one product. Check the label or enter the SKU.** If more than 100 positions match, show **Too many matches. Contact your administrator.** Disable selection in either case. A lookup failure shows **Unable to find stock. Try again.** Keep the typed code for retry.
5. Each available result has its own **Select this stock** button. Tap it to open that Salesforce Consignment Stock record. This replaces the product name link in the current draft.

### Screen 2 · Consignment Stock record

Show product, SKU, account, site and unit at the top, followed by **Confirmed on hand** and **Usage awaiting posting**. Display **Record receipt**, **Report usage**, and **Report count discrepancy** as record actions for users authorized to run them. Each action is an object-specific Screen Flow quick action backed by invocable Apex for server validation and writes. Each flow receives the current record ID and opens a phone-sized form with the selected product, account and site visible as read-only context. Under **Related**, show movements and count discrepancies with status, quantity and date. **Cancel** returns to the stock record without saving. In each form, keep entered values on a validation error, focus the first invalid field, and announce status and errors. Disable Save during submission. On success, provide the saved record link and refresh the stock balance.

### Receipt · Record and post

1. On the stock record tap **Record receipt**. Choose **Delivered shipment item** from eligible lines. Show order/shipment number, line, delivery date, destination and delivered quantity. Require an exact product, account and destination match, a delivered status and delivery date, and a line with no existing receipt movement in any status. If none qualify, show **No eligible delivered shipment items**.
2. Enter **Received date** and **Receipt reference**. In this release the **Quantity received** is the full delivered quantity, displayed read-only in the stock unit. A partial or unit-mismatched delivery requires reconciliation outside this action.
3. Tap **Save receipt**. The server rechecks the stock, shipment, identity, quantity and authorization, then creates the existing E02 Receipt movement in **Recorded** with a unique shipment-item event key. Repeating a save with identical evidence returns the original receipt. The confirmation shows the movement and **Confirmed on hand** remains unchanged.
4. With posting permission, open the receipt and tap **Post receipt**. Review the shipment and quantity in the confirmation, then confirm. The same movement becomes **Posted Receipt**. E02 adds the quantity to the confirmed balance. Post only from **Recorded**. A repeat post returns the existing posted movement without adding stock. A save for the same line with different evidence shows **This shipment line already has a receipt** and preserves the original.

### Usage · Report, verify and post

1. Tap **Report usage**. Enter **Usage date**, **Quantity used**, **Report reference** and **Report line**. Quantity is a positive whole number in the stock unit. Show the selected stock and current confirmed balance above the fields.
2. Tap **Save usage**. Create the existing E02 Consumption movement in **Reported**. The confirmation shows the movement and its quantity appears in **Usage awaiting posting**. Reported and Verified movements count toward **Usage awaiting posting**. Store the E02 account, report and line key at save. An identical retry returns the original movement. A conflicting retry shows **This report line already exists**. If the quantity exceeds confirmed stock less pending usage, warn the coordinator that posting can fail for insufficient stock. Copy the configured E02 rate when required. Billing retains its existing Salesforce path.
3. On the movement, tap **Verify usage** after checking the report, quantity and site. The movement becomes **Verified**. With posting permission tap **Post usage**, review quantity and the resulting balance, then confirm. Recheck availability at posting and reject a quantity that would take confirmed stock below zero. The movement becomes **Posted Usage** and the confirmed balance refreshes. A rejected post leaves the movement **Verified** and shows the current balance. A repeat post returns the posted movement without deducting stock again.

### Discrepancy · Submit a count and review it

1. Tap **Report count discrepancy**. Show **Expected quantity** from confirmed on-hand stock. Enter **Counted quantity**, a whole number of zero or greater, and a required **Reason**. Show **Difference = counted − expected**. When the difference is zero, show **Count matches Salesforce** and leave submission disabled.
2. Tap **Submit for review**. If the confirmed balance changed since the form loaded, show the new balance and ask the coordinator to review the new difference before resubmitting. On success, store the stock position, product, account, site, expected and counted quantities, difference, unit, reason, submitting user and timestamp in a count-discrepancy record with **Pending review** status. Show a link and the unchanged confirmed balance.
3. The proposed review entry is **Menu → Count Discrepancies → Pending review**. The authorized reviewer opens the record, checks the stock and count details, enters a required **Review note**, then taps **Mark reviewed**. Salesforce records the reviewer and timestamp. This closes the review. Stock remains unchanged. If org discovery finds no suitable record type, use a Count Discrepancy object with a lookup to Consignment Stock, **Pending review** and **Reviewed** statuses, an object tab and a list view filtered by status. Confirm the responsible reviewer and sharing scope before rollout.

### Salesforce setup and system behavior

1. Deploy the lookup and the reviewed transaction actions to the intended Salesforce test org. In **Setup → Lightning App Builder → New → App Page**, name the page **Consignment Stock**, select **One Region**, and place **Find Consignment Stock** in it. Verify that the template appears in the target org. The existing lookup targets **App Page** and supports phone and desktop form factors.
2. In **Activation → Lightning Experience**, add **Consignment Stock** to the assigned internal app. In **Setup → App Manager**, verify that the app supports phone and desktop. Configure tab visibility for the assigned users and add **Count Discrepancies** to the reviewer navigation. Under **Object Manager → Buttons, Links, and Actions**, create Flow actions on Consignment Stock (**Record receipt**, **Report usage**, **Report count discrepancy**), Consignment Movement (**Post receipt**, **Verify usage**, **Post usage**) and Count Discrepancy (**Mark reviewed**). Add them to assigned layouts under **Salesforce Mobile and Lightning Experience Actions**, or use Dynamic Actions after verifying support on each target record page. Test the visibility rules on a phone and use server checks regardless of action visibility.
3. Give assigned users the page, Apex, record and field access required for their role. Enforce sharing and permissions in each server action, including when a request supplies a stock or shipment ID directly. The posting actions must validate status and replay keys server-side. Use with sharing and enforce user-mode permissions for queries and writes. Lock the stock position with SELECT FOR UPDATE before posting, re-read the balance and status in the same transaction, and retain a unique event key on each movement. Restrict flow access through the assigned permission sets. Use the existing E02 movements and balance rollups. The discrepancy workflow has its own review record and leaves balances and movements unchanged.
4. Open the app on a physical phone under the coordinator's account. Check scrolling, touch targets, keyboard, accessible labels and announcements. Verify the scanner-unavailable message and manual lookup on desktop. Test a representative label on each supported phone platform. This slice requires connectivity.
5. Verify the Salesforce fill-up checkout entry and eligibility rules with authorized buyers. Keep checkout checks separate from the coordinator phone test.

Salesforce references: [Activate Lightning App Pages](https://help.salesforce.com/s/articleView?id=platform.lightning_page_getting_into_salesforce1.htm&language=en_US&type=5) · [App Page target and phone support](https://developer.salesforce.com/docs/platform/lwc/guide/targets-lightning-app-page.html) · [E02 stock and movement behavior](https://github.com/aispanda/B2B-Commerce/blob/634d5eef66584da696dd658615d77bb856259a75/epics/e02-consignment/stories/consignment-consumption-demo/scenario.md) · [Mobile Flow actions](https://trailhead.salesforce.com/content/learn/modules/screen_flow_distribution/screen_flow_distribution_action) · [Scanner lifecycle](https://developer.salesforce.com/docs/platform/lwc/guide/reference-lightning-barcodescanner-scan.html) · [Scanner failure codes](https://developer.salesforce.com/docs/platform/lwc/guide/reference-lightning-barcodescanner-data-types.html).

### Documented limits and checks in the target org

Salesforce documents phone support for the App Page target, the scanner lifecycle, and object-specific Screen Flow actions in the mobile record menu. Lightning web component quick actions are unavailable in the Salesforce mobile app. Verify the actual app and permissions, sample-label mappings, flow and related-list visibility, and return navigation and balance refresh on the assigned phones.

### Acceptance walkthrough

| Check | Exact action and evidence expected |
| --- | --- |
| SC-01 / SC-02 | Open the new navigation item on a phone. Scan the fixture code, then cancel a scan or deny camera access and type the same code. Both routes show the same product, account, site, quantity and unit. Confirm one scan closes the camera. Test cancellation, permission denial and desktop fallback separately. |
| SC-03 | Start from zero stock and an unused delivered ten-box line. Save the receipt and verify Recorded and zero on hand. Post and verify Posted Receipt and ten on hand. |
| SC-04 | Save three boxes of usage. Verify Reported, ten confirmed and three awaiting posting. Verify, then post. Confirm Posted Usage, seven confirmed and zero awaiting posting. |
| SC-05 | Submit a physical count of six against seven. Open Pending review as a reviewer and verify difference −1, product, site, submitter and timestamp. Mark reviewed and verify stock stays seven. Enter a count of seven and confirm submission stays disabled. Confirm that a user without Reviewer permission cannot mark it reviewed. |
| SC-06 | Look up an unknown code, a code mapping to multiple products and a restricted site. Verify no movement can be saved from those results. With multiple authorized sites for one product, select the correct site explicitly. Confirm leading zeros survive both scan and type. Test action visibility and server-side denial for a coordinator without posting or review rights. |
| SC-07 | Try a shipment line for another site or product, and repeat each successful receipt and usage submission. Verify rejection of mismatches, one record for each valid event and seven confirmed on hand. Attempt to post eight against seven and verify the movement stays Verified. |
| SC-08 | In the verified Salesforce checkout, submit as an eligible buyer and then attempt as an ineligible buyer. Confirm only the eligible buyer can submit and that checkout leaves the stock balance unchanged until receipt. |

The screen sequence, proposed labels, record effects and acceptance checks are specified here. The target app and users, discrepancy reviewer, actual checkout, and mobile rendering still need validation in Salesforce. The story's execution section tracks lookup test results and the remaining validation.
