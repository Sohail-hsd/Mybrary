const mongoose = require('mongoose')

const mongoURI = process.env.DATABASE_URI
const mongoAtlus = `${process.env.MONGO_ATLUS}`
const uri = 'mongodb://localhost:27017/mybrary'
const MONGO_ATLUS = 'mongodb+srv://HSD-19:{Terminus919@}cluster0.kgnol.mongodb.net/Express?retryWrites=true&w=majority'
const connectToMongo = () => {
    mongoose.connect(MONGO_ATLUS, () => {
        console.log('Connected to mongo Successfully...! (db)')
    })
}

module.exports = connectToMongo
