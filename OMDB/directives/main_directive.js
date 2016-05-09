angular.module('MovieSearch')
  .directive('navBar',['$log',function($log) {
    return {
      restrict:'E',
      templateUrl: './partials/nav.html',
      scope: {
        title: "=?",
        movies: '='
      }
    }
  }])
  .directive('moviePost',['$log',function($log) {
    return{
      restrict: 'E',
      templateUrl: './partials/movie_post.html',
      scope: {
        title: "=?",
        movies: '=?'
      }
    }
  }])
  .directive('mbVote',['$log', function ($log) {
    return {
      restrict: 'E',
      templateUrl: './partials/votes.html'
    }
  }])
  .directive('singleMovie',['$log', function ($log) {
    return {
      restrict: 'E',
      templateUrl: './partials/single_movie.html',
      scope: {
        title: "=?",
        movie: "=?",
        message: "=?"
      }
    }
  }])
