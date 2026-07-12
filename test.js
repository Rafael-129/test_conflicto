// auth.js - Rama 1: Agregaste LOGIN
const express = require('express');
const router = express.Router();

// Login endpoint
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  // Validar credenciales
  if (email && password) {
    res.json({ message: 'Login exitoso', token: 'xxx' });
  } else {
    res.status(400).json({ error: 'Email y password requeridos' });
  }
});

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