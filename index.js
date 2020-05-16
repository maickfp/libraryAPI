// MODULOS DE TERCEROS
// importar express (manejo de rutas)
const express = require('express');
// importar nocache
const nocache = require('nocache');

// MODULOS PROPIOS
// importar beforeStart
const beforeStart = require('./config/beforeStart');
// importar configuracion
const config = require('./config');
// importar logger propio
const log = require('./utils/log');
// importar api
const api = require('./api');

// Inicializadores
const app = express();

// Configuraciones generales
// deshabilitar cache
app.use(nocache());
// parsear application/json
app.use(express.json());
// api - rutas acceso
app.use('/api', api);

// Iniciar servidor
app.listen(config.port, ()=>{
    beforeStart();
    log.info(`Servidio iniciado en puerto ${config.port}. Acceder a ruta http://localhost${config.port==80?'':`:${config.port}`}/api`);
});