import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { LibrosContainer } from "./LibrosContainer"
import { Loader } from "./Loader"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase/config"

export const Explorar = () => {
    const [libros, setLibros] = useState([])
    const [loading, setLoading] = useState(true)
    const { genero } = useParams()

    useEffect(() => {
        setLoading(true)
        //armar una referencia (sync)
        const librosRef = collection(db, "libros")
        const q = genero
            ? query(librosRef, where("genero", "==", genero))
            : librosRef
        //llamar a la referencia(async)
        getDocs(q)
            .then((res) => {
                setLibros(res.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                }))
            })
            .finally(() => {
                setLoading(false)
            })
    }, [genero])

    return (
        <main className="mainExplorar">
            <div className="apartado-container">
                <div className="apartado">
                    <h1 className="">EXPLORAR</h1>
                </div>
            </div>
            <div className="genero-container">
                <Link to='/explorar/' className="genero-select">Todos</Link>
                <Link to='/explorar/categoria/Romance' className="genero-select">Romance</Link>
                <Link to='/explorar/categoria/Accion' className="genero-select">Acción</Link>
                <Link to='/explorar/categoria/Aventura' className="genero-select">Aventura</Link>
                <Link to='/explorar/categoria/Psicologico' className="genero-select">Psicologico</Link>
                <Link to='/explorar/categoria/Fantasia' className="genero-select">Fantasia</Link>
            </div>

            {
                loading
                    ? <Loader/>
                    : <LibrosContainer libros={libros} />
            }

        </main>
    )
}