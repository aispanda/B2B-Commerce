#!/usr/bin/env python3
"""Create an isolated fixture, or verify the result of a Lightning UI run."""
import argparse
import json
import os
from pathlib import Path
import re
import subprocess
import tempfile
import time
import uuid

ROOT = Path(__file__).resolve().parent
SF = os.environ.get("SF", "sf")
ADAPTER = "DemoRmaRefundAdapter"
CREDENTIAL = "DemoRmaRefund"
GATEWAY = "Demo RMA Refund (no callouts)"
ID = re.compile(r"[A-Za-z0-9]{15}(?:[A-Za-z0-9]{3})?")

def need(condition, message):
    if not condition:
        raise SystemExit(message)

def sf(*args, target=True):
    cmd = [SF, *args]
    if target:
        cmd += ["--target-org", opt.org]
    result = subprocess.run([*cmd, "--json"], cwd=ROOT, capture_output=True, text=True)
    data = json.loads(result.stdout)
    if result.returncode or data.get("status"):
        details = data.get("result") or {}
        raise SystemExit(data.get("message") or details.get("body") or details.get("details", {}).get("componentFailures") or "Salesforce command failed. Inspect the target before retrying.")
    return data["result"]

def query(soql, tooling=False):
    args = ["data", "query", "--query", soql]
    if tooling:
        args.append("--use-tooling-api")
    return sf(*args)["records"]

def one(rows, label):
    need(len(rows) == 1, f"Expected one {label}, found {len(rows)}.")
    return rows[0]

def from_id(obj, record_id, fields):
    need(ID.fullmatch(record_id), f"Invalid {obj} ID.")
    return one(query(f"SELECT {fields} FROM {obj} WHERE Id='{record_id}'"), obj)

def preflight():
    org = one(query("SELECT Id, IsSandbox, OrganizationType FROM Organization"), "organization")
    need(org["IsSandbox"] or org["OrganizationType"] == "Developer Edition", "Use an isolated Developer Edition or sandbox.")
    flows = query("SELECT Label, ApiName, ActiveVersionId FROM FlowDefinitionView WHERE IsActive=true AND Label IN ('RMA Return Items','RMA Create Credit Memo and Ensure Refunds')")
    for label in ("RMA Return Items", "RMA Create Credit Memo and Ensure Refunds"):
        one([flow for flow in flows if flow["Label"] == label], f"active {label} flow")
    print(json.dumps({"org": org["Id"], "flows": flows}, indent=2), flush=True)
    return org["Id"]

def save(state):
    dest = opt.state
    dest.parent.mkdir(parents=True, exist_ok=True)
    tmp = dest.with_suffix(".tmp")
    tmp.write_text(json.dumps(state, indent=2) + "\n")
    tmp.replace(dest)

