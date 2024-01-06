import React, { useContext } from 'react'
import cartIcon from '../../assets/cart.svg'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

 const CartWidget = () => {


    const {itemsInCart} = useContext(CartContext)
   
   
  return (
    <Link to="/cart">
        <img src={cartIcon} alt="Cart icon" />
        <span>{itemsInCart ()}</span>
    </Link>
  )
}
export default CartWidget; 
