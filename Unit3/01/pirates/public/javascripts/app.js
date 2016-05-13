angular.module('pirates', ['ngRoute'])
.config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl : '/partials/pirates.html',
                controller: 'Ctrl'
            }).when('/pirate/edit/:id', {
                templateUrl : '/partials/edit_pirate.html',
                controller: 'EditCtrl'
            }).when('/404', {
                templateUrl:'/partials/error.html'
            }).otherwise({
                redirectTo: '/404'
            });
        $locationProvider.html5Mode(true);
    });
