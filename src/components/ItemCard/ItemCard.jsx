import React from 'react'

export const ItemCard = ({item}) => {
  return (
    <article className='articulo'>
    <img src={item.img} alt={item.name} />
    <h3 className="text-2x1 font-semibold">{item.name}</h3>
    <hr />
    <p>{item.description}</p>
    <p className="text-xl font-bold">Precio: $ {item.price}</p>
    <button>
      <link to={'/item/${item.id}'}>Ver mas</link>
    </button>
    </article>
  )
}
