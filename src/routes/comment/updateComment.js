const commentModel = require('../../models/commentModel').comment
const jwt = require('../../constants/token')

module.exports = (req, res) => {
    const commentId = req.params.id;
    commentModel.findOneAndUpdate({ _id: commentId }, {content: 'anh cuar ban xinh qua'}, {new: true}, (err, commentResult) => { // sửa lại mấy cái khoảng cách ở trong khối nhé : { ... }
        if (commentResult && !err) {
            res.status(200).json({
                code: 200,
                title: "SUCCESS",
                data: {
                    message: 'UPDATE SUCCESS',
                    comment: commentResult
                }
            }); // viet theo format trả về client
        } else {
            res.status(400).json({
                code: 400,
                title: 'error',
                data: {
                    message: "Can't update comment"
                }
            });
        }
    })
}