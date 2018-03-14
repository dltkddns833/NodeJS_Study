var express = require('express');

var app = express();

app.use(function(rquest, response){
    response.status(404).send('<h1>ERROR</h1>');
});

app.listen(52273, function(){
    console.log('Server Running');
});