export class Name {
     constructor(name){
        this.value = name
    }

    create(name){
        if(!this.validate(name)) throw new Error('Invalid name')
        return new Name(name)
    }

    validate (name) {
        if(!name) return false
        if(name.trim().length < 2 || name.trim().length > 256) return false
        return true
    }
}