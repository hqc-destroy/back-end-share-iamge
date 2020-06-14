const jwt = require('../../constants/token')
const userModel = require('../../models/userModel').user
module.exports = (req, res, next) => {
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
    } else if (!req.body.token) {
        res.status(400).json({
          code: 400,
          title: 'error',
          data: {
            message: 'token is a required field'
          }
        })
        next('Error in middleware createComment')
    } else {
      jwt.verify(req.body.token).then((result) => {
        if(result.code === 200) {
          const userId = result.user._id;
          userModel.findById({ _id: userId}, (err,result) => {
              if(result && !err) {
                  next()
              } else {
                  res.status(400).json({
                      code: 400,
                      title: 'error',
                      data: {
                          message: "user not exist"
                      }
                  })
                  next("Error in middleware createComment")
              }
          })
        } else {
          res.status(400).json({
            code: 400,
            title: 'error',
            data: {
                message: "fail to verify token"
            }
          })
          next("Error in middleware createComment")
        }
      })
    }
}