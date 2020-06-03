
const constants = require('../constants/api')
const userRoute = require('./user/index')()

module.exports = (app) => {
  app.use(constants.ROOT_API.USER, userRoute)
}