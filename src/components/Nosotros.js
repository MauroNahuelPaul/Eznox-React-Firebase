import libro from './Libro.jpg'
export const Nosotros = () => {
    return(
        <div>
            <h2>NOSOTROS</h2>
            <div>
                <img src={libro} alt="Libro"/>
            </div>
            <div>
                <h3>Libros encuadernados. Infinidad de oportunidades.</h3>
                <p>Entra en un mundo de palabras y oraciones, visuales e información. </p>
            </div>
        </div>
        )
}