var http = require('http');
var fs = require('fs');
var jade = require('jade');

http.createServer(function(request, response){
    fs.readFile('7-2.jade', 'utf8', function(error, data){
        var fn = jade.compile(data);

        response.writeHead(200, {'Content-Type' : 'text/html'});
        response.end(fn({
            name: 'SangWun Lee',
            description: 'Hello jade With Node.js'
        }));
    });
}).listen(52273, function(){
    console.log('Sever Running');
});