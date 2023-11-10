/****************************************************
 Dependencies
 ****************************************************/

var httpService = dependencies.http;

step.createPaymentIntentsStripe = function (inputs) {

    var inputsLogic = {
        currency: inputs.currency || "",
        amount: inputs.amount || 0,
    };

    var options = {
        path: "/v1/payment_intents",
        body: inputsLogic
    }

    return httpService.post(options);

}