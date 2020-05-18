// MODULOS DE TERCEROS
// importar express
const express = require('express');

//MODULOS PROPIOS
// importar log de accesso
const accessLog = require('./../utils/log/access');
// servicio users
const bookService = require('./../services/books');

// Inicializadores
const router = express.Router();

// Rutas
router.route('/')
    // LISTAR LIBROS
    .get(accessLog, (req, res, next)=>{
        const resp = bookService.listBooks();
        res.locals.resp = resp;
        res.status(200).send(resp);
        next();
    });

module.exports = router;