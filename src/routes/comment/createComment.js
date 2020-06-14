const commentModel  = require('../../models/commentModel').comment
const jwt = require('../../constants/token')


module.exports = (req, res) => {
    jwt.verify(req.body.token).then((result) => {
        const newComment = {
            imageId : req.body.imageId,
            date: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
            user: {
                userId: result.data.user._id, 
                userName: result.data.user.userName,
                fullName: result.data.user.fullName,
                avatarUrl: result.data.user.avatarUrl
            },
            content: req.body.content
        }
        commentModel.create(newComment, (err, commentResult) => {
            if(commentResult && !err) {
                res.status(200).json({
                    code: 200,
                    title: "SUCCESS",
                    data: {
                        message: "SUCCESS",
                        comment: commentResult
                    }
                })
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