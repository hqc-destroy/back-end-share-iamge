const jwt = require('../../constants/token')

module.exports = (req, res, next) => { // check thêm token xem có đúng phải user comment ko? gợi ý ở phần prams gửi thêm userID nữa
    if(!req.params.imageId) {
        res.status(400).json({
            code: 400,
            title: 'error',
            data: {
              message: 'imageId is required param'
            }
          })
          next('Error in middleware getCommentsById')
    } 
    next()
}