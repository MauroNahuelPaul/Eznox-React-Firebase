import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { DetalleLibro } from "./DetalleLibro"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase/config"
import { Loader } from "./Loader"



export const DettalleLibroContainer = () => {
    const [libro, setLibro] = useState(null)
    const [loading, setLoading] = useState(true)
    const { id } = useParams()


    useEffect(() => {
        setLoading(true)
        //armar una referencia (sync)
        const docRef = doc(db, "libros", id)
        //llamar a la referencia(async)
        getDoc(docRef)
            .then((res) => {
                setLibro(res.data())
            })
            .finally(() => {
                setLoading(false)
            })
    }, [id])

    return (

        <div className="">
            {
                loading
                    ? <Loader/>
                    : <DetalleLibro libro={libro} />
            }
        </div>
    )
}
