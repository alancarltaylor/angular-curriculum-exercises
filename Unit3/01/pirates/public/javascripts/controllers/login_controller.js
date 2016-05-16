(function() {
  'use strict';

  angular.module('pirates')
    .controller('LoginCtrl', function ($scope, $http, $window, $location, $rootScope, userService) {
      $scope.user = {}


      $scope.loginUser = function(){
        var user = angular.copy($scope.user);

        console.log("loginUser is called, user is: ", user);
        userService.verifyUser(user).then(function(response){
          $rootScope.user = response
          $window.localStorage.setItem('token', response.token);
          $scope.user={};
          $location.path('/')


        })
      }



    })
}());
