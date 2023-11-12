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
        <td>November 12, 2023</td>
        <td>Detailed description of the API of the Stripe package.</td>
    </tr>
    </tbody>
</table>
---
title: Stripe Package
keywords: 
last_updated: November 12, 2023
tags: []
summary: "Detailed description of the API of the Stripe package."
---

# Overview

Stripe helps you create any type of payments flow—from e-commerce to 
recurring billing and everything in between. The Stripe package has the following features:

- Interact with Stripe API
- Shortcuts to access the REST API
- Support for webhooks

In most cases you will be using the provided shortcuts to access the API. For example, you could use the REST API
directly by doing an HTTP request like this:

```js
var res = pkg.stripe.functions.get({path:'/v1/customers'});
```

## Configuration

First you will need to setup an account in Stripe. Then you will be able to configure the package you will
need to generate an API key  and secret. You can find more information about that [here](https://stripe.com/docs/api/authentication).

### API key

The public key can be generated in the dashboard of your Stripe app. Just copy the generated API publishable key to this field.


### API secret

This is the API secret generated at same time the API key. Just copy the generated API secret to this field.


### Webhook URL

This is the URL you should configure for webhooks in Stripe.

### Check webhooks sign

Stripe can optionally sign the webhook events it sends to your packages by including a signature in each event’s
Stripe-Signature header. This allows you to verify that the events were sent by Stripe, not by a third party. Check
[Webhook signatures](https://stripe.com/docs/webhooks/signatures) for more info.

### Webhooks secret

Before you can verify signatures, you need to retrieve your package’s secret from your Dashboard’s Webhooks settings.
Select an package that you want to obtain the secret for, then click the Click to reveal button.

## Javascript API

The Javascript API of the Stripe package has three pieces:

- **HTTP request**: this allows to make regular HTTP requests like `GET`, `POST` or `PUT` to the API.
- **Shortcuts**: these are helpers to make HTTP request to the API in a more convenient way.

### HTTP requests

You can make `GET`, `POST`, `PUT`, and `DELETE` request to the
[Stripe API](https://stripe.com/docs/api) like this:

```js
var customers = pkg.stripe.functions.get({path:'/v1/customers'});
var customersByEmail = pkg.stripe.functions.get({path:'/v1/customers?email=test@example.com'});
```

## Events

### Webhook

Stripe's webhooks allow your application to receive information to configured events occur.

Please refer to the [webhooks documentation](https://stripe.com/docs/webhooks/setup) for more information on how to configure them.

## About SLINGR

SLINGR is a low-code rapid application development platform that accelerates development, with robust architecture for integrations and executing custom workflows and automation.

[More info about SLINGR](https://slingr.io)

## License

This package is licensed under the Apache License 2.0. See the `LICENSE` file for more details.

# Stripe v2.0.0

# Javascript API

The Javascript API of the stripe package has three pieces:

- **HTTP requests**: These allow making regular HTTP requests.
- **Additional Helpers**: These helpers provide additional features that facilitate or improves the package usage in SLINGR.

## HTTP requests
You can make `POST`,`GET`,`DELETE` requests to the [stripe API](API_URL_HERE) like this:
```js
var response = pkg.stripe.functions.post({path:'/v1/subscriptions/:subscription_exposed_id', body: {}});
var response = pkg.stripe.functions.post({path:'/v1/subscriptions/:subscription_exposed_id'});
var response = pkg.stripe.functions.get({path:'/v1/customers/:customer/cash_balance_transactions'});
var response = pkg.stripe.functions.delete({path:'/v1/invoices/:invoice'});
```

Please take a look at the documentation of the [HTTP service](https://github.com/slingr-stack/http-service)
for more information about generic requests.

## Flow Step

As an alternative option to using scripts, you can make use of Flows and Flow Steps specifically created for the package:
<details>
    <summary>Click here to see the Flow Steps</summary>

<br>



### Generic Flow Step

Generic flow step for full use of the entire package and its services.

<h3>Inputs</h3>

<table>
    <thead>
    <tr>
        <th>Label</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Visibility</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>URL (Method)</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            This is the http method to be used against the package. <br>
            Possible values are: <br>
            <i><strong>POST,GET,DELETE</strong></i>
        </td>
    </tr>
    <tr>
        <td>URL (Path)</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            The url to which this package will send the request. This is the exact service to which the http request will be made. <br>
            Possible values are: <br>
            <i><strong>/v1/account_links<br>/v1/accounts<br>/v1/accounts/{account}<br>/v1/accounts/{account}/capabilities/{capability}<br>/v1/accounts/{account}/external_accounts<br>/v1/accounts/{account}/external_accounts/{id}<br>/v1/accounts/{account}/login_links<br>/v1/accounts/{account}/reject<br>/v1/application_fees/{id}/refund<br>/v1/application_fees/{id}/refunds<br>/v1/application_fees/{fee}/refunds/{id}<br>/v1/charges<br>/v1/charges/{charge}<br>/v1/charges/{charge}/capture<br>/v1/checkout/sessions<br>/v1/checkout/sessions/{session}/expire<br>/v1/coupons<br>/v1/coupons/{coupon}<br>/v1/credit_notes<br>/v1/credit_notes/{id}<br>/v1/credit_notes/{id}/void<br>/v1/customers/{customer}/balance_transactions<br>/v1/customers/{customer}/balance_transactions/{transaction}<br>/v1/customers/{customer}/cash_balance<br>/v1/billing_portal/configurations<br>/v1/billing_portal/configurations/{configuration}<br>/v1/billing_portal/sessions<br>/v1/customers/{customer}/tax_ids<br>/v1/customers<br>/v1/customers/{customer}<br>/v1/disputes/{dispute}<br>/v1/disputes/{dispute}/close<br>/v1/file_links<br>/v1/file_links/{link}<br>https://files.stripe.com/v1/files<br>/v1/financial_connections/accounts/{account}/disconnect<br>/v1/financial_connections/accounts/{account}/refresh<br>/v1/financial_connections/sessions<br>/v1/identity/verification_sessions<br>/v1/identity/verification_sessions/{session}<br>/v1/identity/verification_sessions/{session}/cancel<br>/v1/identity/verification_sessions/{session}/redact<br>/v1/invoiceitems<br>/v1/invoiceitems/{invoiceitem}<br>/v1/invoices<br>/v1/invoices/{invoice}<br>/v1/invoices/{invoice}/finalize<br>/v1/invoices/{invoice}/mark_uncollectible<br>/v1/invoices/{invoice}/pay<br>/v1/invoices/{invoice}/send<br>/v1/invoices/{invoice}/void<br>/v1/issuing/authorizations/{authorization}<br>/v1/issuing/authorizations/{authorization}/approve<br>/v1/issuing/authorizations/{authorization}/decline<br>/v1/issuing/cardholders<br>/v1/issuing/cardholders/{cardholder}<br>/v1/issuing/cards<br>/v1/issuing/cards/{card}<br>/v1/test_helpers/issuing/cards/{card}/shipping/fail<br>/v1/test_helpers/issuing/cards/{card}/shipping/return<br>/v1/test_helpers/issuing/cards/{card}/shipping/ship<br>/v1/issuing/disputes<br>/v1/issuing/disputes/{dispute}<br>/v1/issuing/disputes/{dispute}/submit<br>/v1/issuing/transactions/{transaction}<br>/v1/payment_intents<br>/v1/payment_intents/{intent}<br>/v1/payment_intents/{intent}/apply_customer_balance<br>/v1/payment_intents/{intent}/cancel<br>/v1/payment_intents/{intent}/capture<br>/v1/payment_intents/{intent}/confirm<br>/v1/payment_intents/{intent}/increment_authorization<br>/v1/payment_intents/{intent}/verify_microdeposits<br>/v1/payment_links<br>/v1/payment_links/{payment_link}<br>/v1/payment_methods<br>/v1/payment_methods/{payment_method}<br>/v1/payment_methods/{payment_method}/attach<br>/v1/payment_methods/{payment_method}/detach<br>/v1/payouts<br>/v1/payouts/{payout}<br>/v1/payouts/{payout}/cancel<br>/v1/payouts/{payout}/reverse<br>/v1/accounts/{account}/persons<br>/v1/accounts/{account}/persons/{person}<br>/v1/prices<br>/v1/prices/{price}<br>/v1/products<br>/v1/products/{id}<br>/v1/promotion_codes<br>/v1/promotion_codes/{promotion_code}<br>/v1/quotes<br>/v1/quotes/{quote}<br>/v1/quotes/{quote}/accept<br>/v1/quotes/{quote}/cancel<br>/v1/quotes/{quote}/finalize<br>/v1/reviews/{review}/approve<br>/v1/radar/value_lists<br>/v1/radar/value_lists/{value_list}<br>/v1/radar/value_list_items<br>/v1/refunds<br>/v1/refunds/{refund}<br>/v1/reporting/report_runs<br>/v1/apps/secrets<br>/v1/apps/secrets/delete<br>/v1/setup_intents<br>/v1/setup_intents/{intent}<br>/v1/setup_intents/{intent}/cancel<br>/v1/setup_intents/{intent}/confirm<br>/v1/setup_intents/{intent}/verify_microdeposits<br>/v1/shipping_rates<br>/v1/shipping_rates/{shipping_rate_token}<br>/v1/skus<br>/v1/skus/{id}<br>/v1/customers/{customer}/sources<br>/v1/customers/{customer}/sources/{id}<br>/v1/customers/{customer}/sources/{id}/verify<br>/v1/sources<br>/v1/sources/{source}<br>/v1/subscription_items<br>/v1/subscription_items/{item}<br>/v1/subscription_items/{subscription_item}/usage_records<br>/v1/subscription_schedules<br>/v1/subscription_schedules/{schedule}<br>/v1/subscription_schedules/{schedule}/cancel<br>/v1/subscription_schedules/{schedule}/release<br>/v1/subscriptions<br>/v1/subscriptions/{subscription_exposed_id}<br>/v1/tax_rates<br>/v1/tax_rates/{tax_rate}<br>/v1/terminal/configurations<br>/v1/terminal/configurations/{configuration}<br>/v1/terminal/connection_tokens<br>/v1/terminal/locations<br>/v1/terminal/locations/{location}<br>/v1/terminal/readers<br>/v1/terminal/readers/{reader}<br>/v1/terminal/readers/{reader}/cancel_action<br>/v1/terminal/readers/{reader}/process_payment_intent<br>/v1/terminal/readers/{reader}/process_setup_intent<br>/v1/terminal/readers/{reader}/set_reader_display<br>/v1/test_helpers/terminal/readers/{reader}/present_payment_method<br>/v1/test_helpers/test_clocks<br>/v1/test_helpers/test_clocks/{test_clock}/advance<br>/v1/tokens<br>/v1/topups<br>/v1/topups/{topup}<br>/v1/topups/{topup}/cancel<br>/v1/transfers/{id}/reversals<br>/v1/transfers/{transfer}/reversals/{id}<br>/v1/transfers<br>/v1/transfers/{transfer}<br>/v1/treasury/credit_reversals<br>/v1/treasury/debit_reversals<br>/v1/treasury/financial_accounts/{financial_account}/features<br>/v1/treasury/financial_accounts<br>/v1/treasury/financial_accounts/{financial_account}<br>/v1/test_helpers/treasury/inbound_transfers/{id}/fail<br>/v1/test_helpers/treasury/inbound_transfers/{id}/succeed<br>/v1/treasury/inbound_transfers<br>/v1/treasury/inbound_transfers/{inbound_transfer}/cancel<br>/v1/test_helpers/treasury/outbound_payments/{id}/fail<br>/v1/test_helpers/treasury/outbound_payments/{id}/post<br>/v1/test_helpers/treasury/outbound_payments/{id}/return<br>/v1/treasury/outbound_payments<br>/v1/treasury/outbound_payments/{id}/cancel<br>/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/fail<br>/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/post<br>/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/return<br>/v1/treasury/outbound_transfers<br>/v1/treasury/outbound_transfers/{outbound_transfer}/cancel<br>/v1/test_helpers/treasury/received_credits<br>/v1/test_helpers/treasury/received_debits<br>/v1/webhook_endpoints<br>/v1/webhook_endpoints/{webhook_endpoint}<br>/v1/accounts<br>/v1/accounts/{account}<br>/v1/accounts/{account}/capabilities<br>/v1/accounts/{account}/capabilities/{capability}<br>/v1/accounts/{account}/external_accounts<br>/v1/accounts/{account}/external_accounts/{id}<br>/v1/application_fees/{id}/refunds<br>/v1/application_fees/{fee}/refunds/{id}<br>/v1/application_fees<br>/v1/application_fees/{id}<br>/v1/balance<br>/v1/balance_transactions<br>/v1/balance_transactions/{id}<br>/v1/charges<br>/v1/charges/{charge}<br>/v1/charges/search<br>/v1/checkout/sessions<br>/v1/checkout/sessions/{session}<br>/v1/checkout/sessions/{session}/line_items<br>/v1/country_specs<br>/v1/country_specs/{country}<br>/v1/coupons<br>/v1/coupons/{coupon}<br>/v1/credit_notes<br>/v1/credit_notes/{id}<br>/v1/credit_notes/preview<br>/v1/credit_notes/preview/lines<br>/v1/credit_notes/{credit_note}/lines<br>/v1/customers/{customer}/balance_transactions<br>/v1/customers/{customer}/balance_transactions/{transaction}<br>/v1/customers/{customer}/cash_balance<br>/v1/customers/{customer}/cash_balance_transactions<br>/v1/customers/{customer}/cash_balance_transactions/{transaction}<br>/v1/billing_portal/configurations<br>/v1/billing_portal/configurations/{configuration}<br>/v1/customers/{customer}/tax_ids<br>/v1/customers/{customer}/tax_ids/{id}<br>/v1/customers<br>/v1/customers/{customer}<br>/v1/customers/search<br>/v1/customers/{customer}/payment_methods/{payment_method}<br>/v1/customers/{customer}/payment_methods<br>/v1/disputes<br>/v1/disputes/{dispute}<br>/v1/events<br>/v1/events/{id}<br>/v1/exchange_rates<br>/v1/exchange_rates/{rate_id}<br>/v1/file_links<br>/v1/file_links/{link}<br>/v1/files<br>/v1/files/{file}<br>/v1/financial_connections/accounts<br>/v1/financial_connections/accounts/{account}<br>/v1/financial_connections/sessions/{session}<br>/v1/identity/verification_reports<br>/v1/identity/verification_reports/{report}<br>/v1/identity/verification_sessions<br>/v1/identity/verification_sessions/{session}<br>/v1/invoiceitems<br>/v1/invoiceitems/{invoiceitem}<br>/v1/invoices<br>/v1/invoices/{invoice}<br>/v1/invoices/search<br>/v1/invoices/upcoming<br>/v1/invoices/upcoming/lines<br>/v1/invoices/{invoice}/lines<br>/v1/issuing/authorizations<br>/v1/issuing/authorizations/{authorization}<br>/v1/issuing/cardholders<br>/v1/issuing/cardholders/{cardholder}<br>/v1/issuing/cards<br>/v1/issuing/cards/{card}<br>/v1/issuing/disputes<br>/v1/issuing/disputes/{dispute}<br>/v1/issuing/transactions<br>/v1/issuing/transactions/{transaction}<br>/v1/mandates/{mandate}<br>/v1/payment_intents<br>/v1/payment_intents/{intent}<br>/v1/payment_intents/search<br>/v1/payment_links<br>/v1/payment_links/{payment_link}<br>/v1/payment_links/{payment_link}/line_items<br>/v1/payment_methods<br>/v1/payment_methods/{payment_method}<br>/v1/payouts<br>/v1/payouts/{payout}<br>/v1/accounts/{account}/persons<br>/v1/accounts/{account}/persons/{person}<br>/v1/prices<br>/v1/prices/{price}<br>/v1/prices/search<br>/v1/products<br>/v1/products/{id}<br>/v1/products/search<br>/v1/promotion_codes<br>/v1/promotion_codes/{promotion_code}<br>/v1/quotes/{quote}/computed_upfront_line_items<br>/v1/quotes/{quote}/line_items<br>/v1/quotes<br>/v1/quotes/{quote}<br>/v1/quotes/{quote}/pdf<br>/v1/radar/early_fraud_warnings<br>/v1/radar/early_fraud_warnings/{early_fraud_warning}<br>/v1/reviews<br>/v1/reviews/{review}<br>/v1/radar/value_lists<br>/v1/radar/value_lists/{value_list}<br>/v1/radar/value_list_items<br>/v1/radar/value_list_items/{item}<br>/v1/refunds<br>/v1/refunds/{refund}<br>/v1/reporting/report_runs<br>/v1/reporting/report_runs/{report_run}<br>/v1/reporting/report_types<br>/v1/reporting/report_types/{report_type}<br>/v1/apps/secrets<br>/v1/apps/secrets/find<br>/v1/setup_attempts<br>/v1/setup_intents<br>/v1/setup_intents/{intent}<br>/v1/shipping_rates<br>/v1/shipping_rates/{shipping_rate_token}<br>/v1/sigma/scheduled_query_runs<br>/v1/sigma/scheduled_query_runs/{scheduled_query_run}<br>/v1/skus<br>/v1/skus/{id}<br>/v1/customers/{customer}/sources<br>/v1/customers/{customer}/sources/{id}<br>/v1/sources/{source}<br>/v1/subscription_items<br>/v1/subscription_items/{item}<br>/v1/subscription_items/{subscription_item}/usage_record_summaries<br>/v1/subscription_schedules<br>/v1/subscription_schedules/{schedule}<br>/v1/subscriptions<br>/v1/subscriptions/{subscription_exposed_id}<br>/v1/subscriptions/search<br>/v1/tax_rates<br>/v1/tax_rates/{tax_rate}<br>/v1/terminal/configurations<br>/v1/terminal/configurations/{configuration}<br>/v1/terminal/locations<br>/v1/terminal/locations/{location}<br>/v1/terminal/readers<br>/v1/terminal/readers/{reader}<br>/v1/test_helpers/test_clocks<br>/v1/test_helpers/test_clocks/{test_clock}<br>/v1/tokens/{token}<br>/v1/topups<br>/v1/topups/{topup}<br>/v1/transfers/{id}/reversals<br>/v1/transfers/{transfer}/reversals/{id}<br>/v1/transfers<br>/v1/transfers/{transfer}<br>/v1/treasury/credit_reversals<br>/v1/treasury/credit_reversals/{credit_reversal}<br>/v1/treasury/debit_reversals<br>/v1/treasury/debit_reversals/{debit_reversal}<br>/v1/treasury/financial_accounts/{financial_account}/features<br>/v1/treasury/financial_accounts<br>/v1/treasury/financial_accounts/{financial_account}<br>/v1/treasury/inbound_transfers<br>/v1/treasury/inbound_transfers/{id}<br>/v1/treasury/outbound_payments<br>/v1/treasury/outbound_payments/{id}<br>/v1/treasury/outbound_transfers<br>/v1/treasury/outbound_transfers/{outbound_transfer}<br>/v1/treasury/received_credits<br>/v1/treasury/received_credits/{id}<br>/v1/treasury/received_debits<br>/v1/treasury/received_debits/{id}<br>/v1/treasury/transaction_entries<br>/v1/treasury/transaction_entries/{id}<br>/v1/treasury/transactions<br>/v1/treasury/transactions/{id}<br>/v1/webhook_endpoints<br>/v1/webhook_endpoints/{webhook_endpoint}<br>/v1/accounts/{account}<br>/v1/accounts/{account}/external_accounts/{id}<br>/v1/coupons/{coupon}<br>/v1/customers/{customer}/tax_ids/{id}<br>/v1/customers/{customer}<br>/v1/customers/{customer}/discount<br>/v1/invoiceitems/{invoiceitem}<br>/v1/invoices/{invoice}<br>/v1/accounts/{account}/persons/{person}<br>/v1/products/{id}<br>/v1/radar/value_lists/{value_list}<br>/v1/radar/value_list_items/{item}<br>/v1/skus/{id}<br>/v1/customers/{customer}/sources/{id}<br>/v1/subscription_items/{item}<br>/v1/subscriptions/{subscription_exposed_id}<br>/v1/subscriptions/{subscription_exposed_id}/discount<br>/v1/terminal/configurations/{configuration}<br>/v1/terminal/locations/{location}<br>/v1/terminal/readers/{reader}<br>/v1/test_helpers/test_clocks/{test_clock}<br>/v1/webhook_endpoints/{webhook_endpoint}<br></strong></i>
        </td>
    </tr>
    <tr>
        <td>Headers</td>
        <td>keyValue</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used when you want to have a custom http header for the request.
        </td>
    </tr>
    <tr>
        <td>Query Params</td>
        <td>keyValue</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used when you want to have a custom query params for the http call.
        </td>
    </tr>
    <tr>
        <td>Body</td>
        <td>json</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            A payload of data can be sent to the server in the body of the request.
        </td>
    </tr>
    <tr>
        <td>Event</td>
        <td>dropDown</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used to define event after the call. <br>
            Possible values are: <br>
            File Downloaded, Callback
        </td>
    </tr>
    <tr>
        <td>Callback data</td>
        <td>textarea</td>
        <td>no</td>
        <td> - </td>
        <td> Event is Callback </td>
        <td>
            This is an object you can send that you will get back when the function is processed.
        </td>
    </tr>
    <tr>
        <td>Callbacks</td>
        <td>Script</td>
        <td>no</td>
        <td> - </td>
        <td> Event is Callback </td>
        <td>
            This is a map where you can listen for different function
        </td>
    </tr>
    <tr>
        <td>Override Settings</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td>Always</td>
        <td></td>
    </tr>
    <tr>
        <td>Follow Redirect</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>Indicates that the resource has to be downloaded into a file instead of returning it in the response.</td>
    </tr>
    <tr>
        <td>Download</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>If true the method won't return until the file has been downloaded, and it will return all the information of the file.</td>
    </tr>
    <tr>
        <td>File name</td>
        <td>text</td>
        <td>no</td>
        <td></td>
        <td> overrideSettings </td>
        <td>If provided, the file will be stored with this name. If empty the file name will be calculated from the URL.</td>
    </tr>
    <tr>
        <td>Full response</td>
        <td> boolean </td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>Include extended information about response</td>
    </tr>
    <tr>
        <td>Connection Timeout</td>
        <td> number </td>
        <td>no</td>
        <td> 5000 </td>
        <td> overrideSettings </td>
        <td>Connect a timeout interval, in milliseconds (0 = infinity).</td>
    </tr>
    <tr>
        <td>Read Timeout</td>
        <td> number </td>
        <td>no</td>
        <td> 60000 </td>
        <td> overrideSettings </td>
        <td>Read a timeout interval, in milliseconds (0 = infinity).</td>
    </tr>
    </tbody>
</table>

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the package call.
        </td>
    </tr>
    </tbody>
</table>


</details>

For more information about how shortcuts or flow steps work, and how they are generated, take a look at the [slingr-helpgen tool](https://github.com/slingr-stack/slingr-helpgen).

## Additional Flow Step


<details>
    <summary>Click here to see the Customs Flow Steps</summary>

<br>



### Custom Flow Steps Name

Description of Custom Flow Steps

### Create a PaymentIntent

This step allows you to create a payment.


<h3>Inputs</h3>

<table>
    <thead>
    <tr>
        <th>Label</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Visibility</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Currency</td>
        <td>text</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Three-letter ISO currency code, in lowercase. Must be a supported currency https://stripe.com/docs/currencies.
        </td>
    </tr>
    <tr>
        <td>Amount</td>
        <td>text</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Amount intended to be collected by this PaymentIntent. A positive integer representing how much to charge in the smallest currency unit (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency). The minimum amount is $0.50 US or equivalent in charge currency. The amount value supports up to eight digits (e.g., a value of 99999999 for a USD charge of $999,999.99).
        </td>
    </tr>
    </tbody>
</table>

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the package call.
        </td>
    </tr>
    </tbody>
</table>

### Cancel PaymentIntents

A PaymentIntent object can be canceled when it is in one of these statuses: requires_payment_method, requires_capture, requires_confirmation, requires_action or, in rare cases, processing.


<h3>Inputs</h3>

<table>
    <thead>
    <tr>
        <th>Label</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Visibility</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Intent</td>
        <td>text</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Payment intent id.
        </td>
    </tr>
    <tr>
        <td>Cancellation Reason</td>
        <td>dropDown</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Reason for canceling this PaymentIntent. Possible values are duplicate, fraudulent, requested_by_customer, or abandoned
        </td>
    </tr>
    </tbody>
</table>

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the package call.
        </td>
    </tr>
    </tbody>
</table>


### List all PaymentIntents


<h3>Inputs</h3>

<table>
    <thead>
    <tr>
        <th>Label</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Visibility</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Customer</td>
        <td>text</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Only PaymentIntents associated with the customer specified by this customer ID will be returned. If no customer ID is specified, all PaymentIntents will be listed.
        </td>
    </tr>
    </tbody>
</table>

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the package call.
        </td>
    </tr>
    </tbody>
</table>

</details>

## Additional Helpers
*MANUALLY ADD THE DOCUMENTATION OF THESE HELPERS HERE...*



## Dependencies
* HTTP Service (Latest Version)


// TODO: Review the dependencies of the package (and remove this comment after set the dependencies)

# About SLINGR

SLINGR is a low-code rapid application development platform that accelerates development, with robust architecture for integrations and executing custom workflows and automation.

[More info about SLINGR](https://slingr.io)

# License

This package is licensed under the Apache License 2.0. See the `LICENSE` file for more details.