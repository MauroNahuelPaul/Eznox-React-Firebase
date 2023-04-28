import { useContext } from "react"
import { LoginContext } from '../context/LoginContext'
import swal from 'sweetalert'
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { Link } from "react-router-dom";

export const CuentaInfo = () => {
    const { user, logout } = useContext(LoginContext)
    const recargar = () => {
        window.location.reload()
    }
    const borrarCuenta = async () => {
        swal("Una vez eliminadala cuenta no habrá forma de recuperarla\nPara continuar con la eliminación\nescriba 'CONFIRMAR'", {
            content: "input",
        })
            .then((value) => {
                if (value === 'CONFIRMAR') {
                    deleteDoc(doc(db, "usuarios", `${user.id}`));
                    swal("Se ha eliminado tu cuenta con exito\nSe reinicira la pagina en breve")
                    setTimeout(recargar, 5000);
                }
            });
    }

    return (
        <div>
            <h5>Bienvenido: {user.nombre} {user.apellido}</h5>
            <hr />
            <Link to="/wish">Lista de deseados</Link>
            <Link to="/cart">Lista de compras</Link>
            <p>Email: {user.email}</p>
            <p>Sexo: {user.sexo}</p>
            <p>Fecha de nacimiento:{user.fechaNacimiento}</p>
            <button onClick={logout}>Cerrar sesión</button>
            <button onClick={borrarCuenta}>Borrar Cuenta</button>
            <Link to="./historialCompras">Hisorial de Compras</Link>
        </div>
    )
}