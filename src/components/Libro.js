export const Libro = ({ libro }) => {
    return (
        <div className='libro'>
            <h3>{libro.titulo}</h3>
            <img src={libro.img} alt={libro.nombre} />
            <p>genero: {libro.genero}</p>
            {/* <Link to={`/detail/${libro.id}`} className='btn btn-primary'>Ver más</Link> */}
        </div>
    )
}