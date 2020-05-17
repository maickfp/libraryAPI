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

// Rutas
router.route('/')
    // NUEVO LIBRO
    .post((req, res, next)=>{
        const name = req.body.name;
        const author = req.body.author;

        const resp = bookService.createBook(name, author);

        switch(resp.est){
            case 1:
                log.info(resp.msg, undefined, req.originalUrl);
                break;
            case 2:
            case 3:
                log.error(resp.msg, undefined, req.originalUrl);
                break;
            case 4:
                log.warn(resp.msg, undefined, req.originalUrl);
        }

        res.status(200).send(resp);
    });
router.route('/:id')
    // MOSTRAR LIBRO POR ID
    .get((req, res, next)=>{
        const id = req.params.id;

        const resp = bookService.showBook(id);

        switch(resp.est){
            case 1:
                log.info(resp.msg, undefined, req.originalUrl);
                break;
            case 2:
            case 3:
                log.error(resp.msg, undefined, req.originalUrl);
                break;
            case 4:
                log.warn(resp.msg, undefined, req.originalUrl);
        }

        res.status(200).send(resp);
        
    });

module.exports = router;