import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (

    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <div class="navbar-nav mx-auto">
          <a class="navbar-brand" href="#">Movies Database</a>
          <NavLink to='/movieList' className='nav-link'>Home</NavLink>
          <NavLink to='/' className='nav-link'>Form</NavLink>
        </div>
      </div>
    </nav>

    // <div className="bg-dark col-12 no-gutter fluid">
    //     <h1 className='text-warning'>Movie DB</h1>
    //     <NavLink to='/movieList' className='m-3'>Home</NavLink>
    //     <NavLink to='/' className=''>Form</NavLink>
    // </div>
  )
}

export default NavBar