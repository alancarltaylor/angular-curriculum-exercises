angular.module("pirates")
.controller("Ctrl", ["$scope", "PiratesService", "$log", function($scope, PiratesService, $log){

  $scope.formData = {};

  $scope.formVisible = false;
  $scope.showForm = function(){
    return $scope.formVisible = !$scope.formVisible
  }

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

  $scope.deletePirate = function(departingPirate){
    console.log("you clicked delete!");
    PiratesService.deletePirate(departingPirate.id)
    .then(function(){
      var index = $scope.pirates.indexOf(departingPirate);
      $scope.pirates.splice(index, 1);
    })
  }

  // $scope.editPirate = function(changingPirate){
  //   console.log("you clicked to edit pirate " + changingPirate.id)
  //   PiratesService.editPirate(changingPirate.id)
  //   .then(function(){
  //
  //   })
  // }




}])
