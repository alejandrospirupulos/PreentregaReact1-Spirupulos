
import React, { useState, useEffect } from "react";
import { pedirDatos } from "../../utils/utils";
import { Itemlist } from "../Itemlist/Itemlist";
import { useParams } from "react-router-dom";

const Itemlistcontainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoriaId } = useParams();

  useEffect(() => {
    setLoading(true);

    pedirDatos()
      .then((data) => {
        const items = categoriaId
          ? data.filter((producto) => producto.categoria === categoriaId)
          : data;
        setProductos(items);
      })
      .finally(() => setLoading(false));
  }, [categoriaId]);

  return (
    <>
      {loading ? <h2>Loading...</h2> : <Itemlist productos={productos} />}
    </>
  );
};

export default Itemlistcontainer;




