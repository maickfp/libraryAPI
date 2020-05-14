// MODULOS DE TERCEROS
// importar express
const express = require('express');
// importas uuid
const {v4:uuidv4} = require('uuid');

//MODULOS PROPIOS
// logger
const log = require('../../own_modules/log');
// seguridad
const security = require('../../own_modules/security');

// Inicializadores
const router = express.Router();

// Variables
let users = [];

// Funciones / Procedimientos
/* crear usuario, agregar a array
return {
    est -> Estado (1: Exitoso, 2: Error en validacion, 3: Error del sistema, 4: Exitoso con alertas)
    msg -> Mensaje del resultado
}
*/
function createUser(
    name='NN',
    username,
    password
){

    if(username === undefined || username === ''){
        return {
            est: 2,
            msg: `username es obligatorio`
        };
    }

    if(password === undefined){
        return {
            est: 2,
            msg: `password es obligatorio`
        };
    }

    if(users.findIndex(userTemp => userTemp.username === username) !== -1){
        return {
            est: 2,
            msg: `username ya esta siendo usado`
        };
    }

    const user = {
        id: uuidv4(),
        name: name,
        username: username,
        password: security.encodePassword(password)
    };

    users.push(user);

    return {
        est: 1,
        msg: `Usuario creado con id ${user.id}`
    };

}

// Rutas
router.route('/')
    .post((req, res, next)=>{
        const username = req.body.username;
        const name = req.body.name;
        const password = req.body.password;

        const resp = createUser(name, username, password);

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