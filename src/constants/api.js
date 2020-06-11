module.exports = {
    ROOT_API: {
        USER: '/api/users', // /api/user -> /api/users
<<<<<<< HEAD
        COMMENT: '/api/comments' // /api/comment -> /api/comments
    },
    USER: {
        CREATE_USER: '/', // /create-user -> /  note: Create a new user (method: post)
        LOGIN: '/login'
    },
    COMMENT: {
        CREATE_COMMENT: '/', // /create-comment -> / note: Create a new commnet
        UPDATE_COMMENT: '/:id',// update-comment -> / note: update a comment
        DELETE_COMMENT: '/:id/:userId', // delete-comment -> / note: delete a commnent
        GET_COMMENT: '/'
=======
        IMAGE: '/api/images'
    },
    USER: {
        CREATE_USER: '/', // /create-user -> /  note: Create a new user (method: post)
        LOGIN: '/login',
    },
    IMAGE: {
        GET_IMAGES: '/', 
        CREATE_IMAGE: '/', // /create-image -> / note: Create a new image theo userId (method: post)
        UPDATE_IMAGE: '/:id/:userId', // /update-image -> / note: Update a new image theo userId (method: put)
        DELETE_IMAGE: '/:id/:userId'
>>>>>>> feature/image
    }
}