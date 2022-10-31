const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required!"],
        minLength: [2, "Minimum length is 2"],
        maxLength: [20, "Maximum length is 20"]
    },
    director: {
        type: String,
        required: [true, "Director is required!"],
        minLength: [2, "Minimum length is 2"],
        maxLength: [20, "Maximum length is 20"]

    },
    rating: {
        type: String,
        //Enum gives defined options that the user can select from
        enum: ['G', 'PG', 'PG-13', 'R', 'NC-13'],
        required: [true, "Rating is required!"]

    },
    genre: {
        type: String,
        enum: ['Comedy','Horror','Drama','Sci-fi','Thriller','Action'],
        required: [true, "Genre is required!"]

    },
    releasedYear: {
        type: Number,
        required: [true, "Released year is required!"],
        minLength: [2, "Minimum length is 2"],
        maxLength: [5, "Maximum length is 5"]

    },
    duration: {
        type: String,
        required: [true, "Duration is required!"],
        minLength: [2, "Minimum length is 2"],
        maxLength: [20, "Maximum length is 20"]
    },
    boxArt: {
        type: String,
        required: [true, "Box art is required!"]

    }
},{timestamps: true})
//Options can be added at the end of our schema object. The timestamp object added as an optional here will create an UpdatedAt and CreatedAt along with the _id when new documents are generated in the collection.
// Recommended to always add the timestamp option in.

const Movie = mongoose.model('Movie', MovieSchema)
//The first parameter above defined what the schema will be called in our database, the second brings in the schema we created above.

module.exports = Movie