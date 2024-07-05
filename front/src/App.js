import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return (
        <div className="login-container">
            <div className="login-header">
                <a href="index.html" className="first-line">Sol Fickpengar</a>
                <a href="index.html" className="second-line">LTDA</a>
                <button><a href="index.html">home</a></button>
            </div>
            <div className="login-form">
                <h2>Criar conta</h2>
                <p>Use seus dados para se cadastrar</p>
                <form id="cadastro-form">
                    <input type="text" name="nome" placeholder="Nome completo" required />
                    <input type="email" name="email" placeholder="Email" required />
                    <input type="password" name="senha1" placeholder="Senha" required />
                    <input type="password" name="senha2" placeholder="Confirme sua senha" required />
                    <a href="login.html" className="create-account">Já possui conta?</a>
                    <button type="submit" className="login-button">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}

export default App;
