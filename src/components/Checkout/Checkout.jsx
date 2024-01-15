import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { db } from '../firebase/config'
import { collection, addDoc, updateDoc, getDoc, writeBatch, query, where, documentId, getDocs, doc } from 'firebase/firestore'
import { Await } from 'react-router-dom'


const Checkout = () => {

    const { cart, totalCart, clearCart } = useContext(CartContext)

    const [values, setValues] = useState({
        nombre: "",
        direccion: "",
        email: "",
    })

    const [orderId, setOrderId] = useState(null)

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    }

    const handlerSubmit = async (e) => {
        e.preventDefault();

        const orden = {
            cliente: values,
            items: cart,
            total: totalCart(),
            fecha: new Date()
        }

        const batch = writeBatch(db)
        const ordersRef = collection(db, "orders")
        const productsRef = collection(db, 'productos')

        const outOfStock = []
        const promesas = cart.map((item) => {
            const ref = doc(productsRef, item.id)
            return getDoc(ref)
        })

        const docs = await Promise.all(promesas)
        console.log(docs)

        docs.forEach(doc => {
            const item = cart.find(prod => prod.id === doc.id)
            const stock = doc.data().stock

            if (stock >= item.cantidad) {
                batch.update(doc.ref, {
                    stock: stock - item.cantidad
                })
            } else {
                outOfStock.push(item)
            }
        })

        if (outOfStock.length === 0) {
            batch.commit()
                .then(() => {
                    addDoc(ordersRef, orden).then((doc) => {
                        setOrderId(doc.id)
                        clearCart()
                    })
                })
        } else {
            swal.fire("Hay items sin stock")
        }
    };

    if (orderId) {
        return (
            <div>
                <h2>Gracias por tu compra</h2>
                <hr />
                <p>Tu codido de orden es:{orderId}</p>
            </div>
        );
    }

    return (
        <div>
            <h2>Checkout</h2>
            <hr />
            <h4>Ingresa tus datos:</h4>
            <form onSubmit={handlerSubmit}>
                <input value={values.nombre} onChange={handleInputChange} type="text" placeholder="Nombre" name="nombre" />
                <input value={values.direccion} onChange={handleInputChange} type="text" placeholder="Direccion" name="direccion" />
                <input value={values.email} onChange={handleInputChange} type="email" placeholder='email' name='email' />
                <button type="submit">Enviar</button>
            </form>

        </div>
    )
}
export default Checkout

