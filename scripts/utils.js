/**
 * Verifies the signature of a payload against the provided signature header and secret.
 * @param {string} payload - The payload to verify.
 * @param {string} sigHeader - The signature header containing timestamp and signatures.
 * @returns {boolean} True if the signature is valid, false otherwise.
 */
exports.verifySignature = function (payload, sigHeader) {
    let checkWebhooksSign = config.get("checkWebhooksSignature")
    let webhooksSecret = config.get("webhooksSigningSecret")
    if (!checkWebhooksSign) {
        sys.logs.warn("[stripe] Webhooks signature verification is disabled");
        return true;
    }
    return sys.utils.crypto.verifySignatureWithHmac(payload, sigHeader, webhooksSecret, "stripe");
};