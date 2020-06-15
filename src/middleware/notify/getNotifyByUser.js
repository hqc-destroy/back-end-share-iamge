const jwt = require('../../constants/token')


module.exports = async (req, res, next) => {
    console.log(req.body.token)
    if(!req.body.token) {
        res.status(400).json({
            code: 400,
            title: "error",
            data: {
                message: "token is required field",
            }
        })
        next("Error in middleware getNotifyByUserId")
    } else {
        let result = await jwt.verify(req.body.token)
        console.log(result)
        if(!result || result.code === 404) {
            res.status(400).json({
                code: 400,
                title: "error",
                data: {
                    message: "faild to verify token",
                }
            })
            next("Error in middleware getNotifyByUserId")
        } else {
            next()
        }
    }
}