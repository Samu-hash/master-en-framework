'use strict'

//cargar modulos de node para crear el servidor
var express = require('express');
var bodyParser = require('body-parser');

//ejercutar express (http)
var app = express();

//cargar ficheros de rutas

//cargar middlewares (este se ejecuta antes de cargar una ruta o url de aplicacion)
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CORS es para permitir el acceso a las llamadas o las peticiones ajax
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//cargar cors para permitir peticiones front
var article_routes = require('./routes/article');

//añadir prefijos a rutas / cargar rutas
app.use('/api', article_routes);


//exportar modulos(fichero actual)
module.exports = app;