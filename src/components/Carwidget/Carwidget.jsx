import React from 'react'
import { IoCartOutline } from "react-icons/io5";
import logo from '../../assets/shopping_cart_checkout_FILL0_wght400_GRAD0_opsz24.svg'

export const Carwidget = () => {
  return (
   <div className='carwidget'>
      <img src={logo} alt="logo" className='carrito'/>
        <h1 className='title-carwit'>0</h1>
   
   </div> 

    
  )
}
export default Carwidget


