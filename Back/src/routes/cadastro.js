const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../db');

// Rota para cadastro de usuário
router.post('/register', (req, res) => {
  const { username, password } = req.body;

  // Verificar se o usuário já existe
  db.get('SELECT * FROM users WHERE username = ?', [username], (err, row) => {
    if (err) {
      res.status(500).json({ message: 'Erro ao acessar o banco de dados.' });
    } else if (row) {
      res.status(400).json({ message: 'Usuário já existe.' });
    } else {
      // Criptografar a senha
      const saltRounds = 10;
      bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
          res.status(500).json({ message: 'Erro ao criptografar a senha.' });
        } else {
          // Inserir novo usuário no banco de dados
          db.run('INSERT INTO users (username, password) VALUES (?, ?)', [username, hash], (err) => {
            if (err) {
              res.status(500).json({ message: 'Erro ao registrar usuário.' });
            } else {
              res.status(201).json({ message: 'Usuário registrado com sucesso.' });
            }
          });
        }
      });
    }
  });
});

module.exports = router;
