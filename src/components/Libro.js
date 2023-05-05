import { Link } from "react-router-dom"



export const Libro = ({ libro }) => {
    let img = `../imgs-portadas/${libro.titulo}.jpg`
    return (
        <Link to={`/detalle/${libro.id}`}>

            <div className='libro'>
                <img src={img} alt={libro.titulo} />
                <div>
                    <h3>{libro.titulo}</h3>
                    <p>({libro.año})</p>
                </div>

            </div>
        </Link>
    )
}