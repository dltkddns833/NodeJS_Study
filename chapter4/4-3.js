// Query String Module
var querystring = require('querystring');
var url = require('url');

var parsedObject = url.parse('http://www.hanbit.co.kr/store/books/lool.php?p_code=B4250257160');
console.log(querystring.parse(parsedObject.query));