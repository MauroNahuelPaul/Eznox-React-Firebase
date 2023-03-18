import { Libro } from "./Libro"

export const LibrosContainer = ({ libros }) => {
    
    return (

        <div className='librosContainer'>
            {libros.map((libro) => <Libro key={libro.id} libro={libro} />)}
        </div>

    )

}