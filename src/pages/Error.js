//React
import React from "react";
import { Link } from "react-router-dom";

//Styles
import "../components/Error.css"

//Images
import errorIcon from "../images/ErrorPage/error.png"

export default function Error () {

    return (
        <div className="conteiner-error-page">
            <div>
                <img 
                    src={errorIcon}
                    alt="Icono Error"
                    className="error-icon"
                />
            </div>
            <h1>
                Error. No encontramos la página que estas buscando...
            </h1>
            <h2>
                Haz click aquí y regresa al Inicio
            </h2>
            <div >
                <button className="button-inicio">
                    <Link to="/" className="nav-link-error">INICIO</Link>
                </button>
            </div>
        </div>
    )
}


