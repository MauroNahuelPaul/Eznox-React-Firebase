import { useContext, useState } from 'react'
import { LoginContext } from '../context/LoginContext'
// import './LoginScreen.scss'

const LoginScreen = () => {
    const { login } = useContext(LoginContext)

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
    
    return (
        <div className="login-container">
            <div className="login">
                <h2>Ingresar</h2>
                <hr/>

                <form onSubmit={handleSubmit}>
                    <input 
                        onChange={handleChange}
                        name="email"
                        value={values.email}
                        type={'email'}
                        className="form-email"
                        placeholder='Correo electrónico'
                    />

                    <input 
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        type={'password'}
                        className="form-pass"
                        placeholder='Contraseña'
                    />

                    <button className='form-boton' type='submit'>Ingresar</button>
                </form>
            </div>
        </div>
    )
}

export default LoginScreen