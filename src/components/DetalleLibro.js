export const DetalleLibro = ({ libro, id }) => {
    function agregarLibroCarito() {
        console(id)
    }
    return (
        <div className="libroDetalle">

            <img className="img" src={libro.img} alt={libro.titulo} />
            <div>
                <h2 className="titulo">{libro.titulo}</h2>
                <p className="sinopsis">Sinopsis: {libro.sinopsis}</p>
                <h3 className="autor">Autor: {libro.autor}</h3>
                <p className="año">Años: {libro.año}</p>
                <p className="genero">Genero: {libro.genero}</p>
                <bottom onClick={ agregarLibroCarito}>Adquerir</bottom>
            </div>

        </div>
    )
}