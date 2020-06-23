const mongoose = require('mongoose')
const genresSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Genres is required"],
        trim: true,
        unique: true
    }
})

const Genres = mongoose.model("genres", genresSchema)
module.exports = Genres