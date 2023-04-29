import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase/config"
import { LoginContext } from "../context/LoginContext"
import { useContext, useEffect, useState } from "react"
import { Factura } from "./Factura"
import { Loader } from "./Loader"

export const HitorialCompras = () => {
    const { user } = useContext(LoginContext)
    const [loading, setLoading] = useState(true)
    const [facturasUser, setFacturasUser] = useState([])
    useEffect(() => {
        let facturasComb = []
        const facturasRef = collection(db, "ordenes")
        getDocs(facturasRef)
            .then((res) => {
                let facturas=(res.docs.map((doc) => doc.data()))
                let idFacturas=(res.docs.map((doc) => doc.id))
                for (let i = 0; i < facturas.length; i++) {
                    facturasComb.push({ data:facturas[i], id:idFacturas[i]})
                }
                setFacturasUser(facturasComb.filter(elem => elem.data.usuario.email == user.email))

            })
            .finally(() => {
                setLoading(false)
            })
    }, [loading])
    return (
        <div>
            <h1>Historial de compras de {user.nombre}</h1>
            {
                loading
                    ? <Loader />
                    : facturasUser.map((factura) => <Factura key={factura.id} item={factura} />)
            }
        </div>
    )
}