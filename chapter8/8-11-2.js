var express = require('express');

var app = express();

app.use('/a', require("./routerA").router);
app.use('/b', require("./routerB").router);
app.use('/c', require("./routerC").router);

app.listen(52273, function(){
    console.log('Server Running');
});