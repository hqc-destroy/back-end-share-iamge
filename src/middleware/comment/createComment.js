module.exports = (req, res, next) => { // Đoạn này ô nên check token ở đây luôn, và phân tích token ra rồi gắn vào body luôn
    if(!req.body.imageId) {
        res.status(400).json({
            code: 400,
            title: 'error',
            data: {
              message: 'Image is not exist'
            }
          })
          next('Error in middleware createComment')
    } else if (!req.body.content) {
        res.status(400).json({
            code: 400,
            title: 'error',
            data: {
              message: 'content is a required field'
            }
          })
          next('Error in middleware createComment')
    } else {
        next()
    }
}