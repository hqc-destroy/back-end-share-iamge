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
    } else {
        next()
    }
}