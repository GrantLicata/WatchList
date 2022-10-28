import React from 'react'
import { NavLink } from 'react-router-dom'

let activeStyle = {
  color: "cyan"
}

let inactiveStyle = {
  color: "white"
}

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-sm bg-dark">
      <div class="container-fluid">
        <div class="navbar-nav mx-auto">
          <a class="navbar-brand text-warning" href="#"><strong>Movies Database</strong></a>
          <NavLink to='/movieList' className='nav-link' style={({ isActive }) => 
            isActive ? activeStyle : inactiveStyle } end>Home</NavLink>
          <NavLink to='/' className='nav-link' style={({ isActive }) => 
            isActive ? activeStyle : inactiveStyle } end>Form</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default NavBar