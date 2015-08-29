// Endpoints
var bitstamp = {
  ticker: 'https://www.bitstamp.net/api/ticker/',
  hrTicker: 'https://www.bitstamp.net/api/ticker_hour/', 
  orderBook: 'https://www.bitstamp.net/api/order_book/', // Full orderbook 
  transactions: 'https://www.bitstamp.net/api/transactions/' // Full Transactions`
}

var request = require('request');
request(bitstamp.transactions, function(err, res, body){
  if(err){
    console.log('ERROR\n',err);
  }else{
    console.log('body', body);
  }
});