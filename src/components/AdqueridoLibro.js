import { Link } from "react-router-dom"



export const AdqueridoLibro = ({ libro, id }) => {
    return (
        <Link to={`/adqueridoDetalle/${id}`}>
            <div className='libro'>
                <img src={`../imgs-portadas/${libro.titulo}.jpg`} alt={libro.titulo} />
                <h3>{libro.titulo}</h3>
            </div>
        </Link>
    )
}