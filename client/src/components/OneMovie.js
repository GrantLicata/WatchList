import React from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const OneMovie = () => {
    const { id } = useParams()
    const [movie,setMovie] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/movie/${id}`)
        .then((res) => {
            setMovie(res.data)
        }).catch((err) => {
            console.log(err)
        })
    },[])

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/delete/${id}`)
        .then((res) => {
            console.log("Delete was successfull")
            navigate('/movieList')
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <div className='col col-4 mt-3 mx-auto border p-3'>
            <h1>{movie.title}</h1>
            <img src={movie.boxArt} className="col-6 pb-2" alt="Image of movie"/>
            <p><strong>Director:</strong> {movie.director}</p>
            <p><strong>Rating:</strong> {movie.rating}</p>
            <p><strong>Duration:</strong> {movie.duration}</p>
            <Link className='btn btn-primary me-2' to={`/edit/${movie._id}`}>Edit Movie</Link>
            <button className='btn btn-danger' onClick={(e) => deleteHandler(movie._id)}>Delete</button>
        </div>
    )
}

export default OneMovie