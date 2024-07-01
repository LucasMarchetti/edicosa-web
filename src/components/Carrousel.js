
import React, { useState, useEffect } from 'react';
import './Carrousel.css';

// Images
import image1 from "../images/carrousel/1.webp"
import image2 from "../images/carrousel/2.jpg"
import image3 from "../images/carrousel/3.avif"


const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    image1,
    image2,
    image3,
  ]

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="carousel">
      <button className="arrow left" onClick={prevSlide}>{'<'}</button>
      <div className="slide">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      </div>
      <button className="arrow right" onClick={nextSlide}>{'>'}</button>
    </div>
  );
};

export default Carousel;
