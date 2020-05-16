// MODULOS PROPIOS
// importar logger
const log = require('./../../../utils/log');
// importar security
const security = require('./../../../utils/security');

const securedRoute = (req, res, next) => {
    const token = req.header("x-auth");
    if(security.verifyToken(token, req)){
        next();
    }else{
        res.status(500).send({
            est: 3,
            msg: `Token inválido`
        });
    }    
};

module.exports = securedRoute;