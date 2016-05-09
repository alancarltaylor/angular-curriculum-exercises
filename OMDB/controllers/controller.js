angular.module('MovieSearch')
  .controller('Ctrl',['$scope','$log','$routeParams','movieService',function($scope, $log, $routeParams, movieService) {
    var self = this;
    $scope.vm = {};
    if ($routeParams.id) {
      $log.info(movieService.movies);
      $log.info($routeParams.id);
      $log.info(movieService.movies[$routeParams.id - 1])

      $scope.movies = movieService.movies[$routeParams.id -1]
      $scope.vm = movieService
    } else{
    $scope.vm = movieService;
  }


}])
