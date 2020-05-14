// MODULOS DE TERCEROS
// importar express
const express = require('express');

//MODULOS PROPIOS
// logger
const log = require('../../own_modules/log');
// seguridad
//const security = require('../../own_modules/security');

// Inicializadores
const router = express.Router();

// Rutas
router.route('/')
    .post((req, res, next)=>{
        const username = req.body.username;
        const name = req.body.name;
        const password = req.body.password;
        log.info(`Usuario creado`, username, req.originalUrl);
        res.status(200).send(
            JSON.stringify({
                cod: 1,
                msg: `Nuevo usuario (id auto-generado, name, username, password-hash)`
            })
        );
    });

module.exports = router;