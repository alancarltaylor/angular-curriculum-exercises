var app = angular.module('circleApp', []);

app.directive('gsBigRedCircle', function() {
  return {
    controller: function($scope) {
      $scope.view = {};
      $scope.view.diMessage = "4"
      $scope.view.sayHi = function() {
        alert("Hi! Thanks for clicking on me!");
      };
      $scope.view.rollDi = function() {
        $scope.view.diMessage = Math.floor(Math.random() * 6) + 1
      }
    },
    template: '<div class="circle"><span ng-bind="view.diMessage"></span></div>',
    link: function(scope, element, attrs) {

      element.on('click', function() {
        // scope.view.sayHi();
        scope.view.rollDi();
        scope.$apply();
      });

    }
  };
});
