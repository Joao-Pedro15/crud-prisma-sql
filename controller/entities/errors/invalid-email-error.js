class InvalidEmailError extends Error {
    constructor(email){
        super(`Invalid email: ${email}.`)
    }
}