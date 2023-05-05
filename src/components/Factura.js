import { Link } from "react-router-dom"

export const Factura = ({ item }) => {
    return (
        <Link to={`./${item.id}`}>
            <div className="item">
                <h3 className="item__titulo">ID: {item.id}</h3>
                <p className="item__precio">Fecha: {item.data.fecha}</p>
                <p className="item__precio">Cantidad items: {item.data.items.length}</p>
                <p className="item__precio">Monto: ${item.data.total}</p>
            </div>
        </Link>
    )
}