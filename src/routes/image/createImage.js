const imageModel = require('../../models/imageModel').image
const jwt = require('../../constants/token')

module.exports = (req, res) => {
    jwt.verify(req.body.token).then((result)=> {
        const newImage = {
            title:req.body.title,
            base64 : req.body.base64,
            date: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
            user: { 
                userId: result.user._id,
                fullName: result.user.fullName,
                userName: result.user.userName,
                avatarUrl: result.user.avatarUrl
            },
            userId: result.user._id,
            listUserLike: []          
        }
        imageModel.create(newImage, (err, imageResult) => {
            if (imageResult && !err) {
                res.status(200).json({
                    code: 200,
                    title: "SUCCESS",
                    data: {
                        message: "SUCCESS",
                        image: imageResult
                    }
                })
            } else {
                res.status(400).json({
                    code: 400,
                    title: 'error',
                    data: {
                        message: 'Post image failse'
                    }
                })
            }
        })
    })
   
}