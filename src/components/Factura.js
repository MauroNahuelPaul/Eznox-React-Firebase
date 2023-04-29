import { Link } from "react-router-dom"

export const Factura = ({ item }) => {
    return (
        <Link to={`./${item.id}`}>
            <div>
                <h3>ID: {item.id}</h3>
                <span>Fecha: {item.data.fecha}</span>
                <span>Cantidad items: {item.data.items.length}</span>
                <span>Monto: ${item.data.total}</span>
            </div>
        </Link>
    )
}