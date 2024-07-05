const express = require('express');
const app = express();
const port = 3000;
const db = require('./db'); // Importa o db para garantir que a conexão com o banco seja estabelecida
const routes = require('./routes/app'); // Importa as rotas

// Middleware
app.use(express.json());

// Routes
app.use('/', routes);

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
