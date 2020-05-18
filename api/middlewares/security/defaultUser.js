// MODULOS PROPIOS
// importar config
const config = require('./../../../config');
// importar security
const security = require('./../../utils/security');

const defaultUser = (req, res, next) => {
    const token = req.header("x-auth");
    if(token === undefined){
        req.user = config.defaultUser;
    }else if(!security.verifyToken(token, req)){
        req.user = config.defaultUser;
    } 
    next();
};

module.exports = defaultUser;