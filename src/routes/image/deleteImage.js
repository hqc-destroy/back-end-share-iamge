const imageModel = require('../../models/imageModel').image

module.exports = (req, res) => {
    const id = req.params.id;
    imageModel.findOneAndDelete({_id: id}, (err, imageResult) => {
        if(imageResult && !err) {
            res.send(200).send(imageResult)
        } else {
            res.status(400).json({
                code: 400,
                title: 'error',
                data: {
                    message: 'Image is not exist'
                }
            })
        }
    })
}