import React from 'react'
import Logo from '../assets/logo2.png'

function Navbar() {
  return (
    <div className='Navbar-container'>
        <img src={Logo} alt="Logo" />
        <h2 className='wowfood'>wowFOOD</h2>
        <nav>
            <ul className='nav-unorderdlist'>
            <li>Home</li>
          <li>About</li>
          <li>Foods</li>
          <li>Contact</li>
            </ul>
        </nav>

      
    </div>
  )
}

export default Navbar
