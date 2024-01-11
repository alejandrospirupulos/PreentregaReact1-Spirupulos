import React from 'react'

export const ColorSelector = ({setColor}) => {

    const handleSelect = (event) => {
        console.log(event.target.value)
    }

  return (
    <select onChange={handleSelect}>
        <option value="Negro">Negro</option>
        <option value="Gris">Gris</option>
        <option value="Blanco">Blanco</option>
    </select>
  )
}
