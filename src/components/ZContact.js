import "./ZContact.css";
import logoEmail from "../images/logo/logoEmail.png";
import logoTelefono from "../images/logo/logoTelefono.png";
import logo from "../images/logo/logo2.png";


export default function ZContact(){
return (
<footer className="conteinerZContact2" role="contentinfo">
<div className="container zc__inner">
<img src={logo} alt="Edicosa" className="logoEdicosa"/>
<div className="zc__copy">
<h1>¿Tenés dudas?</h1>
<h2>Contactanos y cotizá tu trabajo</h2>
<p>Rivadavia 456 · Catamarca, Argentina</p>
<div className="zc__row"><img src={logoTelefono} alt="Teléfono" className="logoContact"/><p>+54 3834 432459</p></div>
<div className="zc__row"><img src={logoEmail} alt="Email" className="logoContact"/><p>edicosa@yahoo.com.ar</p></div>
</div>
</div>
</footer>
);
}