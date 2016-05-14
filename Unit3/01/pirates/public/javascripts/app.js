angular.module('pirates', ['ngRoute'])
.config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl : '/partials/pirates.html',
                controller: 'Ctrl'
            }).when('/users/login', {
                templateUrl : '/partials/login.html',
                controller: 'LoginCtrl'
            }).when('/users/signup', {
                templateUrl : '/partials/signup.html',
                controller: 'SignupCtrl'
            }).when('/pirate/edit/:id', {
                templateUrl : '/partials/edit_pirate.html',
                controller: 'EditCtrl'
            }).when('/users/secret', {
                templateUrl : '/partials/secret.html',
                controller: 'SecretCtrl'
            }).when('/404', {
                templateUrl:'/partials/error.html'
            }).otherwise({
                redirectTo: '/404'
            });
        $locationProvider.html5Mode(true);
    });
