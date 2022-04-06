// if(process.env.NODE_ENV !== 'production'){
//     const env = require('dotenv')
//     env.parse()
// }
const connectToMongo = require('./db')
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const req = require('express/lib/request')
const mongoose = require('mongoose')

// connectToMongo()
const mongo_uri = `${process.env.DATABASE_URI}`
mongoose.connect(mongo_uri,() => console.log('Connected to mongo Successfully...!'))

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
// Put all the layouts in a folder called layouts the begning and the ending of the html (nevbar, footer)
app.set('layout', 'layouts/layout') 
// Tell express app, use  express layout
app.use(expressLayouts)
// Tell express to use the public folder (css, js, images)
app.use(express.static('public'))
// This will pull the port number from the environment variable or use 3000
app.listen(process.env.PORT || 3000, (req,res) =>{
    console.log('Server started At : ' + 'http://localhost:3000')
})
// Use index Route
app.use('/',require('./routes/index'))