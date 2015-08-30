var fs = require('fs');
var request = require('request');
var coinbase = require('coinbase-exchange');
var url = 'https://api.exchange.coinbase.com';

// Web Socket Connections
// var websocket = new coinbase.WebsocketClient();

// websocket.on('message', function(data){
//   console.log(data);
// });

// HTTP GET REQUEST FOR DATA
request({
  url: url+'/products/BTC-USD/candles',
  headers: {
    'User-Agent': 'request'
  }
}, function(err, res, body){
  fs.writeFile('./candles.txt', body, function(err){
    if(!err) console.log('finished write');
  });
});