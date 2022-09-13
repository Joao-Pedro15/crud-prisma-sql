const { Router } = require('express')
const CreateUserController = require('../controller/user/createUser')

const router = Router()


router.post('/createUser', CreateUserController.handle)


module.exports = router