import React from 'react'
import { Link } from 'react-router-dom'

export const ItemCard = ({ item }) => {
  return (
    <article className='articulo'>
      <h3 className="text-2x1 font-semibold">{item.name}</h3>
      <img src={item.img} alt={item.name} />

      <hr />
      <p>{item.description}</p>
      <p className="text-xl font-bold">Precio: $ {item.price}</p>
      {item.stock <= 10 && <p>Quedan solo {item.stock} unidades !</p> }
      <button>
        <Link to={`/item/${item.id}`}>Ver mas</Link>
      </button>
    </article>
  )
}
