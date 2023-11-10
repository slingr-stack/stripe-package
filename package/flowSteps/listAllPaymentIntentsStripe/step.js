/****************************************************
 Dependencies
 ****************************************************/

var httpService = dependencies.http;

step.listAllPaymentIntentsStripe = function (inputs) {

	var params = {
		customer : inputs.customer || ""
	};

	var options = {
		path: "/v1/payment_intents",
		params: params.customer || []
	}

	return httpService.get(options);

}