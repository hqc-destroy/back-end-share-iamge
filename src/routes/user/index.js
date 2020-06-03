const router = require('express').Router()
const register = require('./register')
const login = require('./login')
const constants = require('../../constants/api.js')
const middlewareUser = require('../../middleware/user')


module.exports = () => {
  router.post(constants.USER.CREATE_USER, middlewareUser.register, register)
  router.post(constants.USER.LOGIN, middlewareUser.login, login)
  return router
}