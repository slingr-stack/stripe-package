# Overview

Repo: [https://github.com/slingr-stack/stripe-package](https://github.com/slingr-stack/stripe-package)

Stripe is a financial infrastructure platform that enables businesses to accept payments online and in mobile apps. It provides a suite of APIs for processing payments, preventing fraud, and managing subscriptions. Stripe's customizable tools cater to businesses of all sizes, making it a popular choice for e-commerce and SaaS companies.

The Stripe package has the following features:

- Authentication for the Stripe API
- Shortcuts to access the Stripe API
- Support for webhooks

In most cases, you will use the provided shortcuts to access the API. For example, you could use the API directly by making an HTTP request like this:

```js
let res = pkg.stripe.api.get('/v1/customers');
```

For further details about the Stripe API, please take a look at the [Documentation.](https://docs.stripe.com/api)

## Configuration

First, you will need to set up an account in Stripe. You can easily create a developer account and use it.  Once you have a Stripe account, you will be able to configure the package with the settings listed below.

#### Publishable Key
The public key can be found in the [Dashboard](https://dashboard.stripe.com/apikeys) of your Stripe app. Simply copy the generated API publishable key into this field.

**Name**: publishableKey
**Type**: text
**Mandatory**: true

#### Secret Key
The secret key can be found in the [Dashboard](https://dashboard.stripe.com/apikeys) of your Stripe app. Simply copy the generated API secret key into this field.

**Name**: secretKey
**Type**: password
**Mandatory**: true

#### Webhook URL
This is the URL you should configure for webhooks in Stripe. If you don't configure the webhook URL in Stripe, your app won't receive the events.

#### Check Webhooks Signature
Stripe can optionally sign webhook events it sends to your app by including a signature in each of them (in the `Stripe-Signature` header). This allows you to verify that the events were sent by Stripe, not by a third party. Check [Webhook signatures](https://stripe.com/docs/webhooks/signatures) for more info.

**Name**: checkWebhooksSignature
**Type**: toggle
**Mandatory**: false

#### Webhooks Signing Secret
This is the webhook signing secret configured in Stripe.

**Name**: webhooksSigningSecret
**Type**: password
**Mandatory**: required (If Check Webhooks Signature is checked)

# Javascript API

You can make `GET`, `POST`, `PUT`, and `DELETE` requests to the [Stripe API](https://stripe.com/docs/api) like this:

Return a list of your customers. The customers are returned sorted by creation date, with the most recent customers appearing first:

```js
const customers = pkg.stripe.api.get('/v1/customers');
```

Retrieve a customer by e-mail:

```js
const customersByEmail = pkg.stripe.api.get('/v1/customers?email=test@example.com');
```

Create a new product object:

```js
const product = pkg.stripe.api.post('/v1/products', {
  name: "Gold Plan",
  description: "Gold plan for VIP customers",
  active: true
});
```

Delete a product by id:

```js
const deletedProduct = pkg.stripe.api.delete('/v1/products/prod_RMqjKzq47HizVm');
```

Update a product. Updates the specific product by setting the values of the parameters passed. Any parameters not provided will be left unchanged.

```js
const updatedProduct = pkg.stripe.api.post('/v1/products/prod_RMqtS6zwl2C5p2', {
  'metadata[order_id]': 14
});
```

The package automatically handles authentication, so there’s no need to worry about that.

For more information about making HTTP calls, please refer to the documentation of the [HTTP service](https://github.com/slingr-stack/http-service).

## Events

### Webhook

Every time Stripe sends an event to the webhook URL (which needs to be configured in Stripe), this event will be triggered. The package takes care of verifying the signature if needed. The event's data is the raw content sent by Stripe. Check the [Webhooks](https://docs.stripe.com/webhooks) documentation for more information.

# About Slingr

Slingr is a low-code rapid application development platform that accelerates development, with robust architecture for integrations and executing custom workflows and automation.

[More info about Slingr](https://slingr.io)

# License

This package is licensed under the Apache License 2.0. See the `LICENSE` file for more details.
