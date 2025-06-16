import React, { useState } from 'react'
import './NavBar.css'
import { Link as RouterLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='container dark-nav'>
        <RouterLink to="/" className='logo-link'>
            <span className='logo'>StaticsPlus</span>
        </RouterLink>
        <ul>
            {/* Link para a página Home */}
            <li><RouterLink to="/">Home</RouterLink></li>
            {/* Link para a página Sobre */}
            <li><RouterLink to="/about">Sobre</RouterLink></li>
            <li>Login</li>
        </ul>
    </nav>
  )
}

export default NavBar