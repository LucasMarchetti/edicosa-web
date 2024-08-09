
//Style
import "./Info.css"

//Images
import info1 from "../images/Informacion/info1.jpg"

export default function Info () {
    return (
        <div className="infoConteiner">
            <img 
                src={info1}
                alt="FotoInformacion"
                className="fotoInfo"
            />
            <div className="informacion">
                <h2>
                    ESPECIALISTAS EN IMPRESION OFFSET Y DIGITAL
                </h2>
                <p>
                    En Edicosa estamos especializados en imprimir libros, catálogos, revistas, folletos, flayers y todo tipo de material publicitario.
                    Nuestras principales actividades están centradas en:
                </p>
                <ul>
                    <li>Imprimir libros y revistas.</li>
                    <li>Imprimir catálogos y folletos.</li>
                    <li>Imprimir flayers, postales y carteles.</li>
                    <li>Libretas personalizadas y calendarios.</li>
                    <li>Tarjetas personales, carpetas y papel de cartas.</li>
                </ul>
                <p>
                    En nuestros talleres utilizamos la impresión offset para las tiradas largas. Con nuestras máquinas KBA podemos imprimir catálogos, libros y revistas con la máxima calidad y de forma rápida. Estamos acostumbrados a la actual dinámica de fecha fija y siempre cumplimos con nuestros compromisos. Visita esta página para ampliar información sobre la impresión offset.
                </p>
                <p>
                    En Edicosa también somos especialistas en impresión digital, que es el sistema que utilizamos para las tiradas cortas. Trabajamos con 2  máquinas HP Indigo de última generación, de calidad igual a la offset, lo que nos permite atender cualquier urgencia, imprimir catálogos o libros personalizados, y atender pedidos de impresión bajo demanda (POD). Visita esta página para ampliar información sobre la impresión  digital.
                </p>
                <p>
                    Imprenta en Argentina. Nuestros talleres están ubicados en Rivadavia 456 (San Fernando del Valle de Catamarca, Catamarca), desde donde atendemos a diario pedidos de toda Argentina.
                </p>
                <p>
                    Imprenta online. Puedes hacer tus pedidos online, ofreciéndote un trato directo y personalizado ante cualquier duda que tengas al hacer tu  pedido. Queremos ofrecerte el mejor servicio para tu mayor comodidad y satisfacción. Nuestra tienda online está adaptada para crear tu propio presupuesto y hacer el pedido de una forma fácil y sencilla, si no encuentras lo que buscas ponte en contacto con nosotros y te haremos un presupuesto personalizado.
                </p>
            </div>
        </div>
    )

}

