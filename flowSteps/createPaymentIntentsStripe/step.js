/****************************************************
 Dependencies
 ****************************************************/

var httpService = dependencies.http;

step.createPaymentIntentsStripe = function (inputs) {

    var inputsLogic = {
        currency: inputs.currency || "",
        amount: inputs.amount || 0
    };

    var options = {
        path: "/v1/payment_intents",
        body: inputsLogic
    };

    options= setApiUri(options)
    options= setRequestHeaders(options);

    return httpService.post(options);

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