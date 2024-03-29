import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const links = [
  {
    label: 'Inicio',
    href: '/'
  },
  {
    label: 'Notebook',
    href: '/productos/Netbook'
  },
  {
    label: 'Celulares',
    href: '/productos/Celular'
  },
  {
    label: 'Tvs',
    href: '/productos/Tvs'
  },
  {
    label: 'Tablet',
    href: '/productos/Tablet'
  },

]


const Navbar = () => {

  return (
    <header className='header'>
      <div className='header_container'>
        <img className="logo" src="data:image/png;base64,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" alt="logo" />
        <h1 className='header_title'>SAE comapani</h1>
        <nav className='navbar'>
          {
            links.map((link) => (
              <Link key={link.href}
                to={link.href}
                className='navbar_link'
              >
                {link.label}
              </Link>
            ))}
          <CartWidget />
        </nav>

      </div>
    </header>
  )
}

export default Navbar