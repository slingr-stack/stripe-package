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
        try {
            var body = event.data.body;
            var headers = event.data.headers;
            var signature = headers["Stripe-Signature"] || headers["stripe-signature"];

            if (!pkg.stripe.api.utils.verifySignature(body, signature)) {
                throw new Error("Invalid signature");
            }

            sys.events.triggerEvent("http:webhook", event.data);

        } catch (e) {
            var json = {
                type: "error",
                code: e.message === "Invalid signature" ? 400 : 500,
                message: e.message
            };
            sys.events.triggerEvent("http:webhook", json);
        }

        return "ok";
    }
};