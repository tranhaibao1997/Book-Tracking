const Author = require('../models/author')

exports.createAuthor = async (req, res) => {
    try {
        // const author = await Author.create({ name: req.body.name })
        const author = new Author({name:req.body.name})
        await author.save
        res.status(201).json(
            {
                data: { author },
                status: "success"
            }
        )

    }
    catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message
        })
    }
}