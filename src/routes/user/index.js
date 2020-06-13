const router = require('express').Router()
const register = require('./register')
const login = require('./login')
const updateProfile = require('./updateProfile')
const getFlowingUsers = require('./getFlowingUser')
const postRequestFlow = require('./postRequestFlow')
const constants = require('../../constants/api.js')
const middlewareUser = require('../../middleware/user')


module.exports = () => {
  router.post(constants.USER.CREATE_USER, middlewareUser.register, register)
  router.post(constants.USER.LOGIN, middlewareUser.login, login)
  router.put(constants.USER.UPDATE_PROFILE, middlewareUser.updateProfile, updateProfile)
  router.get(constants.USER.GET_FLOWS, middlewareUser.getFlowingUsers, getFlowingUsers)
  router.post(constants.USER.REQUEST_FLOW, middlewareUser.postRequestFlow, postRequestFlow)
  return router
}