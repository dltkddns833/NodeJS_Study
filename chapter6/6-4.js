var fs = require('fs');
var http = require('http');

http.createServer(function(request, response){
    fs.readFile('chapter6/6-4.html', function(error, data){
        response.writeHead(200, {'Content-Type' : 'text/html'});
        response.end(data);
    });
}).listen(52273, function(){
    console.log('Server Running');
});