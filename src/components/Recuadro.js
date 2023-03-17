
export const Recuadro = ({ titulo, img, tituloSec, texto }) => {
    return (
        <div className="nosotros">
            <h2>{titulo}</h2>
            <div className="container-recuadro">
                <div className="recuadro">
                    <div className="recuadro__img">
                        <img src={img} alt="Libro" />
                    </div>
                    <div className="recuadro__texto">
                        <h3>{tituloSec}</h3>
                        <p>{texto}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}