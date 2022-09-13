const server = require('../app')
const PORT = process.env.PORT || 3333

try {
    module.exports = server.listen(PORT, () => {
        console.log(`server running on PORT ${PORT}`);
    })
} catch (error) {
    throw new Error(error)
}

