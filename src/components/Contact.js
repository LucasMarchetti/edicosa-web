
//Styles
import "./Contact.css"

//Images
import foto from "../images/Contacto/callCenter.jpg"
import iconTel from "../images/Contacto/telefono.png"
import iconEmail from "../images/Contacto/email.png"
import iconHora from "../images/Contacto/horario.png"
import iconUbi from "../images/Contacto/ubicacion.png"

export default function Contact () {

    return (
        <div className="conteinerContact">
            <span className="line" style={{width: "100%"}} />
            <div className="titulo-contacto2">
                <h1 className="titulo-contacto">Contacta con Nosotros</h1>
            </div>
                <div className="contenedor-contacto">
                    <div className="contenedor-info1">
                        <img 
                            src={foto}
                            alt="Call Center"
                            className="fotoCallCenter"
                            />
                    </div>
                    <div className="contenedor-info2">
                        <div className="contenedor-iconos">
                            <img 
                                src={iconTel}
                                alt="Telefono"
                                className="icono-contacto"
                            />
                            <h2>Telefono:  +54 9 3834-432459</h2>
                        </div>
                        <div className="contenedor-iconos">
                            <img 
                                src={iconEmail}
                                alt="Email"
                                className="icono-contacto"
                                />
                            <h2>Email:  edicosa@yahoo.com.ar</h2>
                        </div>
                        <div className="contenedor-iconos">
                            <img 
                                src={iconHora}
                                alt="Horario"
                                className="icono-contacto"
                                />
                            <h2>Horarios:  Lunes a Viernes de 8:00 a 13:00 horas y 17:00 a 21:00 horas.</h2>
                        </div>
                        <div className="contenedor-iconos">
                            <img 
                                src={iconUbi}
                                alt="Ubicacion"
                                className="icono-contacto"
                                />
                            <h2>Ubicación: Rivadavia 456. (Catamarca, Argentina)</h2>
                        </div>
                    </div>
                </div>
                <div className="google-maps">
                    <iframe 
                        title="Google Maps"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.436523504622!2d-65.78081678802333!3d-28.466397675654825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942428b8cdb0433b%3A0x3c33e9434292f758!2sImprenta%20Edicosa!5e0!3m2!1ses!2sar!4v1720453032756!5m2!1ses!2sar" 
                        className="googleMaps"
                        style={{border:"0"}} 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade" 
                    />
                </div>
        </div>
    )
}
