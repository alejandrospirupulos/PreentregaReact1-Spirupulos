import React, { useContext, useState } from 'react'
import Quantityselector from './Quantityselector'
import { ColorSelector } from './ColorSelector'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({ item }) => {
  
  const {addToCart, isInCart} = useContext(CartContext)
  const [cantidad, setCantidad] = useState(1)
  
  const handlerAgregar = () => {
    const itemToCart = {
      ...item,
      cantidad
    }

    addToCart(itemToCart)
  }
  return (
    <div>

      <h3 className="text-2x1 font-semibold">{item.name}</h3>
      <hr />
      <div>
        <img src={item.img} alt={item.name} />
      </div>
      <p>{item.description}</p>
      <div>
        <p className="text-xl font-bold">Precio: $ {item.price}</p>
     
      {
        isInCart(item.id )
        ? <button to="/cart">Terminar mi compra</button>
        : <>
            <Quantityselector
        cantidad={cantidad}
        stock={item.stock}
        setCantidad={setCantidad}
      />
      <button onClick={handlerAgregar}>Agregar al carrito</button>
         
          </>
      }
      
     
      </div>
    </div>
  )
}
export default ItemDetail

