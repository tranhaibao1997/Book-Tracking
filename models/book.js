const mongoose = require('mongoose')

let bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "title is required"],
        trim: true,
        unique: true

    },
    description:
    {
        type: String
    },
    author: Object,
    genres: Array
})

const Book = mongoose.model("books", bookSchema)
module.exports = Book