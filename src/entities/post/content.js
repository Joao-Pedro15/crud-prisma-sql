module.exports = class Content {
    constructor(content) {
        this.value = content
    }

    create (content) {
        if(!this.validate(content)) throw  new Error('invalid content!')
        return new Content(content)
    }

    validate (content) {
        if(!content) return false
        if(content.length < 20) return false
        return true
    }
}