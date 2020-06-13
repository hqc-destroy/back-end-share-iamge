const userModel = require("../../models/userModel").user
const jwt = require('../../constants/token')

module.exports = async (req, res) => {

    let result = await jwt.verify(req.body.token)
    console.log(result)
    if (result.code === 200) {
        userModel.findOne({_id: req.params.userId}, (err, userFlow) => {
            if(userFlow && !err) {
                userModel.findOne({_id: result.data.user._id}, (err, user) => {
                    if(user && !err) {
                        let listUserIdFlow = user.listUserFlow.map(
                            (user) => user._id
                        );
                        if(!listUserIdFlow.includes(userFlow._id)) {
                            user.listUserFlow.push({
                                _id: userFlow._id,
                                fullName: userFlow.fullName,
                                userName: userFlow.userName, 
                                avatarUrl: userFlow.avatarUrl
                            })
                            user.save()
                            res.status(200).json({
                                code: 200,
                                title: 'SUCCESS',
                                data: {
                                    message: "FLOW SUCCESS",
                                    data: user
                                }
                            });
                        } else {
                            user.listUserFlow.splice(user.listUserFlow.indexOf({
                                _id: userFlow._id,
                                fullName: userFlow.fullName,
                                userName: userFlow.userName, 
                                avatarUrl: userFlow.avatarUrl
                            }),1 )
                            user.save()
                            res.status(200).json({
                                code: 200,
                                title: 'SUCCESS',
                                data: {
                                    message: "UNFLOW SUCCESS",
                                    data: user
                                }
                            })
                        }            
                    } else {
                        res.status(400).json({
                            code: 400,
                            title: 'error',
                            data: {
                                message: "please check your token",
                            }
                        });
                    }
                })
            } else {
                res.status(400).json({
                    code: 400,
                    title: 'error',
                    data: {
                        message: "please check userId in param",
                    }
                });
            }
        })
    } else {
        res.status(400).json({
            code: 400,
            title: 'error',
            data: {
                message: "please check your token",
            }
        });
    } 
}