const mongoose = require("mongoose")




async function connectDB() {
    let myConnectionString = "mongodb+srv://haibaotran:bibi2345@booktracking-nvz3d.mongodb.net/Book-tracking-bao?retryWrites=true&w=majority"
    try {
        await mongoose.connect(myConnectionString, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        })
        console.log("Connected to server")
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = connectDB