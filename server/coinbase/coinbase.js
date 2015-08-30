var fs = require('fs');
var request = require('request');
var CoinbaseExchange = require('coinbase-exchange');
var url = 'https://api.exchange.coinbase.com';
var moment = require('moment');

var publicClient = new CoinbaseExchange.PublicClient();
publicClient.getProductHistoricRates({
  start: '2015-06-01',
  end: '2015-08-30',
  granularity: '86400'
}, function(err, res, body){
  fs.writeFile('./candles.txt', JSON.stringify(body), function(err){
    console.log('finished');
  })
  // console.log(body);
  // console.log(moment(body[0][0]).toDate())
});


// Web Socket Connections
// var websocket = new coinbase.WebsocketClient();

// websocket.on('message', function(data){
//   console.log(data);
// });

// HTTP GET REQUEST FOR DATA
// request({
//   url: url+'/products/BTC-USD/candles',
//   headers: {
//     'User-Agent': 'request'
//   }
// }, function(err, res, body){
//   fs.writeFile('./candles.txt', body, function(err){
//     if(!err) console.log('finished write');
//   });
// });

