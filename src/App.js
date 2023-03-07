import { Navbar } from "./components/Navbar";
import { Nosotros } from "./components/Nosotros";
import imgLibro from './assets/imgs/Libro.jpg'
import librosPila from './assets/imgs/librosPila.png'
import librosPila2 from './assets/imgs/librosPila2.png'
import librosPila3 from './assets/imgs/librosPila3.png'
import './styles/main.scss'
function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Nosotros titulo={"NOSOTROS"} img={imgLibro} tituloSec={"Libros encuadernados. Infinidad de oportunidades"} texto={"Entra en un mundo de palabras y oraciones, visuales e información"} />
        <Nosotros titulo={""} img={librosPila} tituloSec={""} texto={"Actualizamos constantemente los títulos de nuestro clásicos literarios, para lo cual tenemos en cuenta las recomendaciones del personal y de nuestra comunidad de lectores. Explora y descubre tu próxima gran lectura de esta colección."} />
        <Nosotros titulo={""} img={librosPila2} tituloSec={""} texto={"Libros apiladosNuestros nuevos lanzamientos incluyen algunos de los mejores títulos disponibles en Eznox. Esta colección tiene una oferta interesante para todos, desde lectores experimentados hasta jóvenes ratones de biblioteca.Contáctanos o visítanos para más información."} />
        <Nosotros titulo={""} img={librosPila3} tituloSec={""} texto={"Continuamente agregamos novedades a nuestros favoritos del equipo y buscamos material de interés para la comunidad.Nuestro equipo está disponible para hacer sugerencias y ayudarte a encontrar el título perfecto de esta colección."} />


      </main>

    </div>
  );
}

export default App;
