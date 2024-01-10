import React, { useState, useContext, useEffect } from 'react';
import astro from '../assets/astronauta.png';
import './Home.css';
import { UserContext } from '../userContext';
import Error from './Message/Error';
import Success from './Message/Success';
function Home() {
  const { handleLogin, handleAutoLogin, handleLogout } =
    useContext(UserContext);
  useEffect(() => {
    handleAutoLogin();
  }, []);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    handleLogin(email, senha);
  }

  function seePassword() {
    setShowPassword(!showPassword);
  }

  return (
    <div className="App home">
      <div className="container">
        <div className="title">
          <img src={astro} alt="" className="astroLogo" />
          <h1>Entrar</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="user">Email</label>
          <input
            type="text"
            id="user"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
            required
          />
          <label htmlFor="password">Senha</label>
          <input
            required
            type={showPassword ? 'text' : 'password'}
            id="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <Error />
          <Success />

          <div className="seePass">
            <span htmlFor="checkPassword">Mostrar senha</span>
            <input
              type="checkbox"
              id="checkPassword"
              onChange={seePassword}
              className="checkbox"
            />
          </div>

          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default Home;
