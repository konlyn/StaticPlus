import React, { useState } from 'react'
import './NavBar.css'
import { Link as RouterLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='container color-navbar'>
        <RouterLink to="/" className='logo-link'>
            <h1 className='logo font-inria-serif font-size-32 color-primary'>StaticsPlus</h1>
        </RouterLink>
        <ul>
            {/* Link para a página Home */}
            <li><RouterLink to="/" className='nav-link font-inter-sans-serif font-size-24 color-secondary'>Home</RouterLink></li>
            {/* Link para a página Sobre */}
            <li><RouterLink to="/about" className='nav-link font-inter-sans-serif font-size-24 color-secondary'>Sobre</RouterLink></li>
            <li className='nav-link font-inter-sans-serif font-size-24 color-secondary'>Login</li>
        </ul>
    </nav>
  )
}

export default NavBar