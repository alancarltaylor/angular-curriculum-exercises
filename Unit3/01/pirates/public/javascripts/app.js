angular.module('pirates', ['ngRoute'])
.config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl : '/partials/pirates.html'
            }).when('/404', {
                templateUrl:'/partials/error.html'
            }).otherwise({
                redirectTo: '/404'
            });
        $locationProvider.html5Mode(true);
    });
