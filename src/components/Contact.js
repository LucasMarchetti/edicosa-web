import "./Contact.css";
import foto from "../images/Contacto/callCenter.jpg";
import iconTel from "../images/Contacto/telefono.png";
import iconEmail from "../images/Contacto/email.png";
import iconHora from "../images/Contacto/horario.png";
import iconUbi from "../images/Contacto/ubicacion.png";

export default function Contact(){
  return (
    <section className="contactSection container" aria-label="Contacto">
      <div className="titleWrap">
        <h1 className="title">Contacto</h1>
      </div>

      <div className="grid">
        <figure className="media">
          <img src={foto} alt="Atención al cliente" className="fotoCallCenter"/>
          <figcaption className="sr-only">Equipo de atención</figcaption>
        </figure>

        <div className="contactCard" role="list">
          <a className="iconRow" role="listitem" href="tel:+543834432459">
            <img src={iconTel} alt="" className="icono-contacto" aria-hidden="true"/>
            <div className="rowText">
              <span className="label">Teléfono</span>
              <strong>+54 3834 432459</strong>
            </div>
          </a>

          <a className="iconRow" role="listitem" href="mailto:edicosa@yahoo.com.ar">
            <img src={iconEmail} alt="" className="icono-contacto" aria-hidden="true"/>
            <div className="rowText">
              <span className="label">Email</span>
              <strong>edicosa@yahoo.com.ar</strong>
            </div>
          </a>

          <div className="iconRow" role="listitem">
            <img src={iconHora} alt="" className="icono-contacto" aria-hidden="true"/>
            <div className="rowText">
              <span className="label">Horarios</span>
              <strong>Lunes a Viernes · 8:00–13:00 y 17:00–21:00</strong>
            </div>
          </div>

          <div className="iconRow" role="listitem">
            <img src={iconUbi} alt="" className="icono-contacto" aria-hidden="true"/>
            <div className="rowText">
              <span className="label">Ubicación</span>
              <strong>Rivadavia 456 · Catamarca, Argentina</strong>
            </div>
          </div>

          <div className="contactActions">
            <a href="tel:+543834432459" className="btn">Llamar ahora</a>
            <a href="mailto:edicosa@yahoo.com.ar" className="btn secondary">Escribir email</a>
          </div>
        </div>
      </div>

      <div className="mapCard">
        <div className="mapHeader">
          <h2>Cómo llegar</h2>
        </div>
        <div className="mapWrap">
          <iframe
            title="Ubicación Imprenta Edicosa"
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.436523504622!2d-65.78081678802333!3d-28.466397675654825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942428b8cdb0433b%3A0x3c33e9434292f758!2sImprenta%20Edicosa!5e0!3m2!1ses!2sar!4v1720453032756!5m2!1ses!2sar"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
