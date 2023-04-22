import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { Explorar } from "../components/Explorar"
import { DettalleLibroContainer } from "../components/DetalleLibroContainer"
import Cuenta from "../components/Cuenta"
import { Nosotros } from "../components/Nosotros"
import { Footer } from "../components/Footer"
import Cart from "../components/ListadoCarrito"
import Wish from "../components/ListadoDeseados"
import Checkout from "../components/Checkout"

export const PrivateRoutes = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Nosotros />} />
                <Route path='/explorar' element={<Explorar />} />
                <Route path='/explorar/categoria/:genero' element={<Explorar />} />
                <Route path='/detalle/:id' element={<DettalleLibroContainer />} />
                {/* <Route path="/biblioteca" element={}/> */}
                <Route path="/cuenta" element={<Cuenta/>} />
                {/* <Route path="/ayuda" element={}/> */}
                {/* <Route path="*" element={<Error/>}/> */}
                <Route path="/checkout" element={ <Checkout /> }/>
                <Route path="/wish" element={ <Wish /> }/>
                <Route path="/cart" element={ <Cart /> }/>
                <Route path='*' element={<Navigate to={"/"} />} />
            </Routes>
            <Footer/>

        </>
    )
}