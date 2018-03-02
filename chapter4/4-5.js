// Crypto Module

var crypto = require('crypto');

var key = 'PAROMA';
var input = "PASSWORD";

var cipher = crypto.createCipher('aes192', key);
cipher.update(input, 'utf8', 'base64');
var cipheredOuput = cipher.final('base64');

var decipher = crypto.createDecipher('aes192', key);
decipher.update(cipheredOuput, 'base64', 'utf8');
var decipheredOuput = decipher.final('utf8');

console.log('원래 문자열 : ' + input);
console.log('암호화 : ' + cipheredOuput);
console.log('암호화 해제 : ' + decipheredOuput);