def create_fixture():
    org = preflight()
    need(opt.isolated, "Pass --isolated after confirming the test warehouse, delivery method and absence of live integrations.")
    need(not opt.state.exists(), "State exists. Inspect it and reconcile partial writes. Choose a new state path for a separate run.")
    for key in ("entry", "delivery", "location"):
        need(ID.fullmatch(getattr(opt, key) or ""), f"Provide a valid --{key} ID from the target org.")
    entry = from_id("PricebookEntry", opt.entry, "Id,Pricebook2Id,IsActive,Product2.IsActive,Pricebook2.IsActive")
    need(entry["IsActive"] and entry["Product2"]["IsActive"] and entry["Pricebook2"]["IsActive"], "Use an active dummy product and price book entry.")
    from_id("OrderDeliveryMethod", opt.delivery, "Id,Name")
    location = from_id("Location", opt.location, "Id,Name,LocationType")
    need(location["LocationType"] == "Warehouse", "Use a dummy warehouse location.")

    # New setup only. A previously installed, identically named gateway must be
    # reviewed before it can be selected for reuse.
    gateways = query(f"SELECT Id FROM PaymentGateway WHERE PaymentGatewayName='{GATEWAY}'")
    providers = query(f"SELECT Id FROM PaymentGatewayProvider WHERE DeveloperName='{ADAPTER}'")
    classes = query(f"SELECT Id FROM ApexClass WHERE Name='{ADAPTER}' AND NamespacePrefix=null", True)
    credentials = query(f"SELECT Id FROM NamedCredential WHERE DeveloperName='{CREDENTIAL}'", True)
    need(not (gateways or providers or classes or credentials), "The named demo gateway or provider exists. Use a fresh org or reconcile the existing simulator setup before running this fixture.")
    state = {"org": org, "marker": "DEMO-RMA-" + uuid.uuid4().hex[:12].upper()}
    save(state)
    source = ("--source-dir", "force-app")
    sf("project", "deploy", "start", "--dry-run", *source, "--wait", "10")
    sf("project", "deploy", "start", *source, "--wait", "10")
    adapter = one(query(f"SELECT Id,Body FROM ApexClass WHERE Name='{ADAPTER}' AND NamespacePrefix=null", True), "simulator")
    expected = (ROOT / f"force-app/main/default/classes/{ADAPTER}.cls").read_text()
    need(adapter["Body"].strip() == expected.strip(), "Deployed adapter body does not match the no-callout source.")
    credential = one(query(f"SELECT Id,Metadata FROM NamedCredential WHERE DeveloperName='{CREDENTIAL}'", True), "named credential")
    metadata = credential["Metadata"]
    need(metadata["calloutStatus"] == "Disabled" and metadata["endpoint"] == "https://demo-rma-refund.invalid", "Dummy credential must be disabled and use the reserved .invalid domain.")
    with tempfile.TemporaryDirectory() as tmp:
        payload = Path(tmp) / "provider.json"
        payload.write_text(json.dumps({"FullName": ADAPTER, "Metadata": {
            "apexAdapter": ADAPTER, "idempotencySupported": "No", "masterLabel": GATEWAY
        }}))
        provider = sf("api", "request", "rest", "/services/data/v68.0/tooling/sobjects/PaymentGatewayProvider",
                      "--method", "POST", "--body", "@" + str(payload))["body"]
    need(provider.get("success"), "Dummy provider creation failed.")
    state["provider"] = provider["id"]
    save(state)
    result = sf("data", "create", "record", "--sobject", "PaymentGateway", "--values",
                f"PaymentGatewayName='{GATEWAY}' PaymentGatewayProviderId={provider['id']} MerchantCredentialId={credential['Id']} Status=Active")
    need(result.get("success"), "Dummy gateway creation failed.")
    state["gateway"] = result["id"]
    save(state)

    values = {"MARKER": state["marker"], "ENTRY_ID": opt.entry, "PRICEBOOK_ID": entry["Pricebook2Id"],
              "DELIVERY_ID": opt.delivery, "LOCATION_ID": opt.location, "GATEWAY_ID": state["gateway"],
              "PROVIDER_ID": provider["id"], "CREDENTIAL_ID": credential["Id"]}
    blocks = dict(re.findall(r"^// stage: (\w+)\n(.*?)(?=^// stage: |\Z)",
                             (ROOT / "stages.apex").read_text(), re.M | re.S))

    def stage(name, *patterns):
        src = re.sub(r"@(\w+)@", lambda m: values[m[1]], blocks[name])
        with tempfile.TemporaryDirectory() as tmp:
            path = Path(tmp) / f"{name}.apex"
            path.write_text(src)
            log = sf("apex", "run", "--file", str(path))["logs"]
        result = []
        for pattern in patterns:
            match = re.search(r"\|DEBUG\|" + pattern, log)
            need(match and ID.fullmatch(match[1]), f"{name} returned no ID; reconcile records before retrying.")
            result.append(match[1])
        return result

    state["order"], = stage("order", r"DUMMY_ORDER_ID=(\w+)")
    values["ORDER_ID"] = state["order"]
    save(state)
    state["summary"], = stage("summary", r"DUMMY_ORDER_SUMMARY_ID=(\w+)")
    values["SUMMARY_ID"] = state["summary"]
    save(state)
    summary = from_id("OrderSummary", state["summary"],
                      "Id,OrderNumber,GrandTotalAmount,(SELECT Id FROM OrderItemSummaries),(SELECT Id FROM OrderDeliveryGroupSummaries)")
    need(summary["GrandTotalAmount"] == 25, "Expected a $25 untaxed fixture order.")
    values["ITEM_ID"] = state["item"] = one(summary["OrderItemSummaries"]["records"], "product line")["Id"]
    values["GROUP_ID"] = one(summary["OrderDeliveryGroupSummaries"]["records"], "delivery group")["Id"]
    state["payment"], state["payment_summary"] = stage("payment", r"DUMMY_PAYMENT_ID=(\w+)", r"DUMMY_PAYMENT_SUMMARY_ID=(\w+)")
    save(state)
    payment = from_id("OrderPaymentSummary", state["payment_summary"], "PaymentMethodId,CapturedAmount,AuthorizationAmount")
    need(payment["PaymentMethodId"] and payment["CapturedAmount"] == 25 and payment["AuthorizationAmount"] == 0, "Fixture requires a linked payment method and only captured dummy funds.")
    state["fulfillment"], = stage("fulfillment", r'SYNTHETIC_FULFILLMENT=.*?"fulfillmentOrderIds":\["(\w+)"\]')
    values["FULFILLMENT_ID"] = state["fulfillment"]
    save(state)
    sf("data", "update", "record", "--sobject", "FulfillmentOrder", "--record-id", state["fulfillment"], "--values", "Status=Fulfilled")
    state["invoice"], = stage("invoice", r'DUMMY_INVOICE=.*?"invoiceId":"(\w+)"')
    values["INVOICE_ID"] = state["invoice"]
    save(state)
    state["fund_job"], = stage("fund", r'DUMMY_FUND=.*?"backgroundOperationId":"(\w+)"')
    save(state)
    for _ in range(30):
        invoice = from_id("Invoice", state["invoice"], "Status,Balance,TotalAmountWithTax")
        if invoice["Balance"] == 0:
            break
        time.sleep(2)
    application = one(query(f"SELECT Amount FROM PaymentLineInvoice WHERE PaymentId='{state['payment']}' AND InvoiceId='{state['invoice']}'"), "invoice payment application")
    item = from_id("OrderItemSummary", state["item"], "QuantityAvailableToReturn,QuantityFulfilled")
    need(invoice["Status"] == "Posted" and invoice["Balance"] == 0 and application["Amount"] == 12.5 and item["QuantityAvailableToReturn"] == 1, "Fixture is not ready for Lightning.")
    state["ready"] = True
    save(state)
    print(json.dumps({"status": "ready_for_lightning", "order_number": summary["OrderNumber"], "record_path": f"/lightning/r/OrderSummary/{state['summary']}/view"}, indent=2))

