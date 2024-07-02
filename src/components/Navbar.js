import React from "react";
import { Link } from "react-router-dom"; // Importa Link desde react-router-dom
import "./Navbar.css";
import logo from "../images/logo/logo2.png";

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
            {/* Botón de Inicio (recargar página) */}
            <li className="nav-item">
              <a href="/" className="nav-link">Inicio</a>
            </li>
            {/* Botones de navegación usando Link */}
            <li className="nav-item">
              <Link to="/quienes-somos" className="nav-link">Quiénes Somos</Link>
            </li>
            <li className="nav-item">
              <Link to="/marcas" className="nav-link">Marcas que trabajamos</Link>
            </li>
            <li className="nav-item">
              <Link to="/contacto" className="nav-link">Contacto</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
