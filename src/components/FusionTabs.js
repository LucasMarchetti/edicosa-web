
//React
import React, { useState } from 'react';

//Styles
import "./FusionTabs.css";

//Images
import fotoLibros from "../images/fusionTabs/libros.jpeg";
import fotoCalendario from "../images/fusionTabs/calendario.jpeg";
import fotoFolletos from "../images/fusionTabs/folletos.webp";
import fotoRevistas from "../images/fusionTabs/revistas.jpg";


export default function FusionTabs() {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className="conteinerFusionTabs">
            <div className="conteinerTabs">
                <div className={`tabs ${activeTab === 0 ? 'active' : ''}`} onClick={() => handleTabClick(0)}>
                    <h2>Libros</h2>
                </div>
                <div className={`tabs ${activeTab === 1 ? 'active' : ''}`} onClick={() => handleTabClick(1)}>
                    <h2>Catálogos y Revistas</h2>
                </div>
                <div className={`tabs ${activeTab === 2 ? 'active' : ''}`} onClick={() => handleTabClick(2)}>
                    <h2>Folletos, Flayers y Carteles</h2>
                </div>
                <div className={`tabs ${activeTab === 3 ? 'active' : ''}`} onClick={() => handleTabClick(3)}>
                    <h2>Tarjetas, Calendarios y Libretas</h2>
                </div>
            </div>
            <div className="conteinerInfoTabs">
                <div >
                    {activeTab === 0 && <img src={fotoLibros} alt="img" className="imagesTabs" />}
                    {activeTab === 1 && <img src={fotoRevistas} alt="img" className="imagesTabs"/>}
                    {activeTab === 2 && <img src={fotoFolletos} alt="img" className="imagesTabs"/>}
                    {activeTab === 3 && <img src={fotoCalendario} alt="img" className="imagesTabs"/>}
                </div>
                <div className="infoTabs">
                    {activeTab === 0 && (
                        <div>
                            <p>Imprimir libros es nuestra gran pasión. En Edicosa llevamos muchos años imprimiendo libros para instituciones públicas y privadas, editoriales y también para particulares. Nuestro objetivo empresarial es que cualquier persona que desee tener un libro bien impreso y a un precio asequible, pueda contar con nosotros. Las modernas tecnologías de impresión digital nos permiten hoy en día hacer tiradas cortas de libros con el mismo cariño y esmero que ponemos en las ediciones largas, pero reduciendo costes, preocupaciones de almacenaje, tiempos de entrega, etc. Se trata de un sistema que permite realizar también ediciones piloto para ver la aceptación de un título en el mercado o atender a sectores con poco volumen de ventas.</p>
                            <p>Si eres autor, editor, o un particular que desea imprimir un libro, en nuestra tienda de impresión online puedes calcular el precio de impresión de tu libro. La manera de encargar el pedido y subir los archivos es muy rápida y sencilla. Con unos pocos clics puedes realizar tu encargo y en unos pocos días recibirás el libro impreso en tu domicilio. Si deseas imprimir un producto más complejo o que no encuentras en nuestra web, contacta con nosotros y te ayudaremos.</p>
                            <p>En Edicosa hemos tenido el placer de imprimir algunos de los libros más bonitos y emblemáticos de la ciudad de Catamarca y de otros lugares de Argentina, y también trabajamos todos los días con autores y editoriales de todo tipo: ficción, ensayo, poesía, cómic… Podemos imprimir libros en color, en blanco y negro, de multiples formatos. Y siempre con el máximo esmero y cariño. Como merecen los libros.</p>
                        </div>
                    )}
                    {activeTab === 1 && (
                        <div>
                            <p>La impresión de catálogos y revistas es otra de nuestras grandes especialidades. En Catamarca hay muchas empresas que recurren a la impresión de sus catálogos para asistir a ferias y eventos a promocionar sus productos. En Edicosa estamos acostumbrados a trabajar con ellas, cumpliendo con sus exigencias de calidad y plazos de entrega.</p>
                            <p>Excelencia, capacidad de escucha y profesionalidad son los valores que han hecho de Edicosa una de las empresas catamarqueñas más reconocidas en el sector gráfico.</p>
                            <p>Tiradas cortas.
                            ¿Necesitas unos catálogos urgentes? En Edicosa hemos adaptado nuestro sistema de trabajo para ganar en agilidad y poder responder a las necesidades urgentes de tu empresa. Poder disponer rápidamente de 20, 50 o 100 catálogos para un encuentro profesional con tus clientes es muy fácil a través de nuestro sistema de impresión. Tan sólo tienes que subir un PDF y nosotros nos encargamos del resto. Las tiradas cortas son muy económicas y tienen varias ventajas: evitas el stock de producto, y te permite incorporar novedades y reimprimir con suma rapidez, además de otras opciones como la personalización de la edición con el nombre del cliente, etc.</p>
                            <p>Tiradas largas.
                            ¿Necesitas imprimir catálogos, revistas o material promocional? Nosotros somos especialistas en imprimir grandes tiradas. Trabajamos de forma personalizada y flexible. Cuéntanos qué necesitas y te aconsejaremos en la elección de los papeles y en todos los detalles y acabados para que puedas sacarle el máximo provecho a tu producto.</p>
                        </div>
                    )}
                    {activeTab === 2 && (
                        <div>
                            <p>La impresión de flayers, folletos, carteles y desplegables es una opción muy económica para dar a conocer los servicios o productos de una empresa. En Edicosa tenemos una amplia experiencia en la impresión de estos productos y estamos a tu disposición para asesorarte en la elección del papel, en las forma de plegado y en todos los detalles necesarios para que tu producto alcance su objetivo comunicativos.</p>
                            <p>Los procesos de impresión, manipulación, corte, doblado, grapado, encolado, etc, se efectúan íntegramente en nuestra imprenta en Catamarca, lo que redunda en unos precios más competitivos y en una mayor rapidez en los tiempos de fabricación y entrega. El pedido que nos hagas, te será entregado a los pocos días en cualquier lugar de Argentina.</p>
                            <p></p>
                        </div>
                    )}
                    {activeTab === 3 && (
                        <div>
                            <p>En Edicosa también podemos imprimir tarjetas de visita, postales, calendarios, agendas, libretas, carpetas, material de oficina y lo que necesites para tu empresa o a nivel particular. Para imprimir los productos que ofrecemos en nuestra tienda online, utilizamos materiales de máxima calidad. Cuidamos mucho los acabados para que tus productos transmitan la imagen y el prestigio que mereces.</p>
                            <p>Unas bonitas tarjetas personales, unas agendas personalizadas o unas carpetas de empresa necesitan de una buena impresión para captar la atención y confianza de tus clientes. En Edicosa aconsejamos en la elección de los papeles y en los acabados para sacarle el máximo rendimiento a tus productos comunicativos.</p>
                            <p>Estamos especializados en todo aquello que se imprime sobre papel. Todos los procesos de fabricación se realizan íntegramente en nuestra imprenta, tanto la revisión de archivos y la impresión, como la encuadernación y embalaje, lo que te garantiza la máxima calidad, el mejor precio y un plazo de entrega ajustado a tus necesidades.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
