const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    fullName: {
        type: String,
        default: "UET JAPIT-" + new Date().getTime()
    },
    userName: String,
    password: String
})

const user = mongoose.model('user', userSchema)

module.exports = {
    user
}