var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use('/scripts', express.static(__dirname + '/../bower_components'));
app.use(express.static(__dirname + '/../client'));
app.use(bodyParser.json());

app.listen(3000, function(){
  console.log('Server running on port 3000');
});