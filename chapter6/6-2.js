var http = require('http');

var server = http.createServer();

server.on('request', function(){
    console.log('Request On');
});

server.on('connection', function(){
    console.log('Connection On');
});

server.on('close', function(){
    consoel.log('Close On');
});

server.listen('52273');