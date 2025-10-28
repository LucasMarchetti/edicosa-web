import "./Products.css";
import productsData from "../products.json";

// imágenes importadas y mapeadas por ID
import calcosImg from "../images/products/calcos.png";
import calendarioImg from "../images/products/calendario.png";
import carpetasImg from "../images/products/carpetas.png";
import entradasImg from "../images/products/entradas.png";
import folletoDipticoImg from "../images/products/folleto-diptico.png";
import folletoTripticoImg from "../images/products/folleto-triptico.png";
import identidadImg from "../images/products/identidad.png";
import librosImg from "../images/products/libros.png";
import pulseraImg from "../images/products/pulsera.png";
import revistaImg from "../images/products/revista.png";
import sobresImg from "../images/products/sobres.png";
import talonarioImg from "../images/products/talonario.png";
import volantesImg from "../images/products/volantes.png";
import formularioImg from "../images/products/formulario.png";

const IMAGES = {
  1: calcosImg, 2: calendarioImg, 3: carpetasImg, 4: entradasImg,
  5: folletoDipticoImg, 6: folletoTripticoImg, 7: identidadImg, 8: librosImg,
  9: pulseraImg, 10: revistaImg, 11: sobresImg, 12: talonarioImg, 13: volantesImg, 14: formularioImg
};

export default function Products(){
  // orden alfabético para UX consistente
  const items = [...productsData].sort((a,b)=> a.nombre.localeCompare(b.nombre));

  return (
    <section id="productos" className="container productsContainer" aria-label="Productos">
      {/* <header className="title"> */}
      <header className="title vp-center">
        <h2>Productos</h2>
        {/* <p className="subtitle">Los más pedidos · {items.length} ítems</p> */}
        <p className="subtitle">Los más pedidos · {items.length} ítems</p>
      </header>

      <div className="productsGrid" role="list">
        {items.map(p=>(
          <article key={p.id} className="card" role="listitem" aria-label={p.nombre} tabIndex={0}>
            <img
              src={IMAGES[p.id]}
              alt={p.nombre}
              className="product-image"
              loading="lazy"
              decoding="async"
            />
            <p className="product-name" title={p.nombre}>{p.nombre}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
