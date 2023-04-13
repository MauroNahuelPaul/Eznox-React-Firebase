import { useContext } from "react"
import { LoginContext } from '../context/LoginContext'
export const CuentaInfo = () =>{
    const { user, logout } = useContext(LoginContext)
    return(
        <div>
            <h6>Bienvenido: {user.id}</h6>
        </div>
    )
}