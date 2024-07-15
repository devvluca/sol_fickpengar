const express = require('express');
const router = express.Router();
const { verifyToken } = require('./validacao');

// Exemplo de rota protegida
router.get('/items', verifyToken, (req, res) => {
  // Lógica para buscar itens
  res.json({ items: ['item1', 'item2', 'item3'] });
});

module.exports = router;
