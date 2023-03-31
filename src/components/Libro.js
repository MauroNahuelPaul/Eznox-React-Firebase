import { Link } from "react-router-dom"

export const Libro = ({ libro }) => {
    return (
        <Link to={`/detalle/${libro.id}`}>
            <div className='libro'>
                <h3>{libro.titulo}</h3>
                <img src={libro.img} alt={libro.nombre} />
                <p>Genero: {libro.genero}</p>
            </div>
        </Link>
    )
}