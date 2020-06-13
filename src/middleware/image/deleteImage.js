const jwt = require('../../constants/token')

module.exports = (req, res, next) => {
    if (!req.params.imageId) {
        res.status(400).json({
            code: 400,
            title: 'error',
            data : {
                message: 'imageId is require field'
            }
        })
        next('Error in middleware deleteImage')
    } else if (!req.params.userId) {
        res.status(400).json({
            code: 400,
            title: 'error',
            data : {
                message: 'userId is require field'
            }
        })
        next('Error in middleware deleteImage')
    } else if (!req.body.token) {
        res.status(400).json({
            code: 400,
            title: 'error',
            data : {
                message: 'token is require field'
            }
        })
        next('Error in middleware deleteImage')
    } else {
        jwt.verify(req.body.token).then((result) => {
            const _id = result.user._id;
            if (req.params.userId !== _id) {
                res.status(400).json({
                    code: 400,
                    title: "ERROR",
                    data: {
                        message: "User is not exist"
                    }
                })
                next('Error in middleware deleteImage')
            } else {
                next()
            }
        })
    }
}