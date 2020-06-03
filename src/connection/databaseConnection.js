let configDatabase = require('../config/configDatabase.json')
const url = 'mongodb://localhost/share-image'
let mongoose = require("mongoose")

module.exports = () => {
    if (process.env.NODE_ENV === 'production') {
        mongoose.connect(`mongodb://${configDatabase.username}:${configDatabase.password}@ds035037.mlab.com:35037/bot-uet-japit`, {useNewUrlParser : true})
    } else {
        mongoose.connect(url, { useNewUrlParser: true })
        // mongoose.connect(`mongodb://${configDatabase.username}:${configDatabase.password}@ds035037.mlab.com:35037/bot-uet-japit`, {useNewUrlParser : true})
    }
}

