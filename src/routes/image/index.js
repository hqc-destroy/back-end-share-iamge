const router = require('express').Router()
const constants = require('../../constants/api')
const getImages = require('./getImages') 
const createImage=  require('./createImage')
const middlewareImage = require('../../middleware/image')
const updateImage = require('./updateImage')
const deleteImage = require('./deleteImage')

module.exports = () => {
    router.get(constants.IMAGE.GET_IMAGES,getImages)
    router.post(constants.IMAGE.CREATE_IMAGE, middlewareImage.createImage , createImage)
    router.put(constants.IMAGE.UPDATE_IMAGE, updateImage )
    router.delete(constants.IMAGE.DELETE_IMAGE, deleteImage)
    return router
}