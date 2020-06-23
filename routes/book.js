var express = require('express');
var router = express.Router();
var Book = require("../models/book")

/* GET home page. */
router.get('/', async function (req, res, next) {
    try {
        let allBook = await Book.find();
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        res.status(201).send({
            data: allBook,
            message: "success"
        })
    } catch (err) {
        res.status(401).send({
            message: "fail"
        })
    }
});

router.post("/createBook", async function (req, res, next) {
    try {
        let newBook = new Book(req.body)
        await newBook.save()
        res.status(201).json({
            data: newBook,
            message: "success"
        })
    }
    catch (err) {
        res.status(401).send({
            message: err.message
        })
    }


})

module.exports = router;