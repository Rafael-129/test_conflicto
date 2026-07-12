// auth.js - Versión inicial
const express = require('express');
const router = express.Router();

// Rutas de autenticación
router.get('/status', (req, res) => {
  res.json({ message: 'API funcionando' });
});

module.exports = router;