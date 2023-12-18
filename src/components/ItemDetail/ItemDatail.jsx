import React from 'react'

export const ItemDetail = ({Item}) => {
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
    <button>Agregar al carrito</button>
   
    </div>
  )
}
export default ItemDetail