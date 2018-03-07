var http = require('http');

var server = http.createServer();

server.listen(52273, function(){
    console.log('52273포트 서버 실행')
});

var test = function(){
    server.close();
};

setTimeout(test, 10000);