const commentModel = require('../../models/commentModel').comment
const jwt = require('../../constants/token')

module.exports = (req, res) => {
    const commentId = req.params.id;
    commentModel.findOneAndUpdate({_id: commentId}, {content: 'anh nay xinh qua'}, {new: true}, (err, commentResult) => {
        if (commentResult && !err) {
            res.status(200).send(commentResult)
        } else {
            res.status(400).json({
                code: 400,
                title: 'error',
                date: {
                    message: "Can't update comment"
                }
            })
        }
    })
}