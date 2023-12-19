/* import React from 'react'



const ItemDetail = ({ item }) => {
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
import React from 'react'; */

const ItemDetail = ({ item }) => {
  // Verifica si item está definido antes de acceder a sus propiedades
  if (!item) {
    return <div>No hay información disponible.</div>;
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
      <button>Agregar al carrito</button>
    </div>
  );
};

export default ItemDetail; 
