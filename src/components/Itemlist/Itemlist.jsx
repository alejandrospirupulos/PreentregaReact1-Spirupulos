import React from 'react'
import { ItemCard } from '../ItemCard/ItemCard'

export const Itemlist = ({productos}) => {
  return (
    <section className="list-container"> 
            <h2 className="list-title">Productos</h2> 
            <hr />
            <div className='divi'>
            { productos.map((item) => <ItemCard key={item.id} item={item} /> )}
            </div>
        </section>
  );
};
