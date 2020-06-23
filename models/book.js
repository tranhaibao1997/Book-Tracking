const mongoose = require('mongoose')
const Author=require('./author')
const Genre=require('./genres')

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

bookSchema.pre("save", async function (next) {
    this.author = await Author.findById(this.author);
    const promises = this.genres.map(async id => await Genre.findById(id));
    this.genres = await Promise.all(promises);
    next();
});


const Book = mongoose.model("books", bookSchema)
module.exports = Book