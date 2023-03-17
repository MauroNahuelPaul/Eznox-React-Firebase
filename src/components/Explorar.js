import { useEffect, useState } from "react"
import { traerDatos } from "../helpers/traerDatos"
import { LibrosContainer } from "./LibrosContainer"

export const Explorar = () => {
    const [libros, setLibros] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)

        traerDatos()
            .then((res) => {
                setLibros(res)

            })
            .catch((error) => {
                console.log(error)

            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <div>
            <div className="apartado-container">
                <div className="apartado">
                    <h1 className="">EN<br />COLLECCIÓN</h1>
                </div>
            </div>

            {
                loading
                    ? <h2>Cargando...</h2>
                    : <LibrosContainer libros={libros} />
            }

        </div>
    )
}