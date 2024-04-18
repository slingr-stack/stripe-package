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
	};

	options= setApiUri(options)
	options= setRequestHeaders(options);

	return httpService.get(options);

};
function setApiUri(options) {
	var API_URL = config.get("STRIPE_API_BASE_URL");
	var url = options.path || "";
	options.url = API_URL + url;
	sys.logs.debug('[stripe] Set url: ' + options.path + "->" + options.url);
	return options;
}

function setRequestHeaders(options) {
	var headers = options.headers || {};
	sys.logs.debug('[stripe] Set header apikey');
	headers = mergeJSON(headers, {"Authorization": "Bearer " + config.get("secretKey")});
	headers = mergeJSON(headers, {"Content-Type": "application/json"});
	options.headers = headers;
	return options;
}

function mergeJSON (json1, json2) {
	var result = {};
	var key;
	for (key in json1) {
		if(json1.hasOwnProperty(key)) result[key] = json1[key];
	}
	for (key in json2) {
		if(json2.hasOwnProperty(key)) result[key] = json2[key];
	}
	return result;
}