const mongoose = require('mongoose')

const mongoURI = `${process.env.DATABASE_URI}`

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log('Connected to mongo Successfully...!')
    })
}

module.exports = connectToMongo