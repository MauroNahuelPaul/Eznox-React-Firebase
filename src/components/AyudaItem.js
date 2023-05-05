export const AyudaItem = ({titulo, texto}) => {
    return (
        <div className="ayudaItem">
            <h2 className="ayudaItem__titulo" id="headingOne">
                {titulo}
            </h2>
            <div className="ayudaItem__Texto">
                <p className="">
                    {texto}
                </p>
            </div>
        </div>
    )
}