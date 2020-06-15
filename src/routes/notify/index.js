const router = require('express').Router()
const constants = require('../../constants/api.js')
const getNotifyByUserId = require('./getNotifyByUser')
const middlewareNotify = require('../../middleware/notify')



module.exports = () => {
    router.get(constants.NOTIFY.GET_NOTIFIES_BY_USERID, middlewareNotify.getNotifyByUserId, getNotifyByUserId)

    return router
}