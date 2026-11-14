window.JOURNEY_DATA = {
  "schemaVersion": 1,
  "sourceWorkbook": "https://docs.google.com/spreadsheets/d/1nXyqEq3NlDQK2LpGr0ly8qZCiu3MxmEpOkMoc2DyYOo/edit",
  "exportedOn": "2026-11-13",
  "stages": [
    {
      "stage_id": "access",
      "tab_label": "Buyer access",
      "title": "Who may buy, and what they can see",
      "story": "Before North Valley Hospital can order, it is set up as a buyer, placed in a buyer group and given entitlements. These decide which store, products and prices it sees.",
      "connection": "The hospital account can be enabled as a buyer and assigned to a buyer group. Buyer groups connect to stores and entitlement policies, while contacts and addresses identify the people and delivery locations involved.",
      "subcategory_order": {
        "Buyer accounts and groups": 0,
        "Customer accounts and contacts": 1,
        "Store access and entitlements": 2,
        "Customer sales relationships": 3,
        "History and sharing": 4
      }
    },
    {
      "stage_id": "catalog",
      "tab_label": "Store & catalog",
      "title": "What the store offers",
      "story": "The supplier's B2B store presents a catalog of categories. The Surgical Dressing Box sits under Wound Care and can carry limits on how many boxes may be bought.",
      "connection": "A store can be associated with a catalog. Categories organize products within the catalog, and purchase quantity rules can define how products may be ordered.",
      "subcategory_order": {
        "Stores and catalogs": 0,
        "Categories and products": 1,
        "Purchase quantity rules": 2,
        "History and sharing": 3
      }
    },
    {
      "stage_id": "pricing",
      "tab_label": "Pricing",
      "title": "Which price the hospital pays",
      "story": "Contract prices for regional hospitals come from a price book assigned to the store and to the buyer group. Optional volume tiers can lower the unit price on larger orders.",
      "connection": "A price book contains prices for products. Price books can be assigned to a store or buyer group, with optional schedules and tiers for price adjustments.",
      "subcategory_order": {
        "Price books and assignments": 0,
        "Price adjustments and tiers": 1,
        "Product prices": 2,
        "History and sharing": 3
      }
    },
    {
      "stage_id": "promotions",
      "tab_label": "Promotions & coupons",
      "title": "Optional discounts, with or without a code",
      "story": "A promotion may reduce the price when the hospital qualifies, sometimes only after it enters a coupon code. Any discount then travels from the cart to the order and on to fulfillment. This path is optional.",
      "connection": "Promotions define eligibility and targets; segments can connect them to buyer groups and stores. Coupons may trigger eligible promotions, and resulting adjustments can appear in the cart, order, or fulfillment.",
      "subcategory_order": {
        "Promotion setup and eligibility": 0,
        "Promotion audience and targets": 1,
        "Cart discounts": 2,
        "Coupons and redemption": 3,
        "Order and fulfillment adjustments": 4,
        "History and sharing": 5
      }
    },
    {
      "stage_id": "quotes",
      "tab_label": "Quotes",
      "title": "An optional negotiated proposal",
      "story": "For a large standing order, the hospital might ask for a quote before buying. A simple store purchase skips this stage entirely.",
      "connection": "A quote may be associated with an opportunity and contains quoted product lines. It can also have a generated document and use prices from a price book.",
      "subcategory_order": {
        "Sales opportunities": 0,
        "Quote and quote lines": 1,
        "Generated quote documents": 2,
        "History and sharing": 3
      }
    },
    {
      "stage_id": "cart",
      "tab_label": "Cart & checkout",
      "title": "From a cart to a placed order",
      "story": "The buyer adds two Surgical Dressing Boxes, chooses a delivery option, reviews estimated tax and any warnings, and checks out.",
      "connection": "A cart contains product lines and delivery groups. Checkout brings together delivery options, estimated tax, validation messages, inventory reservations, and payment choices as configured.",
      "subcategory_order": {
        "Cart and products": 0,
        "Checkout sessions and validation": 1,
        "Delivery and inventory": 2,
        "History and sharing": 3
      }
    },
    {
      "stage_id": "order",
      "tab_label": "Order capture",
      "title": "The original order and its current view",
      "story": "Checkout creates the original order for two boxes. Order Management also builds a current view of the order, which later reflects shipments, cancellations and returns.",
      "connection": "An order contains product lines and can group them for delivery. The order summary and product summaries provide a current view as the order changes.",
      "subcategory_order": {
        "Order source and buyer": 0,
        "Original orders and order products": 1,
        "Delivery groups": 2,
        "Order summaries, summary lines and changes": 3,
        "Confirmations and related data": 4,
        "History and sharing": 5
      }
    },
    {
      "stage_id": "fulfill",
      "tab_label": "Fulfillment & shipping",
      "title": "The boxes are picked, packed and shipped",
      "story": "The order is routed to a warehouse, may be picked from a pick list, and is shipped by carrier to the hospital's receiving dock.",
      "connection": "A fulfillment order assigns work to a location and contains product lines. Pick tickets can support preparation, while shipments and shipment items describe the goods being sent.",
      "subcategory_order": {
        "Routing and delivery setup": 0,
        "Shipping carriers and methods": 1,
        "Locations and inventory": 2,
        "Fulfillment orders and fulfillment order products": 3,
        "Picking and packing": 4,
        "Shipments and shipment items": 5,
        "History and sharing": 6
      }
    },
    {
      "stage_id": "tax",
      "tab_label": "Tax",
      "title": "Tax is calculated, recorded and reduced separately",
      "story": "Tax is estimated in the cart, recorded on order lines, carried to fulfillment and reduced when a box is returned. Credit memo and invoice lines carry it too.",
      "connection": "Tax policies and treatments help define how tax is calculated. Tax records can appear in the cart, order, fulfillment, and return; a provider reversal is a separate process.",
      "subcategory_order": {
        "Tax setup and rates": 0,
        "Cart tax": 1,
        "Order and fulfillment tax": 2,
        "Return and provider tax": 3,
        "History and audit": 4
      }
    },
    {
      "stage_id": "returns",
      "tab_label": "Cancel or return",
      "title": "One box comes back",
      "story": "Before shipment, a quantity can be canceled. After delivery, the hospital returns one box. An exchange is another possible path but is not part of this scenario.",
      "connection": "A return order contains lines for products being returned, with optional adjustments and tax. Processing can produce a change order and product line; a summary change records the effect on the order.",
      "subcategory_order": {
        "Cancellation and order changes": 0,
        "Return orders and products": 1,
        "Return adjustments and exchanges": 2,
        "History and sharing": 3
      }
    },
    {
      "stage_id": "billing",
      "tab_label": "Invoices & credits",
      "title": "What is owed, and what is credited",
      "story": "The hospital is invoiced for two boxes plus shipping and tax. After the return, a credit memo reduces what it owes by one box.",
      "connection": "An invoice contains lines for charges. A payment can be applied to the invoice, and a credit memo can contain credit lines and be applied separately.",
      "subcategory_order": {
        "Invoices and lines": 0,
        "Credit memos and lines": 1,
        "Credit applications": 2,
        "Payment applications": 3,
        "History and sharing": 4
      }
    },
    {
      "stage_id": "payments",
      "tab_label": "Payments & refunds",
      "title": "Money authorized, captured and returned",
      "story": "If the hospital pays by card, funds may be authorized and then captured. After the return, a refund can send back the money for one box. Invoiced or offline payment terms may skip authorization.",
      "connection": "Payment methods and merchant configuration support checkout. An authorization may precede a payment; a refund can be allocated back to an earlier payment.",
      "subcategory_order": {
        "Payment setup and methods": 0,
        "Checkout and payment summaries": 1,
        "Authorizations and payments": 2,
        "Credits and refunds": 3,
        "Gateway and provider evidence": 4,
        "History and sharing": 5
      }
    },
    {
      "stage_id": "service",
      "tab_label": "Service & warranty",
      "title": "When something goes wrong after delivery",
      "story": "The hospital may open a case about a damaged box. Support entitlements and warranties describe the help it is due. A case can lead to a return, but it does not have to.",
      "connection": "A case can record a customer issue. Assets can carry warranty coverage, and warranty terms may be associated with products; service entitlements describe support eligibility.",
      "subcategory_order": {
        "Customer assets": 0,
        "Warranty terms and coverage": 1,
        "Service cases and support": 2,
        "History and sharing": 3
      }
    },
    {
      "stage_id": "ops",
      "tab_label": "Operations & audit",
      "title": "Signals, logs and exceptions behind the scenes",
      "story": "Background jobs, events and logs record what the systems did. They help support teams investigate problems, but they are not business transactions.",
      "connection": "Background processing and external integrations can produce operational records. Exceptions capture some failures, and change events can notify subscribers of updates.",
      "subcategory_order": {
        "Processing and integrations": 0,
        "Exceptions and recovery": 1,
        "History and sharing": 2,
        "Change events and audit": 3
      }
    }
  ],
  "objects": [
    {
      "row_id": "J021",
      "name": "Account",
      "api": "Account",
      "primary_stage": "access",
      "also_stages": [],
      "meaning": "One organization the business deals with; here, the hospital customer.",
      "example": "North Valley Hospital.",
      "scope": "Main",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_account.htm",
      "stage_details": {
        "access": {
          "subcategory": "Buyer accounts and groups",
          "position": 0,
          "role": "Main",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J022",
      "name": "Buyer Account",
      "api": "BuyerAccount",
      "primary_stage": "access",
      "also_stages": [],
      "meaning": "Marks one account as enabled to buy in the store, with its buyer settings.",
      "example": "North Valley Hospital enabled as a B2B buyer.",
      "scope": "Main",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_buyeraccount.htm",
      "stage_details": {
        "access": {
          "subcategory": "Buyer accounts and groups",
          "position": 1,
          "role": "Main",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J024",
      "name": "Buyer Group",
      "api": "BuyerGroup",
      "primary_stage": "access",
      "also_stages": [],
      "meaning": "One group of buyers that share pricing, entitlement and promotion rules.",
      "example": "Regional Hospitals buyer group.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_buyergroup.htm",
      "stage_details": {
        "access": {
          "subcategory": "Buyer accounts and groups",
          "position": 2,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J027",
      "name": "Buyer Group Related Object",
      "api": "BuyerGroupRelatedObject",
      "primary_stage": "access",
      "also_stages": [],
      "meaning": "Associates a currency or a supported ship-to country with a buyer group.",
      "example": "US dollars and United States assigned to Regional Hospitals.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_buyergrouprelatedobject.htm",
      "stage_details": {
        "access": {
          "subcategory": "Buyer accounts and groups",
          "position": 3,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J039",
      "name": "External Managed Account",
      "api": "DelegatedAccount",
      "primary_stage": "access",
      "also_stages": [],
      "meaning": "One delegated relationship that lets an external user manage another account.",
      "example": "A purchasing-group contact authorized to buy for North Valley Hospital.",
      "scope": "Supporting",
      "note": "Applies only if delegated account management is used; verify.",
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_delegatedaccount.htm",
      "stage_details": {
        "access": {
          "subcategory": "Buyer accounts and groups",
          "position": 4,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J025",
      "name": "Buyer Group Member",
      "api": "BuyerGroupMember",
      "primary_stage": "access",
      "also_stages": [],
      "meaning": "Places one buyer in one buyer group.",
      "example": "North Valley Hospital added to Regional Hospitals.",
      "scope": "Main",
      "note": "Flagged for review, though group membership is usually how buyers get access; verify.",
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_buyergroupmember.htm",
      "stage_details": {
        "access": {
          "subcategory": "Buyer accounts and groups",
          "position": 5,
          "role": "Main",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J031",
      "name": "Contact",
      "api": "Contact",
      "primary_stage": "access",
      "also_stages": [],
      "meaning": "One person at an account, such as a buyer or a receiving contact.",
      "example": "Alex Morgan, materials manager at North Valley Hospital.",
      "scope": "Supporting",
      "note": "Flagged for review. Buyer users are normally tied to a person record; verify.",
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contact.htm",
      "stage_details": {
        "access": {
          "subcategory": "Customer accounts and contacts",
          "position": 0,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J032",
      "name": "Contact Point Address",
      "api": "ContactPointAddress",
      "primary_stage": "access",
      "also_stages": [],
      "meaning": "One saved billing or shipping address for a buyer.",
      "example": "Ship-to: 102 Spring Valley Road, Receiving Dock B.",
      "scope": "Supporting",
      "note": "The definition cites individual or person accounts; verify for business buyers.",
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_contactpointaddress.htm",
      "stage_details": {
        "access": {
          "subcategory": "Customer accounts and contacts",
          "position": 1,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J035",
      "name": "Entitlement Buyer Group",
      "api": "CommerceEntitlementBuyerGroup",
      "primary_stage": "access",
      "also_stages": [],
      "meaning": "Applies one entitlement policy to one buyer group.",
      "example": "Hospital Products policy applied to Regional Hospitals.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_commerceentitlementbuyergroup.htm",
      "stage_details": {
        "access": {
          "subcategory": "Store access and entitlements",
          "position": 0,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J036",
      "name": "Entitlement Policy",
      "api": "CommerceEntitlementPolicy",
      "primary_stage": "access",
      "also_stages": [],
      "meaning": "One policy controlling which products and prices a buyer group can see.",
      "example": "Hospital Products policy covering wound-care items.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_commerceentitlementpolicy.htm",
      "stage_details": {
        "access": {
          "subcategory": "Store access and entitlements",
          "position": 1,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J042",
      "name": "Store Buyer Group",
      "api": "WebStoreBuyerGroup",
      "primary_stage": "access",
      "also_stages": [],
      "meaning": "Gives one buyer group access to one store.",
      "example": "Regional Hospitals assigned to ABC Hospital Supply Store.",
      "scope": "Main",
      "note": null,
      "source": "https://developer.salesforce.com/docs/platform/object-reference/references/standard-objects/sforce-api-objects-list.html",
      "stage_details": {
        "access": {
          "subcategory": "Store access and entitlements",
          "position": 2,
          "role": "Main",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J038",
      "name": "Entitlement Product",
      "api": "CommerceEntitlementProduct",
      "primary_stage": "access",
      "also_stages": [],
      "meaning": "Adds one product to one entitlement policy.",
      "example": "Surgical Dressing Box included in the Hospital Products policy.",
      "scope": "Supporting",
      "note": "Flagged for review, though policies normally list products this way; verify.",
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_commerceentitlementproduct.htm",
      "stage_details": {
        "access": {
          "subcategory": "Store access and entitlements",
          "position": 3,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J041",
      "name": "Sales Organization",
      "api": "Sales_Organization__c",
      "primary_stage": "access",
      "also_stages": [],
      "meaning": "Custom, reusable sales organization referenced by customer sales areas.",
      "example": "Sales organization ABC US West.",
      "scope": "Supporting",
      "note": "Custom; confirm relevance.",
      "source": "https://developer.salesforce.com/docs/platform/object-reference/references/standard-objects/sforce-api-objects-list.html",
      "stage_details": {
        "access": {
          "subcategory": "Customer sales relationships",
          "position": 0,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Custom / packaged"
    },
    {
      "row_id": "J034",
      "name": "Customer Sales Area",
      "api": "Customer_Sales_Area__c",
      "primary_stage": "access",
      "also_stages": [],
      "meaning": "Custom sales-area context for a sold-to customer, with sales organization, distribution channel and division codes.",
      "example": "Sales org 1000, channel 10, division 00 for North Valley Hospital.",
      "scope": "Supporting",
      "note": "Custom ERP-style record; confirm use.",
      "source": "https://developer.salesforce.com/docs/platform/object-reference/references/standard-objects/sforce-api-objects-list.html",
      "stage_details": {
        "access": {
          "subcategory": "Customer sales relationships",
          "position": 1,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Custom / packaged"
    },
    {
      "row_id": "J033",
      "name": "Customer Partner Assignment",
      "api": "Customer_Partner_Assignment__c",
      "primary_stage": "access",
      "also_stages": [],
      "meaning": "Custom assignment of one partner function to a customer's sales area.",
      "example": "Ship-to partner North Valley Hospital Main Campus for the hospital's sales area.",
      "scope": "Supporting",
      "note": "Custom; verify fields and whether order processing uses it.",
      "source": "https://developer.salesforce.com/docs/platform/object-reference/references/standard-objects/sforce-api-objects-list.html",
      "stage_details": {
        "access": {
          "subcategory": "Customer sales relationships",
          "position": 2,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Custom / packaged"
    },
    {
      "row_id": "J028",
      "name": "Buyer Group Share",
      "api": "BuyerGroupShare",
      "primary_stage": "access",
      "also_stages": [],
      "meaning": "Access entry granting visibility of one buyer group. Not a business transaction.",
      "example": "Merchandising team granted access to Regional Hospitals.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/platform/object-reference/references/associated-objects/sforce-api-associated-objects-list.html",
      "stage_details": {
        "access": {
          "subcategory": "History and sharing",
          "position": 0,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J040",
      "name": "External Managed Account Share",
      "api": "DelegatedAccountShare",
      "primary_stage": "access",
      "also_stages": [],
      "meaning": "Access entry granting visibility of one delegated-account record. Not a business transaction.",
      "example": "Partner admins granted access to the delegated relationship.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/platform/object-reference/references/associated-objects/sforce-api-associated-objects-list.html",
      "stage_details": {
        "access": {
          "subcategory": "History and sharing",
          "position": 1,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J023",
      "name": "Buyer Account Share",
      "api": "BuyerAccountShare",
      "primary_stage": "access",
      "also_stages": [],
      "meaning": "Access entry granting a user or group visibility of one buyer record. Not a business transaction.",
      "example": "Account team granted read access to the hospital's buyer record.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/platform/object-reference/references/associated-objects/sforce-api-associated-objects-list.html",
      "stage_details": {
        "access": {
          "subcategory": "History and sharing",
          "position": 2,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J026",
      "name": "Buyer Group Member Share",
      "api": "BuyerGroupMemberShare",
      "primary_stage": "access",
      "also_stages": [],
      "meaning": "Access entry granting visibility of one buyer-group membership. Not a business transaction.",
      "example": "Commerce admins granted access to the hospital's group membership.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/platform/object-reference/references/associated-objects/sforce-api-associated-objects-list.html",
      "stage_details": {
        "access": {
          "subcategory": "History and sharing",
          "position": 3,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J037",
      "name": "Entitlement Policy History",
      "api": "CommerceEntitlementPolicyHistory",
      "primary_stage": "access",
      "also_stages": [],
      "meaning": "Audit entry for one tracked field change on an entitlement policy. Not a business transaction.",
      "example": "Policy description updated to include dressings.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/platform/object-reference/references/associated-objects/sforce-api-associated-objects-list.html",
      "stage_details": {
        "access": {
          "subcategory": "History and sharing",
          "position": 4,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J019",
      "name": "Store",
      "api": "WebStore",
      "primary_stage": "catalog",
      "also_stages": [],
      "meaning": "One B2B storefront where buyers browse, price and order.",
      "example": "ABC Hospital Supply Store.",
      "scope": "Main",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_webstore.htm",
      "stage_details": {
        "catalog": {
          "subcategory": "Stores and catalogs",
          "position": 0,
          "role": "Main",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J011",
      "name": "Catalog",
      "api": "ProductCatalog",
      "primary_stage": "catalog",
      "also_stages": [],
      "meaning": "One catalog holding the category hierarchy shown to buyers.",
      "example": "Hospital Supplies Catalog.",
      "scope": "Main",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_productcatalog.htm",
      "stage_details": {
        "catalog": {
          "subcategory": "Stores and catalogs",
          "position": 1,
          "role": "Main",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J018",
      "name": "Sales Store Catalog",
      "api": "SalesStoreCatalog",
      "primary_stage": "catalog",
      "also_stages": [],
      "meaning": "One association between a store and a catalog in the sales-store model.",
      "example": "Hospital Supplies Catalog associated with the ABC hospital store.",
      "scope": "Supporting",
      "note": "Overlaps with J020; verify which one this store uses.",
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_salesstorecatalog.htm",
      "stage_details": {
        "catalog": {
          "subcategory": "Stores and catalogs",
          "position": 2,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J020",
      "name": "Store Catalog",
      "api": "WebStoreCatalog",
      "primary_stage": "catalog",
      "also_stages": [],
      "meaning": "Assigns one catalog to one store.",
      "example": "Hospital Supplies Catalog assigned to ABC Hospital Supply Store.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_webstorecatalog.htm",
      "stage_details": {
        "catalog": {
          "subcategory": "Stores and catalogs",
          "position": 3,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J012",
      "name": "Category",
      "api": "ProductCategory",
      "primary_stage": "catalog",
      "also_stages": [],
      "meaning": "One category in a catalog's hierarchy.",
      "example": "Wound Care > Dressings.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_productcategory.htm",
      "stage_details": {
        "catalog": {
          "subcategory": "Categories and products",
          "position": 0,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J015",
      "name": "Product Category Product",
      "api": "ProductCategoryProduct",
      "primary_stage": "catalog",
      "also_stages": [],
      "meaning": "Assigns one product to one category.",
      "example": "Surgical Dressing Box placed in Wound Care > Dressings.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_productcategoryproduct.htm",
      "stage_details": {
        "catalog": {
          "subcategory": "Categories and products",
          "position": 1,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J013",
      "name": "Product",
      "api": "Product2",
      "primary_stage": "catalog",
      "also_stages": [],
      "meaning": "One product the company sells.",
      "example": "Surgical Dressing Box (50 sterile dressings).",
      "scope": "Main",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_product2.htm",
      "stage_details": {
        "catalog": {
          "subcategory": "Categories and products",
          "position": 2,
          "role": "Main",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J016",
      "name": "Product Quantity Rule",
      "api": "ProductQuantityRule",
      "primary_stage": "catalog",
      "also_stages": [],
      "meaning": "Links one purchase-quantity rule to one product.",
      "example": "Box quantity limits applied to Surgical Dressing Box.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_productquantityrule.htm",
      "stage_details": {
        "catalog": {
          "subcategory": "Purchase quantity rules",
          "position": 0,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J017",
      "name": "Quantity Rule",
      "api": "PurchaseQuantityRule",
      "primary_stage": "catalog",
      "also_stages": [],
      "meaning": "One rule restricting how many units of a product can be bought.",
      "example": "Minimum 1, maximum 20, in steps of 1 box.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_purchasequantityrule.htm",
      "stage_details": {
        "catalog": {
          "subcategory": "Purchase quantity rules",
          "position": 1,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J030",
      "name": "Catalog Share",
      "api": "ProductCatalogShare",
      "primary_stage": "catalog",
      "also_stages": [],
      "meaning": "Access entry granting visibility of one catalog. Not a business transaction.",
      "example": "Catalog managers granted edit access to Hospital Supplies Catalog.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/platform/object-reference/references/associated-objects/sforce-api-associated-objects-list.html",
      "stage_details": {
        "catalog": {
          "subcategory": "History and sharing",
          "position": 0,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J014",
      "name": "Product Catalog History",
      "api": "ProductCatalogHistory",
      "primary_stage": "catalog",
      "also_stages": [],
      "meaning": "Audit entry for one tracked field change on a catalog. Not a business transaction.",
      "example": "Catalog name changed from Hospital Supplies to Hospital Supplies 2026.",
      "scope": "Supporting",
      "note": "Requires field history tracking; verify.",
      "source": "https://developer.salesforce.com/docs/platform/object-reference/references/associated-objects/sforce-api-associated-objects-list.html",
      "stage_details": {
        "catalog": {
          "subcategory": "History and sharing",
          "position": 1,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J127",
      "name": "Buyer Group Price Book",
      "api": "BuyerGroupPricebook",
      "primary_stage": "pricing",
      "also_stages": [],
      "meaning": "Assigns one price book to one buyer group.",
      "example": "Hospital Contract Prices assigned to Regional Hospitals.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_buyergrouppricebook.htm",
      "stage_details": {
        "pricing": {
          "subcategory": "Price books and assignments",
          "position": 0,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J131",
      "name": "Store Price Book",
      "api": "WebStorePricebook",
      "primary_stage": "pricing",
      "also_stages": [],
      "meaning": "Assigns one price book to one store.",
      "example": "Hospital Contract Prices assigned to ABC Hospital Supply Store.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_webstorepricebook.htm",
      "stage_details": {
        "pricing": {
          "subcategory": "Price books and assignments",
          "position": 1,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J128",
      "name": "Price Book",
      "api": "Pricebook2",
      "primary_stage": "pricing",
      "also_stages": [],
      "meaning": "One price book listing products and their prices.",
      "example": "Hospital Contract Prices 2026.",
      "scope": "Main",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_pricebook2.htm",
      "stage_details": {
        "pricing": {
          "subcategory": "Price books and assignments",
          "position": 2,
          "role": "Main",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J145",
      "name": "Price Adjustment Schedule",
      "api": "PriceAdjustmentSchedule",
      "primary_stage": "pricing",
      "also_stages": [],
      "meaning": "One schedule of tiered discounts based on quantity, configuration or product combinations.",
      "example": "Dressing volume tiers.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_priceadjustmentschedule.htm",
      "stage_details": {
        "pricing": {
          "subcategory": "Price adjustments and tiers",
          "position": 0,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J147",
      "name": "Price Adjustment Tier",
      "api": "PriceAdjustmentTier",
      "primary_stage": "pricing",
      "also_stages": [],
      "meaning": "One discount tier in a tiered discount schedule.",
      "example": "10–49 boxes: 5% off.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_priceadjustmenttier.htm",
      "stage_details": {
        "pricing": {
          "subcategory": "Price adjustments and tiers",
          "position": 1,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J149",
      "name": "Price Book Entry Adjustment",
      "api": "PricebookEntryAdjustment",
      "primary_stage": "pricing",
      "also_stages": [],
      "meaning": "Read-only link between a product price and a tiered discount schedule.",
      "example": "Dressing volume tiers linked to the $45.00 dressing-box price.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_pricebookentryadjustment.htm",
      "stage_details": {
        "pricing": {
          "subcategory": "Price adjustments and tiers",
          "position": 2,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J148",
      "name": "Price Adjustment Tier History",
      "api": "PriceAdjustmentTierHistory",
      "primary_stage": "pricing",
      "also_stages": [],
      "meaning": "Audit entry for one tracked field change on a discount tier. Not a business transaction.",
      "example": "Tier discount changed from 4% to 5%.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/platform/object-reference/references/associated-objects/sforce-api-associated-objects-list.html",
      "stage_details": {
        "pricing": {
          "subcategory": "Price adjustments and tiers",
          "position": 3,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J129",
      "name": "Price Book Entry",
      "api": "PricebookEntry",
      "primary_stage": "pricing",
      "also_stages": [],
      "meaning": "One product's price in one price book.",
      "example": "Surgical Dressing Box at $45.00.",
      "scope": "Main",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_pricebookentry.htm",
      "stage_details": {
        "pricing": {
          "subcategory": "Product prices",
          "position": 0,
          "role": "Main",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J146",
      "name": "Price Adjustment Schedule History",
      "api": "PriceAdjustmentScheduleHistory",
      "primary_stage": "pricing",
      "also_stages": [],
      "meaning": "Audit entry for one tracked field change on a tiered discount schedule. Not a business transaction.",
      "example": "Schedule renamed to Dressing Volume 2026.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/platform/object-reference/references/associated-objects/sforce-api-associated-objects-list.html",
      "stage_details": {
        "pricing": {
          "subcategory": "History and sharing",
          "position": 0,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J130",
      "name": "Price Book Entry History",
      "api": "PricebookEntryHistory",
      "primary_stage": "pricing",
      "also_stages": [],
      "meaning": "Audit entry for one tracked field change on a product price. Not a business transaction.",
      "example": "List price changed from $46.00 to $45.00.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/platform/object-reference/references/associated-objects/sforce-api-associated-objects-list.html",
      "stage_details": {
        "pricing": {
          "subcategory": "History and sharing",
          "position": 1,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J150",
      "name": "Promotion",
      "api": "Promotion",
      "primary_stage": "promotions",
      "also_stages": [],
      "meaning": "One promotion offered in a store.",
      "example": "10% off wound-care dressings.",
      "scope": "Main",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_promotion.htm",
      "stage_details": {
        "promotions": {
          "subcategory": "Promotion setup and eligibility",
          "position": 0,
          "role": "Main",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J159",
      "name": "Promotion Tier",
      "api": "PromotionTier",
      "primary_stage": "promotions",
      "also_stages": [],
      "meaning": "One tier of a multi-tier promotion.",
      "example": "Spend $500+: 5% off; $1,000+: 8% off.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_promotiontier.htm",
      "stage_details": {
        "promotions": {
          "subcategory": "Promotion setup and eligibility",
          "position": 1,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J153",
      "name": "Promotion Qualifier",
      "api": "PromotionQualifier",
      "primary_stage": "promotions",
      "also_stages": [],
      "meaning": "The product, category or order a buyer must purchase to qualify for a promotion.",
      "example": "Qualifies when buying any Wound Care item.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_promotionqualifier.htm",
      "stage_details": {
        "promotions": {
          "subcategory": "Promotion setup and eligibility",
          "position": 2,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J151",
      "name": "Promotion Line Item Rule",
      "api": "PromotionLineItemRule",
      "primary_stage": "promotions",
      "also_stages": [],
      "meaning": "Compound conditions that decide when a promotion applies.",
      "example": "Applies when the cart has 2 or more wound-care items.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_promotionlineitemrule.htm",
      "stage_details": {
        "promotions": {
          "subcategory": "Promotion setup and eligibility",
          "position": 3,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J154",
      "name": "Promotion Segment",
      "api": "PromotionSegment",
      "primary_stage": "promotions",
      "also_stages": [],
      "meaning": "One segment that makes promotions available to stores or buyer groups.",
      "example": "Regional Hospitals promotion segment.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_promotionsegment.htm",
      "stage_details": {
        "promotions": {
          "subcategory": "Promotion audience and targets",
          "position": 0,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J155",
      "name": "Promotion Segment Buyer Group",
      "api": "PromotionSegmentBuyerGroup",
      "primary_stage": "promotions",
      "also_stages": [],
      "meaning": "Adds one buyer group to one promotion segment.",
      "example": "Regional Hospitals added to its promotion segment.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_promotionsegmentbuyergroup.htm",
      "stage_details": {
        "promotions": {
          "subcategory": "Promotion audience and targets",
          "position": 1,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J156",
      "name": "Promotion Segment Sales Store",
      "api": "PromotionSegmentSalesStore",
      "primary_stage": "promotions",
      "also_stages": [],
      "meaning": "Adds one store to one promotion segment.",
      "example": "ABC Hospital Supply Store added to the segment.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_promotionsegmentsalesstore.htm",
      "stage_details": {
        "promotions": {
          "subcategory": "Promotion audience and targets",
          "position": 2,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J152",
      "name": "Promotion Market Segment",
      "api": "PromotionMarketSegment",
      "primary_stage": "promotions",
      "also_stages": [],
      "meaning": "One B2B market segment that promotions can be assigned to.",
      "example": "Hospital market segment.",
      "scope": "Supporting",
      "note": "Relationship to J154 is unclear; verify.",
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_promotionmarketsegment.htm",
      "stage_details": {
        "promotions": {
          "subcategory": "Promotion audience and targets",
          "position": 3,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J158",
      "name": "Promotion Target",
      "api": "PromotionTarget",
      "primary_stage": "promotions",
      "also_stages": [],
      "meaning": "The product, category or order that receives a promotion's discount.",
      "example": "10% off Surgical Dressing Box.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_promotiontarget.htm",
      "stage_details": {
        "promotions": {
          "subcategory": "Promotion audience and targets",
          "position": 4,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J135",
      "name": "Cart Item Price Adjustment",
      "api": "CartItemPriceAdjustment",
      "primary_stage": "promotions",
      "also_stages": [],
      "meaning": "One price adjustment, such as a promotion discount, on a cart line.",
      "example": "−$9.00 on the two-box line.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_cartitempriceadjustment.htm",
      "stage_details": {
        "promotions": {
          "subcategory": "Cart discounts",
          "position": 0,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J133",
      "name": "Cart Adjustment Group",
      "api": "WebCartAdjustmentGroup",
      "primary_stage": "promotions",
      "also_stages": [],
      "meaning": "Groups related price adjustments applied to a cart.",
      "example": "Wound-care promotion adjustments on the hospital's cart.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_webcartadjustmentgroup.htm",
      "stage_details": {
        "promotions": {
          "subcategory": "Cart discounts",
          "position": 1,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J134",
      "name": "Cart Delivery Group Method Adjustment",
      "api": "CartDeliveryGroupMethodAdj",
      "primary_stage": "promotions",
      "also_stages": [],
      "meaning": "One shipping-promotion discount on a delivery method.",
      "example": "$12.00 ground shipping waived.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_cartdeliverygroupmethodadj.htm",
      "stage_details": {
        "promotions": {
          "subcategory": "Cart discounts",
          "position": 2,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J136",
      "name": "Coupon",
      "api": "Coupon",
      "primary_stage": "promotions",
      "also_stages": [],
      "meaning": "One coupon code used to unlock an eligible promotion.",
      "example": "WOUND10.",
      "scope": "Main",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_coupon.htm",
      "stage_details": {
        "promotions": {
          "subcategory": "Coupons and redemption",
          "position": 0,
          "role": "Main",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J137",
      "name": "Coupon Code Redemption",
      "api": "CouponCodeRedemption",
      "primary_stage": "promotions",
      "also_stages": [],
      "meaning": "One recorded use of a coupon code.",
      "example": "WOUND10 redeemed once by North Valley Hospital.",
      "scope": "Main",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_couponcoderedemption.htm",
      "stage_details": {
        "promotions": {
          "subcategory": "Coupons and redemption",
          "position": 1,
          "role": "Main",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J132",
      "name": "Cart Adjustment Basis",
      "api": "WebCartAdjustmentBasis",
      "primary_stage": "promotions",
      "also_stages": [],
      "meaning": "Records the coupon behind a cart price adjustment.",
      "example": "Coupon WOUND10 behind a 10% cart discount.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_webcartadjustmentbasis.htm",
      "stage_details": {
        "promotions": {
          "subcategory": "Coupons and redemption",
          "position": 2,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J139",
      "name": "Order Adjustment Group",
      "api": "OrderAdjustmentGroup",
      "primary_stage": "promotions",
      "also_stages": [],
      "meaning": "Groups the price adjustments applied to an order.",
      "example": "Wound-care promotion adjustments on the hospital's order.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderadjustmentgroup.htm",
      "stage_details": {
        "promotions": {
          "subcategory": "Order and fulfillment adjustments",
          "position": 0,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J141",
      "name": "Order Adjustment Group Summary",
      "api": "OrderAdjustmentGroupSummary",
      "primary_stage": "promotions",
      "also_stages": [],
      "meaning": "Current state of one group of order price adjustments after changes.",
      "example": "Order-level discount group after the return.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderadjustmentgroupsummary.htm",
      "stage_details": {
        "promotions": {
          "subcategory": "Order and fulfillment adjustments",
          "position": 1,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J142",
      "name": "Order Product Adjustment Line Item",
      "api": "OrderItemAdjustmentLineItem",
      "primary_stage": "promotions",
      "also_stages": [],
      "meaning": "One price adjustment applied to an order line.",
      "example": "−$9.00 on the two-box order line.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderitemadjustmentlineitem.htm",
      "stage_details": {
        "promotions": {
          "subcategory": "Order and fulfillment adjustments",
          "position": 2,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J144",
      "name": "Order Product Adjustment Line Item Summary",
      "api": "OrderItemAdjustmentLineSummary",
      "primary_stage": "promotions",
      "also_stages": [],
      "meaning": "Current state of the price adjustments on an ordered line after changes.",
      "example": "Discount on the one remaining box: −$4.50.",
      "scope": "Supporting",
      "note": "How discounts are prorated after a return depends on configuration.",
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderitemadjustmentlinesummary.htm",
      "stage_details": {
        "promotions": {
          "subcategory": "Order and fulfillment adjustments",
          "position": 3,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J138",
      "name": "Fulfillment Order Item Adjustment",
      "api": "FulfillmentOrderItemAdjustment",
      "primary_stage": "promotions",
      "also_stages": [],
      "meaning": "One price adjustment carried onto a fulfillment line.",
      "example": "−$9.00 discount on the two-box fulfillment line.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_fulfillmentorderitemadjustment.htm",
      "stage_details": {
        "promotions": {
          "subcategory": "Order and fulfillment adjustments",
          "position": 4,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J157",
      "name": "Promotion Share",
      "api": "PromotionShare",
      "primary_stage": "promotions",
      "also_stages": [],
      "meaning": "Access entry granting visibility of one promotion. Not a business transaction.",
      "example": "Marketing team granted edit access to the dressing promotion.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/platform/object-reference/references/associated-objects/sforce-api-associated-objects-list.html",
      "stage_details": {
        "promotions": {
          "subcategory": "History and sharing",
          "position": 0,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J140",
      "name": "Order Adjustment Group History",
      "api": "OrderAdjustmentGroupHistory",
      "primary_stage": "promotions",
      "also_stages": [],
      "meaning": "Audit entry for one tracked field change on an order's adjustment group. Not a business transaction.",
      "example": "Adjustment group description edited.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/platform/object-reference/references/associated-objects/sforce-api-associated-objects-list.html",
      "stage_details": {
        "promotions": {
          "subcategory": "History and sharing",
          "position": 1,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J143",
      "name": "Order Product Adjustment Line Item History",
      "api": "OrderItemAdjustmentLineItemHistory",
      "primary_stage": "promotions",
      "also_stages": [],
      "meaning": "Audit entry for one tracked field change on an order-line adjustment. Not a business transaction.",
      "example": "Adjustment description edited.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/platform/object-reference/references/associated-objects/sforce-api-associated-objects-list.html",
      "stage_details": {
        "promotions": {
          "subcategory": "History and sharing",
          "position": 2,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J161",
      "name": "Opportunity",
      "api": "Opportunity",
      "primary_stage": "quotes",
      "also_stages": [],
      "meaning": "One sales deal being pursued.",
      "example": "North Valley Hospital annual dressing supply deal.",
      "scope": "Main",
      "note": "Flagged for review; may not be part of store buying.",
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_opportunity.htm",
      "stage_details": {
        "quotes": {
          "subcategory": "Sales opportunities",
          "position": 0,
          "role": "Main",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J162",
      "name": "Quote",
      "api": "Quote",
      "primary_stage": "quotes",
      "also_stages": [],
      "meaning": "One proposal of prices for products and services.",
      "example": "Quote for 200 Surgical Dressing Boxes at $42.00 each.",
      "scope": "Main",
      "note": "Whether quotes turn into store orders here is unverified.",
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_quote.htm",
      "stage_details": {
        "quotes": {
          "subcategory": "Quote and quote lines",
          "position": 0,
          "role": "Main",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J164",
      "name": "Quote Line Item",
      "api": "QuoteLineItem",
      "primary_stage": "quotes",
      "also_stages": [],
      "meaning": "One product, quantity and price proposed on a quote.",
      "example": "Surgical Dressing Box × 200 at $42.00.",
      "scope": "Main",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_quotelineitem.htm",
      "stage_details": {
        "quotes": {
          "subcategory": "Quote and quote lines",
          "position": 1,
          "role": "Main",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J166",
      "name": "Quote PDF",
      "api": "QuoteDocument",
      "primary_stage": "quotes",
      "also_stages": [],
      "meaning": "One generated document version of a quote.",
      "example": "PDF of the dressing quote sent to the hospital.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_quotedocument.htm",
      "stage_details": {
        "quotes": {
          "subcategory": "Generated quote documents",
          "position": 0,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J163",
      "name": "Quote History",
      "api": "QuoteHistory",
      "primary_stage": "quotes",
      "also_stages": [],
      "meaning": "Audit entry for one tracked field change on a quote. Not a business transaction.",
      "example": "Quote expiration date extended by 30 days.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/platform/object-reference/references/associated-objects/sforce-api-associated-objects-list.html",
      "stage_details": {
        "quotes": {
          "subcategory": "History and sharing",
          "position": 0,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J165",
      "name": "Quote Line Item History",
      "api": "QuoteLineItemHistory",
      "primary_stage": "quotes",
      "also_stages": [],
      "meaning": "Audit entry for one tracked field change on a quote line. Not a business transaction.",
      "example": "Quoted unit price changed from $43.00 to $42.00.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/platform/object-reference/references/associated-objects/sforce-api-associated-objects-list.html",
      "stage_details": {
        "quotes": {
          "subcategory": "History and sharing",
          "position": 1,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J167",
      "name": "Quote Share",
      "api": "QuoteShare",
      "primary_stage": "quotes",
      "also_stages": [],
      "meaning": "Access entry granting visibility of one quote. Not a business transaction.",
      "example": "Sales manager granted access to the hospital's quote.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/platform/object-reference/references/associated-objects/sforce-api-associated-objects-list.html",
      "stage_details": {
        "quotes": {
          "subcategory": "History and sharing",
          "position": 2,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J002",
      "name": "Cart",
      "api": "WebCart",
      "primary_stage": "cart",
      "also_stages": [],
      "meaning": "One buyer's shopping cart in the store, with product, shipping and tax totals.",
      "example": "North Valley Hospital's cart: 2 Surgical Dressing Boxes, $90.00 subtotal plus shipping.",
      "scope": "Main",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_webcart.htm",
      "stage_details": {
        "cart": {
          "subcategory": "Cart and products",
          "position": 0,
          "role": "Main",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J006",
      "name": "Cart Item",
      "api": "CartItem",
      "primary_stage": "cart",
      "also_stages": [],
      "meaning": "One product or charge line in a cart, with its quantity and price.",
      "example": "Surgical Dressing Box × 2 at $45.00 each.",
      "scope": "Main",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_cartitem.htm",
      "stage_details": {
        "cart": {
          "subcategory": "Cart and products",
          "position": 1,
          "role": "Main",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J003",
      "name": "Cart Checkout Session",
      "api": "CartCheckoutSession",
      "primary_stage": "cart",
      "also_stages": [],
      "meaning": "One checkout attempt that carries a cart through checkout toward an order.",
      "example": "Session started when the hospital's buyer clicks Checkout on the two-box cart.",
      "scope": "Main",
      "note": "Checkout steps depend on store configuration; verify.",
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_cartcheckoutsession.htm",
      "stage_details": {
        "cart": {
          "subcategory": "Checkout sessions and validation",
          "position": 0,
          "role": "Main",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J007",
      "name": "Cart Message",
      "api": "CartValidationOutput",
      "primary_stage": "cart",
      "also_stages": [],
      "meaning": "One error or warning message attached to part of a cart, such as a line or delivery group.",
      "example": "Warning on the dressing-box line: requested quantity exceeds available stock.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_cartvalidationoutput.htm",
      "stage_details": {
        "cart": {
          "subcategory": "Checkout sessions and validation",
          "position": 1,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J005",
      "name": "Cart Delivery Group Method",
      "api": "CartDeliveryGroupMethod",
      "primary_stage": "cart",
      "also_stages": [],
      "meaning": "The delivery option selected for one cart delivery group.",
      "example": "Ground delivery, 3–5 business days, $12.00.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_cartdeliverygroupmethod.htm",
      "stage_details": {
        "cart": {
          "subcategory": "Delivery and inventory",
          "position": 0,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J004",
      "name": "Cart Delivery Group",
      "api": "CartDeliveryGroup",
      "primary_stage": "cart",
      "also_stages": [],
      "meaning": "Groups the cart lines going to one delivery address.",
      "example": "Both boxes going to North Valley Hospital, Receiving Dock B.",
      "scope": "Main",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_cartdeliverygroup.htm",
      "stage_details": {
        "cart": {
          "subcategory": "Delivery and inventory",
          "position": 1,
          "role": "Main",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J009",
      "name": "Inventory Reservation",
      "api": "InventoryReservation",
      "primary_stage": "cart",
      "also_stages": [],
      "meaning": "Tracks inventory held for one cart while checkout completes.",
      "example": "2 dressing boxes held while the hospital completes checkout.",
      "scope": "Supporting",
      "note": "Applies only if inventory reservation is configured.",
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_inventoryreservation.htm",
      "stage_details": {
        "cart": {
          "subcategory": "Delivery and inventory",
          "position": 2,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J029",
      "name": "Cart Share",
      "api": "WebCartShare",
      "primary_stage": "cart",
      "also_stages": [],
      "meaning": "Access entry granting a user or group visibility of one cart. Not a business transaction.",
      "example": "Second hospital buyer granted access to the shared dressing cart.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/platform/object-reference/references/associated-objects/sforce-api-associated-objects-list.html",
      "stage_details": {
        "cart": {
          "subcategory": "History and sharing",
          "position": 0,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J109",
      "name": "Sales Channel",
      "api": "SalesChannel",
      "primary_stage": "order",
      "also_stages": [],
      "meaning": "Identifies where an order came from.",
      "example": "B2B Store channel.",
      "scope": "Supporting",
      "note": "Flagged for review; module fit uncertain.",
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_saleschannel.htm",
      "stage_details": {
        "order": {
          "subcategory": "Order source and buyer",
          "position": 0,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J090",
      "name": "Order",
      "api": "Order",
      "primary_stage": "order",
      "also_stages": [],
      "meaning": "One order: either the original purchase or a later change order.",
      "example": "Original order for 2 boxes; a later change order records −1 for the return.",
      "scope": "Main",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_order.htm",
      "stage_details": {
        "order": {
          "subcategory": "Original orders and order products",
          "position": 0,
          "role": "Main",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J095",
      "name": "Order Product",
      "api": "OrderItem",
      "primary_stage": "order",
      "also_stages": [],
      "meaning": "One product, service or charge line on an order or change order.",
      "example": "Surgical Dressing Box × 2 at $45.00; on the change order, quantity −1.",
      "scope": "Main",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderitem.htm",
      "stage_details": {
        "order": {
          "subcategory": "Original orders and order products",
          "position": 1,
          "role": "Main",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J102",
      "name": "Order Product Type",
      "api": "OrderItemType",
      "primary_stage": "order",
      "also_stages": [],
      "meaning": "Shows whether an order line is a product line or a charge line.",
      "example": "Product line for the boxes; charge line for shipping.",
      "scope": "Supporting",
      "note": "Exact role is unclear; verify.",
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderitemtype.htm",
      "stage_details": {
        "order": {
          "subcategory": "Original orders and order products",
          "position": 2,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J091",
      "name": "Order Delivery Group",
      "api": "OrderDeliveryGroup",
      "primary_stage": "order",
      "also_stages": [],
      "meaning": "Groups the order lines that share one delivery method and address.",
      "example": "Both boxes by ground to Receiving Dock B.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderdeliverygroup.htm",
      "stage_details": {
        "order": {
          "subcategory": "Delivery groups",
          "position": 0,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J092",
      "name": "Order Delivery Group Summary",
      "api": "OrderDeliveryGroupSummary",
      "primary_stage": "order",
      "also_stages": [],
      "meaning": "Current state of the products that share one recipient and delivery method.",
      "example": "Ground delivery group showing 1 box kept after the return.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderdeliverygroupsummary.htm",
      "stage_details": {
        "order": {
          "subcategory": "Delivery groups",
          "position": 1,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J098",
      "name": "Order Product Summary Relationship",
      "api": "OrderItemSummaryRelationship",
      "primary_stage": "order",
      "also_stages": [],
      "meaning": "Connects a main ordered line to an associated line, such as a bundle component.",
      "example": "Wound-care kit line linked to the dressing box it includes.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderitemsummaryrelationship.htm",
      "stage_details": {
        "order": {
          "subcategory": "Order summaries, summary lines and changes",
          "position": 0,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J103",
      "name": "Order Summary",
      "api": "OrderSummary",
      "primary_stage": "order",
      "also_stages": [],
      "meaning": "Current view of one order: the original order plus later changes.",
      "example": "The hospital's order now showing 1 box kept and 1 returned.",
      "scope": "Main",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_ordersummary.htm",
      "stage_details": {
        "order": {
          "subcategory": "Order summaries, summary lines and changes",
          "position": 1,
          "role": "Main",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J104",
      "name": "Order Summary Additional Info",
      "api": "OrderSummaryAdditionalInfo",
      "primary_stage": "order",
      "also_stages": [],
      "meaning": "Extra context stored for an order, such as inventory reservation details.",
      "example": "Reservation details kept for the hospital's order.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_ordersummaryadditionalinfo.htm",
      "stage_details": {
        "order": {
          "subcategory": "Order summaries, summary lines and changes",
          "position": 2,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J097",
      "name": "Order Product Summary",
      "api": "OrderItemSummary",
      "primary_stage": "order",
      "also_stages": [],
      "meaning": "Current quantities and state of one ordered line after later changes.",
      "example": "Ordered 2, returned 1, current quantity 1.",
      "scope": "Main",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderitemsummary.htm",
      "stage_details": {
        "order": {
          "subcategory": "Order summaries, summary lines and changes",
          "position": 3,
          "role": "Main",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J089",
      "name": "ABC PO Confirmation (anonymized API)",
      "api": "ABC_PO_Confirmation__c",
      "primary_stage": "order",
      "also_stages": [],
      "meaning": "Custom tracker for one confirmation-email attempt on an approved test order.",
      "example": "Confirmation email attempt for the hospital's test order.",
      "scope": "Supporting",
      "note": "Proof-of-concept; confirm production relevance.",
      "source": "https://developer.salesforce.com/docs/platform/object-reference/references/standard-objects/sforce-api-objects-list.html",
      "stage_details": {
        "order": {
          "subcategory": "Confirmations and related data",
          "position": 0,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Custom / packaged"
    },
    {
      "row_id": "J096",
      "name": "Order Product History",
      "api": "OrderItemHistory",
      "primary_stage": "order",
      "also_stages": [],
      "meaning": "Audit entry for one tracked field change on an order line. Not a business transaction.",
      "example": "Line description edited before activation.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/platform/object-reference/references/associated-objects/sforce-api-associated-objects-list.html",
      "stage_details": {
        "order": {
          "subcategory": "History and sharing",
          "position": 0,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J105",
      "name": "Order Summary Additional Info Share",
      "api": "OrderSummaryAdditionalInfoShare",
      "primary_stage": "order",
      "also_stages": [],
      "meaning": "Access entry granting visibility of an order's extra-context record. Not a business transaction.",
      "example": "Fulfillment team granted access to the reservation details.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/platform/object-reference/references/associated-objects/sforce-api-associated-objects-list.html",
      "stage_details": {
        "order": {
          "subcategory": "History and sharing",
          "position": 1,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J108",
      "name": "Order Summary Share",
      "api": "OrderSummaryShare",
      "primary_stage": "order",
      "also_stages": [],
      "meaning": "Access entry granting visibility of one order's current view. Not a business transaction.",
      "example": "Service team granted read access to the hospital's order.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/platform/object-reference/references/associated-objects/sforce-api-associated-objects-list.html",
      "stage_details": {
        "order": {
          "subcategory": "History and sharing",
          "position": 2,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J064",
      "name": "Shipping Configuration Set",
      "api": "ShippingConfigurationSet",
      "primary_stage": "fulfill",
      "also_stages": [],
      "meaning": "One shipping configuration for a set of products in a store.",
      "example": "Standard shipping rules for wound-care products.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_shippingconfigurationset.htm",
      "stage_details": {
        "fulfill": {
          "subcategory": "Routing and delivery setup",
          "position": 0,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J043",
      "name": "Delivery Estimation Setup",
      "api": "DeliveryEstimationSetup",
      "primary_stage": "fulfill",
      "also_stages": [],
      "meaning": "One configuration for the delivery estimates a store shows.",
      "example": "Estimated delivery shown as 3–5 business days at checkout.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_deliveryestimationsetup.htm",
      "stage_details": {
        "fulfill": {
          "subcategory": "Routing and delivery setup",
          "position": 1,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J107",
      "name": "Order Summary Routing Schedule",
      "api": "OrderSummaryRoutingSchedule",
      "primary_stage": "fulfill",
      "also_stages": [],
      "meaning": "One attempt to route an order to inventory locations for fulfillment.",
      "example": "Routing attempt assigning both boxes to the Reno warehouse.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_ordersummaryroutingschedule.htm",
      "stage_details": {
        "fulfill": {
          "subcategory": "Routing and delivery setup",
          "position": 2,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J062",
      "name": "Shipping Carrier",
      "api": "ShippingCarrier",
      "primary_stage": "fulfill",
      "also_stages": [],
      "meaning": "One shipping company in the carrier setup.",
      "example": "Valley Freight Lines.",
      "scope": "Supporting",
      "note": "Salesforce setup only, separate from the carrier's own systems.",
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_shippingcarrier.htm",
      "stage_details": {
        "fulfill": {
          "subcategory": "Shipping carriers and methods",
          "position": 0,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J053",
      "name": "Location Shipping Carrier Method",
      "api": "LocationShippingCarrierMethod",
      "primary_stage": "fulfill",
      "also_stages": [],
      "meaning": "One carrier service available at a location or location group.",
      "example": "Ground service available from the Reno warehouse.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_locationshippingcarriermethod.htm",
      "stage_details": {
        "fulfill": {
          "subcategory": "Shipping carriers and methods",
          "position": 1,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J054",
      "name": "Order Delivery Method",
      "api": "OrderDeliveryMethod",
      "primary_stage": "fulfill",
      "also_stages": [],
      "meaning": "One delivery method, with the options a buyer chose for it.",
      "example": "Standard Ground.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderdeliverymethod.htm",
      "stage_details": {
        "fulfill": {
          "subcategory": "Shipping carriers and methods",
          "position": 2,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J063",
      "name": "Shipping Carrier Method",
      "api": "ShippingCarrierMethod",
      "primary_stage": "fulfill",
      "also_stages": [],
      "meaning": "One service offered by a shipping carrier.",
      "example": "Valley Freight Ground, 3–5 days.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_shippingcarriermethod.htm",
      "stage_details": {
        "fulfill": {
          "subcategory": "Shipping carriers and methods",
          "position": 3,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J051",
      "name": "Location Group",
      "api": "LocationGroup",
      "primary_stage": "fulfill",
      "also_stages": [],
      "meaning": "One group of locations treated together for inventory availability.",
      "example": "West Region Warehouses.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_locationgroup.htm",
      "stage_details": {
        "fulfill": {
          "subcategory": "Locations and inventory",
          "position": 0,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J065",
      "name": "Web Store Inventory Source",
      "api": "WebStoreInventorySource",
      "primary_stage": "fulfill",
      "also_stages": [],
      "meaning": "Sets where a store reads inventory availability from.",
      "example": "Store availability drawn from West Region Warehouses.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_webstoreinventorysource.htm",
      "stage_details": {
        "fulfill": {
          "subcategory": "Locations and inventory",
          "position": 1,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J052",
      "name": "Location Group Assignment",
      "api": "LocationGroupAssignment",
      "primary_stage": "fulfill",
      "also_stages": [],
      "meaning": "Places one location in one location group.",
      "example": "Reno warehouse added to West Region Warehouses.",
      "scope": "Supporting",
      "note": "Flagged for review.",
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_locationgroupassignment.htm",
      "stage_details": {
        "fulfill": {
          "subcategory": "Locations and inventory",
          "position": 2,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J050",
      "name": "Location",
      "api": "Location",
      "primary_stage": "fulfill",
      "also_stages": [],
      "meaning": "One physical place, such as a warehouse, used for inventory or fulfillment.",
      "example": "Reno Distribution Warehouse.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_location.htm",
      "stage_details": {
        "fulfill": {
          "subcategory": "Locations and inventory",
          "position": 3,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J049",
      "name": "Inventory Item Reservation",
      "api": "InventoryItemReservation",
      "primary_stage": "fulfill",
      "also_stages": [],
      "meaning": "Inventory reserved for one product at one location.",
      "example": "2 dressing boxes reserved at the Reno warehouse.",
      "scope": "Supporting",
      "note": "Depends on the inventory service in use; verify.",
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_inventoryitemreservation.htm",
      "stage_details": {
        "fulfill": {
          "subcategory": "Locations and inventory",
          "position": 4,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J160",
      "name": "Address",
      "api": "Address",
      "primary_stage": "fulfill",
      "also_stages": [],
      "meaning": "One mailing, billing or home address belonging to a location.",
      "example": "Reno warehouse: 50 Industrial Way.",
      "scope": "Supporting",
      "note": "Defined as a location address; buyer addresses are J032. Verify.",
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_address.htm",
      "stage_details": {
        "fulfill": {
          "subcategory": "Locations and inventory",
          "position": 5,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J044",
      "name": "Fulfillment Order",
      "api": "FulfillmentOrder",
      "primary_stage": "fulfill",
      "also_stages": [],
      "meaning": "One unit of fulfillment work for lines that share a location, delivery method and recipient.",
      "example": "Ship 2 dressing boxes from the Reno warehouse by ground to the hospital.",
      "scope": "Main",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_fulfillmentorder.htm",
      "stage_details": {
        "fulfill": {
          "subcategory": "Fulfillment orders and fulfillment order products",
          "position": 0,
          "role": "Main",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J047",
      "name": "Fulfillment Order Product",
      "api": "FulfillmentOrderLineItem",
      "primary_stage": "fulfill",
      "also_stages": [],
      "meaning": "One product or delivery-charge quantity assigned to fulfillment work.",
      "example": "Surgical Dressing Box, quantity 2.",
      "scope": "Main",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_fulfillmentorderlineitem.htm",
      "stage_details": {
        "fulfill": {
          "subcategory": "Fulfillment orders and fulfillment order products",
          "position": 1,
          "role": "Main",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J056",
      "name": "Pick Ticket Assignment",
      "api": "PickTicketAssignment",
      "primary_stage": "fulfill",
      "also_stages": [],
      "meaning": "Links one piece of fulfillment work to one pick list.",
      "example": "The hospital's shipment work added to the morning pick list.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_pickticketassignment.htm",
      "stage_details": {
        "fulfill": {
          "subcategory": "Picking and packing",
          "position": 0,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J055",
      "name": "Pick Ticket",
      "api": "PickTicket",
      "primary_stage": "fulfill",
      "also_stages": [],
      "meaning": "One list of product quantities for staff to pick at a location.",
      "example": "Morning pick list at the Reno warehouse.",
      "scope": "Main",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_pickticket.htm",
      "stage_details": {
        "fulfill": {
          "subcategory": "Picking and packing",
          "position": 1,
          "role": "Main",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J057",
      "name": "Pick Ticket Product",
      "api": "PickTicketProduct",
      "primary_stage": "fulfill",
      "also_stages": [],
      "meaning": "One product quantity to pick on a pick list.",
      "example": "Surgical Dressing Box × 2 from aisle 4.",
      "scope": "Main",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_pickticketproduct.htm",
      "stage_details": {
        "fulfill": {
          "subcategory": "Picking and packing",
          "position": 2,
          "role": "Main",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J060",
      "name": "Shipment Item",
      "api": "ShipmentItem",
      "primary_stage": "fulfill",
      "also_stages": [],
      "meaning": "One product quantity included in a shipment.",
      "example": "2 Surgical Dressing Boxes in the carton.",
      "scope": "Main",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_shipmentitem.htm",
      "stage_details": {
        "fulfill": {
          "subcategory": "Shipments and shipment items",
          "position": 0,
          "role": "Main",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J058",
      "name": "Shipment",
      "api": "Shipment",
      "primary_stage": "fulfill",
      "also_stages": [],
      "meaning": "One shipment of order products, with carrier and tracking details.",
      "example": "One carton by ground, tracking number TRACK-DEMO-001.",
      "scope": "Main",
      "note": "Field Service also uses this record type; this page covers its order shipment use.",
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_shipment.htm",
      "stage_details": {
        "fulfill": {
          "subcategory": "Shipments and shipment items",
          "position": 1,
          "role": "Main",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J045",
      "name": "Fulfillment Order History",
      "api": "FulfillmentOrderHistory",
      "primary_stage": "fulfill",
      "also_stages": [],
      "meaning": "Audit entry for one tracked field change on fulfillment work. Not a business transaction.",
      "example": "Fulfillment location changed from Reno to Sacramento.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/platform/object-reference/references/associated-objects/sforce-api-associated-objects-list.html",
      "stage_details": {
        "fulfill": {
          "subcategory": "History and sharing",
          "position": 0,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J048",
      "name": "Fulfillment Order Product History",
      "api": "FulfillmentOrderLineItemHistory",
      "primary_stage": "fulfill",
      "also_stages": [],
      "meaning": "Audit entry for one tracked field change on a fulfillment line. Not a business transaction.",
      "example": "Fulfillment quantity edited from 2 to 1.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/platform/object-reference/references/associated-objects/sforce-api-associated-objects-list.html",
      "stage_details": {
        "fulfill": {
          "subcategory": "History and sharing",
          "position": 1,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J059",
      "name": "Shipment History",
      "api": "ShipmentHistory",
      "primary_stage": "fulfill",
      "also_stages": [],
      "meaning": "Audit entry for one tracked field change on a shipment. Not a business transaction.",
      "example": "Tracking number added to the carton.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/platform/object-reference/references/associated-objects/sforce-api-associated-objects-list.html",
      "stage_details": {
        "fulfill": {
          "subcategory": "History and sharing",
          "position": 2,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J061",
      "name": "Shipment Item History",
      "api": "ShipmentItemHistory",
      "primary_stage": "fulfill",
      "also_stages": [],
      "meaning": "Audit entry for one tracked field change on a shipment item. Not a business transaction.",
      "example": "Shipped quantity corrected from 1 to 2.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/platform/object-reference/references/associated-objects/sforce-api-associated-objects-list.html",
      "stage_details": {
        "fulfill": {
          "subcategory": "History and sharing",
          "position": 3,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J182",
      "name": "Tax Engine",
      "api": "TaxEngine",
      "primary_stage": "tax",
      "also_stages": [],
      "meaning": "One configured tax-engine provider instance and its merchant credentials.",
      "example": "Connection to an external tax provider's sandbox.",
      "scope": "Supporting",
      "note": "Salesforce setup only; transactions at the provider are external.",
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_taxengine.htm",
      "stage_details": {
        "tax": {
          "subcategory": "Tax setup and rates",
          "position": 0,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J183",
      "name": "Tax Policy",
      "api": "TaxPolicy",
      "primary_stage": "tax",
      "also_stages": [],
      "meaning": "A group of tax treatments that decide how products are taxed.",
      "example": "US Medical Supplies tax policy.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_taxpolicy.htm",
      "stage_details": {
        "tax": {
          "subcategory": "Tax setup and rates",
          "position": 1,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J184",
      "name": "Tax Rate",
      "api": "TaxRate",
      "primary_stage": "tax",
      "also_stages": [],
      "meaning": "One tax rate for a tax code and country.",
      "example": "Illustrative 8% rate for a general-goods code.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_taxrate.htm",
      "stage_details": {
        "tax": {
          "subcategory": "Tax setup and rates",
          "position": 2,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J185",
      "name": "Tax Treatment",
      "api": "TaxTreatment",
      "primary_stage": "tax",
      "also_stages": [],
      "meaning": "Details of how tax is calculated, including which tax engine to use.",
      "example": "Surgical supplies taxed through the external engine.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_taxtreatment.htm",
      "stage_details": {
        "tax": {
          "subcategory": "Tax setup and rates",
          "position": 3,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J008",
      "name": "Cart Tax",
      "api": "CartTax",
      "primary_stage": "tax",
      "also_stages": [],
      "meaning": "One tax amount calculated for a cart line before the order is placed.",
      "example": "Estimated tax of $7.20 on the two-box line.",
      "scope": "Main",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_carttax.htm",
      "stage_details": {
        "tax": {
          "subcategory": "Cart tax",
          "position": 0,
          "role": "Main",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J046",
      "name": "Fulfillment Order Item Tax",
      "api": "FulfillmentOrderItemTax",
      "primary_stage": "tax",
      "also_stages": [],
      "meaning": "Tax on one fulfillment line or its adjustment.",
      "example": "$7.20 tax on the two-box fulfillment line.",
      "scope": "Main",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_fulfillmentorderitemtax.htm",
      "stage_details": {
        "tax": {
          "subcategory": "Order and fulfillment tax",
          "position": 0,
          "role": "Main",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J099",
      "name": "Order Product Tax Line Item",
      "api": "OrderItemTaxLineItem",
      "primary_stage": "tax",
      "also_stages": [],
      "meaning": "One tax amount applied to an order line.",
      "example": "$7.20 tax on the two-box line.",
      "scope": "Main",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderitemtaxlineitem.htm",
      "stage_details": {
        "tax": {
          "subcategory": "Order and fulfillment tax",
          "position": 1,
          "role": "Main",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J101",
      "name": "Order Product Tax Line Item Summary",
      "api": "OrderItemTaxLineItemSummary",
      "primary_stage": "tax",
      "also_stages": [],
      "meaning": "Current tax on an ordered line or its adjustment, after later changes.",
      "example": "Line tax now $3.60 after one box is returned.",
      "scope": "Main",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderitemtaxlineitemsummary.htm",
      "stage_details": {
        "tax": {
          "subcategory": "Order and fulfillment tax",
          "position": 2,
          "role": "Main",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "EXT01",
      "name": "Stripe tax transaction",
      "api": "",
      "primary_stage": "tax",
      "also_stages": [],
      "meaning": "A tax transaction recorded by Stripe outside Salesforce, with a reversal recorded separately when applicable.",
      "example": "A provider tax transaction; a reversal was not verified.",
      "scope": "Main",
      "note": "External provider record, not a Salesforce object.",
      "source": "",
      "stage_details": {
        "tax": {
          "subcategory": "Return and provider tax",
          "position": 0,
          "role": "Main",
          "priority": 0
        }
      },
      "classification": "External record"
    },
    {
      "row_id": "J171",
      "name": "Return Order Item Tax",
      "api": "ReturnOrderItemTax",
      "primary_stage": "tax",
      "also_stages": [],
      "meaning": "Tax on one return line or return adjustment.",
      "example": "$3.60 tax on the returned box.",
      "scope": "Main",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_returnorderitemtax.htm",
      "stage_details": {
        "tax": {
          "subcategory": "Return and provider tax",
          "position": 1,
          "role": "Main",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J100",
      "name": "Order Product Tax Line Item History",
      "api": "OrderItemTaxLineItemHistory",
      "primary_stage": "tax",
      "also_stages": [],
      "meaning": "Audit entry for one tracked field change on an order-line tax amount. Not a business transaction.",
      "example": "Tax rate field corrected.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/platform/object-reference/references/associated-objects/sforce-api-associated-objects-list.html",
      "stage_details": {
        "tax": {
          "subcategory": "History and audit",
          "position": 0,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J001",
      "name": "Order Product Summary Change",
      "api": "OrderItemSummaryChange",
      "primary_stage": "returns",
      "also_stages": [],
      "meaning": "Records one change to an ordered line's current state, such as a quantity reduced by a cancellation or return.",
      "example": "Return of 1 of 2 Surgical Dressing Boxes reduces the line's current quantity from 2 to 1.",
      "scope": "Supporting",
      "note": "System-generated. It records the effect on the order, not the return itself.",
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderitemsummarychange.htm",
      "stage_details": {
        "returns": {
          "subcategory": "Cancellation and order changes",
          "position": 0,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J168",
      "name": "Return Order",
      "api": "ReturnOrder",
      "primary_stage": "returns",
      "also_stages": [],
      "meaning": "One authorized return of ordered products; it can also cover a repair return.",
      "example": "Return authorization for 1 Surgical Dressing Box.",
      "scope": "Main",
      "note": "No direct link to the resulting change order is asserted.",
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_returnorder.htm",
      "stage_details": {
        "returns": {
          "subcategory": "Return orders and products",
          "position": 0,
          "role": "Main",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J172",
      "name": "Return Order Line Item",
      "api": "ReturnOrderLineItem",
      "primary_stage": "returns",
      "also_stages": [],
      "meaning": "One product and the quantities expected, received, rejected and returned on a return.",
      "example": "Surgical Dressing Box: expected 1, received 1, rejected 0.",
      "scope": "Main",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_returnorderlineitem.htm",
      "stage_details": {
        "returns": {
          "subcategory": "Return orders and products",
          "position": 1,
          "role": "Main",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J106",
      "name": "Order Summary Relationship",
      "api": "OrderSummaryRelationship",
      "primary_stage": "returns",
      "also_stages": [],
      "meaning": "Connects an original order to a related exchange order.",
      "example": "Original order linked to an exchange order shipping a replacement box.",
      "scope": "Supporting",
      "note": "The scenario is a return, not an exchange.",
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_ordersummaryrelationship.htm",
      "stage_details": {
        "returns": {
          "subcategory": "Return adjustments and exchanges",
          "position": 0,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J170",
      "name": "Return Order Item Adjustment",
      "api": "ReturnOrderItemAdjustment",
      "primary_stage": "returns",
      "also_stages": [],
      "meaning": "One price adjustment on a return line, such as a fee or a reversed discount.",
      "example": "$5.00 restocking fee on the returned box.",
      "scope": "Supporting",
      "note": "Fees were not demonstrated.",
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_returnorderitemadjustment.htm",
      "stage_details": {
        "returns": {
          "subcategory": "Return adjustments and exchanges",
          "position": 1,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J169",
      "name": "Return Order History",
      "api": "ReturnOrderHistory",
      "primary_stage": "returns",
      "also_stages": [],
      "meaning": "Audit entry for one tracked field change on a return. Not a business transaction.",
      "example": "Return reason edited to Damaged in transit.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/platform/object-reference/references/associated-objects/sforce-api-associated-objects-list.html",
      "stage_details": {
        "returns": {
          "subcategory": "History and sharing",
          "position": 0,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J173",
      "name": "Return Order Line Item History",
      "api": "ReturnOrderLineItemHistory",
      "primary_stage": "returns",
      "also_stages": [],
      "meaning": "Audit entry for one tracked field change on a return line. Not a business transaction.",
      "example": "Received quantity updated from 0 to 1.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/platform/object-reference/references/associated-objects/sforce-api-associated-objects-list.html",
      "stage_details": {
        "returns": {
          "subcategory": "History and sharing",
          "position": 1,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J174",
      "name": "Return Order Share",
      "api": "ReturnOrderShare",
      "primary_stage": "returns",
      "also_stages": [],
      "meaning": "Access entry granting visibility of one return. Not a business transaction.",
      "example": "Warehouse receiving team granted access to the return.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/platform/object-reference/references/associated-objects/sforce-api-associated-objects-list.html",
      "stage_details": {
        "returns": {
          "subcategory": "History and sharing",
          "position": 2,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J074",
      "name": "Invoice Line",
      "api": "InvoiceLine",
      "primary_stage": "billing",
      "also_stages": [],
      "meaning": "One amount owed for a product, service or fee on an invoice.",
      "example": "Surgical Dressing Box × 2, $90.00.",
      "scope": "Main",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_invoiceline.htm",
      "stage_details": {
        "billing": {
          "subcategory": "Invoices and lines",
          "position": 0,
          "role": "Main",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J072",
      "name": "Invoice",
      "api": "Invoice",
      "primary_stage": "billing",
      "also_stages": [],
      "meaning": "One bill stating the total the buyer must pay.",
      "example": "$90.00 for 2 boxes + $7.20 tax + $12.00 shipping = $109.20.",
      "scope": "Main",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_invoice.htm",
      "stage_details": {
        "billing": {
          "subcategory": "Invoices and lines",
          "position": 1,
          "role": "Main",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J069",
      "name": "Credit Memo Line",
      "api": "CreditMemoLine",
      "primary_stage": "billing",
      "also_stages": [],
      "meaning": "One product, adjustment or tax line on a credit memo.",
      "example": "Surgical Dressing Box × 1, $45.00 credit.",
      "scope": "Main",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_creditmemoline.htm",
      "stage_details": {
        "billing": {
          "subcategory": "Credit memos and lines",
          "position": 0,
          "role": "Main",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J066",
      "name": "Credit Memo",
      "api": "CreditMemo",
      "primary_stage": "billing",
      "also_stages": [],
      "meaning": "One document reducing what the buyer owes under an earlier invoice.",
      "example": "Credit of $45.00 plus $3.60 tax for the returned box.",
      "scope": "Main",
      "note": "A credit is not a refund of money.",
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_creditmemo.htm",
      "stage_details": {
        "billing": {
          "subcategory": "Credit memos and lines",
          "position": 1,
          "role": "Main",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J068",
      "name": "Credit Memo Invoice Application",
      "api": "CreditMemoInvApplication",
      "primary_stage": "billing",
      "also_stages": [],
      "meaning": "Applies an amount from one credit memo to one invoice.",
      "example": "$48.60 credit applied to the hospital's invoice.",
      "scope": "Main",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_creditmemoinvapplication.htm",
      "stage_details": {
        "billing": {
          "subcategory": "Credit applications",
          "position": 0,
          "role": "Main",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J077",
      "name": "Payment Line Invoice",
      "api": "PaymentLineInvoice",
      "primary_stage": "billing",
      "also_stages": [],
      "meaning": "One application, or reversal of an application, of a payment amount to an invoice.",
      "example": "$109.20 card payment applied to the hospital's invoice.",
      "scope": "Main",
      "note": "This applies a payment to an invoice. It is not a refund link.",
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_paymentlineinvoice.htm",
      "stage_details": {
        "billing": {
          "subcategory": "Payment applications",
          "position": 0,
          "role": "Main",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J067",
      "name": "Credit Memo History",
      "api": "CreditMemoHistory",
      "primary_stage": "billing",
      "also_stages": [],
      "meaning": "Audit entry for one tracked field change on a credit memo. Not a business transaction.",
      "example": "Credit description edited.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/platform/object-reference/references/associated-objects/sforce-api-associated-objects-list.html",
      "stage_details": {
        "billing": {
          "subcategory": "History and sharing",
          "position": 0,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J070",
      "name": "Credit Memo Line History",
      "api": "CreditMemoLineHistory",
      "primary_stage": "billing",
      "also_stages": [],
      "meaning": "Audit entry for one tracked field change on a credit memo line. Not a business transaction.",
      "example": "Line amount corrected from $46.00 to $45.00.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/platform/object-reference/references/associated-objects/sforce-api-associated-objects-list.html",
      "stage_details": {
        "billing": {
          "subcategory": "History and sharing",
          "position": 1,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J071",
      "name": "Credit Memo Share",
      "api": "CreditMemoShare",
      "primary_stage": "billing",
      "also_stages": [],
      "meaning": "Access entry granting visibility of one credit memo. Not a business transaction.",
      "example": "Accounts receivable team granted access to the credit.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/platform/object-reference/references/associated-objects/sforce-api-associated-objects-list.html",
      "stage_details": {
        "billing": {
          "subcategory": "History and sharing",
          "position": 2,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J073",
      "name": "Invoice History",
      "api": "InvoiceHistory",
      "primary_stage": "billing",
      "also_stages": [],
      "meaning": "Audit entry for one tracked field change on an invoice. Not a business transaction.",
      "example": "Invoice due date moved by 15 days.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/platform/object-reference/references/associated-objects/sforce-api-associated-objects-list.html",
      "stage_details": {
        "billing": {
          "subcategory": "History and sharing",
          "position": 3,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J075",
      "name": "Invoice Line History",
      "api": "InvoiceLineHistory",
      "primary_stage": "billing",
      "also_stages": [],
      "meaning": "Audit entry for one tracked field change on an invoice line. Not a business transaction.",
      "example": "Line description edited.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/platform/object-reference/references/associated-objects/sforce-api-associated-objects-list.html",
      "stage_details": {
        "billing": {
          "subcategory": "History and sharing",
          "position": 4,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J076",
      "name": "Invoice Share",
      "api": "InvoiceShare",
      "primary_stage": "billing",
      "also_stages": [],
      "meaning": "Access entry granting visibility of one invoice. Not a business transaction.",
      "example": "Hospital finance contact granted read access to the invoice.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/platform/object-reference/references/associated-objects/sforce-api-associated-objects-list.html",
      "stage_details": {
        "billing": {
          "subcategory": "History and sharing",
          "position": 5,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J078",
      "name": "Payment Line Invoice History",
      "api": "PaymentLineInvoiceHistory",
      "primary_stage": "billing",
      "also_stages": [],
      "meaning": "Audit entry for one tracked field change on a payment-to-invoice application. Not a business transaction.",
      "example": "Applied amount edited.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/platform/object-reference/references/associated-objects/sforce-api-associated-objects-list.html",
      "stage_details": {
        "billing": {
          "subcategory": "History and sharing",
          "position": 6,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J111",
      "name": "Gateway Provider Payment Method Type",
      "api": "GtwyProvPaymentMethodType",
      "primary_stage": "payments",
      "also_stages": [],
      "meaning": "Describes one payment method a gateway provider can process.",
      "example": "Card processing mapped for the test gateway provider.",
      "scope": "Supporting",
      "note": "Salesforce setup for an external provider.",
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_gtwyprovpaymentmethodtype.htm",
      "stage_details": {
        "payments": {
          "subcategory": "Payment setup and methods",
          "position": 0,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J112",
      "name": "Merchant Account Payment Method Type",
      "api": "MerchAccPaymentMethodType",
      "primary_stage": "payments",
      "also_stages": [],
      "meaning": "One payment method within a store's set of payment methods.",
      "example": "Card listed first in the store's payment options.",
      "scope": "Supporting",
      "note": "Flagged for review.",
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_merchaccpaymentmethodtype.htm",
      "stage_details": {
        "payments": {
          "subcategory": "Payment setup and methods",
          "position": 1,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J010",
      "name": "Merchant Account Payment Method Set",
      "api": "MerchAccPaymentMethodSet",
      "primary_stage": "payments",
      "also_stages": [],
      "meaning": "One ordered list of the payment methods a store offers at checkout.",
      "example": "Store payment options, in order: card, then bank transfer.",
      "scope": "Supporting",
      "note": "Verify which methods are actually configured.",
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_merchaccpaymentmethodset.htm",
      "stage_details": {
        "payments": {
          "subcategory": "Payment setup and methods",
          "position": 2,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J123",
      "name": "Payment Method",
      "api": "PaymentMethod",
      "primary_stage": "payments",
      "also_stages": [],
      "meaning": "The payment instrument a buyer uses to pay.",
      "example": "Hospital purchasing card on file.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_paymentmethod.htm",
      "stage_details": {
        "payments": {
          "subcategory": "Payment setup and methods",
          "position": 3,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J110",
      "name": "Card Payment Method",
      "api": "CardPaymentMethod",
      "primary_stage": "payments",
      "also_stages": [],
      "meaning": "One saved credit or debit card used as a payment method.",
      "example": "Hospital purchasing card ending 1234.",
      "scope": "Supporting",
      "note": "Applies only if card payment is used.",
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_cardpaymentmethod.htm",
      "stage_details": {
        "payments": {
          "subcategory": "Payment setup and methods",
          "position": 4,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J122",
      "name": "Payment Link",
      "api": "PaymentLink",
      "primary_stage": "payments",
      "also_stages": [],
      "meaning": "One shareable link a customer can use to pay.",
      "example": "Link emailed to the hospital to pay an outstanding balance.",
      "scope": "Supporting",
      "note": "Flagged for review.",
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_paymentlink.htm",
      "stage_details": {
        "payments": {
          "subcategory": "Payment setup and methods",
          "position": 5,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J113",
      "name": "Order Payment Summary",
      "api": "OrderPaymentSummary",
      "primary_stage": "payments",
      "also_stages": [],
      "meaning": "Current payment amounts for one payment method on one order.",
      "example": "Card: $109.20 captured, $48.60 refunded.",
      "scope": "Main",
      "note": "Gateway results may be simulated.",
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderpaymentsummary.htm",
      "stage_details": {
        "payments": {
          "subcategory": "Checkout and payment summaries",
          "position": 0,
          "role": "Main",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J115",
      "name": "Payment Authorization",
      "api": "PaymentAuthorization",
      "primary_stage": "payments",
      "also_stages": [],
      "meaning": "One authorization reserving funds that can later be captured or reversed.",
      "example": "$109.20 authorized on the hospital's card at checkout.",
      "scope": "Main",
      "note": "An authorization is not a capture. Invoiced or offline terms may skip it.",
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_paymentauthorization.htm",
      "stage_details": {
        "payments": {
          "subcategory": "Authorizations and payments",
          "position": 0,
          "role": "Main",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J121",
      "name": "Payment Group",
      "api": "PaymentGroup",
      "primary_stage": "payments",
      "also_stages": [],
      "meaning": "Groups the payment transactions processed for one order or invoice.",
      "example": "All payment activity for the hospital's order.",
      "scope": "Main",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_paymentgroup.htm",
      "stage_details": {
        "payments": {
          "subcategory": "Authorizations and payments",
          "position": 1,
          "role": "Main",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J114",
      "name": "Payment",
      "api": "Payment",
      "primary_stage": "payments",
      "also_stages": [],
      "meaning": "One recorded payment event, such as a capture.",
      "example": "$109.20 captured from the hospital's card.",
      "scope": "Main",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_payment.htm",
      "stage_details": {
        "payments": {
          "subcategory": "Authorizations and payments",
          "position": 2,
          "role": "Main",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J116",
      "name": "Payment Authorization Adjustment",
      "api": "PaymentAuthAdjustment",
      "primary_stage": "payments",
      "also_stages": [],
      "meaning": "One adjustment to an earlier authorization.",
      "example": "Authorization reduced by $48.60 after a pre-shipment change.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_paymentauthadjustment.htm",
      "stage_details": {
        "payments": {
          "subcategory": "Authorizations and payments",
          "position": 3,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J124",
      "name": "Refund",
      "api": "Refund",
      "primary_stage": "payments",
      "also_stages": [],
      "meaning": "One return of funds against an earlier payment, with its processing state.",
      "example": "$48.60 refunded to the hospital's card for the returned box.",
      "scope": "Main",
      "note": "A pending refund is not processed. A simulated gateway does not move real money.",
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_refund.htm",
      "stage_details": {
        "payments": {
          "subcategory": "Credits and refunds",
          "position": 0,
          "role": "Main",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J118",
      "name": "Payment Credit Transaction",
      "api": "PaymentCreditTransaction",
      "primary_stage": "payments",
      "also_stages": [],
      "meaning": "One transaction against a payment credit.",
      "example": "Transaction recording $48.60 against the hospital's payment credit.",
      "scope": "Supporting",
      "note": "Definition is thin; verify.",
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_paymentcredittransaction.htm",
      "stage_details": {
        "payments": {
          "subcategory": "Credits and refunds",
          "position": 1,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J117",
      "name": "Payment Credit",
      "api": "PaymentCredit",
      "primary_stage": "payments",
      "also_stages": [],
      "meaning": "Tracks an amount of money returned to the customer.",
      "example": "$48.60 returned to the hospital for one box.",
      "scope": "Main",
      "note": "Overlaps with refunds (J124); verify which records this org creates.",
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_paymentcredit.htm",
      "stage_details": {
        "payments": {
          "subcategory": "Credits and refunds",
          "position": 2,
          "role": "Main",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J125",
      "name": "Refund Line Payment",
      "api": "RefundLinePayment",
      "primary_stage": "payments",
      "also_stages": [],
      "meaning": "Allocates part of a refund to one earlier payment.",
      "example": "$48.60 of the refund allocated to the original $109.20 capture.",
      "scope": "Main",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_refundlinepayment.htm",
      "stage_details": {
        "payments": {
          "subcategory": "Credits and refunds",
          "position": 3,
          "role": "Main",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J119",
      "name": "Payment Gateway",
      "api": "PaymentGateway",
      "primary_stage": "payments",
      "also_stages": [],
      "meaning": "The configured connection to one external payment gateway.",
      "example": "Test gateway connection for the hospital store.",
      "scope": "Supporting",
      "note": "The provider is external. A simulated gateway does not move real money.",
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_paymentgateway.htm",
      "stage_details": {
        "payments": {
          "subcategory": "Gateway and provider evidence",
          "position": 0,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J120",
      "name": "Payment Gateway Log",
      "api": "PaymentGatewayLog",
      "primary_stage": "payments",
      "also_stages": [],
      "meaning": "One log of a request and response exchanged with a payment gateway.",
      "example": "Log of the $48.60 refund request and the gateway's reply.",
      "scope": "Supporting",
      "note": "Logs a request; it does not prove bank settlement.",
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_paymentgatewaylog.htm",
      "stage_details": {
        "payments": {
          "subcategory": "Gateway and provider evidence",
          "position": 1,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J093",
      "name": "Order Payment Summary Reference",
      "api": "OrderPaymentSummaryReference",
      "primary_stage": "payments",
      "also_stages": [],
      "meaning": "Lets one order's payment state be shared with another order.",
      "example": "Original order's card payment also referenced by an exchange order.",
      "scope": "Supporting",
      "note": "Flagged for review; relevant mainly to exchanges.",
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderpaymentsummaryreference.htm",
      "stage_details": {
        "payments": {
          "subcategory": "History and sharing",
          "position": 0,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J094",
      "name": "Order Payment Summary Share",
      "api": "OrderPaymentSummaryShare",
      "primary_stage": "payments",
      "also_stages": [],
      "meaning": "Access entry granting visibility of one order's payment state. Not a business transaction.",
      "example": "Finance team granted access to the order's payment record.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/platform/object-reference/references/associated-objects/sforce-api-associated-objects-list.html",
      "stage_details": {
        "payments": {
          "subcategory": "History and sharing",
          "position": 1,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J126",
      "name": "Refund Line Payment History",
      "api": "RefundLinePaymentHistory",
      "primary_stage": "payments",
      "also_stages": [],
      "meaning": "Audit entry for one tracked field change on a refund allocation. Not a business transaction.",
      "example": "Allocated amount edited.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/platform/object-reference/references/associated-objects/sforce-api-associated-objects-list.html",
      "stage_details": {
        "payments": {
          "subcategory": "History and sharing",
          "position": 2,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J175",
      "name": "Asset",
      "api": "Asset",
      "primary_stage": "service",
      "also_stages": [],
      "meaning": "One purchased item the customer owns, tracked for service.",
      "example": "Surgical Dressing Box lot recorded as purchased by the hospital.",
      "scope": "Main",
      "note": "Consumables are rarely tracked this way; verify.",
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_asset.htm",
      "stage_details": {
        "service": {
          "subcategory": "Customer assets",
          "position": 0,
          "role": "Main",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J180",
      "name": "Product Warranty Term",
      "api": "ProductWarrantyTerm",
      "primary_stage": "service",
      "also_stages": [],
      "meaning": "Links a product or product family to a warranty term.",
      "example": "Surgical Dressing Box covered by the 90-day defect term.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_productwarrantyterm.htm",
      "stage_details": {
        "service": {
          "subcategory": "Warranty terms and coverage",
          "position": 0,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J181",
      "name": "Warranty Term",
      "api": "WarrantyTerm",
      "primary_stage": "service",
      "also_stages": [],
      "meaning": "One set of warranty coverage terms, including any exchange options.",
      "example": "Defect coverage: replacement within 90 days.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_warrantyterm.htm",
      "stage_details": {
        "service": {
          "subcategory": "Warranty terms and coverage",
          "position": 1,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J176",
      "name": "Asset Warranty",
      "api": "AssetWarranty",
      "primary_stage": "service",
      "also_stages": [],
      "meaning": "Warranty terms that apply to one owned item, including exclusions and extensions.",
      "example": "90-day defect coverage on the hospital's box lot.",
      "scope": "Main",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_assetwarranty.htm",
      "stage_details": {
        "service": {
          "subcategory": "Warranty terms and coverage",
          "position": 2,
          "role": "Main",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J178",
      "name": "Entitlement",
      "api": "Entitlement",
      "primary_stage": "service",
      "also_stages": [],
      "meaning": "The customer support an account or contact is eligible to receive.",
      "example": "Standard support: response within 1 business day.",
      "scope": "Supporting",
      "note": "A support entitlement, not commerce visibility (J036).",
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_entitlement.htm",
      "stage_details": {
        "service": {
          "subcategory": "Service cases and support",
          "position": 0,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J177",
      "name": "Case",
      "api": "Case",
      "primary_stage": "service",
      "also_stages": [],
      "meaning": "One customer issue or request.",
      "example": "Hospital reports that one box arrived damaged and asks to return it.",
      "scope": "Main",
      "note": "No direct link from cases to returns is assumed.",
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_case.htm",
      "stage_details": {
        "service": {
          "subcategory": "Service cases and support",
          "position": 1,
          "role": "Main",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J179",
      "name": "Entitlement History",
      "api": "EntitlementHistory",
      "primary_stage": "service",
      "also_stages": [],
      "meaning": "Audit entry for one tracked field change on a support entitlement. Not a business transaction.",
      "example": "Support end date extended by one year.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/platform/object-reference/references/associated-objects/sforce-api-associated-objects-list.html",
      "stage_details": {
        "service": {
          "subcategory": "History and sharing",
          "position": 0,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J088",
      "name": "Registered External Service",
      "api": "RegisteredExternalService",
      "primary_stage": "ops",
      "also_stages": [],
      "meaning": "Registers one external service, such as tax or shipping, that a store calls during checkout.",
      "example": "External tax calculation service registered for the store.",
      "scope": "Supporting",
      "note": "This is a registration in Salesforce. The service runs at an external provider.",
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_registeredexternalservice.htm",
      "stage_details": {
        "ops": {
          "subcategory": "Processing and integrations",
          "position": 0,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J080",
      "name": "Async Operation Tracker",
      "api": "AsyncOperationTracker",
      "primary_stage": "ops",
      "also_stages": [],
      "meaning": "Tracks the status of one background request started from a quote, order or credit memo.",
      "example": "Background request to turn the hospital's quote into an order.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_asyncoperationtracker.htm",
      "stage_details": {
        "ops": {
          "subcategory": "Processing and integrations",
          "position": 1,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J079",
      "name": "Async Operation Log",
      "api": "AsyncOperationLog",
      "primary_stage": "ops",
      "also_stages": [],
      "meaning": "One progress and status log for a sync with the inventory service.",
      "example": "Nightly availability sync for West Region Warehouses.",
      "scope": "Main",
      "note": null,
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_asyncoperationlog.htm",
      "stage_details": {
        "ops": {
          "subcategory": "Processing and integrations",
          "position": 2,
          "role": "Main",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J085",
      "name": "Process Exception",
      "api": "ProcessException",
      "primary_stage": "ops",
      "also_stages": [],
      "meaning": "One recorded business-process failure, such as on an order, that needs attention.",
      "example": "Exception: payment capture failed for the hospital's order.",
      "scope": "Supporting",
      "note": "Created only where processing is set up to raise one.",
      "source": "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_processexception.htm",
      "stage_details": {
        "ops": {
          "subcategory": "Exceptions and recovery",
          "position": 0,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J087",
      "name": "Process Exception Share",
      "api": "ProcessExceptionShare",
      "primary_stage": "ops",
      "also_stages": [],
      "meaning": "Access entry granting visibility of one process exception. Not a business transaction.",
      "example": "Order operations queue granted access to the exception.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/platform/object-reference/references/associated-objects/sforce-api-associated-objects-list.html",
      "stage_details": {
        "ops": {
          "subcategory": "History and sharing",
          "position": 0,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Standard / system"
    },
    {
      "row_id": "J081",
      "name": "Order Payment Summary Change Event",
      "api": "OrderPaymentSummaryChangeEvent",
      "primary_stage": "ops",
      "also_stages": [],
      "meaning": "Change-event message reporting a change to an order's payment state. A notification, not a stored record.",
      "example": "Event sent when the captured amount for the hospital's order changes.",
      "scope": "Supporting",
      "note": "Requires change data capture subscribers; verify.",
      "source": "https://developer.salesforce.com/docs/platform/object-reference/references/associated-objects/sforce-api-associated-objects-list.html",
      "stage_details": {
        "ops": {
          "subcategory": "Change events and audit",
          "position": 0,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Change event (not record)"
    },
    {
      "row_id": "J082",
      "name": "Order Product Summary Change Event",
      "api": "OrderItemSummaryChangeEvent",
      "primary_stage": "ops",
      "also_stages": [],
      "meaning": "Change-event message reporting a change to an ordered line's current state. A notification, not a stored record.",
      "example": "Event sent when the dressing line's quantity drops after the return.",
      "scope": "Supporting",
      "note": "Different from J001, which is a stored change record.",
      "source": "https://developer.salesforce.com/docs/platform/object-reference/references/associated-objects/sforce-api-associated-objects-list.html",
      "stage_details": {
        "ops": {
          "subcategory": "Change events and audit",
          "position": 1,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Change event (not record)"
    },
    {
      "row_id": "J083",
      "name": "Order Product Tax Line Item Summary Change Event",
      "api": "OrderItemTaxLineItemSummaryChangeEvent",
      "primary_stage": "ops",
      "also_stages": [],
      "meaning": "Change-event message reporting a change to a line's current tax. A notification, not a stored record.",
      "example": "Event sent when line tax drops from $7.20 to $3.60.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/platform/object-reference/references/associated-objects/sforce-api-associated-objects-list.html",
      "stage_details": {
        "ops": {
          "subcategory": "Change events and audit",
          "position": 2,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Change event (not record)"
    },
    {
      "row_id": "J084",
      "name": "Order Summary Change Event",
      "api": "OrderSummaryChangeEvent",
      "primary_stage": "ops",
      "also_stages": [],
      "meaning": "Change-event message reporting a change to an order's current view. A notification, not a stored record.",
      "example": "Event sent when the order's total drops after the return.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/platform/object-reference/references/associated-objects/sforce-api-associated-objects-list.html",
      "stage_details": {
        "ops": {
          "subcategory": "Change events and audit",
          "position": 3,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Change event (not record)"
    },
    {
      "row_id": "J086",
      "name": "Process Exception Change Event",
      "api": "ProcessExceptionChangeEvent",
      "primary_stage": "ops",
      "also_stages": [],
      "meaning": "Change-event message reporting that a process exception was created or changed. A notification, not a stored record.",
      "example": "Event sent when the capture exception is resolved.",
      "scope": "Supporting",
      "note": null,
      "source": "https://developer.salesforce.com/docs/platform/object-reference/references/associated-objects/sforce-api-associated-objects-list.html",
      "stage_details": {
        "ops": {
          "subcategory": "Change events and audit",
          "position": 4,
          "role": "Supporting",
          "priority": 0
        }
      },
      "classification": "Change event (not record)"
    }
  ],
  "relationships": {
    "described": 185,
    "unavailable": {},
    "edges": [
      {
        "stage": "cart",
        "from": "CartItem",
        "to": "WebCart",
        "field": "CartId",
        "relationshipOrder": "0",
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "cart",
        "from": "CartItem",
        "to": "CartDeliveryGroup",
        "field": "CartDeliveryGroupId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "cart",
        "from": "CartItem",
        "to": "CartItem",
        "field": "ParentCartItemId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "cart",
        "from": "CartDeliveryGroup",
        "to": "WebCart",
        "field": "CartId",
        "relationshipOrder": "0",
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "cart",
        "from": "CartDeliveryGroup",
        "to": "CartDeliveryGroupMethod",
        "field": "SelectedDeliveryMethodId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "cart",
        "from": "CartCheckoutSession",
        "to": "WebCart",
        "field": "WebCartId",
        "relationshipOrder": "0",
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "cart",
        "from": "CartValidationOutput",
        "to": "WebCart",
        "field": "CartId",
        "relationshipOrder": "0",
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "cart",
        "from": "CartValidationOutput",
        "to": "CartDeliveryGroup",
        "field": "RelatedEntityId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": true,
        "cascadeDelete": false
      },
      {
        "stage": "cart",
        "from": "CartValidationOutput",
        "to": "CartItem",
        "field": "RelatedEntityId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": true,
        "cascadeDelete": false
      },
      {
        "stage": "cart",
        "from": "CartValidationOutput",
        "to": "WebCart",
        "field": "RelatedEntityId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": true,
        "cascadeDelete": false
      },
      {
        "stage": "cart",
        "from": "CartDeliveryGroupMethod",
        "to": "WebCart",
        "field": "WebCartId",
        "relationshipOrder": "0",
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "cart",
        "from": "CartDeliveryGroupMethod",
        "to": "CartDeliveryGroup",
        "field": "CartDeliveryGroupId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "cart",
        "from": "CartDeliveryGroupMethod",
        "to": "CartCheckoutSession",
        "field": "CartCheckoutSessionId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "cart",
        "from": "InventoryReservation",
        "to": "WebCart",
        "field": "ReservationSourceId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": true,
        "cascadeDelete": false
      },
      {
        "stage": "catalog",
        "from": "ProductCategory",
        "to": "ProductCatalog",
        "field": "CatalogId",
        "relationshipOrder": "0",
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "catalog",
        "from": "ProductCategory",
        "to": "ProductCategory",
        "field": "ParentCategoryId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "catalog",
        "from": "ProductCatalogHistory",
        "to": "ProductCatalog",
        "field": "ProductCatalogId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "catalog",
        "from": "ProductCategoryProduct",
        "to": "ProductCategory",
        "field": "ProductCategoryId",
        "relationshipOrder": "0",
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "catalog",
        "from": "ProductCategoryProduct",
        "to": "Product2",
        "field": "ProductId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "catalog",
        "from": "ProductCategoryProduct",
        "to": "ProductCatalog",
        "field": "CatalogId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "catalog",
        "from": "ProductQuantityRule",
        "to": "PurchaseQuantityRule",
        "field": "PurchaseQuantityRuleId",
        "relationshipOrder": "0",
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "catalog",
        "from": "ProductQuantityRule",
        "to": "Product2",
        "field": "ProductId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": true,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "catalog",
        "from": "SalesStoreCatalog",
        "to": "ProductCatalog",
        "field": "ProductCatalogId",
        "relationshipOrder": "0",
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "access",
        "from": "Account",
        "to": "Account",
        "field": "MasterRecordId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "access",
        "from": "Account",
        "to": "Account",
        "field": "ParentId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "catalog",
        "from": "WebStoreCatalog",
        "to": "ProductCatalog",
        "field": "ProductCatalogId",
        "relationshipOrder": "0",
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "catalog",
        "from": "WebStoreCatalog",
        "to": "WebStore",
        "field": "SalesStoreId",
        "relationshipOrder": "1",
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": true,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "access",
        "from": "BuyerAccount",
        "to": "Account",
        "field": "BuyerId",
        "relationshipOrder": "0",
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": true,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "access",
        "from": "BuyerAccount",
        "to": "Account",
        "field": "SendToId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "access",
        "from": "BuyerAccount",
        "to": "Account",
        "field": "PayerId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "access",
        "from": "BuyerAccountShare",
        "to": "BuyerAccount",
        "field": "ParentId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "access",
        "from": "BuyerGroupMember",
        "to": "BuyerGroup",
        "field": "BuyerGroupId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "access",
        "from": "BuyerGroupMember",
        "to": "Account",
        "field": "BuyerId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": true,
        "cascadeDelete": false
      },
      {
        "stage": "access",
        "from": "BuyerGroupMemberShare",
        "to": "BuyerGroupMember",
        "field": "ParentId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "access",
        "from": "BuyerGroupRelatedObject",
        "to": "BuyerGroup",
        "field": "BuyerGroupId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "access",
        "from": "BuyerGroupShare",
        "to": "BuyerGroup",
        "field": "ParentId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "cart",
        "from": "WebCartShare",
        "to": "WebCart",
        "field": "ParentId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "catalog",
        "from": "ProductCatalogShare",
        "to": "ProductCatalog",
        "field": "ParentId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "access",
        "from": "Contact",
        "to": "Contact",
        "field": "MasterRecordId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "access",
        "from": "Contact",
        "to": "Account",
        "field": "AccountId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "access",
        "from": "Contact",
        "to": "Contact",
        "field": "ReportsToId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "access",
        "from": "ContactPointAddress",
        "to": "Account",
        "field": "ParentId",
        "relationshipOrder": "0",
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": true,
        "cascadeDelete": false
      },
      {
        "stage": "access",
        "from": "CommerceEntitlementBuyerGroup",
        "to": "CommerceEntitlementPolicy",
        "field": "PolicyId",
        "relationshipOrder": "0",
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "access",
        "from": "CommerceEntitlementBuyerGroup",
        "to": "BuyerGroup",
        "field": "BuyerGroupId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "access",
        "from": "Customer_Partner_Assignment__c",
        "to": "Customer_Sales_Area__c",
        "field": "Customer_Sales_Area__c",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "access",
        "from": "Customer_Partner_Assignment__c",
        "to": "Contact",
        "field": "Operational_Contact__c",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "access",
        "from": "Customer_Partner_Assignment__c",
        "to": "Account",
        "field": "Partner_Account__c",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "access",
        "from": "Customer_Sales_Area__c",
        "to": "Account",
        "field": "Sold_To_Account__c",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "access",
        "from": "Customer_Sales_Area__c",
        "to": "Sales_Organization__c",
        "field": "Sales_Organization_Record__c",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "access",
        "from": "CommerceEntitlementProduct",
        "to": "CommerceEntitlementPolicy",
        "field": "PolicyId",
        "relationshipOrder": "0",
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "access",
        "from": "CommerceEntitlementPolicyHistory",
        "to": "CommerceEntitlementPolicy",
        "field": "CommerceEntitlementPolicyId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "access",
        "from": "DelegatedAccountShare",
        "to": "DelegatedAccount",
        "field": "ParentId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "access",
        "from": "DelegatedAccount",
        "to": "Account",
        "field": "TargetId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "access",
        "from": "DelegatedAccount",
        "to": "Account",
        "field": "ParentId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "access",
        "from": "WebStoreBuyerGroup",
        "to": "BuyerGroup",
        "field": "BuyerGroupId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "fulfill",
        "from": "DeliveryEstimationSetup",
        "to": "LocationGroup",
        "field": "LocationGroupId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "tax",
        "from": "FulfillmentOrderItemTax",
        "to": "OrderItemTaxLineItemSummary",
        "field": "OrderItemTaxLineItemSummaryId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "fulfill",
        "from": "FulfillmentOrderHistory",
        "to": "FulfillmentOrder",
        "field": "FulfillmentOrderId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "fulfill",
        "from": "FulfillmentOrder",
        "to": "OrderDeliveryMethod",
        "field": "DeliveryMethodId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "fulfill",
        "from": "FulfillmentOrder",
        "to": "Location",
        "field": "FulfilledFromLocationId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "fulfill",
        "from": "FulfillmentOrderLineItemHistory",
        "to": "FulfillmentOrderLineItem",
        "field": "FulfillmentOrderLineItemId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "fulfill",
        "from": "FulfillmentOrderLineItem",
        "to": "FulfillmentOrder",
        "field": "FulfillmentOrderId",
        "relationshipOrder": "0",
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "fulfill",
        "from": "FulfillmentOrderLineItem",
        "to": "FulfillmentOrderLineItem",
        "field": "MainFulfillmentOrderLineItemId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "fulfill",
        "from": "InventoryItemReservation",
        "to": "FulfillmentOrderLineItem",
        "field": "ItemReservationSourceId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": true,
        "cascadeDelete": false
      },
      {
        "stage": "fulfill",
        "from": "InventoryItemReservation",
        "to": "Location",
        "field": "ReservedAtLocationId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": true,
        "cascadeDelete": false
      },
      {
        "stage": "fulfill",
        "from": "InventoryItemReservation",
        "to": "LocationGroup",
        "field": "ReservedAtLocationId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": true,
        "cascadeDelete": false
      },
      {
        "stage": "fulfill",
        "from": "Location",
        "to": "Location",
        "field": "ParentLocationId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "fulfill",
        "from": "Location",
        "to": "Address",
        "field": "VisitorAddressId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "fulfill",
        "from": "Location",
        "to": "Location",
        "field": "RootLocationId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "fulfill",
        "from": "LocationShippingCarrierMethod",
        "to": "Location",
        "field": "LocationSourceId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": true,
        "cascadeDelete": false
      },
      {
        "stage": "fulfill",
        "from": "LocationShippingCarrierMethod",
        "to": "LocationGroup",
        "field": "LocationSourceId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": true,
        "cascadeDelete": false
      },
      {
        "stage": "fulfill",
        "from": "LocationShippingCarrierMethod",
        "to": "ShippingCarrierMethod",
        "field": "ShippingCarrierMethodId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "fulfill",
        "from": "OrderDeliveryMethod",
        "to": "ShippingCarrierMethod",
        "field": "ShippingCarrierMethodId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "fulfill",
        "from": "LocationGroupAssignment",
        "to": "Location",
        "field": "LocationId",
        "relationshipOrder": "0",
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "fulfill",
        "from": "LocationGroupAssignment",
        "to": "LocationGroup",
        "field": "LocationGroupId",
        "relationshipOrder": "1",
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "fulfill",
        "from": "PickTicket",
        "to": "Location",
        "field": "LocationId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "fulfill",
        "from": "PickTicketAssignment",
        "to": "PickTicket",
        "field": "PickTicketId",
        "relationshipOrder": "0",
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "fulfill",
        "from": "PickTicketAssignment",
        "to": "FulfillmentOrder",
        "field": "AttachedToId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "fulfill",
        "from": "Shipment",
        "to": "Location",
        "field": "SourceLocationId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "fulfill",
        "from": "Shipment",
        "to": "Location",
        "field": "DestinationLocationId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "fulfill",
        "from": "Shipment",
        "to": "FulfillmentOrder",
        "field": "FulfillmentOrderId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "fulfill",
        "from": "Shipment",
        "to": "OrderDeliveryMethod",
        "field": "DeliveryMethodId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "fulfill",
        "from": "PickTicketProduct",
        "to": "PickTicket",
        "field": "PickTicketId",
        "relationshipOrder": "0",
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "fulfill",
        "from": "ShipmentHistory",
        "to": "Shipment",
        "field": "ShipmentId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "fulfill",
        "from": "ShipmentItem",
        "to": "Shipment",
        "field": "ShipmentId",
        "relationshipOrder": "0",
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "fulfill",
        "from": "ShipmentItem",
        "to": "FulfillmentOrderLineItem",
        "field": "FulfillmentOrderLineItemId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "fulfill",
        "from": "ShipmentItemHistory",
        "to": "ShipmentItem",
        "field": "ShipmentItemId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "fulfill",
        "from": "ShippingCarrierMethod",
        "to": "ShippingCarrier",
        "field": "ShippingCarrierId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "fulfill",
        "from": "WebStoreInventorySource",
        "to": "Location",
        "field": "LocationSourceId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": true,
        "cascadeDelete": false
      },
      {
        "stage": "fulfill",
        "from": "WebStoreInventorySource",
        "to": "LocationGroup",
        "field": "LocationSourceId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": true,
        "cascadeDelete": false
      },
      {
        "stage": "billing",
        "from": "CreditMemoHistory",
        "to": "CreditMemo",
        "field": "CreditMemoId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "billing",
        "from": "CreditMemo",
        "to": "Invoice",
        "field": "ReferenceEntityId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": true,
        "cascadeDelete": false
      },
      {
        "stage": "billing",
        "from": "CreditMemoInvApplication",
        "to": "Invoice",
        "field": "InvoiceId",
        "relationshipOrder": "0",
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "billing",
        "from": "CreditMemoInvApplication",
        "to": "CreditMemo",
        "field": "CreditMemoId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "billing",
        "from": "CreditMemoInvApplication",
        "to": "CreditMemoInvApplication",
        "field": "AssociatedLineId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "billing",
        "from": "CreditMemoLine",
        "to": "CreditMemo",
        "field": "CreditMemoId",
        "relationshipOrder": "0",
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "billing",
        "from": "CreditMemoLine",
        "to": "InvoiceLine",
        "field": "ReferenceEntityItemId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": true,
        "cascadeDelete": false
      },
      {
        "stage": "billing",
        "from": "CreditMemoLine",
        "to": "CreditMemoLine",
        "field": "RelatedLineId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "billing",
        "from": "CreditMemoLineHistory",
        "to": "CreditMemoLine",
        "field": "CreditMemoLineId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "billing",
        "from": "Invoice",
        "to": "CreditMemo",
        "field": "ReferenceEntityId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": true,
        "cascadeDelete": false
      },
      {
        "stage": "billing",
        "from": "InvoiceHistory",
        "to": "Invoice",
        "field": "InvoiceId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "billing",
        "from": "InvoiceLine",
        "to": "Invoice",
        "field": "InvoiceId",
        "relationshipOrder": "0",
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "billing",
        "from": "InvoiceLine",
        "to": "InvoiceLine",
        "field": "RelatedLineId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "billing",
        "from": "InvoiceLineHistory",
        "to": "InvoiceLine",
        "field": "InvoiceLineId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "billing",
        "from": "CreditMemoShare",
        "to": "CreditMemo",
        "field": "ParentId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "billing",
        "from": "InvoiceShare",
        "to": "Invoice",
        "field": "ParentId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "billing",
        "from": "PaymentLineInvoice",
        "to": "Invoice",
        "field": "InvoiceId",
        "relationshipOrder": "0",
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "billing",
        "from": "PaymentLineInvoice",
        "to": "PaymentLineInvoice",
        "field": "AssociatedPaymentLineId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "billing",
        "from": "PaymentLineInvoiceHistory",
        "to": "PaymentLineInvoice",
        "field": "PaymentLineInvoiceId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "ops",
        "from": "AsyncOperationLog",
        "to": "AsyncOperationLog",
        "field": "ParentAsyncOperationLogId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "ops",
        "from": "ProcessExceptionChangeEvent",
        "to": "AsyncOperationTracker",
        "field": "AttachedToId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": true,
        "cascadeDelete": false
      },
      {
        "stage": "ops",
        "from": "ProcessExceptionChangeEvent",
        "to": "AsyncOperationTracker",
        "field": "GroupById",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "ops",
        "from": "ProcessException",
        "to": "AsyncOperationTracker",
        "field": "AttachedToId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": true,
        "cascadeDelete": false
      },
      {
        "stage": "ops",
        "from": "ProcessException",
        "to": "AsyncOperationTracker",
        "field": "GroupById",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "ops",
        "from": "ProcessExceptionShare",
        "to": "ProcessException",
        "field": "ParentId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "ops",
        "from": "AsyncOperationTracker",
        "to": "AsyncOperationTracker",
        "field": "ParentOperationId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "payments",
        "from": "OrderPaymentSummaryShare",
        "to": "OrderPaymentSummary",
        "field": "ParentId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "order",
        "from": "Order",
        "to": "Order",
        "field": "OriginalOrderId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "order",
        "from": "Order",
        "to": "Order",
        "field": "RelatedOrderId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "order",
        "from": "Order",
        "to": "SalesChannel",
        "field": "SalesChannelId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "order",
        "from": "OrderDeliveryGroup",
        "to": "Order",
        "field": "OrderId",
        "relationshipOrder": "0",
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "order",
        "from": "OrderDeliveryGroup",
        "to": "OrderDeliveryGroup",
        "field": "RelatedDeliveryGroupId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "order",
        "from": "OrderDeliveryGroupSummary",
        "to": "OrderSummary",
        "field": "OrderSummaryId",
        "relationshipOrder": "0",
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "order",
        "from": "OrderDeliveryGroupSummary",
        "to": "OrderDeliveryGroup",
        "field": "OriginalOrderDeliveryGroupId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "order",
        "from": "OrderItem",
        "to": "Order",
        "field": "OrderId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "order",
        "from": "OrderItem",
        "to": "OrderItem",
        "field": "OriginalOrderItemId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "order",
        "from": "OrderItem",
        "to": "OrderDeliveryGroup",
        "field": "OrderDeliveryGroupId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "order",
        "from": "OrderItem",
        "to": "OrderItem",
        "field": "RelatedOrderItemId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "order",
        "from": "OrderItemHistory",
        "to": "OrderItem",
        "field": "OrderItemId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "payments",
        "from": "OrderPaymentSummaryReference",
        "to": "OrderPaymentSummary",
        "field": "OrderPaymentSummaryId",
        "relationshipOrder": "0",
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "order",
        "from": "OrderItemSummary",
        "to": "OrderSummary",
        "field": "OrderSummaryId",
        "relationshipOrder": "0",
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "order",
        "from": "OrderItemSummary",
        "to": "OrderItem",
        "field": "OriginalOrderItemId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "order",
        "from": "OrderItemSummary",
        "to": "OrderDeliveryGroupSummary",
        "field": "OrderDeliveryGroupSummaryId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "order",
        "from": "OrderItemSummary",
        "to": "OrderItemSummary",
        "field": "MainOrderItemSummaryId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "order",
        "from": "OrderItemSummaryRelationship",
        "to": "OrderItemSummary",
        "field": "MainOrderItemSummaryId",
        "relationshipOrder": "0",
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "order",
        "from": "OrderItemSummaryRelationship",
        "to": "OrderSummary",
        "field": "MainOrderSummaryId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "order",
        "from": "OrderItemSummaryRelationship",
        "to": "OrderItemSummary",
        "field": "AssociatedOrderItemSummaryId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "tax",
        "from": "OrderItemTaxLineItem",
        "to": "OrderItemTaxLineItem",
        "field": "RelatedTaxLineItemId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "tax",
        "from": "OrderItemTaxLineItemHistory",
        "to": "OrderItemTaxLineItem",
        "field": "OrderItemTaxLineItemId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "tax",
        "from": "OrderItemTaxLineItemSummary",
        "to": "OrderItemTaxLineItem",
        "field": "OriginalOrderItemTaxLineItemId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "order",
        "from": "OrderSummary",
        "to": "Order",
        "field": "OriginalOrderId",
        "relationshipOrder": "0",
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "order",
        "from": "OrderSummary",
        "to": "Order",
        "field": "ChangeOrderId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "order",
        "from": "OrderSummary",
        "to": "SalesChannel",
        "field": "SalesChannelId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "order",
        "from": "OrderSummary",
        "to": "OrderSummary",
        "field": "SourceOrderSummaryId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "order",
        "from": "OrderSummaryAdditionalInfo",
        "to": "OrderSummary",
        "field": "OrderSummaryId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": true,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "order",
        "from": "OrderSummaryAdditionalInfo",
        "to": "Order",
        "field": "OrderId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": true,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "order",
        "from": "OrderSummaryAdditionalInfoShare",
        "to": "OrderSummaryAdditionalInfo",
        "field": "ParentId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "returns",
        "from": "OrderSummaryRelationship",
        "to": "ReturnOrder",
        "field": "MainAttachedToId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": true,
        "cascadeDelete": false
      },
      {
        "stage": "order",
        "from": "OrderSummaryShare",
        "to": "OrderSummary",
        "field": "ParentId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "payments",
        "from": "CardPaymentMethod",
        "to": "PaymentGateway",
        "field": "PaymentGatewayId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "payments",
        "from": "OrderPaymentSummary",
        "to": "PaymentMethod",
        "field": "PaymentMethodId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "payments",
        "from": "OrderPaymentSummary",
        "to": "PaymentGatewayLog",
        "field": "LastPaymentGatewayLogId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "payments",
        "from": "PaymentAuthorization",
        "to": "PaymentGroup",
        "field": "PaymentGroupId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "payments",
        "from": "PaymentAuthorization",
        "to": "PaymentMethod",
        "field": "PaymentMethodId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "payments",
        "from": "PaymentAuthorization",
        "to": "PaymentGateway",
        "field": "PaymentGatewayId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "payments",
        "from": "PaymentAuthorization",
        "to": "OrderPaymentSummary",
        "field": "OrderPaymentSummaryId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "payments",
        "from": "Payment",
        "to": "PaymentGroup",
        "field": "PaymentGroupId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "payments",
        "from": "Payment",
        "to": "PaymentAuthorization",
        "field": "PaymentAuthorizationId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "payments",
        "from": "Payment",
        "to": "OrderPaymentSummary",
        "field": "OrderPaymentSummaryId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "payments",
        "from": "Payment",
        "to": "PaymentGateway",
        "field": "PaymentGatewayId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "payments",
        "from": "Payment",
        "to": "PaymentMethod",
        "field": "PaymentMethodId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "payments",
        "from": "PaymentAuthAdjustment",
        "to": "PaymentAuthorization",
        "field": "PaymentAuthorizationId",
        "relationshipOrder": "0",
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "payments",
        "from": "PaymentCredit",
        "to": "Payment",
        "field": "PaymentId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "payments",
        "from": "PaymentCredit",
        "to": "OrderPaymentSummary",
        "field": "OrderPaymentSummaryId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "payments",
        "from": "PaymentCreditTransaction",
        "to": "PaymentCredit",
        "field": "PaymentCreditId",
        "relationshipOrder": "0",
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "payments",
        "from": "MerchAccPaymentMethodType",
        "to": "MerchAccPaymentMethodSet",
        "field": "PaymentMethodSetId",
        "relationshipOrder": "0",
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "payments",
        "from": "PaymentGatewayLog",
        "to": "CardPaymentMethod",
        "field": "ReferencedEntityId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": true,
        "cascadeDelete": false
      },
      {
        "stage": "payments",
        "from": "PaymentGatewayLog",
        "to": "Payment",
        "field": "ReferencedEntityId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": true,
        "cascadeDelete": false
      },
      {
        "stage": "payments",
        "from": "PaymentGatewayLog",
        "to": "PaymentAuthAdjustment",
        "field": "ReferencedEntityId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": true,
        "cascadeDelete": false
      },
      {
        "stage": "payments",
        "from": "PaymentGatewayLog",
        "to": "PaymentAuthorization",
        "field": "ReferencedEntityId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": true,
        "cascadeDelete": false
      },
      {
        "stage": "payments",
        "from": "PaymentGatewayLog",
        "to": "Refund",
        "field": "ReferencedEntityId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": true,
        "cascadeDelete": false
      },
      {
        "stage": "payments",
        "from": "PaymentGatewayLog",
        "to": "PaymentGateway",
        "field": "PaymentGatewayId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "payments",
        "from": "PaymentGatewayLog",
        "to": "OrderPaymentSummary",
        "field": "OrderPaymentSummaryId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "payments",
        "from": "PaymentLink",
        "to": "MerchAccPaymentMethodSet",
        "field": "PaymentMethodSetId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "payments",
        "from": "Refund",
        "to": "PaymentGroup",
        "field": "PaymentGroupId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "payments",
        "from": "Refund",
        "to": "PaymentMethod",
        "field": "PaymentMethodId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "payments",
        "from": "Refund",
        "to": "PaymentGateway",
        "field": "PaymentGatewayId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "payments",
        "from": "Refund",
        "to": "OrderPaymentSummary",
        "field": "OrderPaymentSummaryId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "payments",
        "from": "Refund",
        "to": "Payment",
        "field": "PaymentId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "payments",
        "from": "RefundLinePayment",
        "to": "Payment",
        "field": "PaymentId",
        "relationshipOrder": "0",
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "payments",
        "from": "RefundLinePayment",
        "to": "Refund",
        "field": "RefundId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "payments",
        "from": "RefundLinePayment",
        "to": "RefundLinePayment",
        "field": "AssociatedRefundLinePaymentId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "payments",
        "from": "RefundLinePaymentHistory",
        "to": "RefundLinePayment",
        "field": "RefundLinePaymentId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "pricing",
        "from": "BuyerGroupPricebook",
        "to": "Pricebook2",
        "field": "Pricebook2Id",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "pricing",
        "from": "PricebookEntry",
        "to": "Pricebook2",
        "field": "Pricebook2Id",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "pricing",
        "from": "WebStorePricebook",
        "to": "Pricebook2",
        "field": "Pricebook2Id",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "promotions",
        "from": "WebCartAdjustmentBasis",
        "to": "Coupon",
        "field": "AdjustmentBasisReferenceId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "promotions",
        "from": "WebCartAdjustmentGroup",
        "to": "Promotion",
        "field": "PriceAdjustmentCauseId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "promotions",
        "from": "WebCartAdjustmentGroup",
        "to": "Coupon",
        "field": "AdjustmentBasisReferenceId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "promotions",
        "from": "WebCartAdjustmentGroup",
        "to": "PromotionTier",
        "field": "AdjustmentTierId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "promotions",
        "from": "CartDeliveryGroupMethodAdj",
        "to": "Promotion",
        "field": "PriceAdjustmentCauseId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "promotions",
        "from": "CartDeliveryGroupMethodAdj",
        "to": "Coupon",
        "field": "AdjustmentBasisReferenceId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "promotions",
        "from": "CartItemPriceAdjustment",
        "to": "WebCartAdjustmentGroup",
        "field": "WebCartAdjustmentGroupId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "promotions",
        "from": "CartItemPriceAdjustment",
        "to": "Promotion",
        "field": "PriceAdjustmentCauseId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "promotions",
        "from": "CartItemPriceAdjustment",
        "to": "Coupon",
        "field": "AdjustmentBasisReferenceId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "promotions",
        "from": "CartItemPriceAdjustment",
        "to": "PromotionTier",
        "field": "AdjustmentTierId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "promotions",
        "from": "Coupon",
        "to": "Promotion",
        "field": "PromotionId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "pricing",
        "from": "PricebookEntryHistory",
        "to": "PricebookEntry",
        "field": "PricebookEntryId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "promotions",
        "from": "CouponCodeRedemption",
        "to": "Coupon",
        "field": "CouponId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "promotions",
        "from": "FulfillmentOrderItemAdjustment",
        "to": "OrderItemAdjustmentLineSummary",
        "field": "OrderItemAdjustLineSummaryId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "promotions",
        "from": "OrderAdjustmentGroup",
        "to": "OrderAdjustmentGroup",
        "field": "RelatedAdjustmentGroupId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "promotions",
        "from": "OrderAdjustmentGroup",
        "to": "Promotion",
        "field": "AdjustmentCauseId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": true,
        "cascadeDelete": false
      },
      {
        "stage": "promotions",
        "from": "OrderAdjustmentGroup",
        "to": "Coupon",
        "field": "AdjustmentBasisReferenceId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "promotions",
        "from": "OrderAdjustmentGroup",
        "to": "PromotionTier",
        "field": "AdjustmentTierId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "promotions",
        "from": "OrderAdjustmentGroupHistory",
        "to": "OrderAdjustmentGroup",
        "field": "OrderAdjustmentGroupId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "promotions",
        "from": "OrderAdjustmentGroupSummary",
        "to": "OrderAdjustmentGroup",
        "field": "OriginalOrderAdjGroupId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "promotions",
        "from": "OrderAdjustmentGroupSummary",
        "to": "Promotion",
        "field": "AdjustmentCauseId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "promotions",
        "from": "OrderAdjustmentGroupSummary",
        "to": "Coupon",
        "field": "AdjustmentBasisReferenceId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "promotions",
        "from": "OrderAdjustmentGroupSummary",
        "to": "PromotionTier",
        "field": "AdjustmentTierId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "promotions",
        "from": "OrderItemAdjustmentLineItem",
        "to": "OrderItemAdjustmentLineItem",
        "field": "RelatedAdjustmentLineItemId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "promotions",
        "from": "OrderItemAdjustmentLineItem",
        "to": "OrderAdjustmentGroup",
        "field": "OrderAdjustmentGroupId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "promotions",
        "from": "OrderItemAdjustmentLineItem",
        "to": "Promotion",
        "field": "AdjustmentCauseId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": true,
        "cascadeDelete": false
      },
      {
        "stage": "promotions",
        "from": "OrderItemAdjustmentLineItem",
        "to": "Coupon",
        "field": "AdjustmentBasisReferenceId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "promotions",
        "from": "OrderItemAdjustmentLineItem",
        "to": "PromotionTier",
        "field": "AdjustmentTierId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "promotions",
        "from": "OrderItemAdjustmentLineItemHistory",
        "to": "OrderItemAdjustmentLineItem",
        "field": "OrderItemAdjustmentLineItemId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "promotions",
        "from": "OrderItemAdjustmentLineSummary",
        "to": "OrderItemAdjustmentLineItem",
        "field": "OriginalOrderItemAdjustmentLineItemId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "promotions",
        "from": "OrderItemAdjustmentLineSummary",
        "to": "OrderAdjustmentGroupSummary",
        "field": "OrderAdjustmentGroupSummaryId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "promotions",
        "from": "OrderItemAdjustmentLineSummary",
        "to": "Promotion",
        "field": "AdjustmentCauseId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "promotions",
        "from": "OrderItemAdjustmentLineSummary",
        "to": "Coupon",
        "field": "AdjustmentBasisReferenceId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "promotions",
        "from": "OrderItemAdjustmentLineSummary",
        "to": "PromotionTier",
        "field": "AdjustmentTierId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "pricing",
        "from": "PriceAdjustmentTierHistory",
        "to": "PriceAdjustmentTier",
        "field": "PriceAdjustmentTierId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "pricing",
        "from": "PriceAdjustmentScheduleHistory",
        "to": "PriceAdjustmentSchedule",
        "field": "PriceAdjustmentScheduleId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "pricing",
        "from": "PriceAdjustmentTier",
        "to": "PriceAdjustmentSchedule",
        "field": "PriceAdjustmentScheduleId",
        "relationshipOrder": "0",
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "pricing",
        "from": "PricebookEntryAdjustment",
        "to": "PriceAdjustmentSchedule",
        "field": "PriceAdjustmentScheduleId",
        "relationshipOrder": "0",
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "pricing",
        "from": "PricebookEntryAdjustment",
        "to": "PricebookEntry",
        "field": "PricebookEntryId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "promotions",
        "from": "PromotionMarketSegment",
        "to": "Promotion",
        "field": "PromotionId",
        "relationshipOrder": "0",
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "promotions",
        "from": "PromotionMarketSegment",
        "to": "PromotionSegment",
        "field": "PromotionSegmentId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "promotions",
        "from": "PromotionLineItemRule",
        "to": "PromotionQualifier",
        "field": "AssociatedReferenceId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": true,
        "cascadeDelete": false
      },
      {
        "stage": "promotions",
        "from": "PromotionLineItemRule",
        "to": "PromotionTarget",
        "field": "AssociatedReferenceId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": true,
        "cascadeDelete": false
      },
      {
        "stage": "promotions",
        "from": "PromotionQualifier",
        "to": "Promotion",
        "field": "PromotionId",
        "relationshipOrder": "0",
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "promotions",
        "from": "PromotionQualifier",
        "to": "PromotionTier",
        "field": "PromotionTierId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "promotions",
        "from": "PromotionSegmentBuyerGroup",
        "to": "PromotionSegment",
        "field": "PromotionSegmentId",
        "relationshipOrder": "0",
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "promotions",
        "from": "PromotionSegmentSalesStore",
        "to": "PromotionSegment",
        "field": "PromotionSegmentId",
        "relationshipOrder": "0",
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "promotions",
        "from": "PromotionShare",
        "to": "Promotion",
        "field": "ParentId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "promotions",
        "from": "PromotionTarget",
        "to": "Promotion",
        "field": "PromotionId",
        "relationshipOrder": "0",
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "promotions",
        "from": "PromotionTarget",
        "to": "PromotionTier",
        "field": "PromotionTierId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "fulfill",
        "from": "Address",
        "to": "Location",
        "field": "ParentId",
        "relationshipOrder": "0",
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "promotions",
        "from": "PromotionTier",
        "to": "Promotion",
        "field": "PromotionId",
        "relationshipOrder": "0",
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "quotes",
        "from": "Opportunity",
        "to": "Quote",
        "field": "SyncedQuoteId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "quotes",
        "from": "Quote",
        "to": "Opportunity",
        "field": "OpportunityId",
        "relationshipOrder": "0",
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "quotes",
        "from": "QuoteHistory",
        "to": "Quote",
        "field": "QuoteId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "quotes",
        "from": "QuoteLineItem",
        "to": "Quote",
        "field": "QuoteId",
        "relationshipOrder": "0",
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "quotes",
        "from": "QuoteLineItemHistory",
        "to": "QuoteLineItem",
        "field": "QuoteLineItemId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "quotes",
        "from": "QuoteDocument",
        "to": "Quote",
        "field": "QuoteId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "quotes",
        "from": "QuoteShare",
        "to": "Quote",
        "field": "ParentId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "returns",
        "from": "ReturnOrderHistory",
        "to": "ReturnOrder",
        "field": "ReturnOrderId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "returns",
        "from": "ReturnOrderItemAdjustment",
        "to": "ReturnOrderLineItem",
        "field": "ReturnOrderLineItemId",
        "relationshipOrder": "0",
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "returns",
        "from": "ReturnOrderItemAdjustment",
        "to": "ReturnOrder",
        "field": "ReturnOrderId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "returns",
        "from": "ReturnOrderLineItemHistory",
        "to": "ReturnOrderLineItem",
        "field": "ReturnOrderLineItemId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "returns",
        "from": "ReturnOrderShare",
        "to": "ReturnOrder",
        "field": "ParentId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "service",
        "from": "Asset",
        "to": "Asset",
        "field": "ParentId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "service",
        "from": "Asset",
        "to": "Asset",
        "field": "RootAssetId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "service",
        "from": "AssetWarranty",
        "to": "Asset",
        "field": "AssetId",
        "relationshipOrder": "0",
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "service",
        "from": "AssetWarranty",
        "to": "WarrantyTerm",
        "field": "WarrantyTermId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "tax",
        "from": "ReturnOrderItemTax",
        "to": "OrderItemTaxLineItemSummary",
        "field": "OrderItemTaxLineItemSummaryId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "service",
        "from": "Case",
        "to": "Case",
        "field": "MasterRecordId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "service",
        "from": "Case",
        "to": "Asset",
        "field": "AssetId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "service",
        "from": "Case",
        "to": "Case",
        "field": "ParentId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "returns",
        "from": "ReturnOrderLineItem",
        "to": "ReturnOrder",
        "field": "ReturnOrderId",
        "relationshipOrder": "0",
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "service",
        "from": "Entitlement",
        "to": "Asset",
        "field": "AssetId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "service",
        "from": "Entitlement",
        "to": "AssetWarranty",
        "field": "AssetWarrantyId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "service",
        "from": "EntitlementHistory",
        "to": "Entitlement",
        "field": "EntitlementId",
        "relationshipOrder": null,
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "service",
        "from": "ProductWarrantyTerm",
        "to": "WarrantyTerm",
        "field": "WarrantyTermId",
        "relationshipOrder": "0",
        "optional": false,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "tax",
        "from": "TaxPolicy",
        "to": "TaxTreatment",
        "field": "DefaultTaxTreatmentId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "tax",
        "from": "TaxTreatment",
        "to": "TaxPolicy",
        "field": "TaxPolicyId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      },
      {
        "stage": "tax",
        "from": "TaxTreatment",
        "to": "TaxEngine",
        "field": "TaxEngineId",
        "relationshipOrder": null,
        "optional": true,
        "evidence": "Salesforce org sObject describe",
        "verifiedOn": "2026-11-13",
        "unique": false,
        "polymorphic": false,
        "cascadeDelete": false
      }
    ]
  }
};
