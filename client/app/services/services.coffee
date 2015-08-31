angular.module 'cb-analytics'
.service 'Graphs', ['$http', ($http) ->
  @tradeGraph = (data) ->
    ctx = document.getElementById("trade-graph").getContext("2d")

    # options = 
    #   scaleShowGridLines: true
    #   scaleGridLineColor: 'rgba(0,0,0,0.05)'
    #   scaleGridLineWidth: 1
    #   scaleShowHorizontalLines: true
    #   scaleShowVerticalLines: true
    #   bezierCurve: true
    #   bezierCurveTension: 0.4
    #   pointDot: true
    #   pointDotRadius: 4
    #   pointDotStrokeWidth: 1
    #   pointHitDetectionRadius: 20
    #   datasetStroke: true
    #   datasetStrokeWidth: 2
    #   datasetFill: true
    #   legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

    # format the data 
    labels = data.map (row) -> row.time
    datasets = {
      label: "My First dataset"
      fillColor: "rgba(150,150,150,0.2)"
      strokeColor: "rgba(150,150,150,1)"
      pointColor: "rgba(150,150,150,1)"
      pointStrokeColor: "#000"
      pointHighlightFill: "#000"
      pointHighlightStroke: "rgba(150,150,150,1)"
      data: data.map (row) -> row.price
    }

    data = 
      datasets: datasets

    myLineChart = new Chart(ctx).Line(data)

  window.draw = @tradeGraph
]