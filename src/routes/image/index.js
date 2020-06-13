const router = require('express').Router()
const constants = require('../../constants/api')
const getImagesByUserId = require('./getImagesByUserId') 
const createImage=  require('./createImage')
const middlewareImage = require('../../middleware/image')
const updateImage = require('./updateImage')
const deleteImage = require('./deleteImage')
const getImageById = require('./getImageById')
const likeImage = require('./likeImage')



module.exports = () => {
    router.get(constants.IMAGE.GET_IMAGES_BY_USERID, getImagesByUserId)
    router.post(constants.IMAGE.CREATE_IMAGE, middlewareImage.createImage , createImage)
    router.put(constants.IMAGE.UPDATE_IMAGE, middlewareImage.updateImage ,updateImage )
    router.delete(constants.IMAGE.DELETE_IMAGE, middlewareImage.deleteImage, deleteImage)
    router.get(constants.IMAGE.GET_IMAGE_BY_ID,getImageById)
    router.post(constants.IMAGE.LIKE_IMAGE,likeImage)

    return router
}