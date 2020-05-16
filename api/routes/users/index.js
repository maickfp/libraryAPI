// MODULOS DE TERCEROS
// importar express
const express = require('express');

//MODULOS PROPIOS
// logger
const log = require('./../../../utils/log');
// servicio users
const userService = require('./../../../services/users');

// Inicializadores
const router = express.Router();

// Rutas
router.route('/')
    // LISTAR USUARIOS
    .get((req, res, nex)=>{
        res.status(200).send(userService.listUsers());
    })
    // CREAR USUARIO
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

        res.status(200).send(resp);
    });

router.route('/login')
    // AUTENTICAR USUARIO
    .post((req, res, next)=>{
        const username = req.body.username;
        const password = req.body.password;
        
        const resp = userService.login(username, password);

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

        res.status(200).send(resp);
    });

module.exports = router;