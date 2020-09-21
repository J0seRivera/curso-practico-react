import React from 'react';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video.png';
import userIcon from '../assets/static/user-icon.png';

const Header = () => (
  <header className="header">
    <a href="index.html">
      <img className="header__img" src={logo} alt="Platzi Logo" />
    </a>
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={userIcon} alt="foto de perfil" />
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