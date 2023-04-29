import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { Explorar } from "../components/Explorar"
import { DetalleLibroContainer } from "../components/DetalleLibroContainer"
import Cuenta from "../components/Cuenta"
import { Nosotros } from "../components/Nosotros"
import { Footer } from "../components/Footer"
import Cart from "../components/ListadoCarrito"
import Wish from "../components/ListadoDeseados"
import Checkout from "../components/Checkout"
import { Adqueridos } from "../components/Adqueridos"
import { AdqueridoDetalleLibroContainer } from "../components/AdqueridoDetalleLibroContainer"
import { HitorialCompras } from "../components/HistorialCompras"
import { DetalleFacturaContainer } from "../components/DetalleFacturaContainer"
import { Ayuda } from "../components/Ayuda"

export const PrivateRoutes = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Nosotros />} />
                <Route path='/explorar' element={<Explorar />} />
                <Route path='/explorar/categoria/:genero' element={<Explorar />} />
                <Route path='/detalle/:id' element={<DetalleLibroContainer />} />
                <Route path='/adqueridoDetalle/:id' element={<AdqueridoDetalleLibroContainer />} />
                <Route path="/biblioteca" element={<Adqueridos />} />
                <Route path="/cuenta" element={<Cuenta />} />
                <Route path="/ayuda" element={<Ayuda/>}/>
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/wish" element={<Wish />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/cuenta/HistorialCompras" element={<HitorialCompras />}/>
                <Route path="/cuenta/HistorialCompras/:id" element={<DetalleFacturaContainer />}/>
                <Route path='*' element={<Navigate to={"/"} />} />
            </Routes>
            <Footer />

        </>
    )
}