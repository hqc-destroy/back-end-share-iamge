const imageModel = require('../../models/imageModel').image
const jwt = require('../../constants/token')

module.exports = (req, res) => {
    jwt.verify(req.body.token).then((result) => {
        const userId = result.user._id;
        imageModel.find((err, result) => {
            if (result && !err) {
                const newArr = result.filter((image) => {
                    return image.userId === userId;
                })
                res.status(200).json({
                    code: 200,
                    title: "SUCCESS",
                    data: {
                        message: "SUCCESS",
                        images: newArr
                    }
                })
            } else {
                res.status(400).json({
                    code: 400,
                    title: "ERROR",
                    data: {
                        message: "CAN'T GET IMAGES"
                    }
                })
            }
        })
    })
}