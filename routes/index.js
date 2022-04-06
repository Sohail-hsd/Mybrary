const express = require('express')
const router = express.Router()

router.get('/',(req,res) => {
    // To render the ejs file, just use req.render('file name').
    // This will render the ejs file in the views
    res.render('index')
})

module.exports = router