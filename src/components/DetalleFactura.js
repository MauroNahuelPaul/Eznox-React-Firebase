
export const DetalleFactura = ({ factura, id }) => {

    return (
        <div className="">
            <h2>ID:{id}</h2>
            <span>Fecha: {factura.fecha}</span>
            <h4>Elementos:</h4>
            {factura.items.map(elem =>
                <div>
                    <h5>Titulo: {elem.titulo}</h5>
                    <span>Precio: ${elem.precio}</span>
                </div>
            )}
            <span>Total: {factura.total}</span>

        </div>
    )
}