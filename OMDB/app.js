angular.module('MovieSearch', ['angularMoment','ngRoute'])

.config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                template : '<movie-post title="vm.title" movies="vm.movies"></movie-post>'
            }).when('/details/:id', {
                template : '<h1>A New Page Example <a ng-href="/">Go Home</a></h1>'
            }).when('/404', {
                templateUrl:'partials/error.html'
            }).otherwise({
                redirectTo: '/404'
            });
        $locationProvider.html5Mode(true);
    });
