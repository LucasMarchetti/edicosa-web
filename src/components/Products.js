import React from 'react';
import './Products.css'; // Importa los estilos CSS
import productsData from '../products.json'; // Importa los datos del archivo JSON
import calcosImg from '../images/products/calcos.png';
import calendarioImg from '../images/products/calendario.png';
import carpetasImg from '../images/products/carpetas.png';
import entradasImg from '../images/products/entradas.png';
import folletoDipticoImg from '../images/products/folleto-diptico.png';
import folletoTripticoImg from '../images/products/folleto-triptico.png';
import identidadImg from '../images/products/identidad.png';
import librosImg from '../images/products/libros.png';
import pulseraImg from '../images/products/pulsera.png';
import revistaImg from '../images/products/revista.png';
import sobresImg from '../images/products/sobres.png';
import talonarioImg from '../images/products/talonario.png';
import volantesImg from '../images/products/volantes.png';
import formularioImg from '../images/products/formulario.png';

export default function Products() {

    const renderProducts = (products) => {
        return products.map((product) => (
            <div key={product.id} className="product-item">
                {/* Utiliza las imágenes importadas estáticamente */}
                {getImage(product.img) && (
                    <img 
                        src={getImage(product.img)} 
                        alt={product.nombre} 
                        className="product-image" 
                    />
                )}
                <div className="product-name">
                    <h1>{product.nombre}</h1>
                </div>
            </div>
        ));
    };

    // Función para obtener la ruta de la imagen basada en su nombre
    const getImage = (imgName) => {
        switch (imgName) {
            case '../images/products/calcos.png':
                return calcosImg;
            case './images/products/calendario.png':
                return calendarioImg;
            case './images/products/carpetas.png':
                return carpetasImg;
            case './images/products/entradas.png':
                return entradasImg;
            case './images/products/folleto-diptico.png':
                return folletoDipticoImg;
            case './images/products/folleto-triptico.png':
                return folletoTripticoImg;
            case './images/products/identidad.png':
                return identidadImg;
            case './images/products/libros.png':
                return librosImg;
            case './images/products/pulsera.png':
                return pulseraImg;
            case './images/products/revista.png':
                return revistaImg;
            case './images/products/sobres.png':
                return sobresImg;
            case './images/products/talonario.png':
                return talonarioImg;
            case './images/products/volantes.png':
                return volantesImg;
            case './images/products/formulario.png':
                return formularioImg;
            default:
                return null;
        }
    };

    return (
        <div className="productsContainer">

            <div className="title">
                <h2>PRODUCTOS</h2>
                <h3>LOS MÁS VENDIDOS</h3>
            </div>
            <span className="line2" />

            <div className="productsGrid">
                {renderProducts(productsData)}
            </div>
        </div>
    );
}
