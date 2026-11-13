# Managed RMA demo — execution kit

**Target:** an isolated Salesforce sandbox or Developer Edition with Order Management, Payments, API v68, the active **RMA Return Items** and **RMA Create Credit Memo and Ensure Refunds** flows, and a Lightning agent who can use them. In the Order Summary Actions & Recommendations panel, expose **RMA Return Items**. Use the target org's standard templates if the flows are missing. Verify the scheduled path and workflow user before testing.

## Run

Use Python 3.9+ and an authenticated Salesforce CLI. Supply IDs for a dummy active PricebookEntry, a test-only OrderDeliveryMethod, and a test-only Warehouse Location in that org. Confirm the org cannot trigger live shipping, payment, or other integrations for these records.

```sh
python3 run.py preflight --org DEMO
python3 run.py fixture --org DEMO --isolated --entry ENTRY_ID --delivery DELIVERY_ID --location WAREHOUSE_ID
```

The fixture command validates and deploys the no-callout adapter, registers a dedicated gateway, and creates a $25 managed order with two $12.50 units. It fulfills one unit, creates its invoice, and applies $12.50 of the simulated captured payment to that invoice. It uses Salesforce's **Create Order Payment Summary** action so the payment method is linked. Keep the generated `.rma-state.json` private. A failed run preserves its state for reconciliation. Inspect the state and the target org before starting another run; the fixture setup expects a fresh simulator name in the target org.

**Lightning test:** Open the order path returned by the fixture command. Run **RMA Return Items**, select one unit and an allowed reason, review **$12.50**, submit, and finish. Open **Related → Return Orders → return → Related → Return Order Line Items**. Set **Quantity Received = 1**, leave **Quantity Rejected = 0**, then open the parent return and save **Status = Closed**. Salesforce can queue the scheduled path for several minutes. Check **Setup → Time-Based Automations**. Avoid re-submitting or reopening while it runs.

```sh
python3 run.py verify --org DEMO
```

A pass requires one returned unit, order total $12.50, one posted $12.50 credit memo with $0 balance, one $12.50 processed refund against the dummy payment, $12.50 remaining refundable, and no process exception. In Lightning verify **Order Summary → Credit Memos → Credit Memo Lines**, **Invoices → Payment Line Invoices**, and **Order Payment Summary → Refunds**. Open the refund and capture its amount, status, and **Simulated refund - no money moved** gateway message. Exit 2 with `pending_or_missing_refund` means inspect the queue or exception before any retry.

## Layouts

`layouts.json` contains the tested field and related-list selections. Retrieve the applicable target layouts with `sf project retrieve start --metadata 'Layout:OBJECT-LAYOUT NAME' --target-org DEMO` in an isolated Salesforce project. Run `python3 merge-layouts.py RETRIEVED_LAYOUT_DIR NEW_LAYOUT_DIR`, review the diff, then validate and deploy only changed target layouts. Map custom layout names to the corresponding keys first. The merge preserves existing fields and related lists. Prioritize Return Order, Return Order Line Item, Order Payment Summary, Credit Memo, and Invoice for the demo.

The main related-list cards may show four columns; use **View All**. Standard Refund layout does not expose the original payment ID or a refund-application list. The underlying Refund Line Payment record links both records. Preserve the org's existing sharing, assignments, and integrations.

**Known blockers:** No invoice payment application can leave a posted memo without a refund. A manually seeded payment summary with no payment method can produce `paymentMethodId_nullOrEmpty`. A product line must have Type **Order Product** for fulfillment. Review Process Exceptions and existing financial records before retrying. Partial receipt, rejection, return fees, store credit, and live gateways are outside this fixture.

Validated scenario: one-unit receipt-first RMA in Lightning using a paid fulfillment invoice and linked dummy payment method. This kit parameterizes that path. Revalidate metadata and permissions in each target org.
