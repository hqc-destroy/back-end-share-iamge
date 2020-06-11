module.exports = (req, res, next) => { // check thêm token như phần delete và create
    if(!req.params.id) {
        res.status(400).json({
            code: 400,
            title: 'error',
            data: {
              message: 'Comment is not exist'
            }
          })
          next('Error in middleware updateComment')
    } else {
        next()
    }
}