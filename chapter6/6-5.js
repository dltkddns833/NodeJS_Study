var http = require('http');
var fs = require('fs');

http.createServer(function(request, response){
    fs.readFile('chapter6/6-5.jpg', function(error, data){
        response.writeHead(200, {'Content-Type' : 'image/jpeg'});
        response.end(data);
    });
}).listen(52273, function(){
    console.log('Server Running');
});