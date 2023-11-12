/****************************************************
 Dependencies
 ****************************************************/

var httpService = dependencies.http;

step.cancelPaymentIntentsStripe = function (inputs) {

	var inputLogics = {
		intent: inputs.intent || "",
	};

	var body = {
		cancellation_reason: inputs.cancellationReason || "",
	};

	var options = {
		path: "/v1/payment_intents/"+inputLogics.intent+"/cancel",
		body: body
	}

	return httpService.post(options);
}