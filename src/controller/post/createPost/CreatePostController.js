const CreatePostUseCase = require("./CreatePostUseCase")
const Post = require('../../../entities/post/content')

class CreatePostController {
    async handle (request, response) {
        const { author, content } = request.body
        const postData = Post.create(author, content)
        try {
            const contentFinal = await CreatePostUseCase.execute(postData)
            return response.status(200).json(contentFinal)
        } catch (error) {
            return response.status(200).json({message: error.message})
        }
    }
}

module.exports = new CreatePostController()