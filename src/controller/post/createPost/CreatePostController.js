const CreatePostUseCase = require("./CreatePostUseCase")

class CreatePostController {
    async handle (request, response) {
        const { author, content } = request.body
        try {
            const content = await CreatePostUseCase.execute({ author, content })
            return content
        } catch (error) {
            return response.status(200).json({message: error.message})
        }
    }
}

module.exports = new CreatePostController()