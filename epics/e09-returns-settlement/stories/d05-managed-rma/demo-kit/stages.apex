// stage: order
String marker = '@MARKER@';
System.assertEquals(0, [SELECT COUNT() FROM Order WHERE PoNumber = :marker], 'The test order already exists.');

Account buyer = new Account(Name='Synthetic RMA buyer');
insert buyer;

Order fixture = new Order(
    AccountId=buyer.Id, Pricebook2Id='@PRICEBOOK_ID@', EffectiveDate=Date.today(),
    Status='Draft', PoNumber=marker, Description='Dummy paid RMA test only. Do not ship.'
);
insert fixture;

OrderDeliveryGroup delivery = new OrderDeliveryGroup(
    OrderId=fixture.Id, OrderDeliveryMethodId='@DELIVERY_ID@',
    DeliverToName='Dummy RMA Buyer', DeliverToStreet='1 Test Way',
    DeliverToCity='Testville', DeliverToStateCode='NY', DeliverToCountryCode='US',
    DeliverToPostalCode='10001', DeliveryInstructions='Dummy test only. Do not ship.'
);
insert delivery;

insert new OrderItem(
    OrderId=fixture.Id, OrderDeliveryGroupId=delivery.Id, PricebookEntryId='@ENTRY_ID@',
    Quantity=2, UnitPrice=12.50, TotalLineAmount=25, Type='Order Product'
);
fixture.Status = 'Activated';
update fixture;
System.debug('DUMMY_ORDER_ID=' + fixture.Id);

// stage: summary
Id orderId = '@ORDER_ID@';
Order fixture = [SELECT Id,PoNumber,TotalAmount FROM Order WHERE Id=:orderId];
System.assertEquals('@MARKER@', fixture.PoNumber);
List<OrderSummary> existing = [SELECT Id, OrderLifeCycleType FROM OrderSummary WHERE OriginalOrderId=:orderId];
System.assert(existing.size() <= 1, 'Duplicate summaries; stop.');
if (!existing.isEmpty()) {
    System.assertEquals('MANAGED', existing[0].OrderLifeCycleType);
    System.debug('DUMMY_ORDER_SUMMARY_ID=' + existing[0].Id);
} else {
ConnectApi.OrderSummaryInputRepresentation input = new ConnectApi.OrderSummaryInputRepresentation();
input.orderId = orderId;
input.orderLifeCycleType = 'MANAGED';
input.businessModel = 'B2B';
ConnectApi.OrderSummaryOutputRepresentation output = ConnectApi.OrderSummaryCreation.createOrderSummary(input);
System.debug('DUMMY_ORDER_SUMMARY_ID=' + output.orderSummaryId);
}

// stage: payment
Id summaryId = '@SUMMARY_ID@';
Id gatewayId = '@GATEWAY_ID@';
OrderSummary summary = [SELECT OriginalOrderId,AccountId,GrandTotalAmount,PoNumber FROM OrderSummary WHERE Id=:summaryId];
System.assertEquals('@MARKER@', summary.PoNumber);
System.assertEquals(25, summary.GrandTotalAmount);
System.assertEquals(0, [SELECT COUNT() FROM OrderPaymentSummary WHERE OrderSummaryId=:summaryId]);
PaymentGateway gateway = [SELECT PaymentGatewayName,PaymentGatewayProviderId,MerchantCredentialId FROM PaymentGateway WHERE Id=:gatewayId];
System.assertEquals('Demo RMA Refund (no callouts)', gateway.PaymentGatewayName);
System.assertEquals('@PROVIDER_ID@', (String)gateway.PaymentGatewayProviderId);
System.assertEquals('@CREDENTIAL_ID@', (String)gateway.MerchantCredentialId);

PaymentGroup paymentGroup = new PaymentGroup(SourceObjectId=summary.OriginalOrderId);
insert paymentGroup;

AlternativePaymentMethod method = new AlternativePaymentMethod(
    AccountId=summary.AccountId, PaymentGatewayId=gatewayId, NickName='Dummy Refund Method',
    GatewayToken='@MARKER@', Status='Active', ProcessingMode='External',
    PaymentMethodType='Other', BillingName='Dummy RMA Buyer'
);
insert method;

