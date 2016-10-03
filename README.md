<i class="icon-cog"></i> NodeTools <i class="icon-cog"></i> [![Build Status](https://travis-ci.org/alzubaidi/nodetools.svg?branch=master)](https://travis-ci.org/alzubaidi/nodetools)
===================


NodeTools is a package that provides set of commonly used functionality such as hashing and encoding.


Installation
-------------
Using command line

    npm i --save nodetools


Functionality
-------------
Currently, the below functions are supported. more to come in the future.

 - MD5: `hash(str, 'md5');` or `hash(str);`
 - SHA1: `hash(str, 'sha1');`
 - SHA256: `hash(str, 'sha256');`
 - SHA512: `hash(str, 'sha512');`
 - Validate Email: `validateEmail(str);`
 - Check if is numeric: `isNumeric(nunmber);`
 - Base64 encode/decode: `base64Encode(str);` and `base64Decode(str);`
 - Check if variable is set: `isSet(var);`
 - URL encode/decode: `urlEncode(str);` and `urlDecode(str);`
 - Detect mime-type: `detectType(str);`

Example
-------------

```javascript
var ntools = require('nodetools');

console.log(ntools.hash('a')); // MD5 by default
console.log(ntools.hash('a', 'sha1')); // SHA1
console.log(ntools.base64Encode('a')); // Base64 encode
console.log(ntools.detectType('json')); // application/json
```
Issues ?
-------------
https://github.com/alzubaidi/ntools/issues
