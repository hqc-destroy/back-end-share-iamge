const mongoose = require('mongoose')
const Schema = mongoose.Schema

const notifySchema = new Schema({
    content: String,
    userId: String,
    fromUserName: String,
    imageId: String,
    date: String,
})

const notify = mongoose.model('notify', notifySchema)

module.exports = {
    notify
}
