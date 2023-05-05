import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"

const Cart = () => {

    const { cart, emptycart, totalCart, removerItem } = useContext(CartContext)


    if (cart.length === 0) {
        return (
            <div className="">
                <h2>Tu carrito está vacío</h2>
                <hr />
                <p>Andá a comprar algo</p>
                <Link to="/explorar" className="">Volver</Link>
            </div>
        )
    }

    return (
        <div className="">
            <div className="apartado-container">
                <div className="apartado">
                    <h1 className="">Tu compra</h1>
                </div>
            </div>
            {
                cart.map(item => (
                    <div className="item" key={item[0]}>
                        <h4 className="item__titulo">{item[1].titulo}</h4>
                        <p className="item__autor">Autor: {item[1].autor}</p>
                        <p className="item__precio">Precio: ${item[1].precio}</p>
                        <button className="item__boton" onClick={() => removerItem(item[0])}>Borrar</button>
                    </div>
                ))
            }
            <div className="detalleCarrito">
                <h4 className="detalleCarrito__total">Total: ${totalCart()}</h4>
                <button className="detalleCarrito__boton" onClick={emptycart}>Vaciar carrito</button>
                <Link className="detalleCarrito__boton" to="/checkout">Terminar mi compra</Link>
            </div>
        </div>
    )
}

export default Cart