const jwt = require('../../constants/api')


module.exports = (req, res, next) => {
    if(!req.params.userId) {
        res.status(400).json({
            code: 400,
            title: 'error',
            data: {
                message: 'userId is require params',
            }
        })
        next('Error in middleware getFlowingUser.')
    }
    next()

}