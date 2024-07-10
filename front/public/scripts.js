// Exemplo de requisição GET
fetch('/api/cadastro')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Erro:', error));

// Exemplo de requisição POST
const newUser = {
  username: 'usuario',
  password: 'senha'
};

fetch('/api/cadastro', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(newUser)
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Erro:', error));
