var express = require('express')
var app = express()

app.get('/',function(req,res){
    res.send("Connected")
})
app.get('/:id',function(req,res){
    res.send("Connected by id")
})

app.listen(3000, function () {
    console.log('App started on port 3000');
  });