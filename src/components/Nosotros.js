
import imgLibro from '../assets/imgs/Libro.jpg'
import librosPila from '../assets/imgs/librosPila.png'
import librosPila2 from '../assets/imgs/librosPila2.png'
import librosPila3 from '../assets/imgs/librosPila3.png'
import { Recuadro } from "./Recuadro"
export const Nosotros = () => {
    return (
        <div>
            <Recuadro titulo={"Nosotros"} img={imgLibro} tituloSec={"Libros encuadernados. Infinidad de oportunidades"} texto={"Entra en un mundo de palabras y oraciones, visuales e información"} />
            <Recuadro titulo={""} img={librosPila} tituloSec={""} texto={"Actualizamos constantemente los títulos de nuestro clásicos literarios, para lo cual tenemos en cuenta las recomendaciones del personal y de nuestra comunidad de lectores. Explora y descubre tu próxima gran lectura de esta colección."} />
            <Recuadro titulo={""} img={librosPila2} tituloSec={""} texto={"Libros apilados Nuestros nuevos lanzamientos incluyen algunos de los mejores títulos disponibles en Eznox. Esta colección tiene una oferta interesante para todos, desde lectores experimentados hasta jóvenes ratones de biblioteca. Contáctanos o visítanos para más información."} />
            <Recuadro titulo={""} img={librosPila3} tituloSec={""} texto={"Continuamente agregamos novedades a nuestros favoritos del equipo y buscamos material de interés para la comunidad. Nuestro equipo está disponible para hacer sugerencias y ayudarte a encontrar el título perfecto de esta colección."} />
        </div>
    )
}
