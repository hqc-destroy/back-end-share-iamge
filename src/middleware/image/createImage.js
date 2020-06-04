module.exports =(req, res, next) => {
   if(!req.body.base64) {
       res.status(400).json({
           code: 400,
           title: 'error',
           data : {
               message: 'Image is not exist'
           }
       })
       next('Error in middleware createImage')
   } else {
       next()
   }
}