import { useContext, useState } from 'react'
import { LoginContext } from '../context/LoginContext'
import { Link } from 'react-router-dom'
// import './LoginScreen.scss'

const LoginScreen = () => {
    const { user, login } = useContext(LoginContext)

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        login(values)
    }
    if (!user.logged) {
        return (
            <div className="">
                <div className="formulario-ingreso">
                    <div className="recuadro__apartado">
                        <h2 className="apartado">Iniciar sesión</h2>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='formulario-ingreso__datos'>
                            <input
                                onChange={handleChange}
                                name="email"
                                value={values.email}
                                type={'email'}
                                className="formulario__input"
                                placeholder='Correo electrónico'
                            />

                            <input
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                                type={'password'}
                                className="formulario__input"
                                placeholder='Contraseña'
                            />
                        </div>
                        <div className="formulario-ingreso__direcciones">
                            <ul>
                                <li className=""><Link className="">¿Olvidaste tu contraseña?</Link></li>
                                <li className=""><Link className="">¿No tienes cuenta?</Link></li>
                            </ul>
                        </div>
                        <button className="" type="submit">Iniciar sesión</button>
                    </form>
                </div>
            </div>
        )
    }
    else {
        return (<h2>Hola</h2>)
    }
}

export default LoginScreen