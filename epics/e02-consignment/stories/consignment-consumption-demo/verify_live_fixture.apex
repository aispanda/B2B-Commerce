// Execute against the demo org after the synthetic shipment is delivered and the operator has access.
String stockKey = 'STOCK-DEMO-01';
String usageKey = 'USE/HOSP-DEMO-01/HOSP-USE-001/1';
String voidKey = 'USE/HOSP-DEMO-01/HOSP-VOID-001/1';
ShipmentItem delivered = [
    SELECT Id, Product2Id, Quantity, Shipment.ActualDeliveryDate,
           Shipment.DestinationLocationId, Shipment.OrderSummary.AccountId,
           Shipment.OrderSummary.GrandTotalAmount, Shipment.OrderSummary.PoNumber
    FROM ShipmentItem
    WHERE Shipment.TrackingNumber = 'CONS-POC-01-DEMO' AND Shipment.Status = 'Delivered'
];
System.assertEquals(10, delivered.Quantity);
System.assertNotEquals(null, delivered.Shipment.ActualDeliveryDate);
System.assertEquals(0, delivered.Shipment.OrderSummary.GrandTotalAmount);
System.assertEquals(null, delivered.Shipment.OrderSummary.PoNumber);

String receiptKey = 'REC/' + String.valueOf(delivered.Id);
Map<String, Schema.RecordTypeInfo> types =
    Consignment_Movement__c.SObjectType.getDescribe().getRecordTypeInfosByDeveloperName();
