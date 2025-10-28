import "./Dev.css";

export default function Dev(){
  const year = new Date().getFullYear();
  return (
    <footer className="dev" role="contentinfo" aria-label="Créditos del sitio">
      <div className="container dev__inner">
        <p className="dev__text">© {year} Edicosa. Todos los derechos reservados.</p>
        <span className="dev__dot" aria-hidden="true">•</span>
        <p className="dev__text">
          Desarrollado por{" "}
          <a
            href="https://www.linkedin.com/in/marchetti-lucas/"
            className="dev__link"
            target="_blank"
            rel="noreferrer noopener"
          >
            Lucas Marchetti
          </a>
        </p>
      </div>
    </footer>
  );
}
