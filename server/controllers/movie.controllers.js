const Movie = require('../models/movie.model')
const movieRoutes = require('../routes/movie.routes')

module.exports = {
    getAllMovies:(req,res) => {
        Movie.find()
        .then((results) => {
            res.json(results)
        }).catch((err) => {
            res.status(400).json(err)
        })
    },
    getOneMovie:(req,res) => {
        Movie.findById(req.params.id)
        .then((results) => {
            res.json(results)
        }).catch((err) => {
            res.status(400).json(err)
        })
    },
    addMovie:(req,res) => {
        Movie.create(req.body)
        .then((results) => {
            res.json(results)
        }).catch((err) => {
            //Error should be handled here differently when validations used in the model.
            res.status(400).json(err)
        })
    },
    updateMovie:(req,res) => {
        Movie.updateOne({_id:req.params.id}, req.body, {new:true, runValidators: true} )
        .then((results) => {
            res.json(results)
        }).catch((err) => {
            res.status(400).json(err)
        })
    },
    deleteMovie:(req,res) => {
        Movie.deleteOne({_id:req.params.id})
        .then((results) => {
            res.json(results)
        }).catch((err) => {
            res.status(400).json(err)
        })
    }
}