var Pusher = require('pusher-client');
var socket = new Pusher('de504dc5763aeef9ff52');
var trade_channel = socket.subscribe('live_trades');
trade_channel.bind('trade', function(data){
  console.log(data);
})