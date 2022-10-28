const Movie = require('../models/movie.model')
const movieRoutes = require('../routes/movie.routes')

module.exports = {
    getAllMovies:(req,res) => {
        Movie.find()
        .then((results) => {
            res.json(results)
        }).catch((err) => {
            console.log(err)
        })
    },
    getOneMovie:(req,res) => {
        Movie.findById(req.params.id)
        .then((results) => {
            res.json(results)
        }).catch((err) => {
            console.log(err)
        })
    },
    addMovie:(req,res) => {
        Movie.create(req.body)
        .then((results) => {
            res.json(results)
        }).catch((err) => {
            console.log(err)
        })
    },
    updateMovie:(req,res) => {
        Movie.updateOne({_id:req.params.id}, req.body)
        .then((results) => {
            res.json(results)
        }).catch((err) => {
            console.log(err)
        })
    },
    deleteMovie:(req,res) => {
        Movie.deleteOne({_id:req.params.id})
        .then((results) => {
            res.json(results)
        }).catch((err) => {
            console.log(err)
        })
    }
}