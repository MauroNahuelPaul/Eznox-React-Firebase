import { useContext, useEffect, useState } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"
import { LoginContext } from "../context/LoginContext"
import { db } from "../firebase/config"
import { doc, getDoc } from "firebase/firestore"
import { Loader } from "./Loader"

///////////// POR TERMINAR

const Wish = () => {
    const [usuario, setUsuario] = useState(null)
    const [loading, setLoading] = useState(true)
    const [deseados, setDeseados] = useState([])
    const { agregarAlCarrito } = useContext(CartContext)
    const { user } = useContext(LoginContext)

    useEffect(() => {
        const usuarioRef = doc(db, "usuarios", user.id)
        getDoc(usuarioRef)
            .then((res) => {
                setDeseados(res.data().deseados)
                setUsuario(res.data())
                usuario.deseados=deseados
                console.log(usuario)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [loading])
    if(usuario!==null){
        if (usuario.deseados.length === 0) {
            return (
                <div className="">
                    <h2>Tu lista de deseados está vacío</h2>
                    <hr />
                    <p>Ve a buscar algo que te guste</p>
                    <Link to="/explorar" className="">Volver</Link>
                </div>
            )
        }
    }  

    return (
        <div className="">
            <h2>Tus deseados</h2>
            <hr />
            {usuario?console.log(usuario):console.log("foldsmgkso")}

            {
                !loading ?
                    usuario.deseados.map(item => (
                        <div>
                            <h4>{item.titulo}</h4>
                            <p>Precio: ${item.precio}</p>
                            <button onClick={agregarAlCarrito(item)}>Adquerir</button>
                            <button onClick={usuario.deseados.splice(item)}>Borrar</button>
                            <hr />
                        </div>
                    ))

                    : <Loader />
            }
        </div>
    )
}

export default Wish