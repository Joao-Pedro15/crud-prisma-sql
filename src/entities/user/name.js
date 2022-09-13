const InvalidNameError = require('../errors/invalid-name-error')

module.exports = class Name {
     constructor(name){
        this.value = name
    }

    create(name){
        if(!this.validate(name)) new InvalidNameError(name)
        return new Name(name)
    }

    validate (name) {
        if(!name) return false
        if(name.trim().length < 2 || name.trim().length > 256) return false
        return true
    }
}