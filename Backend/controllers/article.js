'use strict'

var validator = require('validator');
var fs = require('fs');
var path = require('path');

var Article = require('../models/article');
const { param } = require('../routes/article');

var controller = {

    datosCurso: (req, res) => {

        var hola = req.body.hola;

        return res.status(200).send({
            curso: 'master en framework',
            autor: 'samuel morales',
            url: 'samu.es',
            hola
        });
    },

    test: (req, res) => {
        return res.status(200).send({
            message: 'Soy la accion test de mi controller'
        });
    },
    save: (req, res) => {

        //recuperar los parametros por post
        var params = req.body;

        //validar los datos de los parametros
        try {
            var validate_title = !validator.isEmpty(params.title);
            var validate_content = !validator.isEmpty(params.content);

        } catch (err) {
            return res.status(500).send({
                status: 'error',
                message: 'Faltan datos por enviar!!!'
            });
        }
        if (validate_title && validate_content) {

            //crear el objeto a guardar
            var article = new Article();

            //asignar valores
            article.title = params.title;
            article.content = params.content;
            if (params.image) {
                article.image = params.image;
            } else {
                article.image = null;
            }


            //guardar el articulo
            article.save((err, articleStored) => {
                if (err || !articleStored) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'El articulo no se ha guardado'
                    });
                }
                //return a respuesta
                return res.status(200).send({
                    status: 'success',
                    article
                });
            });

        } else {
            return res.status(200).send({
                status: 'error',
                message: 'Los datos no son validos'
            });
        }
    },

    getArticles: (req, res) => {

        var query = Article.find({});
        var last = req.params.last;
        if (last || last != undefined) {
            query.limit(5);
        }
        //busqueda 
        query.sort('-_id').exec((err, articles) => {

            if (err) {
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al devolver articulos'
                });
            }
            if (!articles) {
                return res.status(404).send({
                    status: 'errror',
                    message: 'No hay datos'
                });
            }

            return res.status(200).send({
                status: 'success',
                articles
            });
        })
    },

    getArticle: (req, res) => {

        //obtener el id de la consulta
        var articleId = req.params.id;
        if (!articleId || articleId == null) {
            return res.status(404).send({
                status: 'error',
                message: 'No existe articulo'
            });
        }
        //comprobar que existe
        Article.findById(articleId, (err, article) => {
            if (err || !article) {
                return res.status(404).send({
                    status: 'error',
                    message: 'Articulo no existe'
                });
            }

            //retornar en josn
            return res.status(200).send({
                status: 'success',
                article
            });
        });
    },

    update: (req, res) => {

        //obtener el id del articulo por al url
        var articleId = req.params.id;

        //obtener los datos
        var params = req.body;

        //validar los datos
        try {
            var validate_title = !validator.isEmpty(params.title);
            var validate_content = !validator.isEmpty(params.content);

        } catch (err) {
            return res.status(200).send({
                status: 'Error',
                message: 'Faltan datos por eviar'
            });
        }

        if (validate_title && validate_content) {
            //buscar y actualizar
            Article.findByIdAndUpdate({ _id: articleId }, params, { new: true }, (err, articleUpdate) => {
                if (err) {
                    return res.status(500).send({
                        status: 'Error',
                        message: 'Error al actualizar'
                    });
                }
                if (!articleUpdate) {
                    return res.status(404).send({
                        status: 'Error',
                        message: 'No existe el articulo'
                    });
                }

                return res.status(200).send({
                    status: 'success',
                    articleUpdate
                });
            });
        } else {
            return res.status(200).send({
                status: 'Error',
                message: 'La validacion no es correcta'
            });
        }
    },

    delete: (req, res) => {

        //obtener el id de la url
        var articleId = req.params.id;

        //y despues buscar y eliminar
        Article.findByIdAndDelete({ _id: articleId }, (err, articleRemove) => {
            if (err) {
                return res.status(500).send({
                    status: 'Error',
                    message: 'Errro al borrar'
                });
            }
            if (!articleRemove) {
                return res.status(404).send({
                    status: 'Error',
                    message: 'No se ha borado el articulo, posiblemete no exista'
                });
            }

            return res.status(200).send({
                status: 'success',
                articleRemove
            });
        });

    },

    upload: (req, res) => {
        //configurar el modulo connect multiparty router/article.js

        //recoger el fichero de la peticion

        var file_name = 'Imagen no subida...';
        if (!req.files) {
            return res.status(404).send({
                status: 'Error',
                message: file_name
            });
        }
        //conseguir el nombre y la extension del archivo
        var file_path = req.files.file0.path;

        var file_split = file_path.split('\\');

        //? * ADVERTENCIA EN LINUX O MAC
        // var file_split = file_path.split('/');

        //nombre del archivo
        var file_name = file_split[2];

        //extension del archivo
        var extencion_split = file_name.split('\.');
        var file_ex = extencion_split[1];

        //comprobar la extension solo img si no es valida borrar el fichero
        if (file_ex != 'png' && file_ex != 'jpg' && file_ex != 'jpeg' && file_ex != 'gif') {

            //eliminaremos el archivo
            fs.unlink(file_path, (err) => {
                return res.status(404).send({
                    status: 'Error',
                    message: 'La extension del la imagen no es valida'
                });
            });
        } else {

            //si es valido sacamos el ide de la url
            var articleId = req.params.id;

            if (articleId) {
                // buscar el articulo, y asignarle el nombre de la imagen y actualizarlo
                Article.findOneAndUpdate({ _id: articleId }, { image: file_name }, { new: true }, (err, articleUpdate) => {

                    if (err || !articleUpdate) {
                        return res.status(500).send({
                            status: 'Error',
                            message: 'Error al guardar la imagen del articulo!!!'
                        });
                    }

                    return res.status(200).send({
                        status: 'success',
                        article: articleUpdate
                    });
                });
            } else {
                return res.status(200).send({
                    status: 'success',
                    image: file_name
                });
            }

        }
    },

    getImage: (req, res) => {

        var file = req.params.image;

        var path_file = './upload/articles/' + file;

        fs.exists(path_file, (exists) => {
            if (exists) {
                return res.sendFile(path.resolve(path_file));
            } else {
                return res.status(404).send({
                    status: 'Error',
                    message: 'La imagen no existe'
                });
            }
        });
    },

    search(req, res) {
        //sacar el string a buscar
        var searchString = req.params.search;
        //buscar o 
        Article.find({
            "$or": [
                { "title": { "$regex": searchString, "$options": "i" } },
                { "content": { "$regex": searchString, "$options": "i" } }
            ]
        }).sort([['date', 'descending']]).exec((err, articles) => {

            if (err) {
                return res.status(500).send({
                    status: 'error',
                    message: 'Error en la peticion'
                });
            }
            if (!articles || articles.length == 0) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No se encontraron articulos con los parametros de busqueda'
                });
            }

            return res.status(200).send({
                status: 'success',
                articles
            });
        })
    }

}; //end controller

module.exports = controller;