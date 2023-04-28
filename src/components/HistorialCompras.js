import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase/config"
import { LoginContext } from "../context/LoginContext"
import { useContext, useEffect, useState } from "react"
import { Factura } from "./Factura"
import { Loader } from "./Loader"

export const HitorialCompras = () => {
    const { user } = useContext(LoginContext)
    const [loading, setLoading] = useState(true)
    const [idFacturas, setIdFacturas] = useState([])
    const [facturasUser, setFacturasUser] = useState([])
    const [facturas, setFacturas] = useState([])
    useEffect(() => {
        const facturasRef = collection(db, "ordenes")
        getDocs(facturasRef)
            .then((res) => {
                setFacturas(res.docs.map((doc) => doc.data()))
                setIdFacturas(res.docs.map((doc) => doc.id))
                setFacturasUser(facturas.filter(elem => elem.usuario.email == user.email))
                // setFacturasUser(facturasUser.map((elem,index)=>elem.id=idFacturas[index]))


            })
            .finally(() => {
                setLoading(false)
            })
    }, [loading])
    return (
        <div>
            {console.log(facturasUser)}
            {
                loading
                    ? <Loader />
                    : facturasUser.map((factura) => <Factura key={factura.id} item={factura} />)
            }
        </div>
    )
}