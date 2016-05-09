angular.module("MovieSearch")
.config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                template : '<movie-post title="vm.title" movies="vm.movies"></movie-post>'
            }).when('/details/:id', {
                template : '<single-movie movie="movies"></single-movie>',
                controller : 'Ctrl'
            }).when('/404', {
                templateUrl:'../partials/error.html'
            }).otherwise({
                redirectTo: '/404'
            });
        $locationProvider.html5Mode(true);
    });
