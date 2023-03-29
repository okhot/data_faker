const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    userName: String
})

module.exports = mongoose.model('user', userSchema)