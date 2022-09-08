const Name = require('./name')
const Email = require('./email')


module.exports = class User {
    constructor(name, email) {
        this.name = name
        this.email = email
    }

    create (userData) {
        const nameOrError = Name.create(userData.name)
        const emailOrError = Email.create(userData.email)
        if(nameOrError && emailOrError){
            return new User(this.name, this.email)
        }        
    }
}