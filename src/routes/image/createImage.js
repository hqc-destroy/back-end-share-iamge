const imageModel = require('../../models/imageModel').image
const jwt = require('../../constants/token')

module.exports = (req, res) => {
    jwt.verify(req.body.token).then((result)=> {
        console.log(result)
        if(result.code === 200) {
            const newImage = {
                title:req.body.title,
                base64 : req.body.base64,
                date: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
                user: { 
                    userId: result.data.user._id,
                    fullName: result.data.user.fullName,
                    userName: result.data.user.userName,
                    avatarUrl: result.data.user.avatarUrl
                },
                userId: result.data.user._id,
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
        } else {
            res.status(400).json({
                code: 400,
                title: 'error',
                data: {
                    message: 'verify token error'
                }
            })
        }
        
    })
   
}
