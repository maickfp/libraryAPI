// MODULOS EXTERNOS
// importar morgan
const morgan = require('morgan');
// importar rotating-file-stram - rotar archivos
const rfs = require('rotating-file-stream');

// Variables
// stream para escritura de log
const accessLogStream = rfs.createStream('access.log',{
    path: "./logs",
    initialRotation: true,
    size: "10M",
    interval: "1d"
});

module.exports = morgan('combined', {stream: accessLogStream});