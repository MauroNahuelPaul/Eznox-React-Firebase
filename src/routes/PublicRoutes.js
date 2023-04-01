import { Navigate, Route, Routes } from "react-router-dom"
import LoginScreen from "../components/LoginScreen"
import { Nosotros } from "../components/Nosotros"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"


export const PublicRoutes = () => {
    return (
    <>
        <Navbar />
        <Routes>
            <Route path="/" element={<Nosotros />} />
            <Route path='/login' element={<LoginScreen />} />
            <Route path='*' element={<Navigate to={"/login"} />} />
        </Routes>
        <Footer/>
    </>
    )
}