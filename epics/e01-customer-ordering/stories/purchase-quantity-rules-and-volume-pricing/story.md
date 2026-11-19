# DEMO-QTY · Purchase quantity rules and volume pricing

**Owner** · Pending confirmation · NEW route · [Guide](https://github.com/aispanda/Reusable-Delivery/blob/7a1203229c0e156809a4f83042e58bc57016dbb1/new/DELIVERY.md)

**Outcome** · As a demo buyer, I want the storefront to enforce pack increments and apply volume pricing so that I can see the correct price before ordering.

**Demo result** · All six checks passed on 19 November 2026 in the proof-of-concept store. Playwright Chrome verified the signed-in synthetic buyer’s cart. Salesforce CLI confirmed each saved quantity and adjusted subtotal on the same cart line.

**Acceptance** · Closed on 19 November 2026 at the project requester’s direction. Closure covers AC-01–AC-06 through cart repricing. The isolated cart was left at 12 units. Checkout and order submission were outside test scope.

**Test fixture** · One synthetic buyer, SKU `DEMO-GAUZE-BOX`, a $10 base unit price, 20 sellable units, and a cart that started empty. Subtotals exclude tax and shipping.

## Proposed scenario checks

1. **AC-01** · Commerce admin queries native records. `ProductQuantityRule` links `DEMO-GAUZE-BOX` to a `PurchaseQuantityRule` with minimum 2, maximum 20, and increment 2.
2. **AC-02** · Commerce admin queries the buyer’s effective `PricebookEntry`. Its active range-based `PriceAdjustmentSchedule` has a 10% `PriceAdjustmentTier` starting at 10 units.
3. **AC-03** · The buyer adds 8 units from the product page. The cart shows one line at $10.00 per unit and an $80.00 subtotal.
4. **AC-04** · The buyer attempts to update the cart to 9 units. The storefront blocks the change and the line retains 8 units at $80.00.
5. **AC-05** · The buyer updates the cart to 10 units. The line reprices to $9.00 per unit and a $90.00 subtotal.
6. **AC-06** · The buyer updates the cart to 12 units. The line shows $9.00 per unit and a $108.00 subtotal.

| Check ID | Status | Observed result and evidence |
|---|---|---|
| AC-01 | Pass | CLI verified the SKU assignment and rule values 2 / 20 / 2. The buyer page showed the same rule. |
| AC-02 | Pass | CLI verified the active range schedule. Headless 360 returned the $10 buyer price and the $9 tier at quantity 10. |
| AC-03 | Pass | The browser displayed one cart line at $10.00 per item and $80.00. CLI confirmed quantity 8 and an adjusted line total of $80.00. |
| AC-04 | Pass | The browser flagged 9 as invalid and displayed the allowed range and increment. CLI confirmed the same line stayed at 8 units and $80.00. |
| AC-05 | Pass | The browser displayed $9.00 per item and $90.00. CLI confirmed quantity 10 and an adjusted line total of $90.00. |
| AC-06 | Pass | The browser displayed $9.00 per item and $108.00. CLI confirmed quantity 12 and an adjusted line total of $108.00. |

Raw browser and CLI outputs are retained in the restricted execution chat. The project workspace owner controls access. This table records the sanitized results.

## Material blockers

**AC-03 · Resolved**
- **Goal** · Add eight units as the synthetic buyer and verify one cart line at $80.
- **Blocker** · The buyer page initially showed Out of Stock. In-app browser control then became unavailable.
- **Current fix** · Playwright Chrome restored buyer testing. Add To Cart was enabled, and AC-03 passed. [Verification details](#verification-details)
- **Documentation** · [Omnichannel Inventory Connect REST APIs](https://help.salesforce.com/s/articleView?id=commerce.inv_omnichannel_inventory_connect_rest_apis.htm&language=en_US&type=5)

## Verification details

CLI confirmed 20 units available to order from the store inventory endpoint using lowercase `eq` in the scope expression. Headless 360 confirmed the inventory upload completed. The combined inventory and pricing operation returned `FUNCTIONALITY_NOT_ENABLED`, while the dedicated product pricing operation returned the buyer price and tier. Playwright Chrome verified buyer identity through My Account and exercised the product and cart pages. CLI read the same `CartItem` after each browser action. At 10 and 12 units, `SalesPrice` retained the $10 base price and `TotalPriceAfterAllAdjustments` matched the cart subtotal.

**Next** · None for the demo. AC-01–AC-06 are closed.

## Files

- [story.md](story.md) · Scenario, results, and closeout.

Salesforce Help documents the underlying [purchase quantity rules](https://help.salesforce.com/s/articleView?id=commerce.comm_products_qr_intro.htm&language=en_US&type=5) and [tiered pricing setup](https://help.salesforce.com/s/articleView?id=commerce.comm_pas.htm&language=en_US&type=5).
