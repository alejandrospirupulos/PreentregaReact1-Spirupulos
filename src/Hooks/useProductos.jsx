import React from 'react'

import { useEffect,useState } from "react"
import { pedirDatos } from "../utils/utils"

 const useProductos = () => {
   
    const [productos,setProductos] = useState([])
    const [loading,setLoading ] = useState(true)

  
  useEffect(() => {
    setLoading(true)

    pedirDatos() // <= Promise 
      .then((data) => {
        setProductos(data)
        setLoading(false)
      })
    },[])

  return {
    productos,
    loading
  }
    
  
}
export default useProductos
