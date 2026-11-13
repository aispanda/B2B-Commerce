# Managed RMA execution kit

Start with the [story's build and test sequence](../README.md#build-and-test).

## Preflight

Use Python 3.9+ and an authenticated Salesforce CLI. The isolated sandbox or Developer Edition needs Order Management, Payments, API v68 and an authorized Lightning agent. Verify the scheduled path and its workflow user. In the Order Summary Actions & Recommendations panel, expose **RMA Return Items**. Use the target org's standard templates if the required flows are missing.

```sh
python3 run.py preflight --org DEMO
```

## Layouts

`layouts.json` contains the field and related-list selections. Retrieve the target layouts in an isolated Salesforce project. Map custom layout names to the corresponding keys.

```sh
sf project retrieve start --metadata 'Layout:OBJECT-LAYOUT NAME' --target-org DEMO
python3 merge-layouts.py RETRIEVED_LAYOUT_DIR NEW_LAYOUT_DIR
```

Review the diff, then validate and deploy only changed layouts. The merge preserves existing fields and related lists. Prioritize Return Order, Return Order Line Item, Order Payment Summary, Credit Memo and Invoice. The original payment link is on Refund Line Payment.

## Fixture

Supply an active dummy PricebookEntry, a test-only OrderDeliveryMethod and a test-only Warehouse Location from the target org. Confirm these records cannot trigger live shipping, payments or other integrations.

```sh
python3 run.py fixture --org DEMO --isolated --entry ENTRY_ID --delivery DELIVERY_ID --location WAREHOUSE_ID
```

The command installs a no-callout adapter and a dedicated gateway, creates two $12.50 units, fulfills one, invoices it and applies $12.50 of the simulated payment. It uses **Create Order Payment Summary** to link the payment method. Use the returned Lightning order path and keep `.rma-state.json` private. The fixture expects a fresh simulator name. If creation fails, inspect its saved state and target records before rerunning.

## Verification

After completing the Lightning steps in the story, run:

```sh
python3 run.py verify --org DEMO
```

Exit 2 with `pending_or_missing_refund` means inspect the scheduled path or process exception before retrying. A missing invoice payment application can leave a posted memo without a refund. A payment summary without a payment method can produce `paymentMethodId_nullOrEmpty`. The fulfillment line needs Type **Order Product**.
