'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3900;

mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/api_rest_blog', {useNewUrlParser:true})
.then(()=>{
    console.log('Conexion exitosa a la base de datos');

    //crear servidor y poner a escuchar peticiones http
    app.listen(port, ()=>{
        console.log('Sevidor corriendo en http://localhost:'+port);
    });

});