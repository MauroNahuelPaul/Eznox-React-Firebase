import { AyudaItem } from "./AyudaItem";

export const Ayuda = () => {

    return (

        <main className="">
            <div className="apartado-container">
                <div className="apartado">
                    <h1 className="">CENTRO DE<br />AYUDA</h1>
                </div>
            </div>
            <div className="ayudaItemsContainer">
                <AyudaItem titulo="¿Cómo cambio la información de pago?" texto="Únete a una comunidad de millones de usuarios de todo el mundo que disfrutan acceso
                                ilimitado a contenido de todo el mundo.
                                Como miembro de Eznox, se te cobrará una vez por mes en la fecha de suscripción. No hay
                                contratos, cargos por cancelación ni compromisos.
                                Tienes total libertad para cambiar de
                                plan o cancelar online cuando quieras si decides que Eznox no es para ti."/>

                <AyudaItem titulo="Planes y precios" texto="Eznox ofrece un único plan que te permitirá acceder a todo el contenido.
                                
                                Como miembro de Eznox, se te cobrará una vez por mes en la fecha de suscripción."/>
                <AyudaItem titulo="Cómo descargar títulos para ver offline" texto="Para poder leer offline cuando lo desees, descárgalas de la app de
                                Eznox.
                                Para descargar contenido de Eznox, necesitas tener instalada la versión más reciente
                                de la aplicación en cualquier dispositivo."/>
            </div>
        </main>


    );
} 