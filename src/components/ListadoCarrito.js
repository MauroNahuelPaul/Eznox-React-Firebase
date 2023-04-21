import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { FaTrashAlt } from "react-icons/fa"
import { Link } from "react-router-dom"

const Cart = () => {

    const { cart, emptycart, totalCart, removerItem } = useContext(CartContext)


    if (cart.length === 0) {
        return (
            <div className="">
                <h2>Tu carrito está vacío</h2>
                <hr/>
                <p>Andá a comprar algo</p>
                <Link to="/explorar" className="">Volver</Link>
            </div>
        )
    }

    return (
        <div className="">
            <h2>Tu compra</h2>
                <hr/>

                {
                    cart.map(item => (
                        <div key={item[0]}>
                            <h4>{item[1].titulo}</h4>
                            <p>Precio: ${item[1].precio}</p>
                            <button onClick={() => removerItem(item[0])}><FaTrashAlt /></button>
                            <hr/>
                        </div>
                    ))
                }

                <h4>Total: ${ totalCart() }</h4>
            
            <button className="" onClick={emptycart}>Vaciar carrito</button>
            <Link className="" to="/checkout">Terminar mi compra</Link>
        </div>
    )
}

export default Cart