angular.module 'cb-analytics'
.controller 'GraphController', ['$scope', ($scope)->
  $scope.data = [];
  window.data = $scope.data

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
        $scope.data.shift() if $scope.data.length > 50 

        # Data Parsing
        $scope.data.push(newData)
        $scope.$apply()

    ws.onclose = ()->
    undefined

  `function formatLiveData(row){
    return 
  }`
]
