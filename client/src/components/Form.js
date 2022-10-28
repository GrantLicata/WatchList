import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Form = () => {

    const [title,setTitle] = useState('')
    const [director,setDirector] = useState('')
    const [rating,setRating] = useState('')
    const [genre,setGenre] = useState('')
    const [releaseYear,setReleaseYear] = useState('')
    const [duration,setDuration] = useState('')
    const [image,setImage] = useState('')

    const navigate = useNavigate()
    
    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/addMovie',{
            title: title,
            director: director,
            rating: rating,
            genre: genre,
            releaseYear: releaseYear,
            duration: duration,
            boxArt:image
        }).then((res) => {
            console.log(res)
            navigate('/movieList')
        }).catch((err) => {
            console.log(err)
        })
    }
    
    return (
    <div>
        <form className='col-3 mx-auto p-4' onSubmit={submitHandler}>
            <label>Title:</label>
            <input className='form-control mb-2' type="text" onChange={(e) => setTitle(e.target.value)} value={title}/>

            <label>Director:</label>
            <input className='form-control mb-2' type="text" onChange={(e) => setDirector(e.target.value)} value={director}/>

            <label>Rating:</label>
            <select className='form-control mb-2' type="text" onChange={(e) => setRating(e.target.value)} value={rating}>
                <option>Select a Rating</option>
                <option value="G">G</option>
                <option value="PG">PG</option>
                <option value="PG-13">PG-13</option>
                <option value="R">R</option>
                <option value="NC-13">NC-13</option>
            </select>

            <label>Genre:</label>
            <select className='form-control mb-2' type="text" onChange={(e) => setGenre(e.target.value)} value={genre}>
                <option>Select a Genre</option>
                <option value="Comedy">Comedy</option>
                <option value="Horror">Horror</option>
                <option value="Drama">Drama</option>
                <option value="Sci-fi">Sci-fi</option>
                <option value="Thriller">Thriller</option>
                <option value="Action">Action</option>
            </select>

            <label>Release Year:</label>
            <input className='form-control mb-2' type="number" onChange={(e) => setReleaseYear(e.target.value)} value={releaseYear}/>

            <label>Duration:</label>
            <input className='form-control mb-2' type="text" onChange={(e) => setDuration(e.target.value)} value={duration}/>

            <label>Image</label>
            <input className='form-control mb-2' type="text" onChange={(e) => setImage(e.target.value)} value={image}/>

            <button className='btn btn-info my-3' type="submit">Create Movie</button>
        </form>
    </div>
  )
}

export default Form