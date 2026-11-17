# ROUTE-01: Implement Connected Commerce order routing POC

Guide: [NEW delivery guide](https://github.com/aispanda/Reusable-Delivery/blob/2b915c38dc21b793f9ed4aee9230c613991e79d1/new/DELIVERY.md) · Revision 1 · 16 November 2026  
Status: Documentation in progress; implementation and testing NOT RUN. Accountable owner: Pending. Human acceptance: Pending.

**Outcome:** As an order operations user, route test orders to suitable fulfillment locations using Salesforce's Connected Commerce Order Routing and Omnichannel Inventory.

**Current state:** The target POC's Setup Assistant reported routing Not Installed; Order Management Complete; OCI switch on while the assistant's OCI setup attempt showed Expired. OCI readiness is unverified. CLI read passed; Headless 360 authenticated but its tools were unavailable in the active session. Recheck all statuses in the executing session.

## Checklist

- [ ] **S-01 — Verify access:** Refresh Headless 360 tools; discover, describe, and dispatch a read-only check; independently verify Salesforce CLI and target org. Executor: AI, model/reasoning Pending. If a required check fails, stop dependent changes and use the guide's recovery procedure.
- [ ] **S-02 — Inspect prerequisites (AC-01):** Check license/entitlements, existing packages and flows, OCI operational status, permissions, store integration, and existing order/fulfillment automation. Resolve the Expired setup result and prevent duplicate routing. Executor: Pending.
- [ ] **S-03 — Prepare sample data (AC-02):** Configure or reuse test products/SKUs, a location group and at least two suitable locations; seed controlled inventory and define test orders and expected routing. Confirm how to avoid unintended fulfillment, payment, and notifications. Executor: Pending.
- [ ] **S-04 — Install and configure (AC-03):** From Commerce Setup Assistant → Additional Setup, install the Connected Commerce Order Routing package if absent; inspect installed components, configure supported OCI integration, activate applicable flows, and record changes. Executor: Pending.
- [ ] **S-05 — Debug and test (AC-04):** Inspect flow logic and use Flow Builder debug where supported; exercise automatic routing and reconcile order summary, chosen locations, reservations, and fulfillment orders. Test one-location, split, insufficient-inventory/exception, and manual recovery scenarios; record actual results and limitations. Executor: Pending.
- [ ] **S-06 — Review (AC-05):** Independently review configuration and evidence, record unresolved issues and human acceptance decision. Executor: Pending.

## Acceptance checks

- **AC-01:** Required access, entitlements, existing automation and OCI readiness are verified; blockers are documented. NOT RUN.
- **AC-02:** Synthetic inventory and location fixtures support the planned scenarios. NOT RUN.
- **AC-03:** The suitable package and flows are installed/configured and activated without duplicate routing. NOT RUN.
- **AC-04:** Debug and end-to-end tests show the expected routing, reservation and fulfillment-order outcomes, including an exception and recovery. Unsupported debug paths are recorded and tested through their supported entry point. NOT RUN.
- **AC-05:** Evidence, independent review and acceptance decision are recorded. NOT RUN.

## References

- [Install Connected Commerce Order Routing](https://help.salesforce.com/s/articleView?id=commerce.om_impl_order_routing_flow.htm&type=5)
- [Routing via Flows](https://help.salesforce.com/s/articleView?id=commerce.om_routing_flows_dom.htm&type=5)
- [Automated Order Routing](https://help.salesforce.com/s/articleView?id=commerce.om_automated_order_routing.htm&type=5)
- [Order Management and OCI prerequisites](https://help.salesforce.com/s/articleView?id=commerce.comm_csa_automations_features.htm&type=5)
