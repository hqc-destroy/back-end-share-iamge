module.exports = (req, res, next) => {
    if(!req.params.id) {
        res.status(400).json({
            code: 400,
            title: 'error',
            data: {
                message: 'image is not exist'
            }
        })
        next('Error in middleware updateImage')
    } else {
        next()
    }
}