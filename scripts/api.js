/****************************************************
 Dependencies
 ****************************************************/

let httpReference = dependencies.http;

let httpDependency = {
    get: httpReference.get,
    post: httpReference.post,
    put: httpReference.put,
    patch: httpReference.patch,
    delete: httpReference.delete,
    head: httpReference.head,
    options: httpReference.options
};
let httpService = {};

/**
 *
 * Handles a request with retry from the platform side.
 */
function handleRequestWithRetry(requestFn, options, callbackData, callbacks) {
    return requestFn(options, callbackData, callbacks);
}

function createWrapperFunction(requestFn) {
    return function (options, callbackData, callbacks) {
        return handleRequestWithRetry(requestFn, options, callbackData, callbacks);
    };
}

for (let key in httpDependency) {
    if (typeof httpDependency[key] === 'function') httpService[key] = createWrapperFunction(httpDependency[key]);
}

/****************************************************
 Public API - Generic Functions
 ****************************************************/

/**
 * Sends an HTTP GET request to the specified URL with the provided HTTP options.
 *
 * @param {string} path         - The path to send the GET request to.
 * @param {object} httpOptions  - The options to be included in the GET request check http-service documentation.
 * @param {object} callbackData - Additional data to be passed to the callback functions. [optional]
 * @param {object} callbacks    - The callback functions to be called upon completion of the GET request. [optional]
 * @return {object}             - The response of the GET request.
 */
exports.get = function (path, httpOptions, callbackData, callbacks) {
    let options = checkHttpOptions(path, httpOptions);
    return httpService.get(stripe(options), callbackData, callbacks);
};

/**
 * Sends an HTTP POST request to the specified URL with the provided HTTP options.
 *
 * @param {string} path         - The path to send the POST request to.
 * @param {object} httpOptions  - The options to be included in the POST request check http-service documentation.
 * @param {object} callbackData - Additional data to be passed to the callback functions. [optional]
 * @param {object} callbacks    - The callback functions to be called upon completion of the POST request. [optional]
 * @return {object}             - The response of the POST request.
 */
exports.post = function (path, httpOptions, callbackData, callbacks) {
    let options = checkHttpOptions(path, httpOptions);
    let headers = options.headers || {};
    sys.logs.debug('[stripe] Set header Content-Type');
    headers = mergeJSON(headers, {
        "Content-Type": "application/x-www-form-urlencoded"
    });
    options.headers = headers;
    return httpService.post(stripe(options), callbackData, callbacks);
};

/**
 * Sends an HTTP PUT request to the specified URL with the provided HTTP options.
 *
 * @param {string} path         - The path to send the PUT request to.
 * @param {object} httpOptions  - The options to be included in the PUT request check http-service documentation.
 * @param {object} callbackData - Additional data to be passed to the callback functions. [optional]
 * @param {object} callbacks    - The callback functions to be called upon completion of the POST request. [optional]
 * @return {object}             - The response of the PUT request.
 */
exports.put = function (path, httpOptions, callbackData, callbacks) {
    let options = checkHttpOptions(path, httpOptions);
    let headers = options.headers || {};
    sys.logs.debug('[stripe] Set header Content-Type');
    headers = mergeJSON(headers, {
        "Content-Type": "application/x-www-form-urlencoded"
    });
    options.headers = headers;
    return httpService.put(stripe(options), callbackData, callbacks);
};

/**
 * Sends an HTTP PATCH request to the specified URL with the provided HTTP options.
 *
 * @param {string} path         - The path to send the PATCH request to.
 * @param {object} httpOptions  - The options to be included in the PATCH request check http-service documentation.
 * @param {object} callbackData - Additional data to be passed to the callback functions. [optional]
 * @param {object} callbacks    - The callback functions to be called upon completion of the POST request. [optional]
 * @return {object}             - The response of the PATCH request.
 */
