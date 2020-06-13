const jwt = require('../../constants/token');
const { comment } = require('../../models/commentModel');
const commentModel = require('../../models/commentModel').comment


module.exports = async (req, res, next) => {
    if (!req.params.commentId) {
      res.status(400).json({
          code: 400,
          title: 'error',
          data: {
            message: 'commentId is required param'
          }
        });
        return next('Error in middleware updateComment')
    } else if (!req.body.content){
      res.status(400).json({
        code: 400,
        title: 'error',
        data: {
          message: 'content is required field'
        }
      });
      return next('Error in middleware updateComment')
    } else if (!req.body.token) {
      res.status(400).json({
        code: 400,
        title: 'error',
        data: {
          message: 'token is required field'
        }
      });
      return next('Error in middleware updateComment')
    } else {
      let result = await jwt.verify(req.body.token)
      if (result.code === 404)
        {
          res.status(400).json({
            code: 400,
            title: "ERROR",
            data: {
                message: "user not exist"
            }
          })        
          return next('Error in middleware updateComment')
        } else {
          getCommentById(req.params.commentId).then((resultComment) => {
            if(resultComment.code === 200)
            {
              const comment = resultComment.comment
              console.log(result)
              if(comment === null)
              {
                res.status(400).json({
                  code: 400,
                  title: "ERROR",
                  data: {
                      message: "comment not exist"
                  }
                })        
                return next('Error in middleware updateComment')
              } else if (result & result.user._id === comment.user.userId ) {
                  next()
              } else {
                res.status(400).json({
                  code: 400,
                  title: "ERROR",
                  data: {
                      message: "User haven't permission"
                  }
              })
              return next('Error in middleware updateComment')
              }
            } else {
              res.status(400).json({
                code: 400,
                title: 'err',
                data: {
                  message: 'comment does not exist',
                }
              })
              return next('Error in middleware updateComment')
            }
          })
        }
      return next()
    }  
}

function getCommentById(id)
{
  return new Promise((resolve, reject) => {
    commentModel.findOne({_id: id}, (err, commentResult) => {
      if(!err && commentResult) {
        resolve({
          code:200,
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