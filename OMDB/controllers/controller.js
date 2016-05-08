angular.module("MovieSearch")
.controller("Ctrl", ["$scope", "mainService", function($scope, mainService){
  $scope.vm = {};
  $scope.vm = mainService
  // $scope.test = mainService.test;

}])
