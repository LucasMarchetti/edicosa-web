
import "./Info2.css"

import img from "../images/Informacion/cargando-planchas.webp"

export default function Info2 () {
    return (
        <div className="background">
            <div className="infoConteiner2">
                <img 
                    src={img}
                    alt="FotoInformacion"
                    className="fotoInfo"
                />
                <div className="informacion">
                    <h2>
                        CALIDAD, PRECIO Y SERVICIO, nuestra filosofía de empresa
                    </h2>
                    <p>
                        Edicosa se ha ganado un prestigio que nos sitúa entre las empresas más destacadas del sector gráfico en nuestro país. En gran medida gracias a que llevamos dos décadas aplicando una filosofía de empresa basada en tres claves: alta calidad, precios económicos y servicio profesional.
                    </p>
                    <p>
                        La calidad de la impresión empieza con una revisión profesional de los archivos PDF. Nuestros especialistas revisan gratuitamente el material que nos envías y te asesoran ante la necesidad de algún cambio.
                    </p>
                    <p>
                        En la imprenta somos muy conscientes de la importancia que tiene imprimir bien un libro, un catálogo o un folleto promocional. Detrás de estos soportes comunicativos, los escritores, los fotógrafos, los publicistas o los empresarios han invertido muchas horas en su concepción y puesta en marcha, por lo que consideramos que es nuestra obligación estar a la altura de sus expectativas.
                    </p>
                    <p>
                        Para tu confianza, contamos con diversos sellos de calidad europeos que nos han sido otorgados: Certificados ISO 9001 y 14001, y sello de calidad ecológica y medioambiental FSC. Además contamos con un equipo de 26 profesionales muy comprometidos con su trabajo, y que tiene gran experiencia en todas las áreas de impresión y fabricación de un libro: preimpresión, maquetación, fotomecánica, encuadernación, etc. Nuestras instalaciones están equipadas con maquinaria de última generación que garantiza el máximo cuidado en todos los procesos, detalles y acabados.
                    </p>
                    <p>
                        Nuestra política de precios se basa en ofrecer siempre el precio de impresión más barato sin que la calidad y la profesionalidad de nuestro servicio se vean afectadas.
                    </p>
                </div>
            </div>
        </div>
    )
}