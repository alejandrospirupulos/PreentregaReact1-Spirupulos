import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import trashIcon from '../../assets/trash.svg'
import { UserContext } from '../ItemDetail/UserContext'
import { Link } from 'react-router-dom'
import { Emtpycart } from './Emtpycart'


const CartView = () => {
    const { cart, totalCart, clearCart, removeItem } = useContext(CartContext)
    const { user } = useContext(UserContext)
    
    if (!user.email) return <h2>No hay usario registrado</h2>
    if(cart.length === 0) return <Emtpycart/>
 

    return (
        <section>
         
  <p>bienvenido:{user.email}</p>
                        <h2>Tu compra</h2>
                        <hr />

                        <ul>
                            {
                                cart.map((item) => (
                                    <li key={item.id}>
                                        <img src={item.img} alt="cart img" />
                                        <div>
                                            <h3>{item.name}</h3>
                                            <p>${item.price * item.cantidad}</p>
                                            <p>cantidad: {item.cantidad}</p>
                                            <button onClick={() => removeItem(item.id)}>
                                                <img src={trashIcon} alt="trash icon" />
                                            </button>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                        <h4>TOTAL:${totalCart()}</h4>
                        <button onClick={clearCart}>Vaciar carrito</button>
                        <button><Link to={"/checkout"}>Terminar mi compra</Link></button>
                    
            
        </section>
    )
}
export default CartView