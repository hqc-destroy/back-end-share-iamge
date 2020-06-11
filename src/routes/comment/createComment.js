const commentModel  = require('../../models/commentModel').comment
const jwt = require('../../constants/token')


module.exports = (req, res) => {
    jwt.verify(req.body.token).then((result) => { // xem comment bên middleware create comment nhé
        const newComment = {
            imageId : req.body.imageId,
            date: Date(),
            user: {userId: result.user._id, userName: result.user.userName}, // ko viết 1 dòng này nhé
            content: req.body.content
        }
        commentModel.create(newComment, (err, commentResult) => {
            if(commentResult && !err) {
                res.status(200).send(commentResult) // đoạn này ông nên gửi theo format chung giống tôi ý
            } else {
                res.status(400).json({
                    code: 400,
                    title: 'error',
                    date: {
                        message: "Can't post comment"
                    }
                })
            }
        })
    })
}