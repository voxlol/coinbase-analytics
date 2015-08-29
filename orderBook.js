var Pusher = require('pusher-client');
var socket = new Pusher('de504dc5763aeef9ff52');
var trade_channel = socket.subscribe('order_book');
trade_channel.bind('data', function(data){
  console.log(data);
})