const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cadastroRoute = require('./routes/cadastro');

// Configurações do Express
app.use(bodyParser.json());
app.use('/api', cadastroRoute);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
