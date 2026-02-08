// styles
import "./InfoQuienesSomos.css";

// Images
import foto from "../images/QuienesSomos/edicosa.jpg";
import fotoMaquina from "../images/QuienesSomos/maquina1.jpg";
import ZContact from "./ZContact";
import Dev from "./Dev";

export default function InfoQuienesSomos() {
  return (
    <div className="qsWrap">
      <section className="container qs">
        <h1 className="qsTitle">¿Quiénes somos?</h1>
        <p className="qsLead">
          Somos una empresa de comunicación gráfica especializada en la
          impresión de libros, catálogos, revistas y folletos. Desde 1998
          atendemos a empresas, instituciones y particulares en todo el país.
        </p>
        <ul className="qsKpis" aria-label="Indicadores">
          <li>
            <strong>Desde 1998</strong>
            <span>trayectoria</span>
          </li>
          <li>
            <strong>+1000 m²</strong>
            <span>instalaciones</span>
          </li>
          <li>
            <strong>25</strong>
            <span>profesionales</span>
          </li>
        </ul>

        {/* Bloque 1 */}
        <div className="qsGrid">
          <figure className="qsMedia">
            <img
              src={foto}
              alt="Equipo y procesos en Edicosa"
              className="qsImg"
            />
            <figcaption className="sr-only">Equipo y procesos</figcaption>
          </figure>

          <div className="qsCopy">
            <span className="eyebrow">Compromiso profesional</span>
            <h3>SOMOS BUENOS PROFESIONALES</h3>
            <p>
              Cada encargo se revisa en todas las etapas por un equipo experto.
              No aplicamos cargos extra por control de archivos ni
              asesoramiento.
            </p>

            <span className="eyebrow">Nuestra identidad</span>
            <h3>SOMOS REALES</h3>
            <p>
              No subcontratamos a ciegas. Un equipo de 25 personas ejecuta los
              proyectos con criterios de calidad, eficiencia y trazabilidad.
            </p>

            <span className="eyebrow">Valor</span>
            <h3>MÁXIMA CALIDAD AL MEJOR PRECIO</h3>
            <p>
              Buscamos la mejor relación costo–beneficio sin comprometer color,
              registro ni terminaciones.
            </p>
          </div>
        </div>

        {/* Bloque 2 */}
        <div className="qsGrid qsGrid--reverse">
          <div className="qsCopy">
            <span className="eyebrow">Infraestructura</span>
            <h3>DE CATAMARCA AL PAIS. NUESTRAS INSTALACIONES</h3>
            <p>
              Operamos desde Catamarca para toda Argentina. Más de 1.000 m²
              entre talleres, oficinas y áreas de reunión.
            </p>
            <p>
              Priorizamos una relación segura y eficiente. Podés coordinar
              atención remota o visitar nuestras instalaciones.
            </p>

            <span className="eyebrow">Tecnología</span>
            <h3>LAS MEJORES MÁQUINAS</h3>
            <p>
              Offset KBA de 5 cuerpos con lacado en línea para tiradas largas
              con velocidad y consistencia.
            </p>
            <p>
              Digital HP Indigo 7600 para tiradas cortas, urgencias y
              personalización con calidad equivalente a offset.
            </p>
            <p>
              Encuadernación in-house: plastificado, hendido, plegado, corte,
              grapado y rústica para control total del proceso.
            </p>
          </div>

          <figure className="qsMedia">
            <img
              src={fotoMaquina}
              alt="Maquinaria de impresión Edicosa"
              className="qsImg"
            />
            <figcaption className="sr-only">Maquinaria y acabados</figcaption>
          </figure>
        </div>

        <div className="qsCallout">
          <p>
            Si necesitás imprimir libros, folletos, catálogos, revistas,
            desplegables, flyers, carpetas y más, podemos darte el mejor
            servicio.
          </p>
        </div>
      </section>

      <ZContact />
      <Dev />
    </div>
  );
}
