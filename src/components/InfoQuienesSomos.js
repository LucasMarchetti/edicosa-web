
//styles
import "./InfoQuienesSomos.css"

//Images
import foto from "../images/QuienesSomos/fotoEdicosa.webp"
import fotoMaquina from "../images/QuienesSomos/maquina1.jpg"
import ZContact from "./ZContact"
import Dev from "./Dev"

export default function InfoQuienesSomos () {

    return (
        <div className="conteinerInfoQuienes">
            <span className="line" style={{width: "100%", marginTop: "20px"}} />
            <div className="infoQuienesConteiner">
                <h1>
                    ¿ Quiénes Somos ?
                </h1>
                <p>¿Quiénes somos en Edicosa?. Somos una empresa de comunicación gráfica especializada en la impresión de libros, catálogos, revistas y folletos. Desde 1998, ofrecemos nuestros servicios a todo tipo de clientes: empresas, instituciones y particulares. Trabajamos en todo el territorio español y también a nivel internacional.</p>
                <p>Podemos atender cualquier tipo de demanda, desde la impresión urgente de un catálogo o unos flyers, hasta la edición cuidada de un libro con acabados de lujo.</p>
                <h3>SOMOS BUENOS PROFESIONALES</h3>
                <p>Consideramos que es nuestro deber atender con la máxima profesionalidad a nuestros clientes. Cada encargo que recibimos es revisado en cada uno de los procesos por un equipo de expertos y no cobramos tarifas extra por hacerlo.</p>
                <div className="reales">
                    <img 
                        src={foto}
                        alt="Foto Edicosa"
                        className="fotoEdicosa"
                    />
                    <div className="reales2">
                        <h3>SOMOS REALES</h3>
                        <p>Nuestra empresa existe realmente. No somos un portal web que se dedica a subcontratar pedidos abaratando tarifas a cualquier precio. En Edicosa, un equipo de 25 personas trabaja a diario para sacar adelante los proyectos con profesionalidad e ilusión.</p>
                        <h3>MÁXIMA CALIDAD AL MEJOR PRECIO</h3>
                        <p>Nuestro lema es ofrecer a nuestros clientes un servicio de máxima calidad al mejor precio. De ese modo nos hemos ganado su confianza, y el prestigio de ser una imprenta muy reconocida en el sector gráfico.</p>
                    </div>
                </div>
                <h3>DE CATAMARCA AL MUNDO. NUESTRAS INSTALACIONES</h3>
                <p>Desde nuestra imprenta en Catamarca trabajamos para toda Argentina. Nuestras instalaciones abarcan más de 1.000 metros cuadrados entre, talleres, despachos y espacios de reunión.</p>
                <p>La actual situación de pandemia ha modificado nuestros hábitos de trabajo. En Edicosa nos esforzamos en que nuestra relación comercial sea segura y eficiente. Contacte con nuestro servicio de atención al cliente o podrá acudir a nuestras instalaciones.</p>
                <div className="maquinasReales">
                    <div className="maquinasReales2">
                        <h3>LAS MEJORES MÁQUINAS</h3>
                        <p>Nuestros talleres de impresión están equipados con las mejores máquinas del mercado y cuentan con profesionales muy cualificados para asegurar la máxima calidad y el mejor servicio.</p>
                        <p>Para la impresión offset confiamos en las maquinas de KBA con 5 cuerpos y lacado en línea que nos garantizan rapidez y calidad en la impresión de tiradas largas de catálogos, libros y folletos.</p>
                        <p>Para la impresión digital utilizamos dos máquinas HP Indigo 7600 con una calidad igual al sistema offset y una capacidad de respuesta muy rápida que nos permite atender al momento las urgencias y realizar tiradas cortas de libros, catálogos, folletos, carteles y desplegables. Todo ello de manera muy ágil y con la máxima calidad.</p>
                        <p>La encuadernación se realiza íntegramente en nuestros talleres, ya sea el plastificado, hendido, plegado, corte, grapado o la encuadernación rústica. Todo ello nos permite controlar bien los procesos y responder con agilidad a las demandas de nuestros clientes.</p>
                    </div>
                    <img 
                        src={fotoMaquina}
                        alt="Foto Edicosa Maquinas"
                        className="fotoEdicosa2"
                    />
                </div>
                <h3>Si necesitas imprimir libros, folletos, catálogos, revistas, desplegables, flayers, carpetas, etc… estamos seguros de poder darte el mejor servicio.</h3>
            </div>
            <span className="line" />
            <ZContact />
            <Dev />
        </div>
    )
}