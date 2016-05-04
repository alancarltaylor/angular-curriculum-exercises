var app = angular.module("filters", []);

app.controller("myCtrl", function($scope){
  $scope.input = ""
});


app.filter('camel', function() {
  return function (input) {
     var sp = input.split(/[-_]/);

     for (var i = 1; i < sp.length; i++) {
       sp[i] = sp[i].replace(/^[a-z]/, function(m) {
         return m.toUpperCase()
       });

     };
     return sp.join('')

  }

});
