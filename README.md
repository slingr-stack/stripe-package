# Overview

Repo: [https://github.com/slingr-stack/stripe-package](https://github.com/slingr-stack/stripe-package)

Stripe helps you create any type of payments flow—from e-commerce to recurring billing and everything in between. The Stripe package has the following features:

- Authentication for the Stripe API
- Shortcuts to access the Stripe API
- Support for webhooks

In most cases you will be using the provided shortcuts to access the API. For example, you could use the API directly by doing an HTTP request like this:

```js
let res = pkg.stripe.api.get('/v1/customers');
```

# Configuration

First, you will need to set up an account in Stripe. You can easily create a developer account and use it.  Once you have a Stripe account, you will be able to configure the package with the settings listed below.

## Publishable Key

Name: `publishableKey`

The public key can be generated in the dashboard of your Stripe app. Just copy the generated API publishable key to this field.

## Secret Key

Name: `secretKey`

This is the API secret generated at the same time the API key. Just copy the generated API secret to this field.

## Webhook URL

Name: `webhookUrl`

This is the URL you should configure for webhooks in Stripe. If you don't configure the webhooks URL in Stripe you app won't receive the events.

## Check Webhooks Signature

Name: `checkWebhooksSignature`

Stripe can optionally sign webhook events it sends to your app by including a signature in each of them (in the `Stripe-Signature` header). This allows you to verify that the events were sent by Stripe, not by a third party. Check [webhook signatures](https://stripe.com/docs/webhooks/signatures) for more info.

## Webhooks Signing Secret

Name: `webhooksSigningSecret`

This is the webhooks signing secret configured in Stripe.

# Javascript API

## HTTP requests

You can make `GET`, `POST`, `PUT`, and `DELETE` requests to the [Stripe API](https://stripe.com/docs/api) like this:

```js
let customers = pkg.stripe.api.get('/v1/customers');
let customersByEmail = pkg.stripe.api.get('/v1/customers?email=test@example.com');
```

The package automatically handles authentication, so no need to worry about that.

More information about making HTTP calls, please refer to the documentation of the [HTTP service](https://github.com/slingr-stack/http-service).

# Events

## Webhook

Every time Stripe sends an event to the webhooks URL (it needs to be configured in Stripe), this event will be triggered. The package takes care of verifying the signature if needed. The event's data is the raw content sent by Stripe. Check the [webhooks documentation](https://docs.stripe.com/api/events) for more information.

# About Slingr

Slingr is a low-code rapid application development platform that accelerates development, with robust architecture for integrations and executing custom workflows and automation.

[More info about Slingr](https://slingr.io)

# License

This package is licensed under the Apache License 2.0. See the `LICENSE` file for more details.
