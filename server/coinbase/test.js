var fs = require('fs');
var moment = require('moment');

fs.readFile('./candles.txt', 'utf-8', function(err, result){
  /*
  Each bucket is an array of the following information:

  0 - time bucket start time
  1 - low lowest price during the bucket interval
  2 - high highest price during the bucket interval
  3 - open opening price (first trade) in the bucket interval
  4 - close closing price (last trade) in the bucket interval
  5 - volume volume of trading activity during the bucket interval

  */
  result = JSON.parse(result);
  result = result.map(toObject);

  // Now lets write to the database
  
  // console.log(result[result.length-1]);
});

function toObject(arr){
  return {
    time: moment.unix(arr[0]).toDate(),
    low: arr[1],
    high: arr[2],
    open: arr[3],
    close: arr[4],
    volume: arr[5],
  }
}