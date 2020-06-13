module.exports = {
    ROOT_API: {
        USER: '/api/users', // /api/user -> /api/users

        COMMENT: '/api/comments', // /api/comment -> /api/comments

        IMAGE: '/api/images'
    },
    USER: {
        CREATE_USER: '/', // /create-user -> /  note: Create a new user (method: post)
        LOGIN: '/login',
        UPDATE_PROFILE: '/',
        REQUEST_FLOW: '/flows/:userId',//post a request flow to user have userId
        GET_FLOWS: '/flows' //list user flowing

    },
    COMMENT: {
        CREATE_COMMENT: '/', // /create-comment -> / note: Create a new commnet
        UPDATE_COMMENT: '/:commentId/',// update-comment -> / note: update a comment
        DELETE_COMMENT: '/:imageId/:commentId', // delete-comment -> / note: delete a commnent
        GET_COMMENT: '/',
        GET_COMMENTS_BY_IMAGEID: '/:imageId'   
    },
    IMAGE: {
        GET_IMAGES: '/', 
        CREATE_IMAGE: '/', // /create-image -> / note: Create a new image theo userId (method: post)
        UPDATE_IMAGE: '/:userId/:imageId', // /update-image -> / note: Update a new image theo userId (method: put)
        DELETE_IMAGE: '/:userId/:imageId', 
        GET_IMAGE_BY_ID: '/:imageId',
        GET_IMAGES_BY_USERID: '/user/:userId',
        LIKE_IMAGE: '/:imageId/like'
    }
}