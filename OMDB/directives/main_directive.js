angular.module('MovieSearch')
  .directive('navBar',['$log',function($log) {
    return {
      restrict:'E',
      templateUrl: './partials/navBar.html'
    }
  }])

  .directive('moviePost',['$log', function($log) {
    return{
      restrict: 'E',
      templateUrl: './partials/moviePost.html'
    }
  }])
  .directive('mbVote',['$log', function ($log) {
   return {
     restrict: 'E',
     templateUrl: './partials/votes.html'
   }
 }])
