const MovieController = require('../controllers/movie.controllers')
const {authenticate} = require('../config/jwt.config')

module.exports = (app) => {
    //get all movies
    app.get('/api/allMovies', authenticate, MovieController.getAllMovies)
    //get one movie
    app.get('/api/movie/:id', authenticate, MovieController.getOneMovie)
    //create new movie
    app.post('/api/addMovie', authenticate, MovieController.addMovie)
    //update movie
    app.put('/api/update/:id', authenticate, MovieController.updateMovie)
    //delete movie
    app.delete('/api/delete/:id', authenticate, MovieController.deleteMovie)
}

