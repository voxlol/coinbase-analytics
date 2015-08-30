# Module Imports
fs = require 'fs'
request = require 'request'
CoinbaseExchange = require 'coinbase-exchange'
moment = require 'moment'

# Coinbase Configuration
url = 'https://api.exchange.coinbase.com'

publicClient = new CoinbaseExchange.PublicClient()
publicClient.getProductHistoricRates
  start: '2015-08-27'
  end: '2015-08-30'
  granularity: minutesToSeconds(15),

  (err,res,body) ->
    fs.writeFile './candles2.txt', JSON.stringify(body), (err)->
      console.log 'finished writing!'

# Helper Functions
`function minutesToSeconds(minute){
  return minute * 60;
}`


###
  Each bucket is an array of the following information:

  0 - time bucket start time
  1 - low lowest price during the bucket interval
  2 - high highest price during the bucket interval
  3 - open opening price (first trade) in the bucket interval
  4 - close closing price (last trade) in the bucket interval
  5 - volume volume of trading activity during the bucket interval

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
###