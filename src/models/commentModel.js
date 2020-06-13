const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    imageId: String,
    date: String,
    user: {
        userId: String, 
        userName: String,
        fullName: String, 
        avatarUrl: String
    },
    content: String
})

const comment = mongoose.model('comment', commentSchema)

module.exports = {
    comment
}