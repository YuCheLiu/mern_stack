var express = require('express')
var router = express.Router()

router.get('/',function(req,res){
    console.log("Hello")
    res.send("Connected")
})

module.exports = router