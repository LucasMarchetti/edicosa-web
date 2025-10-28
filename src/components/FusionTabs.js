import { useState, useCallback } from "react";
import "./FusionTabs.css";

import fotoLibros from "../images/fusionTabs/libros.jpeg";
import fotoCalendario from "../images/fusionTabs/calendario.jpeg";
import fotoFolletos from "../images/fusionTabs/folletos.webp";
import fotoRevistas from "../images/fusionTabs/revistas.jpg";

const TABS = [
  {
    label: "Libros",
    img: fotoLibros,
    content: (
      <>
        <p>
          Imprimir libros es nuestra pasión. Atendemos editoriales, instituciones y autores con tiradas cortas o largas, manteniendo costo y calidad.
        </p>
        <p>
          Podés calcular y encargar tu pedido online. Si el producto es complejo o no figura en la web, te asesoramos y cotizamos a medida.
        </p>
        <p>
          Color o B/N en múltiples formatos, con acabados profesionales. Cuidamos consistencia de color, registro y terminaciones.
        </p>
      </>
    )
  },
  {
    label: "Catálogos y Revistas",
    img: fotoRevistas,
    content: (
      <>
        <p>
          Especialistas en material editorial y promocional para ferias y ventas. Cumplimos plazos exigentes con control de calidad.
        </p>
        <p>
          Tiradas cortas: agilidad y personalización sin stock. Tiradas largas: optimización de papel, pliegos y acabados para mejor costo.
        </p>
      </>
    )
  },
  {
    label: "Folletos y Carteles",
    img: fotoFolletos,
    content: (
      <>
        <p>
          Folletos, flyers, desplegables y carteles con asesoría en papeles, plegados y terminaciones para lograr el objetivo comunicacional.
        </p>
        <p>
          Producción, manipulado y logística integrados para precio competitivo y entrega rápida en todo el país.
        </p>
      </>
    )
  },
  {
    label: "Tarjetas y Calendarios",
    img: fotoCalendario,
    content: (
      <>
        <p>
          Tarjetas, postales, calendarios, agendas y libretas. Materiales y acabados de alto estándar para transmitir profesionalismo.
        </p>
        <p>
          Revisión de archivos y recomendaciones de sustratos y barnices para durabilidad y buena presencia.
        </p>
      </>
    )
  }
];

export default function FusionTabs() {
  const [active, setActive] = useState(0);

  const onKey = useCallback((e) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) return;
    e.preventDefault();
    if (e.key === "ArrowRight") setActive((i) => (i + 1) % TABS.length);
    if (e.key === "ArrowLeft") setActive((i) => (i - 1 + TABS.length) % TABS.length);
    if (e.key === "Home") setActive(0);
    if (e.key === "End") setActive(TABS.length - 1);
  }, []);

  const tab = TABS[active];

  return (
    <section className="fusion container" aria-label="Líneas de trabajo">
      <div className="tabsBar" role="tablist" aria-label="Categorías" onKeyDown={onKey}>
        {TABS.map((t, i) => (
          <button
            key={t.label}
            id={`tab-${i}`}
            className={`tab ${active === i ? "is-active" : ""}`}
            role="tab"
            aria-selected={active === i}
            aria-controls={active === i ? `panel-${i}` : undefined}
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Solo el panel activo */}
      <section
        id={`panel-${active}`}
        role="tabpanel"
        aria-labelledby={`tab-${active}`}
        className="panel"
      >
        <figure className="panel__media">
          <img
            src={tab.img}
            alt={tab.label}
            className="panel__img"
            loading="lazy"
            decoding="async"
          />
        </figure>

        <div className="panel__copy">
          <h3 className="panel__title">{tab.label}</h3>
          <div className="panel__text">{tab.content}</div>
        </div>
      </section>
    </section>
  );
}