Id receiptType = types.get('Receipt').getRecordTypeId();
Id usageType = types.get('Consumption').getRecordTypeId();
List<Consignment_Stock__c> stockRows = [
    SELECT Id, Product__c, Account__c, Location__c, Confirmed_On_Hand__c, Usage_Awaiting_Posting__c
    FROM Consignment_Stock__c WHERE Stock_Key__c = :stockKey
];
Id stockId;
Set<String> eventKeys = new Set<String>{receiptKey, usageKey, voidKey};
if (stockRows.isEmpty()) {
    Consignment_Stock__c stock = new Consignment_Stock__c(
        Stock_Key__c=stockKey, Account__c=delivered.Shipment.OrderSummary.AccountId,
        Location__c=delivered.Shipment.DestinationLocationId, Product__c=delivered.Product2Id,
        Stocking_Unit__c='Box', Reference_Unit_Rate__c=24
    );
    insert stock;
    stockId = stock.Id;
    System.assertEquals(0, [
        SELECT Confirmed_On_Hand__c FROM Consignment_Stock__c WHERE Id = :stockId
    ].Confirmed_On_Hand__c);

    Date receiptDate = delivered.Shipment.ActualDeliveryDate.date();
    Consignment_Movement__c receipt = new Consignment_Movement__c(
        RecordTypeId=receiptType, Consignment_Stock__c=stockId, Event_Key__c=receiptKey,
        Posting_Status__c='Recorded', Quantity__c=10, Event_Date__c=receiptDate,
        Source_Reference__c='DEMO-RECEIVING-001', Source_Shipment_Item_Id__c=String.valueOf(delivered.Id)
    );
    insert receipt;
    receipt.Posting_Status__c='Posted Receipt';
    update receipt;
    System.assertEquals(10, [
        SELECT Confirmed_On_Hand__c FROM Consignment_Stock__c WHERE Id = :stockId
    ].Confirmed_On_Hand__c);

    Consignment_Movement__c usage = new Consignment_Movement__c(
        RecordTypeId=usageType, Consignment_Stock__c=stockId, Event_Key__c=usageKey,
        Posting_Status__c='Reported', Billing_Status__c='Not Ready',
        Quantity__c=3, Event_Date__c=receiptDate, Source_Reference__c='HOSP-USE-001/1', Unit_Rate__c=24
    );
    insert usage;
    Database.SaveResult prematureBilling = Database.update(
        new Consignment_Movement__c(Id=usage.Id, Billing_Status__c='Ready to Bill'), false
    );
    System.assertEquals(false, prematureBilling.isSuccess());
    System.assertEquals(StatusCode.FIELD_CUSTOM_VALIDATION_EXCEPTION, prematureBilling.getErrors()[0].getStatusCode());
    usage.Posting_Status__c='Verified';
    update usage;
    Consignment_Stock__c verified = [
        SELECT Confirmed_On_Hand__c, Usage_Awaiting_Posting__c
        FROM Consignment_Stock__c WHERE Id = :stockId
    ];
    System.assertEquals(10, verified.Confirmed_On_Hand__c);
    System.assertEquals(3, verified.Usage_Awaiting_Posting__c);
    usage.Posting_Status__c='Posted Usage';
    update usage;
    Consignment_Stock__c posted = [
        SELECT Confirmed_On_Hand__c, Usage_Awaiting_Posting__c
        FROM Consignment_Stock__c WHERE Id = :stockId
    ];
    System.assertEquals(7, posted.Confirmed_On_Hand__c);
    System.assertEquals(0, posted.Usage_Awaiting_Posting__c);
    Consignment_Movement__c postedUsage = [
        SELECT Billing_Status__c, Demo_Charge_Before_Tax__c FROM Consignment_Movement__c WHERE Id = :usage.Id
    ];
    System.assertEquals('Not Ready', postedUsage.Billing_Status__c);
    System.assertEquals(72, postedUsage.Demo_Charge_Before_Tax__c);
    usage.Billing_Status__c='Ready to Bill';
    update usage;
    System.assertEquals(7, [
        SELECT Confirmed_On_Hand__c FROM Consignment_Stock__c WHERE Id = :stockId
    ].Confirmed_On_Hand__c);
    usage.Billing_Status__c='Billed (Demo)';
    usage.Demo_Invoice_Reference__c='DEMO-INV-001';
    update usage;

    Consignment_Movement__c voided = new Consignment_Movement__c(
        RecordTypeId=usageType, Consignment_Stock__c=stockId, Event_Key__c=voidKey,
        Posting_Status__c='Reported', Billing_Status__c='Not Ready', Quantity__c=2,
        Event_Date__c=receiptDate, Source_Reference__c='HOSP-VOID-001/1', Unit_Rate__c=24
    );
    insert voided;
    voided.Posting_Status__c='Voided';
    update voided;
} else {
    System.assertEquals(1, stockRows.size());
    System.assertEquals(delivered.Product2Id, stockRows[0].Product__c);
    System.assertEquals(delivered.Shipment.DestinationLocationId, stockRows[0].Location__c);
    System.assertEquals(delivered.Shipment.OrderSummary.AccountId, stockRows[0].Account__c);
    stockId = stockRows[0].Id;
}
Map<String, Consignment_Movement__c> events = new Map<String, Consignment_Movement__c>();
for (Consignment_Movement__c movement : [
    SELECT Event_Key__c, Posting_Status__c, Billing_Status__c, Demo_Invoice_Reference__c,
           Demo_Charge_Before_Tax__c, Quantity__c, Source_Shipment_Item_Id__c
    FROM Consignment_Movement__c WHERE Consignment_Stock__c = :stockId AND Event_Key__c IN :eventKeys
]) {
    events.put(movement.Event_Key__c, movement);
}
System.assertEquals(3, events.size());
System.assertEquals('Posted Receipt', events.get(receiptKey).Posting_Status__c);
System.assertEquals(String.valueOf(delivered.Id), events.get(receiptKey).Source_Shipment_Item_Id__c);
System.assertEquals(10, events.get(receiptKey).Quantity__c);
System.assertEquals('Posted Usage', events.get(usageKey).Posting_Status__c);
System.assertEquals('Billed (Demo)', events.get(usageKey).Billing_Status__c);
System.assertEquals('DEMO-INV-001', events.get(usageKey).Demo_Invoice_Reference__c);
System.assertEquals(3, events.get(usageKey).Quantity__c);
System.assertEquals(72, events.get(usageKey).Demo_Charge_Before_Tax__c);
System.assertEquals('Voided', events.get(voidKey).Posting_Status__c);
Consignment_Stock__c finalStock = [
    SELECT Confirmed_On_Hand__c, Usage_Awaiting_Posting__c
    FROM Consignment_Stock__c WHERE Id = :stockId
];
System.assertEquals(7, finalStock.Confirmed_On_Hand__c);
System.assertEquals(0, finalStock.Usage_Awaiting_Posting__c);
System.debug('CONS-POC-01 stock, usage and billing checks passed.');
