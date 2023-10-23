import React from 'react'
import {NavLink} from 'react-router-dom'
import './NavBar.css'
const NavBar = () => {
  return (
        <nav className='container'>
            <div >
                Mix Master
            </div>
            <div className='nav__links'>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/newsletter">Newletter</NavLink></li>
            </div>
        </nav>
  )
}

export default NavBar