const mongoose = require('mongoose')

const mongoURI = process.env.DATABASE_URI
const mongoAtlus = `${process.env.MONGO_ATLUS}`
const uri = 'mongodb://localhost:27017/mybrary'
const connectToMongo = () => {
    mongoose.connect(mongoAtlus, () => {
        console.log('Connected to mongo Successfully...! (db)')
    })
}

module.exports = connectToMongo