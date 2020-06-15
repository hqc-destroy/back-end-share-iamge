const jwt = require('../../constants/token')
const notifyModel = require('../../models/notifyModel').notify

module.exports = async (req, res) => {
    console.log("route run")
    let result = await jwt.verify(req.body.token)
    notifyModel.find({userId: result.data.user._id}, (err, notifiesResult) => {
        if(!err && notifiesResult) {
            res.status(200).json({
                code: 200,
                title: "success",
                data: {
                    message: "success",
                    data: notifiesResult
                }
            })
        } else {
            res.status(400).json({
                code: 400,
                title: "error",
                data: {
                    message: "can't get notifyList ",
                }
            })
        }
    })
}