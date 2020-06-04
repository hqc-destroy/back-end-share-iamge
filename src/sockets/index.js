const chatbox = require('./chatbox/index')

module.exports = {
    run: function run(socket, io) {
        socket.join(socket.request._query.name)
        console.log(socket.request._query.name)
        chatbox(socket, io)
    }
}