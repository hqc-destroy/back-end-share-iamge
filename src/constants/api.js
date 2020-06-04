module.exports = {
    ROOT_API: {
        USER: '/api/users', // /api/user -> /api/users
        IMAGE: '/api/images'
    },
    USER: {
        CREATE_USER: '/', // /create-user -> /  note: Create a new user (method: post)
        LOGIN: '/login',
    },
    IMAGE: {
        GET_IMAGES: '/', 
        CREATE_IMAGE: '/', // /create-image -> / note: Create a new image theo userId (method: post)
        UPDATE_IMAGE: '/:id', // /update-image -> / note: Update a new image theo userId (method: put)
        DELETE_IMAGE: '/:id'
    }
}