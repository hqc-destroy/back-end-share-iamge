const jwt = require('../../constants/token')

module.exports = (req, res, next) => {
    if(!req.body.token)
    {
        res.status(400).json({
            code: 400,
            title: 'error',
            data: {
              message: 'token is required field'
            }
          })
          next('Error in middleware deleteComment')
    } else {
        next()
    }
}