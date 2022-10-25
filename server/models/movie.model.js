const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({
    title: {
        type: String
    },
    director: {
        type: String
    },
    rating: {
        type: String,
        enum: ['G', 'PG', 'PG-13', 'R', 'NC-13']
        //Enum gives defined options that the user can select from
    },
    genere: {
        type: String,
        enum: ['Comedy','Horror','Drama','Sci-fi','Thriller','Action']
    },
    releasedyear: {
        type: Number,
    },
    duration: {
        type: String
    },
    boxArt: {
        type: String
    }
},{timestamps: true})
//Options can be added at the end of our schema object. The timestamp object added as an optional here will create an UpdatedAt and CreatedAt along with the _id when new documents are generated in the collection.
// Recommended to always add the timestamp option in.

const Movie = mongoose.model('Movie', MovieSchema)
//The first parameter above defined what the schema will be called in our database, the second brings in the schema we created above.

module.exports = Movie