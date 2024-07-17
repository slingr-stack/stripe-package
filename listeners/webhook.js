/****************************************************
 Webhooks
 ****************************************************/

listeners.defaultWebhookStripe = {
    label: 'Catch HTTP Stripe events',
    type: 'service',
    options: {
        service: 'http',
        event: 'webhook',
        matching: {
            path: '/stripe',
        }
    },
    callback: function(event) {
        let body = event.data.rawBody;
        let headers = event.data.headers;
        let signature = headers["Stripe-Signature"] || headers["stripe-signature"];
        if (pkg.stripe.utils.verifySignature(body, signature)) {
            sys.events.triggerEvent("stripe:webhook", event.data);
        } else {
            sys.logs.error('[stripe] Invalid signature for webhook');
        }
    }
};