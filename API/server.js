'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 6060;

app.use(express.static(__dirname + '/../webApp'));
app.use('/styles', express.static(__dirname + '/node_modules/bootstrap/dist/css/'));
app.use('/scripts',  express.static(__dirname + '/node_modules/bootstrap/dist/js/'));
app.use('/scripts',  express.static(__dirname + '/node_modules/angular/'));
app.use('/scripts',  express.static(__dirname + '/node_modules/angular-ui-bootstrap/dist/'));
app.use('/scripts',  express.static(__dirname + '/node_modules/angular-ui-router/release/'));

app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));


app.get('/getNombre/:nombre',function(request, response){
  var nombre = request.params.nombre;
  console.log(nombre);
  response.json({'data':'Gracias '+nombre});
});


app.listen(port);
console.log('Server running on port: '+port);
