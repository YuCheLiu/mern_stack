var express = require('express')
var app = express()

app.get('/',function(req,res){
    console.log("Hello")
    res.send("Connected")
})

app.listen(3000, function () {
    console.log('App started on port 3000');
  });