import React from 'react'
import { Link } from 'react-router-dom'

export const Emtpycart = () => {
  return (
    <section>
    <h2>Tu carrito esta vacio</h2>
           <hr />
           <p>Agregar algun producto a tu carrito</p>
           <button>
               <Link to={"/"}>Volver</Link>
           </button>
</section>
  )
}

export default Emtpycart
