// var mongo = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/analytics';
mongoose.connect(url);

// // Connection URL

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