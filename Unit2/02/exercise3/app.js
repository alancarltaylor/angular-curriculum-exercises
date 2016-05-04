var app = angular.module("exercise3", []);


app.directive('gsParent', function() {
  return {
    controller: function($scope) {
      this.view = {};
      this.view.parentMessage = function() {
        alert("I live on the parent!");
      };
    },
  };
});

app.directive('gsChild', function() {
  return {
    templateUrl: 'partials/child.html',
    require: '^gsParent',
    link: function(scope, element, attrs, ctrl) {
      element.on('click', function() {
        ctrl.view.parentMessage();
      });
    }
  };
});
