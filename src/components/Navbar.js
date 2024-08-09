//React
import React, {useState} from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

//Styles
import "./Navbar.css";

//Images
import logo from "../images/logo/logo2.png";

export default function Navbar() {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMenu = () => setClick(false)

  return (
    <div className="bodyNavbar">
      <div className="contenedorNavbar">
        <img 
          src={logo}
          alt="LogoEdicosa"
          className="logo"
        />
        {click ? (
          <FaBars style={{ color: "black", display: "none" }} className="hamburger" onClick={handleClick} />
          ) : (
          <FaBars style={{ color: "black" }} className="hamburger" onClick={handleClick} />
        )}
        <div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className={click ? "nav-item active" : "nav-item"}>
              <Link to="/" className="nav-link" onClick={closeMenu}>Inicio</Link>
            </li>
            <li className={click ? "nav-item active" : "nav-item"}>
              <Link to="/quienes-somos" className="nav-link" onClick={closeMenu}>Quiénes Somos</Link>
            </li>
            <li className={click ? "nav-item active" : "nav-item"}>
              <Link to="/contacto" className="nav-link" onClick={closeMenu}>Contacto</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
