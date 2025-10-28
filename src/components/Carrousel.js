import React, { useState, useEffect, useCallback } from 'react';
import './Carrousel.css';
import image1 from "../images/carrousel/1.webp";
import image2 from "../images/carrousel/2.jpg";
import image3 from "../images/carrousel/3.avif";


export default function Carousel(){
const [currentIndex, setCurrentIndex] = useState(0);
const images=[image1,image2,image3];
const nextSlide = useCallback(()=> setCurrentIndex(i=> (i+1)%images.length), [images.length]);
const prevSlide = useCallback(()=> setCurrentIndex(i=> i===0? images.length-1 : i-1), [images.length]);
useEffect(()=>{ const id=setInterval(nextSlide,5000); return ()=>clearInterval(id); },[nextSlide]);
return (
<div className="carousel" role="region" aria-label="Galería de trabajos">
<button className="arrow left" onClick={prevSlide} aria-label="Anterior">‹</button>
<div className="slide">
<img src={images[currentIndex]} alt={`Trabajo ${currentIndex+1}`} />
</div>
<button className="arrow right" onClick={nextSlide} aria-label="Siguiente">›</button>
</div>
);
}