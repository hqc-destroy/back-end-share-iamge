const jwt = require('../../constants/token')

module.exports = (req, res, next) => {
    if (!req.params.id) {
        res.status(400).json({
            code: 400,
            title: 'error',
            data : {
                message: 'Image is not exsit'
            }
        })
        next('Error in middleware deleteImage')
    } else if (req.params.userId){
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
            }
        })
    } else {
        next()
    }
}