angular.module 'cb-analytics'
.service 'Epoch', ['$http', ($http) ->
  @serviceCall = () ->
    console.log "service has been called #{33/7}"
  undefined
]