Payment payment = new Payment(
    AccountId=summary.AccountId, PaymentGroupId=paymentGroup.Id, PaymentGatewayId=gatewayId,
    PaymentMethodId=method.Id, 
    Amount=25, Status='Processed', Type='Sale', ProcessingMode='External',
    SfResultCode='Success', GatewayRefNumber='@MARKER@',
    Comments='SYNTHETIC RMA DEMO ONLY', Date=System.now(), EffectiveDate=System.now()
);
insert payment;
System.debug('DUMMY_PAYMENT_ID=' + payment.Id);
ConnectApi.CreateOrderPaymentSummaryInputRepresentation opsInput = new ConnectApi.CreateOrderPaymentSummaryInputRepresentation();
opsInput.orderSummaryId = summaryId;
opsInput.paymentIds = new List<String>{payment.Id};
ConnectApi.CreateOrderPaymentSummaryOutputRepresentation ops = ConnectApi.OrderPaymentSummary.createOrderPaymentSummary(opsInput);
System.assertNotEquals(null, ops.orderPaymentSummaryId);
System.debug('DUMMY_PAYMENT_SUMMARY_ID=' + ops.orderPaymentSummaryId);

// stage: fulfillment
ConnectApi.OrderItemSummaryInputRepresentation item = new ConnectApi.OrderItemSummaryInputRepresentation();
item.orderItemSummaryId = '@ITEM_ID@';
item.quantity = 1;
ConnectApi.FulfillmentGroupInputRepresentation fulfillmentGroup = new ConnectApi.FulfillmentGroupInputRepresentation();
fulfillmentGroup.fulfilledFromLocationId = '@LOCATION_ID@';
fulfillmentGroup.fulfillmentType = 'Warehouse';
fulfillmentGroup.orderItemSummaries = new List<ConnectApi.OrderItemSummaryInputRepresentation>{item};
ConnectApi.FulfillmentOrderInputRepresentation input = new ConnectApi.FulfillmentOrderInputRepresentation();
input.orderSummaryId = '@SUMMARY_ID@';
input.orderDeliveryGroupSummaryId = '@GROUP_ID@';
input.fulfillmentGroups = new List<ConnectApi.FulfillmentGroupInputRepresentation>{fulfillmentGroup};
System.debug('SYNTHETIC_FULFILLMENT=' + JSON.serialize(ConnectApi.FulfillmentOrder.createFulfillmentOrders(input)));

// stage: invoice
Id fulfillmentId = '@FULFILLMENT_ID@';
FulfillmentOrder fulfillment = [SELECT OrderSummaryId,Status FROM FulfillmentOrder WHERE Id=:fulfillmentId];
System.assertEquals('@SUMMARY_ID@',(String)fulfillment.OrderSummaryId);
System.assertEquals('Fulfilled',fulfillment.Status);
System.debug('DUMMY_INVOICE=' + JSON.serialize(ConnectApi.FulfillmentOrder.createInvoice(fulfillmentId, new ConnectApi.FulfillmentOrderInvoiceInputRepresentation())));

// stage: fund
Id orderSummaryId = '@SUMMARY_ID@';
Id invoiceId = '@INVOICE_ID@';
OrderSummary summary = [SELECT PoNumber FROM OrderSummary WHERE Id=:orderSummaryId];
System.assertEquals('@MARKER@',summary.PoNumber);
Invoice invoice = [SELECT ReferenceEntityId, Balance FROM Invoice WHERE Id=:invoiceId];
System.assertEquals(orderSummaryId,invoice.ReferenceEntityId);
System.assertEquals(12.50,invoice.Balance);
OrderPaymentSummary paid = [SELECT Id, BalanceAmount, CapturedAmount, AuthorizationAmount FROM OrderPaymentSummary WHERE OrderSummaryId=:orderSummaryId];
System.assertEquals(25,paid.CapturedAmount);
System.assert(paid.BalanceAmount >= invoice.Balance);
System.assertEquals(0,paid.AuthorizationAmount);
ConnectApi.EnsureFundsAsyncInputRepresentation input = new ConnectApi.EnsureFundsAsyncInputRepresentation();
input.invoiceId = invoiceId;
System.debug('DUMMY_FUND=' + JSON.serialize(ConnectApi.OrderSummary.ensureFundsAsync(orderSummaryId,input)));
