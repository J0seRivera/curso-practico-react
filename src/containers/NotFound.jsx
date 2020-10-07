import '../assets/styles/components/NotFound.scss';
import React from 'react';

const NotFound = () => (
  <main class="main">
    <section>
      <div class="main__text-404">
        <p class="number animated hinge">404</p>
      </div>
      <div class="main__text">
        <p>
          Página no encontrada
        </p>
      </div>
    </section>
  </main>
);

export default NotFound;