import React, { useEffect, useState } from 'react'
import { pedirDatos } from '../../utils/utils'
import { useParams } from 'react-router-dom'
import ItemDatail from '../ItemDetail/ItemDatail'

export const ItemDetailContainer = () => {
    const [loading,setLoading] =useState (true)
    const [item, setItem] = useState(null)

    
    const {itemId} = useParams()
    console.log(itemId)
    console.log(item)

    useEffect(() => {

    setLoading (true);

        pedirDatos()
        .then(data => {
            setItem(data.find(producto => producto.id === Number(itemId) ) )

        })
        .finally (()=> setLoading(false))
    },[])

  return (
    <>
          
            {loading ? (
                     <h2>Cargando...</h2>) :
                    ( <ItemDetail item={item}/>
                    )
                }
        
    </>
  )
}
export default ItemDetailContainer
