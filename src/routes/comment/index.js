const router = require('express').Router()
const createComment = require('./createComment')
const constants =  require('../../constants/api')
const updateComment = require('./updateComment')
const deleteComment = require('./deleteComment')
const getComments = require('./getComments')
const middlewareComment = require('../../middleware/comment')

module.exports = () => {
    router.post(constants.COMMENT.CREATE_COMMENT, middlewareComment.createComment, createComment)
    router.put(constants.COMMENT.UPDATE_COMMENT, middlewareComment.updateComment, updateComment)
    router.delete(constants.COMMENT.DELETE_COMMENT, deleteComment)
    router.get(constants.COMMENT.GET_COMMENT, getComments)
    return router
}