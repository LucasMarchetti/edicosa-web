import "./Info2.css";
import img from "../images/Informacion/info2.jpg";

export default function Info2() {
  return (
    <section
      className="infoSection alt container"
      aria-labelledby="info-2-title"
    >
      <div className="infoGrid infoGrid--reverse">
        <div className="copy">
          <span className="eyebrow">Filosofía de trabajo</span>
          <h2 id="info-2-title">Calidad, precio y servicio</h2>

          <p className="lead">
            Dos décadas de procesos medibles y equipos especializados. Controles
            previos, materiales correctos y acabado consistente.
          </p>

          <p>
            Revisamos PDF de forma profesional y asesoramos sin cargo.
            Entendemos el valor de cada obra y cuidamos la reproducción de color
            y detalle.
          </p>

          <p>
            Contamos con certificaciones ISO 9001 y 14001 y manejo responsable
            de materiales (FSC). Equipo de preimpresión, fotomecánica y
            encuadernación con experiencia comprobable.
          </p>

          <p>
            Política de precios transparente. Optimizamos tiradas sin sacrificar
            la calidad ni la confiabilidad del servicio.
          </p>
        </div>

        <figure className="media">
          <img
            src={img}
            alt="Planchas y control de proceso"
            className="fotoInfo"
          />
          <figcaption className="sr-only">
            Control de planchas y procesos
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
