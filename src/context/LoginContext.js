import { createContext, useEffect, useState } from "react";
import { db } from "../firebase/config";

import { collection, getDocs } from "firebase/firestore";
import StartToastifyInstance from "toastify-js";


export const LoginContext = createContext()


export const LoginProvider = ({ children }) => {

    const [loading, setLoading] = useState(true)
    const [usuarios, setUsuarios] = useState()

    useEffect(() => {
        const usuarioRef = collection(db, "usuarios")
        getDocs(usuarioRef)
            .then((res) => {
                setUsuarios(res.docs.map((doc) => doc.data()))
            })
            .finally(() => {
                setLoading(false)
            })
    }, [loading])


    const [user, setUser] = useState({
        email: 'admin@coder.com',
        logged: false
    })

    const login = (values) => {
        const match = usuarios.find((user) => user.email === values.email && user.contraseña === values.password)

        if (match) {
            setUser({
                email: match.email,
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