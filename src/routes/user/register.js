

const userModel = require('../../models/userModel').user

module.exports = (req, res) => {
  validUsername(req.body).then((result) => {
    if (result.code === 400) {
      userModel.create({
        userName: req.body.userName,
        fullName: req.body.fullName,
        password: req.body.password
      }, (err, newUser) => {
        console.log(1)
        if (newUser && !err) {
          
          res.status(200).json({
            code: 200,
            title: 'Success',
            data: {
              message: 'Register success'
            }
          })
        } else {
          res.status(400).json({
            code: 400,
            title: 'error',
            data: {
              message: 'Error'
            }
          })
        }
      })
    } else {
      res.status(400).json({
        code: 400,
        title: 'warning',
        data: {
          message: 'Username is already exists'
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
          code: 200
        })
      } else {
        resolve({
          code: 400
        })
      }
    })
  })
}