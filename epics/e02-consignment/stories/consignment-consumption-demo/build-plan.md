# Consignment demo configuration and fixture plan

19 November 2026 · Local execution record for the Developer Edition demo. See the [walkthrough](scenario.md) and [acceptance criteria](README.md).

## Configure two objects

| Object | Fields and configuration |
|---|---|
| Consignment Stock (`Consignment_Stock__c`) | Auto-number Name. Private sharing. Required Account and Location lookups. Product2 uses SetNull as required by the demo org, with the Product field required at save by validation. Required unique External ID `Stock_Key__c` for account, site and SKU. `Stocking_Unit__c` restricted picklist (Box). `Reference_Unit_Rate__c` currency for the example. Formula and roll-up fields below. |
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

## Fixture and execution commands

The [synthetic fixture](fixture.json) supplies the account, site, SKU, movement keys, and rate. Resolve the Shipment Item ID from the delivered synthetic chain. Keep its confirmed receipt date and source reference with the receipt. Use USD for the demo records in a multicurrency org. A rerun reads the existing fixture by its stable keys. The [live verifier](verify_live_fixture.apex) checks both paths and preserves the posted status and invoice reference.

Run `python3 verify_fixture.py` from the story folder for offline evidence. To run or replay the live fixture when authorized, use `sf apex run --target-org <verified-demo-alias> --file verify_live_fixture.apex --json`. The [story](README.md#proposed-scenario-checks) defines the checks and expected results for this scenario.

Check-only validation from the Salesforce project uses:

```sh
sf project deploy start --dry-run --source-dir force-app --target-org <verified-demo-alias> --test-level NoTestRun --wait 15 --json
```

## Execution record

| Step | Executor and dependency | Recorded state |
|---|---|---|
| S-01 · Verify platform access | Maker via Headless 360 and CLI on 12 November. Maker via CLI on 19 November. Use the verified target before any org work. | Headless 360 and CLI matched after the 19 November restart. The earlier executor session lacked callable MCP tools. [Access evidence](#platform-access) |
| S-02 · Qualify the delivery fixture | Maker via Salesforce CLI and the standard Order Management chain. Depends on S-01. | Complete for the isolated synthetic shipment. [CHK-01–02](#cli-records-and-metadata) |
| S-03 · Configure the demo | Maker via CLI and Salesforce Setup. Depends on S-01 and S-02. | Deployment, Path activation, and the approved Receipt profile assignment are complete. [Decision](#receipt-layout-decision) |
| S-04 · Load and replay data | Maker via CLI as the authorized current demo user. Depends on S-03 and the resolved synthetic fixture. | Complete. Initial run and replay passed. [CHK-02, CHK-03, CHK-05, CHK-06](#cli-records-and-metadata) |
| S-05 · Walk through Salesforce | Maker in Chrome in the current demo session. Depends on S-04 and applicable layout access. | Stock, usage, the Order Management chain, and the dedicated Receipt layout observed. Separate coordinator and billing clerk sessions remain unverified. [CHK-04, CHK-07–09](#browser-observations) |
| S-06 · Independent review and human acceptance | Pending assignment. Depends on the evidence for the agreed checks and a frozen story revision. | Independent Salesforce runtime review NOT RUN. Human acceptance pending. |

### Platform access

On 12 November in Developer Edition, the configured Headless 360 connection initially returned `invalid_request: scope parameter not supported`. The maker used routine OAuth reconnect. Discover, describe and read-only SOQL succeeded, and the explicit Salesforce CLI query returned the same org. Standard order and shipment objects were visible. Product Item and Product Consumed were unavailable to the connection. A scoped Flow Definition query found zero names matching `Consign`. The original fixture lookup found no visible delivered ten-box line.

On 19 November, `sf org list --json`, alias resolution and a read-only Organization query verified the Developer Edition CLI target. Its org path matched the configured Headless 360 entry. Both saved MCP entries were enabled in Codex. The session before the restart did not expose their callable tools. After restart on 19 November, Headless 360 discover and describe succeeded. Read-only Organization SOQL returned HTTP 200 and matched the CLI Developer Edition org identity. A scoped Shipment Item query returned the isolated delivered ten-box line and its order, fulfillment and shipment links. The in-app browser was unavailable, and the maker used Chrome for the browser trace.

## 19 November 2026 live run

The maker used the approved current CLI/demo user. Salesforce deployed 44 components with zero component errors after the check-only run rejected Restrict on the Product2 lookup. The deployed field uses SetNull, and custom validation still requires a product on save. The user explicitly approved the separate demo permission set deployment and assignment to the current demo user. The assignment passed. The set grants create, read and edit on the two demo objects and field access for the walkthrough. It does not grant Delete, View All or Modify All. The user’s effective permissions outside this set and distinct operational-role permissions were not tested.

### CLI records and metadata

- **CHK-01–02.** The isolated fixture reconciled one activated order with a blank PO and $0 due, its Order Summary, ten units on the fulfilled fulfillment line and ten on the Shipment Item for the same demo SKU. The shipment passed from Shipped to Delivered with an actual delivery timestamp. The receipt used the linked Shipment Item ID. The live verifier observed zero before posting and ten after posting.
- **CHK-03 and CHK-05.** The live verifier observed 10 confirmed and 3 awaiting posting at Verified. After posting it observed 7 confirmed, 0 awaiting and Not Ready. Before posting, the attempted billing change returned `FIELD_CUSTOM_VALIDATION_EXCEPTION`. The posted charge was 72 before tax at 24 per box. Ready to Bill and Billed (Demo) left seven on hand. Final reference `DEMO-INV-001`.
- **CHK-06.** The replay passed. The receipt key and usage key each had one matching movement, the billed usage retained its invoice reference, and the third movement was Voided before posting. The stock readback found seven on hand and zero awaiting posting.
- **Execution source.** Salesforce CLI JSON outcomes for deployment, assignment, fixture execution and replay recorded success. The originating chat preserves the bounded tool results and the later stock and movement readback. [Live verifier](verify_live_fixture.apex) · [Synthetic fixture](fixture.json)

CLI evidence fingerprints identify the exact recorded tool outputs. Raw output retrieval remains limited to the originating executor session.

| Recorded output | SHA-256 |
|---|---|
| Validated and deployed package | `a04470a5e09f7c1ef2e265da8430fc401a5210a4bc7f7e25ccf6a59e2b116d0c` |
| Demo permission assignment | `5ffa53eb4954d66caf1379b78c844e361cf16e29e0f9458004296eddb0dc4aaa` |
| Synthetic delivery and date | `9e1feb3b717b1c4e793093994a61d365acb166d0f648c9864e999c3662cc670c` |
| Live walkthrough | `ba88163979e0aa5acbed042b617fc56f27a25d66ba5ff93f7cb8b30183b32f42` |
| Replay | `b705247ab8c925a85bdacd55de04c5b8959784fd9c4b439ae0702f34b492637c` |
| Final fulfillment state | `0d1feb65a96b967d388331a9a0820adb8d20ffc59975c9171316c1ef24f908db` |

### Browser observations

The maker used Salesforce Lightning in Chrome under the current demo session. The recorded user context was the current demo operator with the System Administrator layout assignment under review. No separate coordinator, billing clerk, or independent verifier session was exercised.

- **CHK-04.** Entry point was usage record `CMV-0002`. In Setup the maker enabled Path and observed the active Consignment Usage Posting entry. The usage page screenshot showed the chevrons and Mark Posting Status as Complete. Expanding guidance opened Key Fields and Guidance for Success. Selecting Reported and Verified displayed guidance about the usage report and matching the site, SKU, quantity and rate. Posted Usage guidance addressed the stock change and billing review. Stage selection was a read-only inspection. Actual saves and earlier balance observations are from CLI.
- **CHK-07.** Entry points were the stock and usage record pages and their Lightning list views. Stock `CST-0001` showed the hospital and supply room, infusion set, Confirmed On Hand 7, Usage Awaiting Posting 0, and Consignment Movements (3), including the View All link. Usage `CMV-0002` showed quantity 3, the source reference, $24 unit rate, $72 before tax, Billed (Demo), the invoice reference and field edit controls. The stock list showed one item and the location, product and balance columns. Ready to Bill and Usage Awaiting Posting opened with zero items and their configured filters after completion.
- **CHK-08.** The maker opened receipt `CMV-0001`. It showed Posted Receipt under Usage Report and also displayed Demo Billing. The initial walkthrough did not trace the Order Management pages. The post-restart trace below closes that portion. The later receipt check verified the dedicated screen. [Verified assignment](#receipt-layout-decision)
- **CHK-09.** The final billing values were visible to the demo operator. Billing controls were not exercised in a separate billing clerk login.

The originating chat contains the stock record accessibility output, screenshot of the usage Path, stage-by-stage guidance output, list view observations and the receipt layout matrix. These observations are tied to the recorded chat and date. They have no immutable published capture in this checkout.

### Browser Order Management trace

On 19 November after restart, the maker opened synthetic Order Summary `00000138` in the authenticated Chrome demo session. It displayed the hospital, its supply-room ship-to, $0.00 totals and one fulfillment and one shipment. The Fulfillment Orders related list showed `FO-0019` as Fulfilled, quantity 10. Its Fulfillment Order Products list showed one line for Demo Infusion Set (1 per box), quantity 10, and its Shipments list showed `SP-0009` as Delivered. Opening that shipment showed Delivered and the Actual Delivery Date field. Its Shipment Items list and item detail showed the same product and quantity 10.00. The linked Shipment Item matched the post-restart Headless 360 read. The browser exposed Create Fulfillment Orders on the Order Summary and Edit Quantity on the Shipment Item. Neither action was submitted.

Reopening receipt `CMV-0001` showed Posted Receipt, Source Reference and the Edit Posting Status control under Usage Report, plus Demo Billing. At that point, the shipment evidence section remained absent. Access was observed in the current demo session. Separate operational roles and acceptance remain unverified. The originating chat contains the read-only Headless 360 result and the browser observations for CHK-08.

### Receipt layout decision

On 19 November, the maker opened **Object Manager → Consignment Movement → Page Layouts → Page Layout Assignment**. The System Administrator profile mapped Receipt to Consignment Consumption Layout. The proposed edit selected only the Receipt record type cell and set it to Consignment Receipt Layout. The browser showed **1 Selected, 1 Changed**. Automatic approval review rejected Save because the assignment is shared Salesforce presentation configuration and specific approval was required. The user then authorized proceeding with that assignment. Headless 360 confirmed the previously verified Developer Edition org. The maker saved the single System Administrator / Receipt cell and reopened the demo receipt in Chrome. The record showed Receipt, Shipment Evidence, the same Shipment Item ID from the order trace, source reference `DEMO-RECEIVING-001`, quantity 10, Posted Receipt, and the Edit Posting Status control. The maker verified visibility on the already-posted receipt. Human acceptance and separate operational-role checks remain open.

### Browser receipt posting test

The user authorized testing the first save on an isolated synthetic receipt. Headless 360 and CLI matched the intended Developer Edition org. The maker used CLI to prepare a separate ten-box delivered order, Salesforce stock position `CST-0002`, and receipt `CMV-0004` with reference `DEMO-RECEIVING-UI-001` in Recorded status. The receipt referenced the exact delivered Shipment Item. The fixture was ready before the browser test.

In Chrome as the demo operator, the stock page showed Confirmed On Hand 0. On the receipt, the maker opened Edit Posting Status, selected Posted Receipt, and saved. The receipt displayed Posted Receipt. Its linked stock page then showed Confirmed On Hand 10, Usage Awaiting Posting 0, and one related movement in Posted Receipt status. A read-only Headless 360 query independently reconciled one ten-box Posted Receipt at 10 confirmed on hand. The originating chat contains the browser readback and synthetic screenshot. A distinct billing clerk login remains CHK-09.

### Billing clerk prerequisites

The original test user was the existing Identity-licensed demo account explicitly approved for this check. The requester later authorized replacing it with a Contact-backed portal user. The CLI target returned the expected Developer Edition org identity. Headless 360 discovery failed to refresh with `invalid_request: scope parameter not supported`. The live permission verification below used CLI. [Salesforce Identity licenses](https://help.salesforce.com/s/articleView?id=xcloud.identity_licenses.htm&language=en_US&type=5)

The billing-only permission set passed check-only validation, deployed, and was assigned to the approved test user. The private synthetic stock position `CST-0002` was shared with that user at Read. A Salesforce access query verified read and edit access to usage, read access to stock, and no delete access on either. The set makes only Billing Status and Demo Invoice Reference editable. [Permission set](salesforce/force-app/main/default/permissionsets/Consignment_Billing_Clerk.permissionset-meta.xml)

The usage fixture `CMV-0005` (reference `DEMO-BILL-UI-001`) starts at Posted Usage and Not Ready, with $72 before tax, a blank demo invoice reference, and seven boxes on hand. Chrome showed the Login action for the test user. The launched tab remained opaque, and the browser blocked observing it under its URL policy. The user identity and two billing saves in Lightning are NOT RUN. [Salesforce Login As documentation](https://help.salesforce.com/s/articleView?id=logging_in_as_another_user.htm&language=en_US&type=5)

Gemini Neon reviewed a sanitized summary and recommended direct sign-in by the authorized test user. The Contact-backed replacement below superseded that direct sign-in path. The review informs recovery. It does not verify Salesforce behavior.

### Contact-backed billing clerk

#### Contact-first setup

1. Open Contacts in Salesforce Lightning and create a synthetic billing clerk Contact on the same Account as the test stock. Confirm the Account owner has a Salesforce role.
2. Open the Contact and choose **Enable Customer User**. If an eligible Contact lacks the action, check the Contact layout’s Salesforce Mobile and Lightning Experience Actions and the administrator’s permissions.
3. Populate the user details, select an eligible custom external profile on the intended license, and save. In this demo the User was provisioned through Salesforce’s API with its Contact link. The saved Contact displayed **Log in to Experience as User**.
4. Assign billing-only field permissions, share the single synthetic stock record, and add the dedicated profile to the intended Experience Cloud site. Verify the active user and site membership before retiring the replaced test user.
5. From the Contact, use **Log in to Experience as User**. Confirm the user’s identity in the portal before opening the billing record. Site membership and record access are prerequisites for this browser check. If the storefront still requests sign-in, open its standard login page and have the tester complete sign-in.

[Salesforce Contact-first setup and login](https://help.salesforce.com/s/articleView?id=platform.networks_create_external_users.htm&language=en_US&type=5) · [Contact actions and layout](https://help.salesforce.com/s/articleView?id=000338375&language=en_US&type=1)

The user requested replacing the contactless Identity test user with a Contact-backed portal user. The synthetic Contact belongs to the same Account as the billing fixture, and the Account owner has a role. The first User insert was rejected because the org restricts standard external profiles. Gemini Neon recommended a custom profile. Salesforce documents using a custom external profile under this restriction. [Salesforce guidance](https://help.salesforce.com/articleView?id=release-notes.rn_experiences_std_login_removed.htm&language=en_us&release=230&type=5)

Check-only validation and deployment succeeded for the dedicated Customer Community Plus profile. The Contact-backed replacement was verified active and portal-enabled. The approved billing permission set was assigned and the dedicated profile added to the demo site. Salesforce verified one site membership, read and edit access to the synthetic usage, read-only stock access, and no delete access on either record. The old Identity user was deactivated after those readbacks. [Profile source](salesforce/force-app/main/default/profiles/Consignment%20External%20Billing%20Test.profile-meta.xml) · [Salesforce site membership](https://help.salesforce.com/s/articleView?id=sf.networks_customize_members.htm&language=en_US)

The Contact displayed **Log in to Experience as User** in the in-app browser. The action opened the demo storefront, which still showed Log In. My Profile displayed empty name fields. Setup → Digital Experiences → All Sites confirmed that the landing URL matches the active ABCMed Demo Store. The storefront’s Log In button opened its standard username and password screen in the in-app browser. Gemini Neon suggested checking Login History. The scoped query returned no rows for the clerk, so it did not confirm authentication or establish a cause. Once the tester signs in and verifies the clerk’s name, open the posted usage and verify both billing saves and 7 on hand. CHK-09 remains NOT RUN. [Salesforce login-as behavior](https://help.salesforce.com/s/articleView?id=logging_in_as_another_user.htm&language=en_US&type=5)

### Admin maintenance candidates

At closeout, add one **Admin guidance** bullet per applicable setting immediately before **Next** in the story. Verify each path as the intended administrator and pass the linked check before promoting it.

| Setting | Candidate admin path and activation | Replay |
|---|---|---|
| Consumption Path stages, key fields and guidance | Setup → Path Settings → Consignment Usage Posting → Edit. Enable Path if disabled and activate the path after saving. The demo walkthrough observed the active path and guidance. | CHK-04 |
| Receipt page layout assignment | Setup → Object Manager → Consignment Movement → Page Layouts → Page Layout Assignment → Edit Assignment. Select the Receipt record type and the intended profile, assign the Receipt layout and save. | CHK-08 |
| Billing clerk site membership | Setup → Digital Experiences → All Sites → ABCMed Demo Store → Workspaces → Administration → Members. Add the dedicated external profile and save. The intended admin still needs to verify the Members screen and the clerk’s browser check is pending. | CHK-09 |
| Billing clerk permission set | Setup → Permission Sets → Consignment Billing Clerk → Manage Assignments → Add Assignments. Assign it only to the intended clerk and save. API evidence confirmed assignment. The intended admin still needs to verify the UI path. | CHK-09 |

### Prior evidence and migration history

| Source | Current location | Disposition |
|---|---|---|
| Prior story revision and original guide | [Pinned prior story](https://github.com/aispanda/B2B-Commerce/blob/634d5eef66584da696dd658615d77bb856259a75/epics/e02-consignment/stories/consignment-consumption-demo/README.md) · [NEW guide at 9d32dccc738cc544481a6da257c13d438115f122](https://github.com/aispanda/Reusable-Delivery/blob/9d32dccc738cc544481a6da257c13d438115f122/new/DELIVERY.md) | Earlier provenance preserved. The current guide is pinned in the story. AC-01–06 were carried over verbatim. |
| SRC16, the existing E02 records and the proposed record model | [E02](../../README.md) · [Scenario](scenario.md) | O05 eligibility, O06 fill-up and SAP ownership preserved. Demo work remains a separate scope. |
| Revisions 0.2 and 0.3, package review and offline evidence | [Design review](design-review.md) · [Offline verifier](verify_fixture.py) | Retained the roles, stock and billing split, reviewer findings, offline fixture checks, source conversion and local Metadata API WSDL check. |
| 19 November deployment and runtime results | [Current execution record](#19-november-2026-live-run) | Backend passes carry forward. Partly observed browser coverage is recorded separately from role and page checks that did not run. No publication or tracker synchronization in this documentation update. |

Salesforce dry-run reference. [Deploy start](https://developer.salesforce.com/docs/platform/salesforce-cli-reference/guide/cli_reference_project_deploy_start.html)

The story adopted the Material blockers format from its current guide. The [previous MIGRATE revision](https://github.com/aispanda/Reusable-Delivery/blob/a8b7285c6c0575195e2aa56b96111ccde5f69945/migrate/DELIVERY.md) remains the provenance for the initial migration.

The [prior MIGRATE guide](https://github.com/aispanda/Reusable-Delivery/blob/7a1203229c0e156809a4f83042e58bc57016dbb1/migrate/DELIVERY.md) governed the blocker update. The current guide adds the demo setup bullets and presenter sequence.
