// MODULOS DE TERCEROS
// importar uuid
const {v4:uuidv4} = require('uuid');

//MODULOS PROPIOS
// seguridad
const security = require('./../../utils/security');

// Variables
let users = [];

// Funciones / Procedimientos
/* crear usuario, agregar a array
return {
    est -> Estado (1: Exitoso, 2: Error en validacion, 3: Error del sistema, 4: Exitoso con alertas)
    msg -> Mensaje del resultado
}
*/
const createUser = (
    name='NN',
    username,
    password
) => {

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

};

module.exports = {createUser};