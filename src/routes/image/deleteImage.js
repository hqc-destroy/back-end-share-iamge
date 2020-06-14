const imageModel = require('../../models/imageModel').image
const jwt = require('../../constants/token')

module.exports = (req, res) => {
    jwt.verify(req.body.token).then((result) => {
        if (result.data.user._id === req.params.userId) {
            imageModel.findOneAndDelete({ _id: req.params.imageId }, (err, imageResult) => {
                if (imageResult && !err) {
                    res.status(200).json({
                        code: 200,
                        title: 'SUCCESS',
                        data: {
                            message: "DELETE SUCCESS",
                            image: imageResult
                        }
                    });
                } else {
                    res.status(400).json({
                        code: 400,
                        title: 'error',
                        data: {
                            message: 'Image is not exist'
                        }
                    });
                }
            })
        }        
    })
    
}