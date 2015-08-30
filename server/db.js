var moment = require('moment');
var mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/analytics';
mongoose.connect(url);

var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

var HistoricalDataSchema = new Schema({
  time: Date,
  low: { type: Number, min: 0 },
  high: { type: Number, min: 0 },
  close: { type: Number, min: 0 },
  volume: { type: Number, min: 0 },
});

var HistoricalData = mongoose.model('test', HistoricalDataSchema);

var newData = new HistoricalData({time: moment().toDate(), close: 1337});
newData.save(function(err){
  if(!err) console.log('success!');
})


// // Use connect method to connect to the server
// mongo.connect(url, function(err, db){
//   console.log('successfully connected to the server');
//   var cursor = db.collection('test')
//     .update({name:'allen2'}, { $push : { lol: 1337 } }, 
//     function(err, doc){
//       console.log(doc);
//       db.close();
//   });

// });