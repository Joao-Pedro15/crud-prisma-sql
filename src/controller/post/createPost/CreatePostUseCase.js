const prisma = require('../../../database/prisma')

class CreatePostUseCase {
    async execute (postData) {
        try {
            const contentFinal = await prisma.post.create(postData)
            return contentFinal
        } catch (error) {
            return error.message
        }
    }
}

module.exports = new CreatePostUseCase()