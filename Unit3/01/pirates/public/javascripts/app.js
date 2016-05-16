angular.module('pirates', ['ngRoute'])
  .config(function($routeProvider, $locationProvider, $httpProvider) {
    $httpProvider.interceptors.push("authInterceptor");

    $routeProvider
      .when('/', {
        templateUrl: '/partials/pirates.html',
        controller: 'Ctrl'
      }).when('/users/login', {
        templateUrl: '/partials/login.html',
        controller: 'LoginCtrl'
      }).when('/users/signup', {
        templateUrl: '/partials/signup.html',
        controller: 'SignupCtrl'
      }).when('/pirate/edit/:id', {
        templateUrl: '/partials/edit_pirate.html',
        controller: 'EditCtrl'
      }).when('/users/secret', {
        templateUrl: '/partials/secret.html',
        controller: 'SecretCtrl',
        requiresLogin: true, // I can put arbitrary data on a route
        resolve: {
          currentUser: function($http, $location) {
            return $http.get('/api/me')
              .then(function(response) {
                return response.data
              })
              .catch(function() {
                localStorage.clear();
                $location.path("/")
                return null;
              })
          }
        }
      }).when('/404', {
        templateUrl: '/partials/error.html'
      }).otherwise({
        redirectTo: '/404'
      });
    $locationProvider.html5Mode(true);
  });
// app.run runs once when the app starts
// this improves user experience
angular.module('pirates').run(function($rootScope, $location, $window) {
  $rootScope.$on('$routeChangeStart', function(event, next, current) {
    // if the next route requires login
    // and we don't have a token
    // then redirect to the homepage

    if (next.$$route.requiresLogin && !localStorage.getItem('token')) {
      $location.path('/');
    }

  });
});

angular.module('pirates').factory('authInterceptor', function($location) {
  return {
    request: function(config) {
      if (localStorage.getItem('token')) {
        config.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
      }

      return config;
    },

    responseError: function(response) {
      if (response.status === 403) {
        $localStorage.removeItem('token')
        $location.path('/')
      }
      console.log(response);
      return response;
    }
  };
})
