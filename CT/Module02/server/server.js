const express = require('express')
const app = express()
const path = require('path')

app.use(express.static('./'))
console.log(path.resolve(__dirname,''))
app.listen(3000, ()=>{
    console.log("server start")
})