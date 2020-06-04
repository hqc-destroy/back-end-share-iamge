const user = require('./user/index')

module.exports = {
    run: function run(socket, io) {
        socket.join(socket.request._query.name)
        // console.log(socket.request._query.name)
        user(socket, io)
    }
}