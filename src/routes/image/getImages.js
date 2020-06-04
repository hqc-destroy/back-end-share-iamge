const imageModel = require('../../models/imageModel').image
const jwt = require('../../constants/token')

module.exports = (req, res) => {
    jwt.verify(req.body.token).then((result) => {
        const userId = result.user._id;
        imageModel.find((err, result) => {
            const newArr = result.filter((image) => {
                return image.userId === userId;
            })
            res.send(newArr)
        })
    })
}