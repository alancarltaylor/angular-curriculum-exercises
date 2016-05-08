angular.module('MovieSearch')
  .controller('Ctrl',['$scope','$log','movieService',function($scope, $log, movieService) {

    $scope.vm = {}
    $scope.vm = movieService

}])
