const commentModel = require('../../models/commentModel').comment
const jwt = require('../../constants/token')

module.exports = (req, res) => {
    const commentId = req.params.commentId;
    commentModel.findOneAndUpdate({ _id: commentId }, 
                                    { ...req.body }, 
                                    { new: true}, 
                                    ( err, commentResult ) => {
        if (commentResult && !err) {
            res.status(200).json({
                code: 200,
                title: "SUCCESS",
                data: {
                    message: 'UPDATE SUCCESS',
                    comment: commentResult
                }
            }); 
        } else {
            res.status(400).json({
                code: 400,
                title: 'error',
                date: {
                    message: "Can't update comment",
                    data: err
                }
            });
        }
    })
}