express = require 'express'
bodyParser = require 'body-parser'

app = express()

app.use '/scripts', express.static(__dirname + '/../bower_components')
app.use express.static __dirname + '/../client'
app.use bodyParser.json()

app.listen 3000, ()->
  console.log 'Server running on port 3000'