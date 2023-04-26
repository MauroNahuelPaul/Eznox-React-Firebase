import { createContext, useEffect, useState } from "react";
import { db } from "../firebase/config";

import { collection, getDocs } from "firebase/firestore";
import StartToastifyInstance from "toastify-js";


export const LoginContext = createContext()


export const LoginProvider = ({ children }) => {
    const [user, setUser] = useState({
        id: '',
        nombre: '',
        apellido: '',
        email: '',
        contraseña: '',
        confirmarContraseña: '',
        fechaNacimiento: '',
        sexo: '',
        logged: false
    })
    const [loading, setLoading] = useState(true)
    const [usuarios, setUsuarios] = useState()
    const [idUsuarios, SetIdUsuarios] = useState()

    useEffect(() => {
        const usuarioRef = collection(db, "usuarios")
        getDocs(usuarioRef)
            .then((res) => {
                setUsuarios(res.docs.map((doc) => doc.data()))
                SetIdUsuarios(res.docs.map((doc) => doc.id))
            })
            .finally(() => {
                setLoading(false)
            })
    }, [loading])




    const login = (values) => {
        const match = usuarios.find((doc) => doc.email === values.email && doc.contraseña === values.password)
        if (match) {
            const id = idUsuarios[usuarios.indexOf(match)] 
            setUser({
                id:id,
                nombre: match.nombre,
                apellido: match.apellido,
                email: match.email,
                contraseña: match.contraseña,
                confirmarContraseña: match.confirmarContraseña,
                fechaNacimiento: match.fechaNacimiento,
                deseados:match.deseados,
                adqueridos:match.adqueridos,
                sexo: match.sexo,
                logged: true
            })
            
            
        }
        else {
            StartToastifyInstance({
                text: "Los datos ingresados son inválidos",
                duration: 3000,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                    background: "$primary-color",
                },
            }).showToast();
        }

    }

    const logout = () => {
        setUser({
            email: null,
            logged: false
        })
    }

    return (
        <LoginContext.Provider value={{
            user,
            login,
            logout
        }}>
            {children}
        </LoginContext.Provider>

    )
}