const express = require('express');
const router = express.Router();

const cadastroRoutes = require('./cadastro');
const loginRoutes = require('./login');

// Middleware para /cadastro e /login
router.use('/cadastro', cadastroRoutes);
router.use('/login', loginRoutes);

router.get('/', (req, res) => {
  res.send('Hello World!');
});

module.exports = router;
