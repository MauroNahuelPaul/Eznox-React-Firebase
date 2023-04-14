import { Link } from "react-router-dom"



export const Libro = ({ libro }) => {
    return (
        <Link to={`/detalle/${libro.id}`}>
            <div className='libro'>
                <img src={`../imgs-portadas/${libro.titulo}.jpg`} alt={libro.titulo} />
                <h3>{libro.titulo}</h3>
            </div>
        </Link>
    )
}