def verify():
    state = json.loads(opt.state.read_text())
    org = one(query("SELECT Id FROM Organization"), "organization")
    need(state.get("ready") and org["Id"] == state["org"], "Use a ready fixture and its original target org.")
    for key in ("summary", "item", "payment_summary", "payment", "invoice", "gateway"):
        need(ID.fullmatch(state[key]), f"Invalid fixture {key}.")
    summary, item, ops, payment, invoice, gateway = (state[k] for k in ("summary","item","payment_summary","payment","invoice","gateway"))
    returns = query(f"SELECT Id,ReturnOrderNumber,Status,LifeCycleType,(SELECT Id,QuantityExpected,QuantityReceived,QuantityRejected,QuantityReturned,ChangeOrderItemId FROM ReturnOrderLineItems) FROM ReturnOrder WHERE OrderSummaryId='{summary}'")
    ret = one(returns, "return order")
    need(ret["Status"] == "Closed" and ret["LifeCycleType"] == "MANAGED", "Close the managed return through Lightning first.")
    line = one(ret["ReturnOrderLineItems"]["records"], "return line")
    faults = query(f"SELECT Id,Message FROM ProcessException WHERE OrderSummaryId='{summary}'")
    need(not faults, f"Process exceptions: {faults}")
    refunds = query(f"SELECT Id,RefundNumber,Amount,Status,PaymentId,PaymentGatewayId,GatewayResultCodeDescription FROM Refund WHERE OrderPaymentSummaryId='{ops}'")
    if not refunds:
        print(json.dumps({"status":"pending_or_missing_refund","return":ret["ReturnOrderNumber"],"quantity_returned":line["QuantityReturned"]}))
        raise SystemExit(2)
    refund = one(refunds, "refund")
    memo = one(query(f"SELECT Id,DocumentNumber,Status,TotalAmountWithTax,Balance,(SELECT Id,LineAmount FROM CreditMemoLines) FROM CreditMemo WHERE ReferenceEntityId='{summary}'"), "credit memo")
    payment_summary = from_id("OrderPaymentSummary", ops, "CapturedAmount,RefundedAmount,AvailableToRefundAmount,PendingRefundAmount")
    order = from_id("OrderSummary", summary, "OrderNumber,GrandTotalAmount")
    product = from_id("OrderItemSummary", item, "Quantity,QuantityReturned")
    invoiced = from_id("Invoice", invoice, "Balance")
    credit = one(query(f"SELECT Id,Amount FROM CreditMemoInvApplication WHERE CreditMemoId='{memo['Id']}' AND InvoiceId='{invoice}'"), "credit application")
    refund_line = one(query(f"SELECT Id,Amount FROM RefundLinePayment WHERE RefundId='{refund['Id']}' AND PaymentId='{payment}'"), "refund application")
    need([line[k] for k in ("QuantityExpected","QuantityReceived","QuantityRejected","QuantityReturned")] == [1,1,0,1] and line["ChangeOrderItemId"], "Return quantity or change product mismatch.")
    need(order["GrandTotalAmount"] == 12.5 and product["Quantity"] == 1 and product["QuantityReturned"] == 1, "Order did not reconcile.")
    need(memo["Status"] == "Posted" and memo["TotalAmountWithTax"] == 12.5 and memo["Balance"] == invoiced["Balance"] == 0, "Credit memo did not reconcile.")
    need(one(memo["CreditMemoLines"]["records"], "credit memo line")["LineAmount"] == credit["Amount"] == refund_line["Amount"] == 12.5, "Application amounts did not reconcile.")
    need(refund["Status"] == "Processed" and refund["Amount"] == 12.5 and refund["PaymentId"] == payment and refund["PaymentGatewayId"] == gateway and refund["GatewayResultCodeDescription"] == "Simulated refund - no money moved", "Refund did not match the simulated payment.")
    need([payment_summary[k] for k in ("CapturedAmount","RefundedAmount","AvailableToRefundAmount","PendingRefundAmount")] == [25,12.5,12.5,0], "Payment totals did not reconcile.")
    print(json.dumps({"status":"passed", "order":order, "return":ret["ReturnOrderNumber"], "credit_memo":memo["DocumentNumber"], "refund":refund["RefundNumber"], "refund_id":refund["Id"]},indent=2))

p = argparse.ArgumentParser(description=__doc__)
p.add_argument("command", choices=("preflight", "fixture", "verify"))
p.add_argument("--org", required=True)
p.add_argument("--state", type=Path, default=ROOT / ".rma-state.json")
p.add_argument("--entry", help="Active dummy PricebookEntry ID")
p.add_argument("--delivery", help="Test-only OrderDeliveryMethod ID")
p.add_argument("--location", help="Test-only Warehouse Location ID")
p.add_argument("--isolated", action="store_true", help="Confirm this target and fixture cannot use live integrations")
opt = p.parse_args()
{"preflight":preflight, "fixture":create_fixture, "verify":verify}[opt.command]()
