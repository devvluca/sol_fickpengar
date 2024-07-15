const express = require('express');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
const User = require('../db');
const router = express.Router();

// Rota de cadastro
router.post('/', [
  body('username').isLength({ min: 5 }).withMessage('Usuário deve ter pelo menos 5 caracteres'),
  body('password').isLength({ min: 5 }).withMessage('Senha deve ter pelo menos 5 caracteres')
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { username, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao cadastrar usuário' });
  }
});

module.exports = router;
