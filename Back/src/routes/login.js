const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../db');

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  db.get('SELECT * FROM users WHERE username = ?', [username], (err, row) => {
    if (err) {
      res.status(500).json({ message: 'Erro ao acessar o banco de dados.' });
    } else if (!row) {
      res.status(400).json({ message: 'Usuário não encontrado.' });
    } else {
      bcrypt.compare(password, row.password, (err, result) => {
        if (err) {
          res.status(500).json({ message: 'Erro ao verificar a senha.' });
        } else if (result) {
          res.status(200).json({ message: 'Login bem-sucedido.' });
        } else {
          res.status(400).json({ message: 'Senha incorreta.' });
        }
      });
    }
  });
});

module.exports = router;
