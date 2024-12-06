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
        let validSignature = pkg.stripe.utils.verifySignature(body, signature);
        sys.logs.debug('*** is valid signature ' + JSON.stringify(validSignature));
        if (validSignature) {
            sys.events.triggerEvent("stripe:webhook", event.data);
        } else {
            sys.logs.warn('[stripe] Invalid signature for webhook');
        }
    }
};