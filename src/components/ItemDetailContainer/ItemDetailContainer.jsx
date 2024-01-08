import React, { useEffect, useState } from 'react';
import  pedirDatos  from '../../utils/utils';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDatail';

export const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(null);

  const { itemId } = useParams();


  useEffect(() => {
    setLoading(true);

    pedirDatos()
      .then((data) => {
      
        setItem(data.find((producto) => producto.id === Number(itemId)));
      })
      .finally(() => setLoading(false));
  }, [itemId]); // Agregué itemId como dependencia para que el efecto se ejecute cuando cambie

  return (
    <>
      {loading ? (
        <h2>Cargando...</h2>
      ) : (
        item ? (
          <ItemDetail item={item} />
        ) : (
          <h2>Producto no encontrado</h2>
        )
      )}
    </>
  );
};

export default ItemDetailContainer; 



