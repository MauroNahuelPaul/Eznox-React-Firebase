export const Factura = ({item}) => {
    return(
        <div>
            {/* {console.log(item)} */}
            <h5>Cantidad items: {item.items.length}</h5>
            <span>Monto {item.total}</span>
        </div>
    )
}