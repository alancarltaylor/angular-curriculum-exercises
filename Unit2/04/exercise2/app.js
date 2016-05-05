var app = angular.module("filters", []);

app.controller("myCtrl", ["$scope", "calculateService", function($scope, calculateService){
  $scope.input1 = 0;
  $scope.input2 = 0;
  // $scope.add = calculate.add();
  // $scope.subtract = calculate.subtract();
  // $scope.multiply = calculate.multiply();
  // $scope.divide = calculate.divide();
  $scope.calculate = function(){
    console.log($scope.operation);
    console.log($scope.input1)
    console.log($scope.input2);
    $scope.answer = calculateService.calculate($scope.operation, $scope.input1, $scope.input2)
  }
  // $scope.result = calculate();
  $scope.operation = "add";
}]);


app.service('calculateService', function() {


this.calculate = function(operation, first, second) {
  if (operation == "add") {
    return Number (first + second);
  } else if (operation == "subtract"){
    return Number (first - second);
  } else if (operation == "multiply"){
    return Number (first * second);
  } else if (operation == "divide"){
    return Number (first / second);
  }
}

});
