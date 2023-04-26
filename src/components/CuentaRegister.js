import { Formik } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase/config'
import swal from 'sweetalert'

export const CuentaRegister = () => {

    const Registrarse = async (values) => {
        const usuariosRef = collection(db, "usuarios")
        await addDoc(usuariosRef, values)
        swal({
            title: "¡Tu cuenta se ha creado con éxito!",
            text: "Ya puedes ingresar y disfrutar de nuestros servicios",
            icon: "success",
            button: "Continuar",

        })
            .then(() => {
                window.location.reload()
            });

    }

    const schema = Yup.object().shape({
        nombre: Yup.string()
            .required("Este campo es requerido")
            .min(5, "Mínimo 5 caracteres")
            .max(30, "Máximo 30 caracteres"),
        apellido: Yup.string()
            .required("Este campo es requerido")
            .min(3, "Mínimo 3 caracteres")
            .max(30, "Máximo 30 caracteres"),
        email: Yup.string()
            .required("Este campo es requerido")
            .min(3, "Mínimo 3 caracteres")
            .max(70, "Máximo 70 caracteres"),
        contraseña: Yup.string()
            .required("Este campo es requerido")
            .min(3, "Mínimo 3 caracteres")
            .max(50, "Máximo 50 caracteres"),
        confirmarContraseña: Yup.string()
            .oneOf([Yup.ref('contraseña'), null], "Las Contraseñas no coinciden")
            .required("Este campo es requerido")
            .min(3, "Mínimo 3 caracteres")
            .max(50, "Máximo 50 caracteres"),
        fechaNacimiento: Yup.string()
            .required("Este campo es requerido"),
        sexo: Yup.string()
            .required("Este campo es requerido"),

    })
    return (
        <div className='formulario-registrarse' id='formulario-registrarse'>
            <div className="recuadro__apartado">
                <h2 className="apartado">Regístrate</h2>
            </div>
            <Formik
                validationSchema={schema}
                initialValues={{
                    nombre: '',
                    apellido: '',
                    email: '',
                    contraseña: '',
                    confirmarContraseña: '',
                    fechaNacimiento: '',
                    sexo: '',
                    deseados: [],
                    adqueridos: [],
                    

                }}
                onSubmit={Registrarse}
            >
                {({ errors, handleChange, handleSubmit }) => (
                    <form className='formulario-registrarse__datos' onSubmit={handleSubmit}>
                        <div className="datos-personales">
                            <input className="datos-personales__input" type="text" placeholder="Nombres" name="nombre" onChange={handleChange} />
                            <input className="datos-personales__input" type="text" placeholder="Apellidos" name="apellido" onChange={handleChange} />
                        </div>
                        <div className="datos-personales">
                            {errors.nombre ? <p style={{ color: 'red' }}>{errors.nombre}</p> : <p></p>}
                            {errors.apellido && <p style={{ color: 'red' }}>{errors.apellido}</p>}
                        </div>
                        <div className="datos-informacion">
                            <input className="datos-informacion__input" type="email" placeholder="Correo electrónico" name="email" onChange={handleChange} />
                            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                            <input className="datos-informacion__input" type="password" placeholder="Contraseña" name="contraseña" onChange={handleChange} />
                            {errors.contraseña && <p style={{ color: 'red' }}>{errors.contraseña}</p>}
                            <input className="datos-informacion__input" type="password" placeholder="Confirmar contraseña" name="confirmarContraseña" onChange={handleChange} />
                            {errors.confirmarContraseña && <p style={{ color: 'red' }}>{errors.confirmarContraseña}</p>}
                        </div>
                        <div className="datos-nacimiento">
                            <h3 className="datos-nacimiento__titulo">Fecha de Nacimiento:</h3>
                            <div>
                                <input className="datos-nacimiento__input" type="date" name="fechaNacimiento" placeholder="dd-mm-yyyy" min="0001-01-01" max="2030-12-31" onChange={handleChange} />

                                <div>
                                    <div>
                                        <label className="datos-nacimiento__sexo" htmlFor="hombre">Hombre:</label>
                                        <input className="datos-nacimiento__circ" name="sexo" type="radio" value="Hombre" onChange={handleChange} />
                                    </div>
                                    <div>
                                        <label className="datos-nacimiento__sexo" htmlFor="mujer">Mujer:</label>
                                        <input className="datos-nacimiento__circ" name="sexo" type="radio" value="Mujer" onChange={handleChange} />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="datos-nacimiento">
                            <div>
                                {errors.fechaNacimiento ? <p style={{ color: 'red' }}>{errors.fechaNacimiento}</p> : <p></p>}
                                <div>
                                    {errors.sexo ? <p style={{ color: 'red' }}>{errors.sexo}</p> : <p></p>}
                                </div>
                            </div>
                        </div>

                        <Link href="">¿Porqué debo brindar esta información?</Link>
                        <span>
                            Al hacer clic en el Regístrate, muestras tu conformidad con nuestras
                            Condiciones y aceptas haber leído nuestra Política de uso de datos, incluida la sección sobre
                            Uso de cookies.</span>
                        <button type="submit" value="">Regístrate</button>
                    </form>)}
            </Formik>
        </div>)
}