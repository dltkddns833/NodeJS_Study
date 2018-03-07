var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(request, response){
    var pathName = url.parse(request.url).pathname;

    if(pathName == '/'){
        fs.readFile('chapter6/6-8-1.html', function(error, data){
            response.writeHead(200, {'Content-Type' : 'text/html'});
            response.end(data);
        });
    }else if(pathName == '/OtherPage'){
        fs.readFile('chapter6/6-8-2.html', function(error, data){
            response.writeHead(200, {'Content-Type' : 'text/html'});
            response.end(data);
        })
    }

}).listen(52273, function(){
    console.log('Server Running');
})