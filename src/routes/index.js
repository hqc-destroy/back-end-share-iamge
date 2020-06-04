
const constants = require('../constants/api')
const userRoute = require('./user/index')()
const imageRoute = require('./image/index')()

module.exports = (app) => {
  app.use(constants.ROOT_API.USER, userRoute)
  app.use(constants.ROOT_API.IMAGE, imageRoute)
}