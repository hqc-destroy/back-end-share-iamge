const imageModel = require('../../models/imageModel').image
const jwt = require('../../constants/token')

module.exports = (req, res) => {
    jwt.verify(req.body.token).then((result) => {
        console.log(result)
        let userId = result.data.user._id;
        imageModel.findById({ _id: req.params.imageId }, (err, imageResult) => {
            if (imageResult && !err) {
                let listUserIdLike = imageResult.listUserLike.map(
                    (user) => user._id
                );
                if(!listUserIdLike.includes( userId )) {
                    imageResult.listUserLike.push( { 
                        _id: result.data.user._id,
                        userName : result.data.user.userName 
                    })
                    imageResult.save()
                    res.status(200).json({
                        code: 200,
                        title: 'SUCCESS',
                        data: {
                            message: "LIKE SUCCESS",
                            data: imageResult
                        }
                    });
                } else {
                    imageResult.listUserLike.splice( imageResult.listUserLike.indexOf({
                        _id: result.data.user._id,
                        userName : result.data.user.userName 
                    }),1 )
                    console.log(imageResult)
                    imageResult.save()
                    res.status(200).json({
                        code: 200,
                        title: 'SUCCESS',
                        data: {
                            message: "DISLIKE SUCCESS",
                            data: imageResult
                        }
                    })
                }
            } else {
                res.status(400).json({
                    code: 400,
                    title: 'error',
                    data: {
                        message: "Image not found",
                    }
                });
            }
        })
    })
}