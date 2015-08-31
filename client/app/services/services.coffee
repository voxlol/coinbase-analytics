angular.module 'cb-analytics'
.service 'Graphs', ['$http', ($http) ->
  @.tradeGraph = () ->
    margin = 
      top: 20
      right: 20
      bottom: 30
      left: 50
    width = 960 - (margin.left) - (margin.right)
    height = 500 - (margin.top) - (margin.bottom)
    parseDate = d3.time.format("%H:%M:%S.%L").parse
    x = techan.scale.financetime().range([
      0
      width
    ]).outerPadding(0)
    y = d3.scale.linear().range([
      height
      0
    ])
    close = techan.plot.close().xScale(x).yScale(y)
    xAxis = d3.svg.axis().scale(x).orient('bottom')
    yAxis = d3.svg.axis().scale(y).orient('left')
    svg = d3.select('#trade-graph').append('svg').attr('width', width + margin.left + margin.right).attr('height', height + margin.top + margin.bottom).append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
    accessor = close.accessor()
    data = data.slice(0, 200).map((d) ->
      {
        date: parseDate(d.Date)
        open: +d.Open
        high: +d.High
        low: +d.Low
        close: +d.Close
        volume: +d.Volume
      }
    ).sort((a, b) ->
      d3.ascending accessor.d(a), accessor.d(b)
    )
    x.domain data.map(accessor.d)
    y.domain techan.scale.plot.ohlc(data, accessor).domain()
    svg.append('g').datum(data).attr('class', 'close').call close
    svg.append('g').attr('class', 'x axis').attr('transform', 'translate(0,' + height + ')').call xAxis
    svg.append('g').attr('class', 'y axis').call(yAxis).append('text').attr('transform', 'rotate(-90)').attr('y', 6).attr('dy', '.71em').style('text-anchor', 'end').text 'Price ($)'
    return
]