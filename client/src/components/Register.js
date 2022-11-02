import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {

    const navigate = useNavigate()

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const submitHandler = (e) => {
        //Prevents the removal of state when submit runs
        e.preventDefault()
        axios.post("http://localhost:8000/api/register",{
            username,
            email,
            password,
            confirmPassword
        },{withCredentials:true, credentials:'include'})
        .then((res) => {
            navigate('/movieList')
        }).catch((err) => {
            console.log(err)
        })
    }

  return (
    <div>
        <h1>Rewgister for Movie Database</h1>
        <Link className='mb-3' to="/login">Already registered? Login here.</Link>
        <form className='col-6 mx-auto' onSubmit={submitHandler}>
            <label>Username:</label>
            <input type='text' className='form-control' onChange={(e) => setUsername(e.target.value)}></input>
            <label>Email:</label>
            <input type='text' className='form-control' onChange={(e) => setEmail(e.target.value)}></input>
            <label>Password:</label>
            <input type='text' className='form-control' onChange={(e) => setPassword(e.target.value)}></input>
            <label>Confirm Password:</label>
            <input type='text' className='form-control' onChange={(e) => setConfirmPassword(e.target.value)}></input>
            <button className='btn btn-primary mt-3'>Register</button>
        </form>
    </div>
  )
}

export default Register