angular.module('pirates')
.factory('userService', function ($http) {
  return {
    all: function() {
      return $http.get('/api/users').then(function(res){
        return res.data;
      });
    },

    addUser: function(user){
      return $http.post('/api/signup', user).then(function(res){
        return res.data;
      })
  },

    verifyUser: function(user){
      return $http.post('/api/login', user).then(function(res){
        return res.data;
      })

  },


  }
})
