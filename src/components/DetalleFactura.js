
export const DetalleFactura = ({ factura, id }) => {

    return (
        <div className="itemFactura">
            <h2 className="itemFactura__titulo">ID:{id}</h2>
            <span className="itemFactura__fecha">Fecha: {factura.fecha}</span>
            <h4 className="itemFacturaElem">Elementos:</h4>
            {factura.items.map(elem =>
                <div className="itemFacturaElemContainer">
                    <h5 className="itemFacturaElemContainer__titulo">Titulo: {elem.titulo}</h5>
                    <p className="itemFacturaElemContainer__autor">Autor: {elem.autor}</p>
    
                    <p className="itemFacturaElemContainer__precio">Precio: ${elem.precio}</p>
                </div>
            )}
            <p className="itemFacturaTotal">Total: {factura.total}</p>

        </div>
    )
}