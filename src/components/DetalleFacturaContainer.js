import { useParams } from "react-router-dom"
import { db } from "../firebase/config"
import { doc, getDoc } from "firebase/firestore"
import { Loader } from "./Loader"
import { useEffect, useState } from "react"
import { DetalleFactura } from "./DetalleFactura"

export const DetalleFacturaContainer = () => {
    const [factura, setFactura] = useState(null)
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        setLoading(true)
        //armar una referencia (sync)
        const docRef = doc(db, "ordenes", id)
        //llamar a la referencia(async)
        getDoc(docRef)
            .then((res) => {
                setFactura(res.data())
                console.log(factura)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [id])
    return (

        <div className="">
            {
                loading
                    ? <Loader />
                    : <DetalleFactura factura={factura} id={id} />

            }
        </div>
    )
}