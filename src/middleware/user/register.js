

module.exports = (req, res, next) => {
  if (!req.body.userName) {
    res.status(400).json({
      code: 400,
      title: 'error',
      data: {
        message: 'userName is a required field'
      }
    })
    next('Error in middleware register')
  } else if (!req.body.password) {
    res.status(400).json({
      code: 400,
      title: 'error',
      data: {
        message: 'password is a required field'
      }
    })
    next('Error in middleware register')
  } else {
    next()
  }
}