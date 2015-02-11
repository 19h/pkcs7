module.exports = require("bindings")("pkcs7")

var PKCS7_CONTENT_REGEX = /Content-Disposition:[^\n]+\s*?([A-Za-z0-9+=/\r\n]+)\s*?-----/;

// AAPL
module.exports.clean = function (certBuf, keyBuf, plain) {
    var pkcs7sig = module.exports.sign.apply(null, arguments),
        content = PKCS7_CONTENT_REGEX.exec(pkcs7sig.toString());

    return new Buffer(content[1], 'base64');
}