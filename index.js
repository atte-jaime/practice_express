const express = require('express'),
consolidate = require('consolidate');

var app = express();

app.get('/', function (req, res) {
   res.send('Hello World'); 
});

app.listen(3000, function(){
    console.log('Escuchando en el puerto 3000');
});