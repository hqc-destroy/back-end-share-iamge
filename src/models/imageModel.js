const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    base64: String,
    userId: String,
    userName: String,
    listUserName: [{userName: String}],
})
const image = mongoose.model('image', imageSchema);

module.exports = {
    image
}