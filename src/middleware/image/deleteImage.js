module.exports = (req, res, next) => {
    if(!req.params.id) {
        res.status(400).json({
            code: 400,
            title: 'error',
            data : {
                message: 'Image is not exsit'
            }
        })
        next('Error in middleware deleteImage')
    } else {
        next()
    }
}