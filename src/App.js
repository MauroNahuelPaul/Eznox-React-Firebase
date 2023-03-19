import { Navbar } from "./components/Navbar";
import { Nosotros } from "./components/Nosotros";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/main.scss'
import { Explorar } from "./components/Explorar";
import { DettalleLibroContainer } from "./components/DetalleLibroContainer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Nosotros />} />
        <Route path="/explorar" element={<Explorar />} />
        <Route path='/explorar/categoria/:genero' element={<Explorar />} />
        <Route path='/detalle/:titulo' element={<DettalleLibroContainer /> } />
          {/* <Route path="/biblioteca" element={}/> */}
          {/* <Route path="/cuenta" element={}/> */}
          {/* <Route path="/ayuda" element={}/> */}
          {/* <Route path="*" element={<Error/>}/> */}
        </Routes>

    </BrowserRouter>
  );
}

export default App;
