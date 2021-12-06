var express = require('express')
var app = express()
var helloRouter = require('./router')

app.use('/hello',helloRouter)
app.listen(3000, function () {
    console.log('App started on port 3000');
});