const mongoose = require('mongoose')
const movie_Shema = mongoose.Schema({
    movie_name:{
        type: String,
        require: true,
        unique: true
    },
    season:{
        type: Number
    },
    autors:{
        type: Array
    }
})

module.exports = mongoose.model('MovieCollection', movie_Shema)