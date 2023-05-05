import StartToastifyInstance from "toastify-js";

export const AdqueridoDetalleLibro = ({ libro }) => {
    const agregarLibroCarito = () => {
        StartToastifyInstance({
            text: 'Proximamente',
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
                        <button onClick={agregarLibroCarito}>Leer</button>
                    </div>
                </div>
            </div>
            <p className="sinopsis">Sinopsis: {libro.sinopsis}</p>

        </div>
    )
}