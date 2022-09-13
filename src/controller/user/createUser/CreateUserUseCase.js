const prisma = require('../../../database/prisma')

class CreateUserUseCase {
    async execute (userData) {
        try {
            const user = prisma.user.create(userData)
            return user
        } catch (error) {
            return error
        }
    }
}

module.exports = new CreateUserUseCase()