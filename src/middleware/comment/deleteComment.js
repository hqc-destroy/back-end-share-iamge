const jwt = require('../../constants/token')
const { image } = require('../../models/imageModel')
const { comment } = require('../../models/commentModel')
const imageModel = require('../../models/imageModel').image
const commentModel = require('../../models/commentModel').comment
module.exports = async (req, res, next) => { 
    if(!req.params.imageId) {
        res.status(400).json({
            code: 400,
            title: 'error',
            data: {
              message: 'imageId is required param'
            }
          })
          next('Error in middleware deleteComment')
    } else if (!req.params.commentId) {
      res.status(400).json({
        code: 400,
        title: 'error',
        data: {
          message: 'commentId is required param'
        }
      })
      next('Error in middleware deleteComment')
    } else if (!req.body.token) {
      res.status(400).json({
        code: 400,
        title: 'error',
        data: {
          message: 'token is required field'
        }
      })
      next('Error in middleware deleteComment')
    } else {
      let result = await jwt.verify(req.body.token)
      if(result.code === 404) {
        res.status(400).json({
          code: 400,
          title: "ERROR",
          data: {
              message: "user not exist"
          }
        })        
        return next('Error in middleware updateComment')
      } else {
        let image = await getImageById(req.params.imageId)
        let comment = await getCommentById(req.params.commentId)
        console.log("image: " + image);
        console.log("comment: "+ comment);
        console.log("result: " +result)
        if(image.code === 200 && comment.code ===200 &&
          (image.image.user.userId === result.user._id
            || comment.comment.user.userId === result.user._id)) {
          return next()
        } else {
          res.status(400).json({
            code: 400,
            title: "ERROR",
            data: {
                message: "Bad request",
                image: image,
                comment: comment,
                result: result
            }
        })
        next('Error in middleware deleteImage')
        } 

      }
      next()
    }
}

function getImageById(id)
{
  return new Promise((resolve, reject) => {
    imageModel.findOne({_id: id}, (err, imageResult) => {
      console.log(imageResult)
      if(!err && imageResult) {
          resolve({
            code:200,
            image: imageResult
          })
      } else {
        resolve({
          code:400
        })
      }
    })
  })  
}

function getCommentById(id)
{
  return new Promise((resolve, reject) => {
    commentModel.findOne({_id: id}, (err, commentResult) => {
      if(!err && commentResult) {
        resolve({
          code: 200,
          comment: commentResult
        })
      } else {
        resolve({
          code: 400
        })
      }
    })
  })
}
