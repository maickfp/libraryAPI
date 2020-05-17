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
    .get((req, res, next)=>{
        res.status(200).send(bookService.listBooks());
    });

module.exports = router;