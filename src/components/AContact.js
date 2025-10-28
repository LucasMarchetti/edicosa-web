import "./AContact.css";
import logoWsp from "../images/logo/logoWsp.png";
import logoEmail from "../images/logo/logoEmail.png";
import logoTelefono from "../images/logo/logoTelefono.png";

export default function AContact(){
  return (
    <div className="topbar" role="banner">
      <div className="topbar__inner container">
        <a className="topbar__item" href="tel:+543834432459">
          <img src={logoTelefono} alt="Teléfono" className="topbar__icon topbar__icon--mono"/>
          <span>+543834972609</span>
        </a>

        <a className="topbar__item" href="mailto:edicosa@yahoo.com.ar">
          <img src={logoEmail} alt="Email" className="topbar__icon topbar__icon--mono"/>
          <span>edicosa@yahoo.com.ar</span>
        </a>

        <a
          className="topbar__cta"
          href="https://wa.me/+543834972609?text=Hola%20Edicosa%2C%20quisiera%20hacer%20una%20consulta"
          target="_blank" rel="noreferrer noopener" aria-label="Chatear por WhatsApp"
        >
          <img src={logoWsp} alt="" className="topbar__icon" aria-hidden="true"/>
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
