// MODULOS DE TERCEROS
// importar express
const express = require('express');

//MODULOS PROPIOS
// logger
const log = require('./../../utils/log');
// servicio users
const userService = require('./../../services/users');

// Inicializadores
const router = express.Router();

// Rutas
router.route('/')
    .post((req, res, next)=>{
        const username = req.body.username;
        const name = req.body.name;
        const password = req.body.password;
        
        const resp = userService.createUser(name, username, password);

        switch(resp.est){
            case 1:
                log.info(resp.msg, username, req.originalUrl);
                break;
            case 2:
            case 3:
                log.error(resp.msg, username, req.originalUrl);
                break;
            case 4:
                log.warn(resp.msg, username, req.originalUrl);
        }

        res.status(200).send(
            JSON.stringify({
                cod: resp.est,
                msg: resp.msg
            })
        );
    });

module.exports = router;