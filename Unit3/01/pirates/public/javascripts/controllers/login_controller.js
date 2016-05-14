(function() {
  'use strict';

  angular.module('pirates')
    .controller('LoginCtrl', function ($scope, $http, $window, $location, $rootScope) {
      $scope.createUser = function(){
        $http.post('/users/auth', $scope.user)
        .then(function(response){ //whatever you put in $scope.user become req.body on express side
          $rootScope.user = response.data;
          $window.localStorage.setItem('token', response.data.token);
          $location.path('/')

        })
          // √ $http post /api/v1/users/SignupController
          // √ then
            //store token
            //redirect
          //catch
            //set $scope.errors (add to the view)


    }
})
}());
