
import "./Navbar.css"

//Images
import logo from "../images/logo/logo2.png"


export default function Navbar() {

    return (
        <div className="bodyNavbar">
            <div className="contenedorNavbar">
                <img 
                    src={logo}
                    alt="LogoEdicosa"
                    className="logo"
                />
                <div className="">
                    <ul className="nav-menu">
                        <li className="nav-item">Quienes Somos</li>
                        <li className="nav-item">Marcas que trabajamos</li>
                        <li className="nav-item">Solicitá Presupuesto</li>
                        <li className="nav-item">Contacto</li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
} 
