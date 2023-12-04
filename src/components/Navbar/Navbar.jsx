import React from 'react'
import Carwidget from '../Carwidget/carWidget'
//import './Navbar.scss'


export const Navbar = () => {
  return (
    <header className='header'>
      <div className='header_container'>
        <h1 className='header_title'>Sae company</h1> *
        <img src="/src/assets/logo.png" alt="" />
        <nav className='navbar'>
          <a className='navbar_link' href="#">Inicio</a>
          <a className='navbar_link' href="#">Quienes somos</a>
          <a className='navbar_link' href="#">Contacto</a>
        </nav>
        <carWidget/>
      </div>
    </header>
  )
}

export default Navbar