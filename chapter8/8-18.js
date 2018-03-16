var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');

var DummyDB = (function(){

});

var app = express();

app.use(bodyParser.urlencoded({
    extended : false
}));