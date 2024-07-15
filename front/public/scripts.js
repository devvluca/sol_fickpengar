document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  const cadastroForm = document.getElementById('cadastro-form');

  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      try {
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username, password })
        });

        const data = await response.json();
        if (response.ok) {
          localStorage.setItem('token', data.token);
          alert('Login realizado com sucesso!');
        } else {
          alert(data.error);
        }
      } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao realizar login');
      }
    });
  }

  if (cadastroForm) {
    cadastroForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      try {
        const response = await fetch('/api/cadastro', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username, password })
        });

        const data = await response.json();
        if (response.ok) {
          alert('Usuário cadastrado com sucesso!');
        } else {
          alert(data.errors.map(err => err.msg).join('\n'));
        }
      } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao cadastrar usuário');
      }
    });
  }
});
