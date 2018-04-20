const express = require('express'),
    consolidate = require('consolidate'),
    hbs = require('handlebars');

var app = express();

app.engine('hbs', consolidate.handlebars);
app.set('view engine', 'hbs');
app.set('views', './views');
app.use(express.static('public'));

function validation(obj, op_type) {
    var valores = [obj.query.a, obj.query.b];
    console.log(obj.query);
    
    if (obj.query == 0 ) {
        op = 'No hay valores suficientes';
        console.log(obj.query);
        return op;
    } else if (valores.length == 2) {
        var a = parseInt(obj.query.a),
            b = parseInt(obj.query.b);
        if (op_type == "+") {
            op = parseInt(a) + parseInt(b);
        }

        if (op_type == "-") {
            op = parseInt(a) - parseInt(b);
        }

        if (op_type == "*") {
            op = parseInt(a) * parseInt(b);
        }

        if (op_type == "/") {
            op = parseInt(a) / parseInt(b);
        }
        
        return op;

        
    }
}

app.get('/', function (req, res) {
    res.render('index', {
        titulo: 'Calculadora de Jaime'
    });
});

app.get('/suma', function (req, res) {
    res.render('index', {
        titulo: 'Suma',
        operation: 'La suma es: ' + validation(req, "+")
    });


});

app.get('/resta', function (req, res) {
res.render('index', {
        titulo: 'Resta',
        operation: 'La resta es: ' + validation(req, "-")
    });
});

app.get('/division', function (req, res) {
    res.render('index', {
        titulo: 'División',
        operation: 'La división es: ' + validation(req, "/")
    });
});

app.get('/multiplicacion', function (req, res) {
    res.render('index', {
        titulo: 'Multiplicación',
        operation: 'La multiplicación es: ' + validation(req, "*")
    });
});

app.get('*', function (req, res) {
    res.render('index', {
        titulo: '404 Bye',
        operation: 'Página no encontrada :c'
    });
});

app.listen(3000, function () {
    console.log('Escuchando en el puerto 3000');
});