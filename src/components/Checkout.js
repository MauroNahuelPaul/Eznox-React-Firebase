import { useContext, useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { useCartContext } from "../context/CartContext"
import { db } from "../firebase/config"
import { collection, addDoc, arrayUnion, updateDoc, doc } from "firebase/firestore"
import { Formik } from "formik"
import * as Yup from 'yup'
import { LoginContext } from "../context/LoginContext"
import { DateTime } from "luxon"
const schema = Yup.object().shape({
    nombre: Yup.string().min(3, 'Mínimo 3 caracteres').max(30, 'Máximo 30 caracteres').required('Este campo es requerido'),
    direccion: Yup.string().min(4, 'Mínimo 4 caracteres').max(40, 'Máximo 40 caracteres').required('Este campo es requerido'),
    email: Yup.string().email('El email no es válido').required('Este campo es obligatorio')
})

const Checkout = () => {
    const { cart, totalCart, emptycart } = useCartContext()
    const [orderId, setOrderId] = useState(null)
    const { user } = useContext(LoginContext)
    const userAux= user
    delete userAux.deseados
    delete userAux.adqueridos
    const createOrder = async (values) => {
        
        const orden = {
            usuario: userAux,
            cliente: values,
            items: cart.map(item => item[1]),
            fecha : DateTime.now().toLocaleString(),
            total: totalCart()
        }
        const docRef = await addDoc(collection(db, "ordenes"), orden)
        const useRef = doc(db, "usuarios", `${user.id}`);
        cart.map(item => updateDoc(useRef, {
            adqueridos: arrayUnion({ ...item })
        }))

        setOrderId(docRef.id)
        emptycart()
    }


    if (orderId) {
        return (
            <div className="container my-5">
                <h2>Tu compra ha sido exitosa</h2>
                <hr />
                <p>Tu código de orden es: {orderId}</p>

                <Link to="/">Volver</Link>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/" />
    }

    return (
        <div className="container my-5">
            <h2>Terminar mi compra</h2>
            <hr />

            <Formik
                initialValues={{
                    nombre: '',
                    direccion: '',
                    email: ''
                }}
                onSubmit={(values) => {
                    // console.log(values)
                    createOrder(values)
                }}
                validationSchema={schema}
            >
                {({
                    values, handleChange, handleSubmit, errors
                }) => (
                    <form onSubmit={handleSubmit}>
                        <input
                            className=""
                            onChange={handleChange}
                            type="text"
                            name="nombre"
                            value={values.nombre}
                            placeholder="Tu nombre"
                        />
                        {errors.nombre && <p>{errors.nombre}</p>}

                        <input
                            className=""
                            onChange={handleChange}
                            type="text"
                            name="direccion"
                            value={values.direccion}
                            placeholder="Tu dirección"
                        />
                        {errors.direccion && <p>{errors.direccion}</p>}

                        <input
                            className=""
                            onChange={handleChange}
                            type="email"
                            name="email"
                            value={values.email}
                            placeholder="Tu email"
                        />
                        {errors.email && <p>{errors.email}</p>}

                        <button className="" type="submit">Enviar</button>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default Checkout