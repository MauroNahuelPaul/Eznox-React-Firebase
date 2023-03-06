import { Navbar } from "./components/Navbar";
import { Nosotros } from "./components/Nosotros";
import imgLibro from './assets/imgs/Libro.jpg'
import './styles/main.scss'
function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Nosotros titulo={"NOSOTROS"} img={imgLibro} tituloSec={"Libros encuadernados. Infinidad de oportunidades"} texto={"Entra en un mundo de palabras y oraciones, visuales e información"} />
      </main>
    </div>
  );
}

export default App;
