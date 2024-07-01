
//Style
import "./FusionTabs.css"

//Images
import fotoLibros from "../images/fusionTabs/libros.jpeg"
import fotoFolletos from "../images/fusionTabs/folletos.webp"
import fotoCalen from "../images/fusionTabs/calendario.jpeg"
import fotoRevis from "../images/fusionTabs/revistas.jpg"


export default function FusionTabs () {

    return (
        <div className="conteinerFusionTabs">
            <div className="conteinerTabs">
                <div className="tabs">
                    <h2>Libros</h2>
                </div>
                <div className="tabs">
                    <h2>Catálogos y Revistas</h2>
                </div>
                <div className="tabs">
                    <h2>Folletos, Flayers y Carteles</h2>
                </div>
                <div className="tabs">
                    <h2>Tarjetas, Calendarios y Libretas</h2>
                </div>
            </div>
            <div className="conteinerInfoTabs">
                <div className="imagesTabs">
                    <img 
                        src={fotoLibros}
                        alt="img"
                    />
                </div>
                <div className="infoTabs">
                    <p>
                        Imprimir libros es nuestra gran pasión. En Edicosa llevamos muchos años imprimiendo libros para instituciones públicas y privadas, editoriales y también para particulares. Nuestro objetivo empresarial es que cualquier persona que desee tener un libro bien impreso y a un precio asequible, pueda contar con nosotros. Las modernas tecnologías de impresión digital nos permiten hoy en día hacer tiradas cortas de libros con el mismo cariño y esmero que ponemos en las ediciones largas, pero reduciendo costes, preocupaciones de almacenaje, tiempos de entrega, etc. Se trata de un sistema que permite realizar también ediciones piloto para ver la aceptación de un título en el mercado o atender a sectores con poco volumen de ventas.
                    </p>
                    <p>
                        Si eres autor, editor, o un particular que desea imprimir un libro, en nuestra tienda de impresión online puedes calcular el precio de impresión de tu libro. La manera de encargar el pedido y subir los archivos es muy rápida y sencilla. Con unos pocos clics puedes realizar tu encargo y en unos pocos días recibirás el libro impreso en tu domicilio. Si deseas imprimir un producto más complejo o que no encuentras en nuestra web, contacta con nosotros y te ayudaremos.
                    </p>
                    <p>
                        En Edicosa hemos tenido el placer de imprimir algunos de los libros más bonitos y emblemáticos de la ciudad de Catamarca y de otros lugares de Argentina, y también trabajamos todos los días con autores y editoriales de todo tipo: ficción, ensayo, poesía, cómic… Podemos imprimir libros en color, en blanco y negro, de multiples formatos. Y siempre con el máximo esmero y cariño. Como merecen los libros.
                    </p>
                </div>
            </div>
        </div>
    )
}