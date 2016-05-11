angular.module("pirates").controller("ctrl", ["$scope", "PiratesService", "$log", function($scope, PiratesService, $log){

  $scope.formData = {};

  PiratesService.all().then(function (pirates) {
    $scope.pirates = pirates;
    $log.info($scope.pirates);
  });
  $scope.formSubmit = function () {
  var newPirate = angular.copy($scope.formData);
  $scope.formData = {};

  PiratesService.addPirate(newPirate).then(function(newPirate){
    $scope.addToPirates(newPirate.data[0]);
  })
}

  $scope.addToPirates = function (newPirate){
  $scope.pirates.push(newPirate);
}

  


}])
