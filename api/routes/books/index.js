// MODULOS DE TERCEROS
// importar express
const express = require('express');

//MODULOS PROPIOS
// logger
const log = require('./../../../utils/log');
// servicio book
const bookService = require('./../../../services/books');

// Inicializadores
const router = express.Router();

// Middlewares
const securedRoute = require('./../../middlewares/security/securedRoute');

// Rutas
router.route('/')
    // NUEVO LIBRO
    .post(securedRoute, (req, res, next)=>{
        const name = req.body.name;
        const author = req.body.author;

        const resp = bookService.createBook(name, author);
        res.locals.resp = resp;

        res.status(200).send(resp);
        next();
    });
router.route('/:id')
    // MOSTRAR LIBRO POR ID
    .get((req, res, next)=>{
        const id = req.params.id;

        const resp = bookService.showBook(id);
        res.locals.resp = resp;

        res.status(200).send(resp);
        next();
    });

module.exports = router;