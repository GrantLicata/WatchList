import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
      //Prevents the removal of state when submit runs
      e.preventDefault()
      axios.post("http://localhost:8000/api/login",{
          email,
          password,
      },{withCredentials:true, credentials:'include'})
      .then((res) => {
          navigate('/movieList')
      }).catch((err) => {
          console.log(err)
      })
  }

  return (
    <div>
        <h1>Login to Movies Database</h1>
        <Link className='mb-3' to="/register">Need an account? Register here.</Link>
        <form className='col-6 mx-auto' onSubmit={submitHandler}>
          <label>Email:</label>
          <input type='text' className='form-control' onChange={(e) => setEmail(e.target.value)}></input>
          <label>Password:</label>
          <input type='text' className='form-control' onChange={(e) => setPassword(e.target.value)}></input>
          <button className='btn btn-primary mt-3'>Login</button>
        </form>
    </div>
  )
}

export default Login