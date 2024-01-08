import { useState, useEffect } from "react"
import { Itemlist } from "../Itemlist/Itemlist"
import { useParams } from "react-router-dom"
import Loader from "../Loader/Loader";
import { collection, getDocs, query,where} from "firebase/firestore";
import { db } from "../../firebase/config";


const Itemlistcontainer = () => {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  const { categoriaId } = useParams()

  useEffect(() => {
    setLoading(true)

    // 1- arma una refencia  
    const productosRef = collection(db, 'productos')
    const q = query (productosRef, where('category','==', categoriaId) )
    // 2 - llamar a la refencia 
    getDocs(q)
      .then((querySnapshot) => {
        const docs = querySnapshot.docs.map(doc => {
          return {
            ...doc.data(),
            id: doc.id
          }

        })
        console.log(docs)
        setProductos(docs )
      })
      .finally(() => setLoading (false))


  }, [categoriaId])

  return (
    <>
      {
        loading
          ? <Loader/>
          : <Itemlist productos={productos} />
      }
    </>
  )
}
export default Itemlistcontainer


