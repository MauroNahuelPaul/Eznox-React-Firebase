import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"
import { LoginContext } from "../context/LoginContext"
import { db } from "../firebase/config"
import { doc, getDoc } from "firebase/firestore"

const Wish = () => {
    const [usuario, setUsuario] = useState(null)
    const [loading, setLoading] = useState(false)
    const { agregarAlCarrito } = useContext(CartContext)
    
    const { user } = useContext(LoginContext)
    //armar una referencia (sync)

    async function cargarLibrosDeseados  () {
        const userRef = doc(db, "usuarios", user.id);
        setUsuario(await getDoc(userRef));
        setLoading(true)
    }
    cargarLibrosDeseados()

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

        return (
            <div className="">
                <h2>Tus deseados</h2>
                <hr />
                {console.log(usuario.deseados)}

                loading?{
                    usuario.deseados.map(item => (
                        <div>
                            <h4>{item.titulo}</h4>
                            <p>Precio: ${item.precio}</p>
                            <button onClick={agregarAlCarrito(item)}>Adquerir</button>
                            <button onClick={user.deseados.splice(item)}>Borrar</button>
                            <hr />
                        </div>
                    ))
                }
                :<loader/>
            </div>
        )
    }

    export default Wish