import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../images/logo/logo2.png";

export default function Navbar(){
  const [open,setOpen]=useState(false);
  const { pathname } = useLocation();
  const linkClass = (to) => `nav__link${pathname===to ? " is-active" : ""}`;
  const close = () => setOpen(false);

  return (
    <nav className={`nav ${open? 'open':''}`} aria-label="Principal">
      <div className="container nav__inner">
        <Link to="/" aria-label="Ir al inicio" onClick={close}>
          <img src={logo} alt="Edicosa" className="nav__logo" />
        </Link>

        <ul id="primary-nav" className="nav__menu" role="menubar">
          <li role="none"><Link to="/" className={linkClass('/')} role="menuitem" onClick={close}>Inicio</Link></li>
          <li role="none"><Link to="/quienes-somos" className={linkClass('/quienes-somos')} role="menuitem" onClick={close}>Quiénes Somos</Link></li>
          <li role="none"><Link to="/contacto" className={linkClass('/contacto')} role="menuitem" onClick={close}>Contacto</Link></li>
        </ul>

        <button
          className="nav__burger"
          aria-label="Abrir menú"
          aria-controls="primary-nav"
          aria-expanded={open}
          onClick={()=>setOpen(v=>!v)}
        >
          {open? '✕':'☰'}
        </button>
      </div>
    </nav>
  );
}
