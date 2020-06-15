
const constants = require('../constants/api')
const userRoute = require('./user/index')()
const commentRoute = require('./comment/index')()
const imageRoute = require('./image/index')()
const notifyRoute = require('./notify/index')()

module.exports = (app) => {
  app.use(constants.ROOT_API.USER, userRoute)
  app.use(constants.ROOT_API.COMMENT, commentRoute)
  app.use(constants.ROOT_API.IMAGE, imageRoute)
  app.use(constants.ROOT_API.NOTIFY, notifyRoute)
}