angular.module('pirates')
.controller('EditCtrl',function ($scope,$routeParams,$log,PiratesService,$location) {
  // you have the id in $routeParams.id
  PiratesService.getPirate($routeParams.id).then(function(pirate) {
    $scope.myPirate = pirate.data[0];
  })

  $scope.editPirate = function () {
    $log.info('id',$scope.myPirate.id)
    PiratesService.editPirate($scope.myPirate).then(function(){
      $location.path('/')
    })

  }

})
