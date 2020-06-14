const userModel = require('../../models/userModel').user

module.exports = (req, res) => {
    userModel.findOne({_id: req.params.userId}, (err, user) => {
        if(!err && user) {
            res.status(200).json({
                code: 200,
                title: 'success',
                data: {
                    message : "success",
                    listUserFlows: user.listUserFlow
                }
            })
        } else {
            res.status(400).json({
                code: 400,
                title: "ERROR",
                data: {
                    message: "fail to get listUserFlow for "+req.params.userID
                }
            })
        }
    })
}