import { useContext } from 'react'
import { LoginContext } from '../context/LoginContext'
import { Link } from 'react-router-dom'
import { Formik } from 'formik'
import * as Yup from 'yup'
export const CuentaLogin = () => {
    const { login } = useContext(LoginContext)

    const Login = async (values) => {
        login(values)
    }
    const schema = Yup.object().shape({
        email: Yup.string()
            .required("Este campo es requerido")
            .min(5, "Mínimo 5 caracteres")
            .max(30, "Máximo 30 caracteres"),
        password: Yup.string()
            .required("Este campo es requerido")
            .min(3, "Mínimo 3 caracteres")
            .max(30, "Máximo 30 caracteres"),
    })

    return (
        <div className="formulario-ingreso">
            <div className="recuadro__apartado">
                <h2 className="apartado">Iniciar sesión</h2>
            </div>
            <Formik
                validationSchema={schema}
                initialValues={{
                    email: '',
                    password: ''
                }}
                onSubmit={Login}
            >
                {({ values, errors, handleChange, handleSubmit }) => (
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
                            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                            <input
                                onChange={handleChange}
                                name="password"
                                value={values.password}
                                type={'password'}
                                className="formulario__input"
                                placeholder='Contraseña'
                            />
                            {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                        </div>
                        <div className="formulario-ingreso__direcciones">
                            <ul>
                                <li className=""><Link >¿Olvidaste tu contraseña?</Link></li>
                                <li className=""><a href='#formulario-registrarse'>¿No tienes cuenta?</a></li>
                            </ul>
                        </div>
                        <button className="" type="submit">Iniciar sesión</button>
                    </form>)}
            </Formik>
        </div>
    )

}