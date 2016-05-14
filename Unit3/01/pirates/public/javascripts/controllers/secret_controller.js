(function() {
  'use strict';

  angular.module('pirates')
    .controller('SecretCtrl', function ($scope, currentUser) {
      $scope.user = currentUser
      console.log($scope.user)
})
}());
