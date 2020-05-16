// MODULOS DE TERCEROS
// importar bcrypt
const bcrypt = require("bcrypt");
// importar jsonwebtoken
const jwt = require('jsonwebtoken');

// MODULOS PROPRIOS
// importar configuracion
const config = require('./../../config');
// importar log
const log = require('./../log');

const security = {
    encodePassword: (plainPassword) => {
        const salt = bcrypt.genSaltSync(config.saltRounds);
        return bcrypt.hashSync(plainPassword, salt);
    },
    comparePassword: (plainPassword, encryptedPassword) => {
        return bcrypt.compareSync(plainPassword, encryptedPassword);
    },
    generateToken: (user) => {
        const tokenUser = {
            id: user.id,
            username: user.username,
            name: user.name
        };
    
        const token = jwt.sign(tokenUser, config.tokenKey, {
            expiresIn: config.tokenExpiresIn
        });
    
        return token;
    },
    verifyToken: (token, req) => {
        return jwt.verify(token, config.tokenKey, (err, user) => {
            if(err){
                log.warn(`Token ${token} inválido. Error:${err.name}`);
                return false;
            }
            req.user = user;
            return true;
        });
    }
};

module.exports = security;