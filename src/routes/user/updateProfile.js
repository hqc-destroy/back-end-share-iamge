const { JsonWebTokenError } = require("jsonwebtoken")
const jwt = require('../../constants/token')
const userModel = require('../../models/userModel').user

module.exports = async (req, res) => {
    const result = await jwt.verify(req.body.token)
    console.log(result)
    if(result.code ===200)
    {
        userModel.findOneAndUpdate({_id: result.data.user._id},
                                    { ...req.body },
                                    { new: true },
                                    (err, userResult) => {
                                        if (userResult && !err) {
                                            res.status(200).json({
                                                code: 200,
                                                title: "SUCCESS",
                                                data: {
                                                    message: "UPDATE SUCCESS",
                                                    user: userResult
                                                }
                                            })
                                        } else {
                                            res.status(400).json({
                                                code: 400,
                                                title: 'error',
                                                data: {
                                                    message: 'user is not exist!'
                                                }
                                            })
                                        }
                                    })
    } else {
        res.status(400).json({
            code: 400,
            title: 'error',
            data: {
                message: 'user is not exist!',
                result: result
            }
        })
    }
}