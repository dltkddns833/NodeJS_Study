var express= require('express');

var app = express();

app.get('/a', function(request, response){
    response.send('<a href = "/b">Go to b</a>');
});
app.get('/b', function(request, response){
    response.send('<a href = "/a">Go to a</a>');
});

app.listen(52273, function(){
    console.log('Server Running');
});