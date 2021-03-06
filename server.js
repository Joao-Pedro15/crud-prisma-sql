const express = require('express')
const router = require('./routes')
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(router)


app.listen(3030, ()=>{
    console.log('Server running!');
})

module.exports = app