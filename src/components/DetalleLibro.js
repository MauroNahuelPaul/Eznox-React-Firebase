import StartToastifyInstance from "toastify-js";
import { useCartContext } from "../context/CartContext";
import { useWishContext } from "../context/WishContext";




export const DetalleLibro = ({ libro, id }) => {
    const { agregarAlCarrito, isInCart } = useCartContext()
    const { agregarAlWishList, isInWish } = useWishContext()
    const agregarAlWish = () => {
        if(isInWish(id)){
            StartToastifyInstance({
                text: `'${libro.titulo}' ya se encuentra dentro de su listado de deseados`,
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
            
            agregarAlWishList([id, libro])
            StartToastifyInstance({
                text: `Se ha agregado '${libro.titulo}' a tu listado de deseados\nPodras verlo reflejado en cuenta>Lista de deseados`,
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
    const agregarLibroCarito = () => {
        if (isInCart(id)) {
            StartToastifyInstance({
                text: `'${libro.titulo}' ya se encuentra dentro de su listado de compras`,
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
            agregarAlCarrito([id, libro])
            StartToastifyInstance({
                text: `Se ha agregado '${libro.titulo}' a tu listado de compras\nPodras verlo reflejado en cuenta>Lista de compras`,
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
    return (
        <div className="libroDetalle">

            <div className="libroInfo">

                <img className="libroInfo__img" src={`../imgs-portadas/${libro.titulo}.jpg`} alt={libro.titulo} />
                <div className="libroInfo__datos">
                    <h2 className="titulo">{libro.titulo}</h2>
                    <h3 className="autor">Autor: {libro.autor}</h3>
                    <hr />

                    <p className="año">Fecha de salida: {libro.año}</p>
                    <p className="genero">Genero: {libro.genero}</p>
                    <div>
                        <p className="precio">${libro.precio}</p>
                        <button onClick={agregarAlWish}>Agregar a la lista de deseados</button>
                        <bottom onClick={agregarLibroCarito}>Adquerir</bottom>
                    </div>
                </div>
            </div>
            <p className="sinopsis">Sinopsis: {libro.sinopsis}</p>

        </div>
    )
}