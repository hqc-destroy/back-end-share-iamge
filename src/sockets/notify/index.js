const notifyModel = require('../../models/notifyModel').notify

function onClientSendNotify(socket, io) {
    socket.on('userlikeImage', (notify) =>{
        //luu nottify vao db
        const newNotify = {
            content: notify.fromUserName + " liked your image",
            userId: notify.userId,
            fromUserName: notify.fromUserName,
            imageId: notify.imageId,
            date: ` ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds} ${new Date().getDate}/ ${new Date().getMonth()}/ ${new Date().getFullYear()}`
        }
        notifyModel.create(newNotify, (err, notifyResult) => {
            if(!err && notifyResult) {
                io.to(notify.userName).emit("serverLikeImage", newNotify)
                socket.emit('updateLike')
            }
        })
    })

    //comment
    socket.on('userCommentImage', (notify) => {
        const newNotify = {
            content: notify.fromUserName + " comment your image",
            userId: notify.userId,
            fromUserName: notify.fromUserName,
            imageId: notify.imageId,
            date: ` ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds} ${new Date().getDate}/ ${new Date().getMonth()}/ ${new Date().getFullYear()}`
        }
        notifyModel.create(newNotify, (err, notifyResult) => {
            if(!err && notifyResult) {
                io.to(notify.userName).emit("serverCommentImage", newNotify)
                socket.emit('updateComment')
            }
        })
    })
}

module.exports = function run(socket, io) {
    onClientSendNotify(socket, io)
}