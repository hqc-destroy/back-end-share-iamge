const jwt = require('../../constants/token')
const userModel = require('../../models/userModel').user
module.exports = (req,res,next) => {
    if (!req.params.imageId) {
        res.status(400).json({
            code: 400,
            title: 'error',
            data: {
                message: "imageId is required param"
            }
        })
        next('Error in middleware likeImage')
    } else if (!req.body.token) {
        res.status(400).json({
            code: 400,
            title: 'error',
            data: {
                message: "token is require field"
            }
        })
        next("Error in middleware likeImage")
    } else {
        jwt.verify(req.body.token).then((result) => {
            console.log('result middleware: '+ result )
            if( result.code === 200 )
            {
                const userId = result.data.user._id;
                userModel.findOne({ _id: userId}, (err,userResult) => {
                    if(userResult && !err) {
                        next()
                    } else {
                        res.status(400).json({
                            code: 400,
                            title: 'error',
                            data: {
                                message: "user not exist"
                            }
                        })
                        next("Error in middleware likeImage")
                    }
                } )
            } else {
                res.status(400).json({
                    code: 400,
                    title: 'error',
                    data: {
                        message: "fail to verify token"
                    }
                })
                next("Error in middleware likeImage")
            }
            
        })
    }
}