
//Styles
import "./ZContact.css"

//Images
import logoEmail from "../images/logo/logoEmail.png"
import logoTelefono from "../images/logo/logoTelefono.png"
import logo from "../images/logo/logo2.png"


export default function ZContact () {

    return (
        <div className="conteinerZContact2">
            <div className="conteinerLogo">
                <img 
                    src={logo}
                    alt="logoEdicosa"
                    className="logoEdicosa"
                />
            </div>
            <div className="conteinerZContact">
                <h1>¿ Tienes alguna duda ?</h1>
                <h2>¡Ponte en contacto con nosotros!</h2>
                <p>Nos encontramos en Rivadavia 456. (Catamarca, Argentina)</p>
                <p>Lunes a Viernes de 8:00 a 13:00 horas y de 17:00 a 21:00 horas.</p>
                <div className="contactLogo">
                    <img 
                        src={logoTelefono}
                        alt="logoTelefono"
                        className="logoContact"
                    />
                    <p> +54 3834-432459</p>
                </div>
                <div className="contactLogo">
                    <img
                        src={logoEmail}
                        alt="logoTelefono"
                        className="logoContact"
                    />
                    <p> edicosa@yahoo.com.ar</p>
                </div>
            </div>
        </div>
    )
}