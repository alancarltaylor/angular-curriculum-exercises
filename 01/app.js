var app = angular.module('comicBux', [])

  app.controller('ComicBookController', function ($scope) {
    $scope.comicbook = "Saga"
    $scope.subject = "saga"
    $scope.tellMe = function () {
      return "OMG I love " + $scope.comicbook
    }
  });
