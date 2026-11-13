# Order on Behalf Of — B2B setup

Use Salesforce's standard Order on Behalf Of Flow to let an administrator place a test order for a registered B2B buyer and verify the resulting order.

## Prerequisites

- An eligible Order on Behalf Of, Order Management, or Connected Commerce license and an API-based checkout.
- A B2B store with a registered test buyer, product, price, shipping method, and supported test payment service.
- An administrator with access to the store and flow. Follow Salesforce's permission guidance.

[Overview](https://help.salesforce.com/s/articleView?id=commerce.om_order_on_behalf_of_overview_oobo.htm&language=en_US&type=5) · [B2B onboarding](https://help.salesforce.com/s/articleView?id=002048309&language=en_US&type=1) · [Payments](https://help.salesforce.com/s/articleView?id=commerce.om_payments_oobo.htm&language=en_US&type=5)

## Configure

1. In Setup → Flows, select New Flow → Use a Template → Order on Behalf Of Flow. Create, save, and activate a copy.
2. Create an Actions & Recommendations deployment for Account. Pin the copied flow and add the deployment to the Account Lightning record page.
3. Open the test buyer's Account and launch the flow. Resolve any setup or access error before continuing.

[Activate the template](https://help.salesforce.com/s/articleView?id=commerce.om_activate_oobo_flow.htm&language=en_US&type=5) · [Add it to the Account page](https://help.salesforce.com/s/articleView?id=sf.om_add_oobo_flow_object_page_oobo.htm&language=en_US&type=5)

## Verify

1. Select the store and buyer. Add a test product and quantity.
2. Enter the shipping address, select delivery, review the total, and complete checkout with the supported test payment method.
3. Record the confirmation reference. Open the resulting order detail or Order Summary and match the reference, buyer, product, quantity, and total.

[Salesforce order walkthrough](https://help.salesforce.com/s/articleView?id=sf.om_place_order_on_behalf_of_customer.htm&language=en_US&type=5)

Status: reusable setup draft. End-to-end validation is pending.
