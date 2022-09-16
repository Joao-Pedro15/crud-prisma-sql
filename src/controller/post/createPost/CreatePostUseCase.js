const prisma = require('../../../database/prisma')

class CreatePostUseCase {
    async execute ({ author, content }) {
        try {
            const contentFinal = await prisma.post.create({ author, content })
            return contentFinal
        } catch (error) {
            return error.message
        }
    }
}

module.exports = new CreatePostUseCase()