var fs = require('fs');
var ejs = require('ejs');
var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');

var client = mysql.createConnection({
    user : 'root',
    password : '!paroma0815'
});

client.query('USE Company');

var app = express();

app.use(bodyParser.urlencoded({
    extended : false
}));

app.listen(52273, function(){
    console.log('Server Running');
});

app.get('/', function(request, response){
    fs.readFile('list.html', 'utf8', function(error, data){
        client.query('SELECT * FROM products', function(error, result, field){
            response.send(ejs.render(data,{
                data : result
            }));
        });
    })
});

app.get('/delete/:id', function(request, response){
    client.query('DELETE FROM products WHERE id = ?', [request.params.id], function(){
        response.redirect('/');
    })
});

app.get('/insert', function(request, response){
    fs.readFile('insert.html', 'utf8', function(error, data){
        response.send(data);
    });
});

app.post('/insert', function(request, response){
    var body = request.body;

    client.query('INSERT INTO products (name, modelnumber, series) VALUES (?,?,?)',[
        body.name, body.modelNumber, body.series
    ], function(){
        response.redirect('/');
    })
});

app.get('/edit/:id', function(request, response){   
    fs.readFile('edit.html', 'utf8', function(error, data){
        client.query('SELECT * FROM products WHERE id = ?',[
            request.params.id
        ], function(error, result){
            response.send(ejs.render(data,{
                data: result[0]
            }));
        });
    });
});

app.post('/edit/:id', function(request, response){
    var body = request.body;

    client.query('UPDATE products SET name = ?, modelNumber = ?, series = ? WHERE id = ?',[
        body.name, body.modelNumber, body.series, request.params.id
    ], function(){
        response.redirect('/');
    });
});

