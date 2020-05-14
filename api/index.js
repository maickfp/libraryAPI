// MODULOS DE TERCEROS
// importar express
const express = require('express');

// Inicializadores
const router = express.Router();

// APIs
const users = require('./users');

// Rutas
router.use('/users', users);

module.exports = router;