module.exports = (req, res, next) => {
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