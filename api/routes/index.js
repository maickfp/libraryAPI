// MODULOS DE TERCEROS
// importar express
const express = require('express');

//MODULOS PROPIOS
// logger
const log = require('./../../utils/log');
// servicio users
const bookService = require('./../../services/books');

// Inicializadores
const router = express.Router();

// Rutas
router.route('/')
    // LISTAR LIBROS
    .get((req, res, next)=>{
        const resp = bookService.listBooks();
        res.locals.resp = resp;
        res.status(200).send(resp);
        next();
    });

module.exports = router;