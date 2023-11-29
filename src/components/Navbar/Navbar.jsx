import React from 'react'
import Carwidget from '../Carwidget/Carwidget'
//import './Navbar.scss'


export const Navbar = () => {
  return (
    <header className='header'>
      <div className='header_container'>
        {/* <h1 className='header_title'>Logo</h1> */}
        <img src="/public/vite.svg" alt="Logo" />
        <nav className='navbar'>
          <a className='navbar_link' href="#">Enlance 1</a>
          <a className='navbar_link' href="#">Enlance 2</a>
          <a className='navbar_link' href="#">Enlance 3</a>
        </nav>
        <Carwidget/>
      </div>
    </header>
  )
}

export default Navbar