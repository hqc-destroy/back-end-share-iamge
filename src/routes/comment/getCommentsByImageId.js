const commentModel = require('../../models/commentModel').comment

module.exports = (req, res) => {
    const imageId = req.params.imageId;
    commentModel.find({ imageId },(err, comments) => {
       if (comments && !err) {
        res.status(200).json({
            code: 200,
            title: 'SUCCESS',
            data: {
                message: "SUCCESS",
                comments: comments
            }
        });
       } else {
           res.status(400).json({
               code: 400,
               title: 'error',
               data: {
                   message: "Not find comments"
               }
           });
       }
    });
}