var express = require('express');
var morgan = require('morgan');

var app = express();

app.use(morgan('short'));
app.use(function(request, response){
    response.send('<h1>Express Basic</h1>');
});

app.listen(52273, function(){
    console.log('Server Running');
});