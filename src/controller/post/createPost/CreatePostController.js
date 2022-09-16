const CreatePostUseCase = require("./CreatePostUseCase")

class CreatePostController {
    async handle (request, response) {
        const { author, content } = request.body
        try {
            const contentFinal = await CreatePostUseCase.execute({ author, content })
            return response.status(200).json(contentFinal)
        } catch (error) {
            return response.status(200).json({message: error.message})
        }
    }
}

module.exports = new CreatePostController()