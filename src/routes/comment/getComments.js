const commentModel = require('../../models/commentModel').comment

module.exports = (req, res) => {
    const imageId = req.body.imageId;
    commentModel.find((err, comments) => {
       if (comments && !err) {
        const newArr = comments.filter((comment) => {
            return comment.imageId === imageId
        })
        res.status(200).send(newArr) // viết theo format trả về nhé
       } else {
           res.status(400).json({
               code: 400,
               title: 'error',
               data: {
                   message: "Can't comments"
               }
           })
       }
    })
}