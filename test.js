// auth.js - Rama 2: Agregaste REGISTER
const express = require('express');
const router = express.Router();

// Register endpoint
router.post('/register', (req, res) => {
  const { email, password, name } = req.body;
  // Validar datos
  if (email && password && name) {
    res.json({ message: 'Usuario registrado', userId: '123' });
  } else {
    res.status(400).json({ error: 'Email, password y nombre requeridos' });
  }
});

// Status check
router.get('/status', (req, res) => {
  res.json({ message: 'API funcionando' });
});

module.exports = router;