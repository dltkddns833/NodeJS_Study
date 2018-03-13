var http = require('http');
var fs = require('fs');
var ejs = require('ejs');

http.createServer(function(request, response){
    fs.readFile('7-1.ejs', 'utf8', function(error,data){
        response.writeHead(200, {'Content-Type' : 'text/html'});
        response.end(ejs.render(data,{
            name : 'SangWun Lee',
            description : 'Hello ejs With Node.js!'
        }));
    });
}).listen(52273, function(){
    console.log('Sever Running');
});