
import { useState, useEffect } from "react"
import { pedirDatos } from "../../utils/utils"
import { Itemlist } from "../Itemlist/Itemlist"
import { useParams } from "react-router-dom"
import Spinner from "../Loader/Spinner"

const Itemlistcontainer = () => {

  const [productos,setProductos] = useState([])
  const [loading,setLoading ] = useState(true)

  const {categoriaId} = useParams()

useEffect(() => {
  setLoading(true)

  pedirDatos() // <= Promise 
    .then((data) => {

const items = categoriaId 
              ? data.filter(productos => productos.categoria === categoriaId )
            : data
      setProductos(items)
    })
    .finally(() => setLoading(false))
  },[categoriaId])

    return (
        <>
          {
            loading
            ? <Spinner/>
            : <Itemlist productos={productos}/>
          }
        </>
    )
}
export default Itemlistcontainer


