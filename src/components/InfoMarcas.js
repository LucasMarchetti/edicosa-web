import React, { useEffect, useRef } from 'react';
import "./InfoMarcas.css";
import marcaClassic from "../images/Marcas/ledesma-classic.svg";
import marcaAutor from "../images/Marcas/marca-autor.svg";
import marcaDesign from "../images/Marcas/marca-design.svg";
import marcaExecutive from "../images/Marcas/marca-executive.svg";
import marcaExito from "../images/Marcas/marca-exito.svg";
import marcaGloria from "../images/Marcas/marca-gloria.svg";
import marcaLedNat from "../images/Marcas/marca-ledesma-nat.svg";
import marcaLed from "../images/Marcas/marca-ledesma.svg";
import marcaBio from "../images/Marcas/marcabio.svg";

const images = [
    marcaClassic, marcaAutor, marcaDesign, marcaExecutive, marcaExito,
    marcaGloria, marcaLedNat, marcaLed, marcaBio
];

const InfoMarcas = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (containerRef.current) {
                containerRef.current.scrollTo({
                    left: containerRef.current.scrollLeft + 300,
                    behavior: 'smooth'
                });
            }
        }, 2000); // Adjust time interval as needed

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="conteinerInfoMarcas">
            {/* <span className="line" style={{ width: "100%", marginTop: "20px" }} />
            <div>
                <h1>Marcas de Resmas con las que trabajamos</h1>
                <div className="marcasResmas" ref={containerRef}>
                    <ul className="carousel">
                        {images.map((marca, index) => (
                            <li key={index} className="carouselItem">
                                <img
                                    src={marca}
                                    alt="Marca"
                                    className="imgMarcas"
                                />
                                <h3>{getBrandName(index)}</h3>
                            </li>
                        ))}
                    </ul>
                </div>
            </div> */}
        </div>
    );
}

// function getBrandName(index) {
//     // Adjust brand names as per your requirement
//     const brands = [
//         'Ledesma Classic', 'Marca Autor', 'Marca Design', 'Marca Executive', 'Marca Éxito',
//         'Marca Gloria', 'Marca Ledesma Nat', 'Marca Ledesma', 'Marca Bio'
//     ];
//     return brands[index];
// }

export default InfoMarcas;
