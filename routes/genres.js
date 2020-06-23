var express = require('express');
var router = express.Router();
let Genres = require('../models/genres')

/* GET users listing. */
router.get('/', async function(req, res, next) {
    try {
        let allGenres = await Genres.find();
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Genresization");
        res.status(201).send({
            data: allGenres,
            message: "success"
        })
    } catch (err) {
        res.status(401).send({
            message: "fail"
        })
    }
});

//create Genres
router.post('/createGenres', async(req, res) => {
    console.log("zô rồi")
    console.log(req.body)
    try {
        // const Genres = await Genres.create({ name: req.body.name })
        const genres = new Genres({ "name": req.body.name })
        await genres.save();
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Genresization");
        res.status(201).json({
            data: { genres },
            status: "success"
        })

    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message
        })
    }
})


//update Genres
router.patch('/:id', async(req, res) => {
    try {
        // const Genres = await Genres.create({ name: req.body.name })
        const Genres = await Genres.findByIdAndUpdate(req.params.id, { name: req.body.name }, { new: true })
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Genresization");
        res.status(201).json({
            data: { Genres },
            status: "success"
        })

    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message
        })
    }
})


//delete Genres
router.delete('/:id', async(req, res) => {
    try {
        // const Genres = await Genres.create({ name: req.body.name })
        const Genres = await Genres.findByIdAndDelete(req.params.id)
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Genresization");
        res.status(201).json({
            data: { Genres },
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