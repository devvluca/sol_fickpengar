const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware para permitir CORS
app.use(cors());

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para parsing de JSON
app.use(express.json());

// Rotas
const cadastroRoutes = require('./routes/cadastro');
const loginRoutes = require('./routes/login');

app.use('/api/cadastro', cadastroRoutes);
app.use('/api/login', loginRoutes);

// Conexão com o banco de dados (exemplo usando MongoDB)
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/seuBancoDeDados', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conectado ao banco de dados');
}).catch(err => {
  console.error('Erro ao conectar ao banco de dados:', err);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
