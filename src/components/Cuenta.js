import { useContext } from 'react'
import { LoginContext } from '../context/LoginContext'
import { CuentaLogin } from './CuentaLogin'
import { CuentaRegister } from './CuentaRegister'
import { CuentaInfo } from './CuentaInfo'
const Cuenta = () => {
    const { user} = useContext(LoginContext)
    
    if (!user.logged) {
        return (
            <div className="">
                <CuentaLogin/>
                <CuentaRegister/>
            </div>
        )
    }
    else {
        return (
            <div>
                <CuentaInfo/>
            </div>
        )
    }
}

export default Cuenta