import React from 'react';
import '../assets/styles/components/CarouselItem.scss'
const CarouselItem = () => (
  <div className="carousel-item">
    <img className="carousel-item__img"
      src="https://images.pexels.com/photos/3294248/pexels-photo-3294248.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      alt="people" />
    <div className="carousel-item__details">
      <div>
        <img src="icons/play-icon.png" alt="play icon" />
        <img src="icons/plus-icon.png" alt="plus icon" />
      </div>
      <p className="carousel-item__details--title">Título descriptivo</p>
      <p className="carousel-item__details--subtitle">2019 16+ 114 minutos</p>
    </div>
  </div >
);

export default CarouselItem;