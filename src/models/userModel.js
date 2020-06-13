const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    fullName: {
        type: String,
        default: "UET JAPIT-" + new Date().getTime()
    },
    userName: String,
    password: String,
    avatarUrl: {
        type: String,
        default: "https://previews.123rf.com/images/happyvector071/happyvector0711904/happyvector071190416116/120957921-creative-illustration-of-default-avatar-profile-placeholder-isolated-on-background-art-design-grey-p.jpg"
    },
    listUserFlow: [
        {
            fullName:String,
            userName: String, 
            avatarUrl: String
        }
    ]
})

const user = mongoose.model('user', userSchema)

module.exports = {
    user
}