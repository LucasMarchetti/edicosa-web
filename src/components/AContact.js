
//Styles
import "./AContact.css"

//Images
import logoWsp from "../images/logo/logoWsp.png"
import logoEmail from "../images/logo/logoEmail.png"
import logoTelefono from "../images/logo/logoTelefono.png"

export default function Navbar() {

    return (
        <div className="contenedorA">
            <div className="Titulo">
                <img 
                    src={logoTelefono}
                    alt="logoTelefono"
                    className="logoWsp"
                />
                <p>
                    +54 9 3834-432459
                </p>
            </div>
            <div className="Titulo">
                <img 
                    src={logoEmail}
                    alt="LogoWsp"
                    className="logoWsp"
                />
                <p>
                    edicosa@yahoo.com.ar
                </p>
            </div>
            <div className="Titulo">
                <img 
                    src={logoWsp}
                    alt="LogoWsp"
                    className="logoWsp"
                />
                <a 
                    target="_blank"
                    rel="noreferrer"
                    href="https://wa.me/5493834972609?text=Hola,%20estoy%20interesado%20en%20sus%20productos"
                >
                    Contáctanos por WhatsApp
                </a>

            </div>
        </div>
    )
} 

