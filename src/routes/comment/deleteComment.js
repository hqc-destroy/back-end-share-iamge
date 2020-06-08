const commentModel = require('../../models/commentModel').comment

module.exports = (req, res) => {
    const commentId = req.params.id
    commentModel.findOneAndDelete({_id: commentId}, (err, commentResult) => { // nên sửa đoạn kia lại thành { _id: commentId } theo format code
        if(commentResult && !err) {
            res.status(200).send(commentResult) // viết theo format trả về client
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