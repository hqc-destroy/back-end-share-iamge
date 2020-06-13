
const jwt = require('jsonwebtoken')
const userModel = require('../../models/userModel').user

module.exports = (req, res) => {
  validUsername(req.body).then((result) => {
    if (result.code === 200) {
      if (req.body.password == result.user.password) {
        jwt.sign({
          user: {
            userName: result.user.userName,
            _id: result.user._id,
            avatarUrl: result.user.avatarUrl,
            fullName: result.user.fullName,
          }
        }, 'secretkey', (err, token) => {
          res.status(200).json({  
            code: 200,
            title: 'Success',
            data: {
              message: 'LOGIN SUCCESS',
              user: {
                token: token,
                userName: result.user.userName,
                fullName: result.user.fullName,
                avatarUrl: result.user.avatarUrl
              }
            }
          });
        });
      } else {
        res.status(400).json({
          code: 400,
          title: 'warning',
          data: {
            message: 'password do not match',
            status: {
              isCorrectPassword: false,
              isCorrectUsername: true
            } 
          }
        })
      }
    } else {
      res.status(400).json({
        code: 400,
        title: 'warning',
        data: {
          message: 'Username does not exist',
          status: {
            isCorrectPassword: true,
            isCorrectUsername: false
          }
        }
      })
    }
  }).catch((err) => {
    res.status(400).json({
      code: 400,
      title: 'error',
      data: {
        message: 'Error'
      }
    })
  })
}

function validUsername(body) {
  return new Promise((resolve, reject) => {
    userModel.findOne({ userName: body.userName }, (err, result) => {
      if (result && !err) {
        resolve({
          code: 200,
          user: result
        })
      } else {
        resolve({
          code: 400
        })
      }
    })
  })
}