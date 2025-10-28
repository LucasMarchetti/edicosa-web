import "./Hero.css";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="heroWrap">
      <section className="hero container" aria-label="Presentación">
        <span className="hero__eyebrow">Desde 1998 · Offset y digital</span>

        <h1>Impresión profesional para libros, catálogos y folletos</h1>
        <p>Calidad controlada, plazos confiables y envíos a todo el país.</p>

        <div className="hero__pills" role="list">
          <span className="pill" role="listitem">Libros y Revistas</span>
          <span className="pill" role="listitem">Catálogos y Folletos</span>
          <span className="pill" role="listitem">Tarjetas y Papelería</span>
        </div>

        <div className="actions">
          <Link to="/contacto" className="btn">Pedir presupuesto</Link>
          <a href="#productos" className="btn secondary" aria-label="Ir a productos">Ver productos</a>
        </div>

        <ul className="hero__stats" aria-label="Indicadores clave">
          <li><strong>+25 años</strong><span>de experiencia</span></li>
          <li><strong>48–72 h</strong><span>tiradas cortas</span></li>
          <li><strong>100%</strong><span>control de calidad</span></li>
        </ul>
      </section>
    </div>
  );
}
