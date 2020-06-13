const mongoose = require('mongoose');
const imageModel = require('../../models/imageModel').image
const jwt = require('../../constants/token')

module.exports = (req, res) => {
    jwt.verify(req.body.token).then((result) => {
        console.log(result);
        const imageId = req.params.imageId;
        imageModel.findOneAndUpdate({ _id: imageId }, 
                                    { ...req.body }, 
                                    { new: true }, 
                                    ( err, imageResult ) => {
            if (imageResult && !err) {
                res.status(200).json({
                    code: 200,
                    title: "SUCCESS",
                    data: {
                        message: "UPDATE SUCCESS",
                        image: imageResult
                    }
                })
            } else {
                res.status(400).json({
                    code: 400,
                    title: 'error',
                    data: {
                        message: 'Image is not exist!'
                    }
                })
            }
        })
    })
}

