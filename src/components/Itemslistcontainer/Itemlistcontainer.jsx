

import React, { useState, useEffect } from "react";
import { Itemlist } from "../Itemlist/Itemlist";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { collection, getDocs, where, query, doc } from "firebase/firestore";
import { db } from "../firebase/Config";

const Itemlistcontainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoriaId } = useParams();

  useEffect(() => {
    setLoading(true);

    // 1- Armar una referencia
    const productosRef = collection(db, "productos");
    const docsRef = categoriaId
                    ? query (productosRef,where('categoria', '==',categoriaId))
                    : productosRef
    // 2- Llamar a esa referencia
    getDocs(docsRef)
    .then((querySnapshot) => {
      const docs = querySnapshot.docs.map(doc => {
        return{
          ...doc.data(),
          id: doc.id
        }
      })
        // console.log(docs)
        setProductos(docs)
      })
      .finally(() => setLoading(false))
      }, [categoriaId]);

  return (
    <>
      {loading ? <Loader /> : <Itemlist productos={productos} />}
    </>
  );
};

export default Itemlistcontainer;





