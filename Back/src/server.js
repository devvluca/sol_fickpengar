const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

// Middleware para permitir CORS
app.use(cors());

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, '../public')));

// Middleware para parsing de JSON
app.use(express.json());

// Rotas
const cadastroRoutes = require('./routes/cadastro');
const loginRoutes = require('./routes/login');
const appRoutes = require('./routes/app');

app.use('/api/cadastro', cadastroRoutes);
app.use('/api/login', loginRoutes);
app.use('/api', appRoutes);

// Conexão com o banco de dados (exemplo usando MongoDB)
mongoose.connect(process.env.DB_URI).then(() => {
  console.log('Conectado ao banco de dados');
}).catch(err => {
  console.error('Erro ao conectar ao banco de dados:', err);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
