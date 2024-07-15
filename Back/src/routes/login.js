const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../db');
const router = express.Router();

// Rota de login
router.post('/', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ error: 'Usuário ou senha incorretos' });
    }

    const token = jwt.sign({ id: user._id }, 'seuSegredoJWT', { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao realizar login' });
  }
});

module.exports = router;
