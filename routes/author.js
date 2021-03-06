var express = require('express');
var router = express.Router();
let createAuthor = require('../controller/authorController')
let Author = require('../models/author')

/* GET users listing. */
router.get('/', async function(req, res, next) {
    try {
        let allAuthor = await Author.find();
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        res.status(201).send({
            data: allAuthor,
            message: "success"
        })
    } catch (err) {
        res.status(401).send({
            message: "fail"
        })
    }
});

//create Author
router.post('/createAuthor', async(req, res) => {
    try {
        // const author = await Author.create({ name: req.body.name })
        const author = new Author({ name: req.body.name })
        await author.save();
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        res.status(201).json({
            data: { author },
            status: "success"
        })

    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message
        })
    }
})


//update Author
router.patch('/:id', async(req, res) => {
    try {
        // const author = await Author.create({ name: req.body.name })
        const author = await Author.findByIdAndUpdate(req.params.id, { name: req.body.name }, { new: true })
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        res.status(201).json({
            data: { author },
            status: "success"
        })

    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message
        })
    }
})


//delete Author
router.delete('/:id', async(req, res) => {
    try {
        // const author = await Author.create({ name: req.body.name })
        const author = await Author.findByIdAndDelete(req.params.id)
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        res.status(201).json({
            data: { author },
            status: "success"
        })

    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message
        })
    }
})
module.exports = router;