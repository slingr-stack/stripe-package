/****************************************************
 Dependencies
 ****************************************************/

var httpService = dependencies.http;

/**
 * This flow step will send generic request.
 *
 * @param {object} inputs
 * {text} method, This is used to config method.
 * {text} url, This is used to config external URL.
 * {Array[string]} pathVariables, This is used to config path variables.
 * {Array[string]} headers, This is used to config headers.
 * {Array[string]} params, This is used to config params.
 * {string} body, This is used to send body request.
 * {boolean} followRedirects, This is used to config follow redirects.
 * {boolean} download, This is used to config download.
 * {boolean} fullResponse, This is used to config full response.
 * {number} connectionTimeout, Read timeout interval, in milliseconds.
 * {number} readTimeout, Connect timeout interval, in milliseconds.
 */
step.apiCallStripe = function (inputs) {

	var inputsLogic = {
		headers: inputs.headers || [],
		params: inputs.params || [],
		body: inputs.body || {},
		followRedirects: inputs.followRedirects || false,
		download: inputs.download || false,
		fileName: inputs.fileName || "",
		fullResponse: inputs.fullResponse || false,
		connectionTimeout: inputs.connectionTimeout || 5000,
		readTimeout: inputs.readTimeout || 60000,
		path: inputs.path || "",
		method: inputs.method || "get"
	};

	var options = {
		path: inputsLogic.path,
		params: isObject(inputsLogic.params) ? inputsLogic.params : stringToObject(inputsLogic.params),
		headers: isObject(inputsLogic.headers) ? inputsLogic.headers : stringToObject(inputsLogic.headers),
		body: isObject(inputsLogic.body) ? inputsLogic.body : JSON.parse(inputsLogic.body),
		followRedirects: inputsLogic.followRedirects,
		forceDownload: inputsLogic.download,
		downloadSync: false,
		fileName: inputsLogic.fileName,
		fullResponse: inputsLogic.fullResponse,
		connectionTimeout: inputsLogic.connectionTimeout,
		readTimeout: inputsLogic.readTimeout
	};

	setApiUri(options)
	setRequestHeaders(options);
	setRequestHeaders(options);

	switch (inputsLogic.method.toLowerCase()) {
		case 'get':
			return httpService.get(options);
		case 'post':
			return httpService.post(options);
		case 'put':
			return httpService.put(options);
		case 'patch':
			return httpService.patch(options);
		case 'delete':
			return httpService.delete(options);
		case 'head':
			return httpService.head(options);
		case 'options':
			return httpService.options(options);
	}

	return null;
};

function isObject (obj) {
	return !!obj && stringType(obj) === '[object Object]'
}

var stringType = Function.prototype.call.bind(Object.prototype.toString);

function stringToObject (obj) {
	if (!!obj){
		var keyValue = obj.toString().split(',');
		var parseObj = {};
		for(var i = 0; i < keyValue.length; i++) {
			parseObj[keyValue[i].split('=')[0]] = keyValue[i].split('=')[1]
		}
		return parseObj;
	}
	return null;
}


/****************************************************
 Private API
 ****************************************************/

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