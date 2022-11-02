import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'


const NavBar = () => {

  const navigate = useNavigate()
  
  let activeStyle = {
    color: "cyan"
  }
  
  let inactiveStyle = {
    color: "white"
  }
  
  const logout = (e) => {
    axios.get('http://localhost:8000/api/logout', {withCredentials:true})
    .then((res) => {
      console.log('logged out')
      navigate('/login')
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <nav class="navbar navbar-expand-sm bg-dark">
      <div class="container-fluid">
        <div class="navbar-nav mx-auto">
          <a class="navbar-brand text-warning" href="/"><strong>Movies Database</strong></a>
          <button className='nav-link bg-dark text-white' onClick={logout} >Logout</button>
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