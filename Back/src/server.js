const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const db = require('./db'); // Caminho para o db dentro de src
const routes = require('./routes/app'); // Caminho para as rotas

// Middleware
app.use(express.json());

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, '../front/public')));

// Routes
app.use('/', routes);

// Redirecionar todas as outras rotas para index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../front/public', 'index.html'));
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
