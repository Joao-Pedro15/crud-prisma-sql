module.exports = class InvalidNameError extends Error {
    constructor(name) {
        super(`Invalid name: ${name}.`)
    }
}