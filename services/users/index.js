// MODULOS DE TERCEROS
// importar uuid
const {v4:uuidv4} = require('uuid');

//MODULOS PROPIOS
// seguridad
const security = require('./../../utils/security');

// Variables
/**
 * Estructura:
 * {
 *  id -> text
 *  username -> text
 *  name -> text
 *  password -> text
 * }
 */
let users = [];

// Funciones / Procedimientos

// Listar usuarios (id, username, name)
const listUsers = () => {
    return users.map(user => {
        return {
            id: user.id,
            username: user.username,
            name: user.name
        };
    });
};

/* Crear usuario
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

    if(password === undefined || password === ''){
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
        msg: `Usuario creado`
    };

};

/* Autenticas usuario
return {
    est -> Estado (1: Exitoso, 2: Error en validacion, 3: Error del sistema, 4: Exitoso con alertas)
    msg -> Mensaje del resultado
    token -> auth Token
}
*/
const login = (
    username,
    plainPassword
) => {

    if(username === undefined || username === ''){
        return {
            est: 2,
            msg: `username es obligatorio`,
            token: undefined
        };
    }

    if(plainPassword === undefined || plainPassword === ''){
        return {
            est: 2,
            msg: `password es obligatorio`,
            token: undefined
        };
    }

    const loginUser = users.find(user=>user.username === username);

    if(loginUser === undefined){
        return {
            est: 2,
            msg: `username inválido`,
            token: undefined
        };
    }

    if(!security.comparePassword(plainPassword, loginUser.password)){
        return {
            est: 2,
            msg: `password inválido`,
            token: undefined
        };
    }

    return {
        est: 1,
        msg: `Bienvenid@ ${loginUser.name}`,
        token: security.generateToken(loginUser)
    };

};

module.exports = {listUsers, createUser, login};