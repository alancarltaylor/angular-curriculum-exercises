angular.module("MovieSearch")
.controller("Ctrl", ["$scope", "mainService", function($scope, mainService){
  $scope.vm = {};
  $scope.vm.movies = mainService.movies
  $scope.test = mainService.test;

}])
