const jwt = require('../../constants/token')

module.exports = (req, res, next) => {
    if(!req.body.token) {
        res.status(400).json({
            code: 400,
            title: 'error',
            data: {
                message: 'token is required field',
            }
        })
        next("Error in middleware postRequestFlow")
    } else if (!req.params.userId)
    {
        res.status(400).json({
            code: 400,
            title: 'error',
            data: {
                message: 'userId is required param',
            }
        })
        next("Error in middleware postRequestFlow")
    }
    next()
    
}