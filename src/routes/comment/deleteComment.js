const commentModel = require('../../models/commentModel').comment

module.exports = (req, res) => {
    const commentId = req.params.id
    commentModel.findOneAndDelete({_id: commentId}, (err, commentResult) => {
        if(commentResult && !err) {
            res.status(200).send(commentResult)
        } else {
            res.status(400).json({
                code: 400,
                title: 'error',
                data: {
                    message: "Can't delete commnent"
                }
            })
        }
    })
}