const express = require('express');
require('dotenv').config()

const app = express();
var list =[];
app.use(express.static('public'));

app.listen(3000, function () {
  console.log('App started on port 3000');
});







