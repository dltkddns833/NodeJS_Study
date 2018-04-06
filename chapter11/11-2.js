var fs = require('fs');

var server = require('http').createServer();
var io = require('socket.io').listen(server);

server.listen(52273, function(){
    console.log('Server Running');
});

server.on('request', function(request, response){
    fs.readFile('11-2.html', function(error, data){
        response.writeHead(200, {'Content-Type' : 'text/html'});
        response.end(data);
    });
});

io.sockets.on('connection', function(socket){
    var roomName = null;

    socket.on('join', function(data){
        roomName = data;
        socket.join(data);
    });

    socket.on('message', function(data){
        io.sockets.in(roomName).emit('message', 'test');
    })
});