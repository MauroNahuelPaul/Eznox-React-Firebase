import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { traerDatos } from "../helpers/traerDatos"
import { DetalleLibro } from "./DetalleLibro"



export const DettalleLibroContainer = () => {
    const [libro, setLibro] = useState(null)
    const [loading, setLoading] = useState(true)
    const { titulo } = useParams()
    console.log(libro) 
    console.log(titulo)

    useEffect(() => {
        setLoading(true)

        traerDatos()
            .then((res) => {
                
                setLibro( res.find((libro) => libro.titulo === titulo) )
                 
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])
     
    return (
        
        <div className="">
            {
                loading
                    ? <h2>Cargando...</h2>
                    
                    : <DetalleLibro libro={libro}/>
            }
        </div>
    )
}
