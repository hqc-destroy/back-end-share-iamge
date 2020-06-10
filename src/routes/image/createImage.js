const imageModel = require('../../models/imageModel').image
const jwt = require('../../constants/token')

module.exports = (req, res) => {
    jwt.verify(req.body.token).then((result)=> {
        const newImage = {
            base64 : req.body.base64,
            userId: result.user._id,
            userName: result.user.userName
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
