const CreateUserUseCase = require("./CreateUserUseCase")

class CreateUserController {
    async handle(request, response) {
        const { email, password } = request.body
        try {
            const user = CreateUserUseCase.execute({ email,  })
            return response.status(201).json(user)
        } catch (error) {
            return response.status(error.statusCode).json({message: error.message})
        }
    }
}