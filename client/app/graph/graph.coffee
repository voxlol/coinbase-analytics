angular.module 'cb-analytics'
.controller 'GraphController', ['$scope', ($scope)->
  $scope.done = []
  $scope.matched = []

  $scope.sockets = () ->
    ws = new WebSocket 'wss://ws-feed.exchange.coinbase.com' # Connect to the coinbase socket
    req = 
      "type": "subscribe"
      "product_id": "BTC-USD"

    ws.onopen = () ->
      console.log 'conection established'
      ws.send(JSON.stringify(req))

    ws.onmessage = (evt)->
      return undefined if !evt.data?

      newData = JSON.parse evt.data
      if newData.type == 'done'
        $scope.done.pop() if $scope.done.length > 50 
        $scope.done.unshift(formatDoneTrades(newData))
        $scope.$apply()
      else if newData.type == 'match'
        $scope.matched.pop() if $scope.matched.length > 50
        $scope.matched.unshift(formatMatchedTrades(newData))
        $scope.$apply()


    ws.onclose = ()->

  `
  function formatDoneTrades(row){
    return {
      time: moment(row.time).format('hh:mm:ss.SSS'),
      price: +row.price,
      reason: row.reason,
      side: row.side,
      order_type: row.order_type,
      remaining_size: +row.remaining_size
    }
  }

  function formatMatchedTrades(row){
    return {
      time: moment(row.time).format('hh:mm:ss.SSS'),
      price: +row.price,
      size: +row.size,
      side: row.side === 'sell' ? 'buy' : 'sell'
    }
  }
  `
  undefined
]
