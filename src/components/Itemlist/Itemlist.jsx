import React from 'react'
import { ItemCard } from '../ItemCard/ItemCard'

export const Itemlist = ({productos}) => {
  return (
    <section className="list-container"> 
            <h2 className="list-title">Productos</h2> 
            <hr />
            <div className='divi'>
            <p>{ productos.length > 0 && productos[0].name}</p>
            { productos.map((item) => <ItemCard item={item} /> )}
            </div>
        </section>
  )
}
