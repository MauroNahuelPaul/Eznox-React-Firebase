import StartToastifyInstance from "toastify-js";
import { useCartContext } from "../context/CartContext";
import { LoginContext } from "../context/LoginContext";
import { useContext } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/config";

export const DetalleLibro = ({ libro, id }) => {
    const { agregarAlCarrito, isInCart } = useCartContext()
    const { user } = useContext(LoginContext)
    const agergarLibroDeseados = async () => {
        user.deseados.push(libro)
        await setDoc(doc(db, "usuarios", `${user.id}`), {...user})
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
                text: `Se ha agregado '${libro.titulo}' a tu listo de compras\nPodras verlo reflejado en cuenta>carro`,
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
                        <button onClick={agergarLibroDeseados}>Agregar a la lista de deseados</button>
                        <bottom onClick={agregarLibroCarito}>Adquerir</bottom>
                    </div>
                </div>
            </div>
            <p className="sinopsis">Sinopsis: {libro.sinopsis}</p>

        </div>
    )
}