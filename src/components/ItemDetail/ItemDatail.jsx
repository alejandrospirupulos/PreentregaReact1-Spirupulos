import React, { useState } from 'react'
import Quantityselector from './Quantityselector'
import { ColorSelector } from './ColorSelector'

const ItemDetail = ({ item }) => {

  const [cantidad, setCantidad] = useState(1)
  const [color, setColor] = useState("")
  
   // console.log("Item detail", color)

  const handlerAgregar = () => {
    const itemToCart = {
      ...item,
      cantidad,
      color
    }

    console.log(itemToCart)
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
      </div>

      <Quantityselector

        cantidad={cantidad}
        stock={item.stock}
        setCantidad={setCantidad}
      />


    <ColorSelector setColor={setColor}/>

      <button onClick={handlerAgregar}>Agregar al carrito</button>

    </div>
  )
}
export default ItemDetail

