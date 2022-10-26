const express = require('express')
const app = express()
const PORT = 8000
require('./config/mongoose.config')
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(
    cors({
        origin: 'http://localhost:3000',
    })
)


const Routes = require('./routes/movie.routes')(app)

app.listen(PORT, ()=> {
    console.log(`Server is up on port ${PORT}`)
})