(function() {
  'use strict';

  angular.module('pirates')
    .controller('SignupCtrl', function ($scope, $http, $window, $location, $rootScope, userService) {
      $scope.user = {}
      var user = $scope.user;

      $scope.createUser = function(){
      userService.addUser(user).then(function(response){
        $rootScope.user = response;
        $window.localStorage.setItem('token', response.token);
        $scope.user = {};
        $location.path('/')
      })
    }



})
}());
