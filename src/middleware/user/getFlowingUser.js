const jwt = require('../../constants/api')


module.exports = (req, res, next) => {
    if(!req.body.token) {
        res.status(400).json({
            code: 400,
            title: 'error',
            data: {
                message: 'token is require field',
            }
        })
        next('Error in middleware getFlowingUser.')
    }
    next()

}