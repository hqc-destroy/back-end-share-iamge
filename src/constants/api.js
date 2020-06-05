module.exports = {
    ROOT_API: {
        USER: '/api/users', // /api/user -> /api/users
        COMMENT: '/api/comments' // /api/comment -> /api/comments
    },
    USER: {
        CREATE_USER: '/', // /create-user -> /  note: Create a new user (method: post)
        LOGIN: '/login'
    },
    COMMENT: {
        CREATE_COMMENT: '/', // /create-comment -> / note: Create a new commnet
        UPDATE_COMMENT: '/:id',// update-comment -> / note: update a comment
        DELETE_COMMENT: '/:id', // delete-comment -> / note: delete a commnent
        GET_COMMENT: '/'
    }
}