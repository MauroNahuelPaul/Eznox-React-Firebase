import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { LoginContext } from "../context/LoginContext"
import { Link } from "react-router-dom"
import { WishContext } from "../context/WishContext"
import StartToastifyInstance from "toastify-js"


///////////// POR TERMINAR

const Wish = () => {
    const { agregarAlCarrito, isInCart } = useContext(CartContext)
    const { removerItemWish } = useContext(WishContext)
    const { user } = useContext(LoginContext)
    const [a, setA] = useState(0)
    const agregarLibroCarito = (id, item) => {
        if (isInCart(id)) {
            StartToastifyInstance({
                text: `'${item.titulo}' ya se encuentra dentro de su listado de compras`,
                duration: 3000,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                    background: "$primary-color",
                },
            }).showToast();
        }
        else {
            agregarAlCarrito([id, item])
            StartToastifyInstance({
                text: `Se ha agregado '${item.titulo}' a tu listado de compras\nPodras verlo reflejado en cuenta>Lista de compras`,
                duration: 3000,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                    background: "$primary-color",
                },
            }).showToast();
        }

    }
    const borraElemento = (item) => {
        StartToastifyInstance({
            text: `Se ha borrado con exito`,
            duration: 3000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "$primary-color",
            },
        }).showToast();
        removerItemWish(item[0])
        setA(1)

    }
    if (user.deseados.length === 0) {
        return (
            <div className="">
                <h2>Tu lista de deseados está vacío</h2>
                <hr />
                <p>Ve a buscar algo que te guste</p>
                <Link to="/explorar" className="">Volver</Link>
            </div>
        )
    }

    return (
        <div className="">
            <h2>Tus deseados</h2>
            <hr />

            {
                user.deseados.map(item => (
                    <div key={item[0]}>
                        <h4>{item[1].titulo}</h4>
                        <p>Precio: ${item[1].precio}</p>
                        <bottom onClick={() => agregarLibroCarito(item[0], item[1])}>Adquerir</bottom>
                        <button onClick={() => borraElemento(item)}>Borrar</button>
                        <hr />
                    </div>
                ))
            }
        </div>
    )
}

export default Wish