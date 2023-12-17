
import { useState, useEffect } from "react"
import { pedirDatos } from "../../utils/utils"
import { Itemlist } from "../Itemlist/Itemlist"

const Itemlistcontainer = () => {
    
    const [productos, setProductos] = useState ([])

      useEffect (() => {
        pedirDatos () // <= Promise 
        .then ((data) => {
            setProductos (data)
        })
        
      }, [])
        

    return (
        <>
        <Itemlist productos={productos} />
        </>
 
        
    )
}
export default Itemlistcontainer


