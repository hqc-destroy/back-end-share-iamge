const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    imageId: String,
    date: Date,
    user: {userId: String, userName: String}, // Không viết như này nhé, nên viết xuống dòng
    content: String
})

const comment = mongoose.model('comment', commentSchema)

module.exports = {
    comment
}