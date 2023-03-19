import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { traerDatos } from "../helpers/traerDatos"
import { LibrosContainer } from "./LibrosContainer"

export const Explorar = () => {
    const [libros, setLibros] = useState([])
    const [loading, setLoading] = useState(true)
    const { genero } = useParams()
    
    useEffect(() => {
        setLoading(true)
        console.log(genero)
        traerDatos()
            .then((res) => {
                if (genero!=undefined) {
                    setLibros(res.filter((libro) => libro.genero === genero))
                } else {
                    setLibros(res)
                }
            })
            .catch((error) => {
                console.log(error)

            })
            .finally(() => {
                setLoading(false)
            })
    }, [genero])

    return (
        <main className="mainExplorar">
            <div className="apartado-container">
                <div className="apartado">
                    <h1 className="">EN<br />COLLECCIÓN</h1>
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
                    ? <h2>Cargando...</h2>
                    : <LibrosContainer libros={libros} />
            }

        </main>
    )
}