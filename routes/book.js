var express = require('express');
var router = express.Router();
var Book = require("../models/book")

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
    res.send("OK")
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