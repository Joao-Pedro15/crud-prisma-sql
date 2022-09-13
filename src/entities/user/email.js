const InvalidEmailError = require('../errors/invalid-email-error')

module.exports = class Email {
    constructor(email) {
        this.value = email
    }

    create (email) {
        if(!this.validate(email)) new InvalidEmailError(email)
        return new Email(email)
    }

    validate (email) {
        if(!email) return false
        if(email.length > 320) return false
        if(!email.includes('@')) return false
        return true
    }
}