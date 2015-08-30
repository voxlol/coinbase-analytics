angular.module 'cb-analytics', []
# .config ($stateProvider, $urlRouteProvider)->
#   ''
.controller 'MainController', ['$scope', 'Epoch', ($scope, Epoch) ->
  $scope.greeting = "Hello World from Angular!"
  Epoch.serviceCall()
  undefined
]
