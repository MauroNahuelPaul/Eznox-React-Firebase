import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { Explorar } from "../components/Explorar"
import { DettalleLibroContainer } from "../components/DetalleLibroContainer"
import LoginScreen from "../components/LoginScreen"
import { Nosotros } from "../components/Nosotros"
import { Footer } from "../components/Footer"

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
                <Route path="/cuenta" element={<LoginScreen />} />
                {/* <Route path="/ayuda" element={}/> */}
                {/* <Route path="*" element={<Error/>}/> */}
                <Route path='*' element={<Navigate to={"/"} />} />
            </Routes>
            <Footer/>

        </>
    )
}