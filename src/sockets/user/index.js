

function onClientSendMessage(socket, io) {
    socket.on('clientLogout', (idUser) => {
        io.to(idUser).emit('serverLogout')
    })
    socket.on('clientLogin', (idUser) => {
        io.to(idUser).emit('serverLogin')
    })
}

module.exports = function run(socket, io) {
    onClientSendMessage(socket, io)
}