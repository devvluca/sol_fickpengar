document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('cadastro-form');
    
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        
        const nome = form.nome.value;
        const email = form.email.value;
        const senha1 = form.senha1.value;
        const senha2 = form.senha2.value;

        if (senha1 !== senha2) {
            alert('As senhas não coincidem');
            return;
        }

        const userData = {
            username: nome,
            password: senha1,
            email: email
        };

        try {
            const response = await fetch('http://localhost:3000/cadastro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            if (response.ok) {
                alert('Conta criada com sucesso!');
                window.location.href = 'login.html';
            } else {
                const errorData = await response.json();
                alert(`Erro: ${errorData.error}`);
            }
        } catch (error) {
            alert('Erro ao cadastrar. Tente novamente mais tarde.');
        }
    });
});
