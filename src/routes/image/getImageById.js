const imageModel = require('../../models/imageModel').image
const jwt = require('../../constants/token')

module.exports = (req,res) =>{
    imageModel.findById({ _id: req.params.imageId }, (err, result) => {
        if(result && !err) {
            res.status(200).json({
                code: 200,
                title: "SUCCESS",
                data: {
                    message: "SUCCESS",
                    images: result,
                }
            })
        } else {
            res.status(400).json({
                code: 400,
                title: "ERROR",
                data: {
                    message: "CAN'T GET IMAGE"
                }
            })
        }
    })
}