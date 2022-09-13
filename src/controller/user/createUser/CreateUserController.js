const CreateUserUseCase = require("./CreateUserUseCase")
const User = require('../../../entities/user/user')

class CreateUserController {
    async handle(request, response) {
        const { email, password } = request.body
        const UserData = User.create(email, password)
        try {
            const user = CreateUserUseCase.execute(UserData)
            return response.status(201).json(user)
        } catch (error) {
            return response.status(error.statusCode).json({message: error.message})
        }
    }
}

module.exports = new CreateUserController()