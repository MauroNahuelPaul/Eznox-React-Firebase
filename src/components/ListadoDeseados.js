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
            <div className="arrayVacio">
                <h2 className="arrayVacio__titulo">Tu lista de deseados está vacío</h2>
                <hr />
                <p className="arrayVacio__texto">Ve a buscar algo que te guste</p>
                <Link className="arrayVacio__boton" to="/explorar">Volver</Link>
            </div>
        )
    }

    return (
        <div className="">
            <div className="apartado-container">
                <div className="apartado">
                    <h1 className="">Tus deseados</h1>
                </div>
            </div>

            {
                user.deseados.map(item => (
                    <div key={item[0]} className="item">
                        <h4 className="item__titulo">{item[1].titulo}</h4>
                        <p className="item__autor">Autor: {item[1].autor}</p>
                        <p className="item__precio">Precio: ${item[1].precio}</p>
                        <bottom className="item__boton" onClick={() => agregarLibroCarito(item[0], item[1])}>Comprar</bottom>
                        <button className="item__boton" onClick={() => borraElemento(item)}>Borrar</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Wish