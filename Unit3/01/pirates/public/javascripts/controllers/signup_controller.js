(function() {
  'use strict';

  angular.module('pirates')
    .controller('SignupCtrl', function ($scope, $http, $window, $location, $rootScope, userService) {
      $scope.user = {}
      var user = $scope.user;

      userService.addUser(user).then(function(response){
        $rootScope.user = response.data;
        $window.localStorage.setItem('token', response.data.token);
        $scope.user = {};
        $location.path('/')
      })




})
}());
