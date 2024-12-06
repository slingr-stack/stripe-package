/**
 * Verifies the signature of a payload against the provided signature header and secret.
 * @param {string} payload - The payload to verify.
 * @param {string} sigHeader - The signature header containing timestamp and signatures.
 * @returns {boolean} True if the signature is valid, false otherwise.
 */
exports.verifySignature = function (payload, sigHeader) {
    let checkWebhooksSign = config.get("checkWebhooksSignature")
    let webhooksSecret = config.get("webhooksSigningSecret")
    sys.logs.debug('*** checkWebhooksSignature: ' + JSON.stringify(checkWebhooksSignature));
    sys.logs.debug('*** webhooksSecret: ' + JSON.stringify(webhooksSecret));
    if (!checkWebhooksSign) {
        return true;
    }
    sigHeader = sigHeader.split(',');
    let timestamp = sigHeader[0].split('=')[1];
    let signature = sigHeader[1].split('=')[1];
    payload = timestamp + '.' + payload;
    return sys.utils.crypto.verifySignatureWithHmac(payload, signature, webhooksSecret, "HmacSHA256");
};