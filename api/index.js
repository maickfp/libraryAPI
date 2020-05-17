// MODULOS DE TERCEROS
// importar express
const express = require('express');

// Inicializadores
const router = express.Router();

// Middlewares
const defaultUser = require('./middlewares/security/defaultUser');
const logResponse = require('./middlewares/log/response');

// APIs
const index = require('./routes');
const users = require('./routes/users');
const books = require('./routes/books');

// poblar usuarios por defecto
router.use(defaultUser);

// Rutas
router.use('/', index);
router.use('/users', users);
router.use('/books', books);

// logear response
router.use(logResponse);

module.exports = router;