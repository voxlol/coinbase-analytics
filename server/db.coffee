moment = require 'moment'
mongoose = require 'mongoose'
url = 'mongodb://localhost:27017/analytics'

mongoose.connect url

# Schema Declarations
Schema = mongoose.Schema 
ObjectId = Schema.ObjectId

HistoricalDataSchema = new Schema {
  time: Date 
  low: 
    type: Number
    min: 0
  high: 
    type: Number
    min: 0
  close:
    type: Number
    min: 0
  volume:
    type: Number
    min: 0
}

# Setting up the model with the schema 
HistoricalData = mongoose.model 'test', HistoricalDataSchema

# Testing with new data
newData = new HistoricalData {
  time: moment().date()
  close: 1337
}

newData.save (err) ->
  console.log 'success!' if not err