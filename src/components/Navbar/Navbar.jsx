import React from 'react'
import Carwidget from '../carWidget/Carwidget'
//import './Navbar.scss'


export const Navbar = () => {
  return (
    <header className='header'>
      <div className='header_container'>
        <img className= "logo" src="/src/assets/logo.png" alt="logo" />
        <h1 className='header_title'>Sae company</h1> 
        <nav className='navbar'>
          <a className='navbar_link' href="#">Inicio</a>
          <a className='navbar_link' href="#">Quienes somos</a>
          <a className='navbar_link' href="#">Contacto</a>
        </nav>
        <Carwidget/>
      </div>
    </header>
  )
}

export default Navbar