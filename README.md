<table>
    <thead>
    <tr>
        <th>Title</th>
        <th>Last Updated</th>
        <th>Summary</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Stripe package</td>
        <td>November 10, 2023</td>
        <td>Detailed description of the API of the Stripe package.</td>
    </tr>
    </tbody>
</table>
---
title: Stripe endpoint
keywords: 
last_updated: September 27, 2019
tags: []
summary: "Detailed description of the API of the Stripe endpoint."
---

# Overview

Stripe helps you create any type of payments flow—from e-commerce to 
recurring billing and everything in between. The Stripe endpoint has the following features:

- Interact with Stripe API
- Shortcuts to access the REST API
- Support for webhooks

In most cases you will be using the provided shortcuts to access the API. For example, you could use the REST API
directly by doing an HTTP request like this:

```js
var res = pkg.stripe.functions.get({path:'/v1/customers'});
```

## Configuration

First you will need to setup an account in Stripe. Then you will be able to configure the endpoint you will
need to generate an API key  and secret. You can find more information about that [here](https://stripe.com/docs/api/authentication).

### API key

The public key can be generated in the dashboard of your Stripe app. Just copy the generated API publishable key to this field.


### API secret

This is the API secret generated at same time the API key. Just copy the generated API secret to this field.


### Webhook URL

This is the URL you should configure for webhooks in Stripe.

### Check webhooks sign

Stripe can optionally sign the webhook events it sends to your endpoints by including a signature in each event’s
Stripe-Signature header. This allows you to verify that the events were sent by Stripe, not by a third party. Check
[Webhook signatures](https://stripe.com/docs/webhooks/signatures) for more info.

### Webhooks secret

Before you can verify signatures, you need to retrieve your endpoint’s secret from your Dashboard’s Webhooks settings.
Select an endpoint that you want to obtain the secret for, then click the Click to reveal button.

## Javascript API

The Javascript API of the Stripe package has three pieces:

- **HTTP request**: this allows to make regular HTTP requests like `GET`, `POST` or `PUT` to the API.
- **Shortcuts**: these are helpers to make HTTP request to the API in a more convenient way.

### HTTP requests

You can make `GET`, `POST`, `PUT`, and `DELETE` request to the
[Stripe API](https://stripe.com/docs/api) like this:

```js
var customers = pkg.stripe.functions.get({path:'/v1/customers'});
var customersByEmail = pkg.stripe.functions.get({path'/v1/customers?email=test@example.com'});
```

Please take a look at the documentation of the [HTTP endpoint]({{site.baseurl}}/endpoints_http.html#javascript-api)
for more information.
