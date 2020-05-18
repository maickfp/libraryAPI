// MODULOS DE TERCEROS
// importar express
const express = require('express');

//MODULOS PROPIOS
// servicio users
const userService = require('./../../services/users');

// Inicializadores
const router = express.Router();

// Rutas
router.route('/')
    // LISTAR USUARIOS
    .get((req, res, next)=>{
        const resp = userService.listUsers();
        res.locals.resp = resp;
        res.status(200).send(resp);
        next();
    })
    // CREAR USUARIO
    .post((req, res, next)=>{
        const username = req.body.username;
        const name = req.body.name;
        const password = req.body.password;
        
        const resp = userService.createUser(name, username, password);
        res.locals.resp = resp;

        res.status(200).send(resp);
        next();
    });

router.route('/login')
    // AUTENTICAR USUARIO
    .post((req, res, next)=>{
        const username = req.body.username;
        const password = req.body.password;
        
        const resp = userService.login(username, password);
        res.locals.resp = resp;

        res.status(200).send(resp);
        next();
    });

module.exports = router;