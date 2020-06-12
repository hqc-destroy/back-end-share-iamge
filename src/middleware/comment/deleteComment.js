const jwt = require('../../constants/token')

module.exports = (req, res, next) => { // check thêm token xem có đúng phải user comment ko? gợi ý ở phần prams gửi thêm userID nữa
    if(!req.params.id) {
        res.status(400).json({
            code: 400,
            title: 'error',
            data: {
              message: 'Comment is not exist'
            }
          })
          next('Error in middleware deleteComment')
    } else if (req.params.userId) {
        jwt.verify(req.body.token).then((result) => {
          const _id=  result.user._id;
          if (req.params.userId !== _id) {
            res.status(400).json({
              code: 400,
              title: 'error',
              data: {
                message: 'User is not exist'
              }
            });
            next('Error in middeware deleteComment')
          }
      });
    } else {
        next()
    }
}