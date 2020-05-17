// MODULOS PROPIOS
// importar config
const config = require('./../../../config');

const defaultUser = (req, res, next) => {
    req.user = config.defaultUser;
    next();
};

module.exports = defaultUser;