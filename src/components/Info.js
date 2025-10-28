import "./Info.css";
import info1 from "../images/Informacion/info1.jpg";

export default function Info() {
  return (
    <section className="infoSection container" aria-labelledby="info-1-title">
      <div className="infoGrid">
        <figure className="media">
          <img src={info1} alt="Producción editorial en imprenta" className="fotoInfo" />
          <figcaption className="sr-only">Edición y control de calidad</figcaption>
        </figure>

        <div className="copy">
          <span className="eyebrow">Servicios principales</span>
          <h2 id="info-1-title">Impresión offset y digital de alto estándar</h2>

          <p className="lead">
            Impresos editoriales y comerciales con control de calidad en cada etapa.
            Atención a plazos y costos sin comprometer el resultado.
          </p>

          <ul className="listChecks" aria-label="Productos frecuentes">
            <li>Libros y revistas</li>
            <li>Catálogos y folletos</li>
            <li>Flyers, postales y carteles</li>
            <li>Libretas y calendarios</li>
            <li>Tarjetas, carpetas y papelería</li>
          </ul>

          <p>
            Para tiradas largas usamos offset KBA para máxima consistencia y velocidad.
            Cumplimos fechas cerradas y estándares de color.
          </p>
          <p>
            Para tiradas cortas empleamos HP Indigo de última generación, ideal para
            urgencias, personalización y POD con acabado equiparable al offset.
          </p>
          <p>
            Operamos desde Rivadavia 456 (Catamarca) con envíos a todo el país y tienda online
            para presupuestar y encargar pedidos de forma simple.
          </p>
        </div>
      </div>
    </section>
  );
}
