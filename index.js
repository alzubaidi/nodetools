var tools = require('./lib/tools.js');


var enc = tools.urlEncode("test/test?a=c");
console.log(enc, tools.isNumeric(true));