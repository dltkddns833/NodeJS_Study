var http = require('http');
var fs = require('fs');
var socketio = require('socket.io');

var server = http.createServer(function(request, response){
    fs.readFile('11-1.html', function(error, data){
        response.writeHead(200, {'Content-Type' : 'text/html'});
        response.end(data);
    });
}).listen(52273, function(){
    console.log('Server Running');
});

// socket
var io = socketio.listen(server);
io.sockets.on('connection', function(socket){
    socket.on('rint', function(data){
        console.log('Client Send Data : ', data);

        socket.emit('smart', data);
    });
});