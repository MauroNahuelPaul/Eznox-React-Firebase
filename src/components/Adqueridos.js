import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase/config"
import { LoginContext } from "../context/LoginContext"
import { useContext, useEffect, useState } from "react"
import { Loader } from "./Loader"
import { AdqueridoLibro } from "./AdqueridoLibro"
import { Link } from "react-router-dom"

export const Adqueridos = () => {
    const { user } = useContext(LoginContext)
    const [libros, setLibros] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const usuarioRef = doc(db, "usuarios", user.id)
        getDoc(usuarioRef)
            .then((res) => {
                setLibros(res.data().adqueridos)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [loading])

    return (
        <main className="mainExplorar">
            <div className="apartado-container">
                <div className="apartado">
                    <h1 className="">BIBLIOTECA</h1>
                </div>
            </div>

            {
                loading
                    ? <Loader />
                    : libros.length > 0
                        ? <div className="librosContainer">
                            {libros.map((libro) => <AdqueridoLibro key={libro[0]} libro={libro[1]} id={libro[0]} />)}
                        </div>
                        : <div className="arrayVacio">
                            <h2 className="arrayVacio__titulo">Tu biblioteca está vacío</h2>
                            <hr />
                            <p className="arrayVacio__texto">Ve a comprar algo</p>
                            <Link className="arrayVacio__boton" to="/explorar">Volver</Link>
                        </div>
            }

        </main>
    )
}