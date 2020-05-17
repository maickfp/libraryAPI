// MODULOS PROPIOS
// importar logger
const log = require('./../../../utils/log');

const response = (req, res, next) => {

    const resp = res.locals.resp;

    if(resp !== undefined){
        switch(resp.est){
            case 1:
                log.info(resp.msg, req.user.username, req.originalUrl);
                break;
            case 2:
            case 3:
                log.error(resp.msg, req.user.username, req.originalUrl);
                break;
            case 4:
                log.warn(resp.msg, req.user.username, req.originalUrl);
        }
    }

    next();

};

module.exports = response;