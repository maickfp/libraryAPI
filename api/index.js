// MODULOS DE TERCEROS
// importar express
const express = require('express');

// Inicializadores
const router = express.Router();

// APIs
const index = require('./routes');
const users = require('./routes/users');
const books = require('./routes/books');

// Rutas
router.use('/', index);
router.use('/users', users);
router.use('/books', books);

module.exports = router;