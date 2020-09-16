import React from 'react';
import '../assets/styles/components/Header.scss'
const Header = () => (
  <header className="header">
    <a href="index.html">
      <img className="header__img" src="images/logo-platzi-video.png" alt="Platzi Logo" />
    </a>
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src="/images/user-icon.png" alt="foto de perfil" />
        <p>Perfil</p>
      </div>
      <ul>
        <li>
          <a href="log-in.html">Cuenta</a>
        </li>
        <li>
          <a href="/">Cerrar Sesión</a>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;