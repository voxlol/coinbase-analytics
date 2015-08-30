var fs = require('fs');

// fs.readFile('./dump.txt', 'utf-8', function(err, result){
//   result = JSON.parse(result);
//   console.log(result);
// });

fs.readFile('./candles.txt', 'utf-8', function(err, result){
  result = JSON.parse(result);
  console.log(result);
});