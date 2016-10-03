"use strict";

class Tools {

    constructor() {
        this.crypto = require('crypto');
        this.mime   = require('mime-types');
        this.fs     = require('fs');
        this.path   = require('path');
    }

    base64Decode(str) {
        return new Buffer(str, 'base64').toString('utf8');
    }

    base64Encode(str) {
        return new Buffer(str).toString('base64');
    }

    urlEncode(str) {
        return encodeURIComponent(str);
    }

    urlDecode(str) {
        return decodeURIComponent(str);
    }

    hash(str, algorthim) {

        algorthim = typeof algorthim !== 'undefined' ? algorthim : 'md5';

        return this.crypto.createHash(algorthim).update(str).digest("hex");
    }

    validateEmail(str) {
        var emailReg = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return emailReg.test(str);
    }

    detectType(str) {
        try {
            var ext = this.path.extname(str);
            if(ext !== '') {
                str = ext;
            }
        } catch(e) {

        }
        return this.mime.lookup(str);
    }

    isNumeric(str) {
        return !isNaN(parseFloat(str)) && isFinite(str)
    }

    isSet(str) {
        return (typeof str !== "undefined")
    }

}

module.exports = new Tools();