exports.patch = function (path, httpOptions, callbackData, callbacks) {
    let options = checkHttpOptions(path, httpOptions);
    return httpService.patch(stripe(options), callbackData, callbacks);
};

/**
 * Sends an HTTP DELETE request to the specified URL with the provided HTTP options.
 *
 * @param {string} path         - The path to send the DELETE request to.
 * @param {object} httpOptions  - The options to be included in the DELETE request check http-service documentation.
 * @param {object} callbackData - Additional data to be passed to the callback functions. [optional]
 * @param {object} callbacks    - The callback functions to be called upon completion of the DELETE request. [optional]
 * @return {object}             - The response of the DELETE request.
 */
exports.delete = function (path, httpOptions, callbackData, callbacks) {
    let options = checkHttpOptions(path, httpOptions);
    return httpService.delete(stripe(options), callbackData, callbacks);
};

/**
 * Sends an HTTP HEAD request to the specified URL with the provided HTTP options.
 *
 * @param {string} path         - The path to send the HEAD request to.
 * @param {object} httpOptions  - The options to be included in the HEAD request check http-service documentation.
 * @param {object} callbackData - Additional data to be passed to the callback functions. [optional]
 * @param {object} callbacks    - The callback functions to be called upon completion of the HEAD request. [optional]
 * @return {object}             - The response of the HEAD request.
 */
exports.head = function (path, httpOptions, callbackData, callbacks) {
    let options = checkHttpOptions(path, httpOptions);
    return httpService.head(stripe(options), callbackData, callbacks);
};

/**
 * Sends an HTTP OPTIONS request to the specified URL with the provided HTTP options.
 *
 * @param {string} path         - The path to send the OPTIONS request to.
 * @param {object} httpOptions  - The options to be included in the OPTIONS request check http-service documentation.
 * @param {object} callbackData - Additional data to be passed to the callback functions. [optional]
 * @param {object} callbacks    - The callback functions to be called upon completion of the OPTIONS request. [optional]
 * @return {object}             - The response of the OPTIONS request.
 */
exports.options = function (path, httpOptions, callbackData, callbacks) {
    let options = checkHttpOptions(path, httpOptions);
    return httpService.options(stripe(options), callbackData, callbacks);
};

/****************************************************
 Private helpers
 ****************************************************/

function checkHttpOptions(path, options) {
    options = options || {};
    if (!!path) {
        if (isObject(path)) {
            // take the 'path' parameter as the options
            options = path || {};
        } else {
            if (!!options.path || !!options.params || !!options.body) {
                // options contain the http package format
                options.path = path;
            } else {
                // create html package
                options = {
                    path: path,
                    body: options
                }
            }
        }
    }
    return options;
}

function isObject(obj) {
    return !!obj && stringType(obj) === '[object Object]'
}

let stringType = Function.prototype.call.bind(Object.prototype.toString)

/****************************************************
 Configurator
 ****************************************************/

let stripe = function (options) {
    options = options || {};
    options = setApiUri(options);
    options = setRequestHeaders(options);
    return options;
}

/****************************************************
 Private API
 ****************************************************/

function setApiUri(options) {
    let API_URL = config.get("stripeApiBaseUrl");
    let url = options.path || "";
    options.url = API_URL + url;
    sys.logs.debug('[stripe] Set url: ' + options.path + "->" + options.url);
    return options;
}

function setRequestHeaders(options) {
    let headers = options.headers || {};
    sys.logs.debug('[stripe] Set header apikey');
    headers = mergeJSON(headers, {"Authorization": "Bearer " + config.get("secretKey")});
    options.headers = headers;
    return options;
}

function mergeJSON(json1, json2) {
    let result = {};
    let key;
    for (key in json1) {
        if (json1.hasOwnProperty(key)) result[key] = json1[key];
    }
    for (key in json2) {
        if (json2.hasOwnProperty(key)) result[key] = json2[key];
    }
    return result;
}
