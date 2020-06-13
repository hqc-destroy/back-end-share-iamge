const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    title:String,
    base64: String,
    userId :String,
    user:{
        userId: String, 
        fullName:String,
        userName: String, 
        avatarUrl: String
    },
    date: String,
    listUserLike: [{userName: String}],
    tags: [String],
})
const image = mongoose.model('image', imageSchema);

module.exports = {
    image
}