
import '../assets/styles/components/Login.scss';
import { Link } from 'react-router-dom';
import React from 'react';

const Register = () => (
  <section className="login">
    <section className="login__container">
      <h2>Regístrate</h2>
      <form action="" className="login__container--form">
        <input className="input" type="text" placeholder="Nombre" />
        <input className="input" type="text" placeholder="Correo" />
        <input className="input" type="password" placeholder="Contraseña" />
        <button className="button">Registrarme</button>
      </form>
      <div className="login__container--inicio">
        <Link to="/login">Iniciar sesión</Link>
      </div>
    </section>
  </section>
);

export default Register;