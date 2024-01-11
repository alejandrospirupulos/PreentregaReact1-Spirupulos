import React, { useEffect, useState } from 'react';
import  pedirDatos  from '../../utils/utils';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDatail';
import { db } from '../firebase/Config';
import { DocumentSnapshot, doc, getDoc } from 'firebase/firestore';


export const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(null);

  const { itemId } = useParams(null);


  useEffect(() => {
    setLoading(true);

  // 1 Arma la refencia
  const docRef = doc(db, 'productos' , itemId)
  // 2 llamar a la ref
  getDoc(docRef)
  .then((docSnapshot) => {
    const doc = {
      ...docSnapshot.data(),
      id: docSnapshot.id
    }
    setItem(doc)
  })
  
  .finally(()=> setLoading(false))

  }, []); 

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



