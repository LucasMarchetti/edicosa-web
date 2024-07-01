
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
                    +54 3834-432459
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
                <p>
                    Escríbenos por Whatsapp
                </p>
            </div>
        </div>
    )
} 

