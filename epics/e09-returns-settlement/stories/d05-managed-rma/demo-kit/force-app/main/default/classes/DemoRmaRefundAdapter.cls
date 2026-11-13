// Test fixture for the developer org. There are no network calls or credentials.
global without sharing class DemoRmaRefundAdapter implements CommercePayments.PaymentGatewayAdapter {
    global CommercePayments.GatewayResponse processRequest(CommercePayments.PaymentGatewayContext context) {
        if (context.getPaymentRequestType() != CommercePayments.RequestType.ReferencedRefund) {
            return new CommercePayments.GatewayErrorResponse('403', 'Only dummy referenced refunds are supported.');
        }

        CommercePayments.ReferencedRefundRequest request =
            (CommercePayments.ReferencedRefundRequest) context.getPaymentRequest();
        String marker = 'DEMO-RMA-%';
        List<Payment> fixture = [
            SELECT Amount, AccountId, GatewayRefNumber, OrderPaymentSummary.OrderSummary.PoNumber,
                   OrderPaymentSummary.OrderSummary.AccountId
            FROM Payment
            WHERE Id = :request.paymentId
              AND PaymentGateway.PaymentGatewayName = 'Demo RMA Refund (no callouts)'
              AND GatewayRefNumber LIKE :marker
              AND Comments = 'SYNTHETIC RMA DEMO ONLY'
              AND ProcessingMode = 'External'
              AND Status = 'Processed'
            LIMIT 1
        ];
        if (fixture.isEmpty() || fixture[0].OrderPaymentSummary == null ||
            fixture[0].OrderPaymentSummary.OrderSummary == null ||
            fixture[0].GatewayRefNumber != fixture[0].OrderPaymentSummary.OrderSummary.PoNumber ||
            fixture[0].AccountId != fixture[0].OrderPaymentSummary.OrderSummary.AccountId ||
            request.amount != 12.50 || fixture[0].Amount != 25) {
            return new CommercePayments.GatewayErrorResponse('403', 'This payment or amount is outside the dummy test.');
        }

        CommercePayments.ReferencedRefundResponse response = new CommercePayments.ReferencedRefundResponse();
        response.setAmount(request.amount);
        response.setAsync(false);
        response.setGatewayDate(System.now());
        response.setGatewayReferenceNumber('DUMMY-' + EncodingUtil.convertToHex(Crypto.generateAesKey(128)));
        response.setGatewayResultCode('00');
        response.setGatewayResultCodeDescription('Simulated refund - no money moved');
        response.setSalesforceResultCodeInfo(
            new CommercePayments.SalesforceResultCodeInfo(CommercePayments.SalesforceResultCode.Success)
        );
        return response;
    }
}
