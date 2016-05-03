var app = angular.module('yoyoDirectiveApp', [])

app.controller('YoyoController', function($scope) {
  $scope.view = {};
  $scope.view.yoyo = {
    name: 'Duncan Metal Drifter',
    img: "http://www.toysrus.com/graphics/tru_prod_images/Duncan-Metal-Drifter-Pro-Yo-Yo--pTRU1-8444206dt.jpg"
  };
});

app.directive('gsYoyoDetails', function() {
  return {
    templateUrl: 'yoyo-details.html',
    scope: {
      yoyo: '@'
    },
    link: function(scope){

      var obj = {};

      function parseIt(objStr){
        for(var key in JSON.parse(objStr)){
          obj[key] = JSON.parse(objStr)[key];
        }
      }

      parseIt(scope.yoyo);

      scope.testing = obj;
      console.log('obj', obj);
    }
  };
});
