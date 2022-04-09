const express = require('express')
const router = express.Router()
const Author = require('../models/authors')

// All Authors route
router.get('/', async (req, res) => {
    let searchOptions = {}
    if(req.query.name !== null && req.query.name !== ''){ 
        searchOptions.name = new RegExp(req.query.name, 'i')
    }
    try {
        const authors = await Author.find(searchOptions)
        res.render('authors/index',{
            authors : authors,
            searchOptions : req.query
        })
    } catch (error) {
        console.error(error)
        res.redirect('/')
    }
})

// New Author route
router.get('/new', (req, res) => {
    res.render('authors/new', { author: new Author() }) // We can access the author in ejs file.
})

// Create Author route
router.post('/', async (req, res) => {
    const author = new Author({
        name: req.body.name
    });
    try {
        const newAuthor = await author.save()
        res.redirect('authors')
    } catch (error) {
        console.error(error)
        res.render('authors/new', {
            author: author,
            errorMessage: 'Error creating author.'
        })
    }

})



module.exports = router