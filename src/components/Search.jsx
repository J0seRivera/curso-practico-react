import React from 'react';
import '../assets/styles/components/Search.scss';

const main_title = "¿Qué quieres ver hoy?";
const place_holder = "Buscar...";
const Search = () => (
  <section className="main">
    <h2 className="main__title">{main_title}</h2>
    <input className="input" type="text" placeholder={place_holder} />
  </section>
);

export default Search;