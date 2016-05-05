var app = angular.module("httpApp", []);

app.controller("ctrl", ["$scope", "$http", "$log", function($scope, $http, $log){

$scope.view = {};

$http.get("https://api.github.com/zen").then(function(data){
  $scope.view.zenData = data.data;

});

}])
