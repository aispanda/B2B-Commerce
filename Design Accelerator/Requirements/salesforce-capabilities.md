# Salesforce capability and object map

`SF` means the linked Salesforce documentation describes the capability; it does **not** verify an org's license, configuration, active flow, storefront support, permissions or runtime behavior. `MAP` is an exploratory link to candidate requirements in [journeys-and-requirements.md](journeys-and-requirements.md). Check the current release, edition, license, storefront architecture, product and flow documentation before design or implementation. The source inventory combines B2B Commerce, Salesforce Order Management (OM), Payments and related products; these are not interchangeable.

## Commerce and checkout

| ID | Documented capability | Candidate use / boundaries |
|---|---|---|
| SF-01 | [Buyer groups, entitlement policies and price books](https://help.salesforce.com/s/articleView?id=commerce.comm_buyergroup_entitlements_pricebooks.htm&language=en_US&type=5) can tailor product visibility and pricing. [Entitlement policies](https://help.salesforce.com/s/articleView?id=sf.comm_entitlement_policies_intro.htm&language=en_US&type=5) govern product and price visibility for buyer groups. | MAP REQ-01, 03–04. Verify effective-account access and the applicable store/market model. [Market setup](https://help.salesforce.com/s/articleView?id=commerce.comm_market_considerations.htm&language=en_US&type=5) can change which policies apply; do not assume buyer-group rules always determine the result. |
| SF-02 | [Standard B2B checkout](https://developer.salesforce.com/docs/commerce/salesforce-commerce/guide/b2b-comm-checkout-how-standard-works.html) describes cart and checkout APIs, session creation, calculators, delivery, payment authorization and order placement. | MAP REQ-05–07. Calculators can rerun when cart state or delivery information changes. The documented API sequence does not establish the sequence or payment method for every implementation. |
| SF-03 | The [checkout flow setup guide](https://developer.salesforce.com/docs/commerce/salesforce-commerce/guide/b2b-b2c-comm-setup-checkout-flow.html) and [checkout calculators](https://developer.salesforce.com/docs/commerce/salesforce-commerce/guide/b2b-comm-checkout-calculators.html) describe checkout orchestration and calculation extension points. | MAP REQ-07. The inventory lists a Checkout Flow Template and candidate subflows for checkout session, price, inventory, addresses, delivery, shipping, tax, payment, summary, cart-to-order, activation, confirmation, state and errors. Those labels are inventory leads, not proof that a target store uses them or runs them in that order. Confirm architecture and current support. |
| SF-04 | [Guided promotion creation](https://help.salesforce.com/s/articleView?id=commerce.comm_promotions_template.htm&language=en_US&type=5) provides a promotion workflow. | MAP REQ-04. Promotion use, eligibility and impact require store setup and testing. |
| SF-05 | [Guest checkout for headless stores](https://developer.salesforce.com/docs/commerce/salesforce-commerce/guide/b2b-b2c-comm-set-up-guest-checkout-headless.html) is documented for the described architecture. | MAP REQ-01–02, 07. Guest purchasing is a business and configuration decision; do not assume it is enabled. |
| SF-06 | [Checkout processing status](https://developer.salesforce.com/docs/commerce/salesforce-commerce/guide/b2b-comm-checkout-poll-status.html) documents polling and calculator outcomes; [payment processing](https://developer.salesforce.com/docs/commerce/salesforce-commerce/guide/b2b-comm-checkout-process-payment.html) describes payment state. | MAP REQ-07, 15. Treat asynchronous acceptance as pending until the relevant outcome is confirmed; check current API behavior and retry rules. |

## Order Management flow templates

The [Salesforce Order Management flows catalog](https://help.salesforce.com/s/articleView?id=sf.om_flows.htm&language=en_US&type=5) identifies the following templates and license groupings. Screen flows and autolaunched flows serve different actors and triggers. A template's presence in a picker or a source workbook does not prove installation, activation or buyer-facing authorization. Customization, policy, LWR compatibility, supported integrations and permissions must be checked separately.

| ID | Template / type | Documented role; mapping and important check |
|---|---|---|
| SF-10 | Cancel Item Flow / screen | Cancel an order item before fulfillment. MAP REQ-10; confirm eligibility, fees, refund effects and permitted actor. [Cancel item detail](https://help.salesforce.com/s/articleView?id=sf.om_cancel_order_items.htm&language=en_US&type=5). |
| SF-11 | Create Order Summary Flow / autolaunched | Creates an order summary from an activated order. MAP REQ-09, 15; identify the actual summary producer and avoid duplicates. |
| SF-12 | Create Process Exception Flow / autolaunched | Creates an exception from a process exception event. MAP REQ-15; investigate and retry remain operational responsibilities. |
| SF-13 | Return Item Flow / screen | Processes a blind return after fulfillment; the catalog distinguishes it from a return requiring physical item return. MAP REQ-11; validate policy and financial effects. |
| SF-14 | RMA Return Items / screen | Processes an RMA return after fulfillment. MAP REQ-11; verify receipt, inspection, closure and authorization. |
| SF-15 | RMA Create Credit Memo and Ensure Refunds Flow / autolaunched | Creates a credit memo and ensures refunds when the documented managed-return closure trigger occurs. MAP REQ-11, 15; confirm finance and gateway outcomes. A credit memo is not itself proof of a paid refund. |
| SF-16 | Discount Flow / screen | Applies a discount to an order item. MAP REQ-11; restrict to authorized staff and validate credit/refund impact. |
| SF-17 | Even Exchange Flow / screen | Exchanges an item of even value before fulfillment. MAP REQ-11; verify item eligibility, inventory, product support and failure handling. |
| SF-18 | Exchange with RMA Flow / screen | Supports an exchange with an RMA after fulfillment. MAP REQ-11; verify product/edition support, payment differences and earlier side effects. |
| SF-19 | Order on Behalf Of Flow / screen | Supports staff order creation and payment on a customer's behalf. MAP REQ-05–07; verify staff access and existing-cart effects. |
| SF-20 | Reship Order Flow / screen | Reships an order item after fulfillment. MAP REQ-11; verify eligibility and fulfillment integration. |

The catalog lists SF-10–15 under OM Lite and SF-16–20 under OM Growth; it also lists Order on Behalf Of through Connected Commerce and a standalone license. Check the cited catalog for the current terms. The source inventory also names Cancel All Eligible Items, Ensure Refunds for Excess Funds, tax transaction/reversal and payment-link templates; use the [flow inventory](https://docs.google.com/spreadsheets/d/1nXyqEq3NlDQK2LpGr0ly8qZCiu3MxmEpOkMoc2DyYOo/edit#gid=1512684286) and the linked documentation to investigate availability, triggers and integration dependencies, rather than assuming they apply to every store.

## Objects and handoffs

These are object landmarks, not a complete schema or assertion that a direct relationship exists at every handoff. Explore [Salesforce's cart model](https://developer.salesforce.com/docs/platform/data-models/guide/b2b-commerce-d2c-commerce-cart.html), [OM objects](https://help.salesforce.com/s/articleView?id=sf.om_objects_used_by_order_management.htm&type=5), and the [object guide](../DataModel/). Check the current object reference and target metadata for fields, cardinality, access and feature availability.

| Journey | Representative objects / meaning | Boundary |
|---|---|---|
| Buyer and offer | `Account`, `BuyerAccount`, `BuyerGroup`, `BuyerGroupMember`, `WebStore`, `Product2`, `Pricebook2`, `PricebookEntry`, commerce entitlement policy | Effective buyer access, product visibility and price selection are separate checks; catalog access is not record-level authorization. |
| Cart and checkout | `WebCart`, `CartItem`, `CartCheckoutSession`, `CartDeliveryGroup`, `CartTax`, `CartValidationOutput` | Cart and checkout are working state; order creation is a process handoff, not an assumed direct field relationship. |
| Orders and changes | `Order`, `OrderItem`, `OrderSummary`, `OrderItemSummary`, `OrderItemSummaryChange` | Original and change orders are `Order` records; an order summary is a current view. Verify lifecycle and producer. |
| Fulfillment and shipment | `FulfillmentOrder`, `FulfillmentOrderLineItem`, `Shipment`, `ShipmentItem` | Fulfillment and carrier events may be owned or supplemented by external systems; a shipment does not prove payment. |
| Return and finance | `ReturnOrder`, `ReturnOrderLineItem`, `CreditMemo`, payment and refund records | Return, receipt, credit and refund are distinct states and may involve separate systems. Verify each relationship and authoritative outcome. |
| Service and equipment | `Case`, `Asset`, warranty and service records as applicable | A case need not create a return; service entitlement is distinct from commerce entitlement. Verify the product and feature model. |

## Agentforce mapping

The [standard agent action reference](https://help.salesforce.com/s/articleView?id=ai.copilot_actions_ref.htm&type=5), [guided shopping implementation](https://help.salesforce.com/s/articleView?id=commerce.comm_agent_guided_shopping_implement.htm&type=5) and [Knowledge action](https://help.salesforce.com/s/articleView?id=sf.copilot_actions_ref_answer_questions_with_knowledge.htm&type=5) are starting points. The source workbook proposes actions and topics for product discovery, cart, order inquiries, knowledge and escalation. Treat these as candidates only: validate product scope (B2B versus B2C), current action availability, input/output, permissions, account context, grounding and side effects. A topic name or action match is not proof of a deployed action chain or policy coverage.
