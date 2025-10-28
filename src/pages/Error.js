import { Link } from "react-router-dom";
import "../components/Error.css";
import errorIcon from "../images/ErrorPage/error.png";


export default function Error(){
return (
<div className="conteiner-error-page">
<img src={errorIcon} alt="Página no encontrada" className="error-icon"/>
<h1>Error. No encontramos la página que buscás.</h1>
<h2>Volvé al inicio</h2>
<Link to="/" className="link-btn">Ir al inicio</Link>
</div>
);
}