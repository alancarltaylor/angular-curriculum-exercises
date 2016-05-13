// services/pirates_service.js

angular.module('pirates')
.factory('PiratesService', function ($http) {
  return {
    all: function() {
      return $http.get('/api/pirates').then(function(res){
        return res.data;
      });
    },
    getPirate: function (pirateId) {
      return $http.get('/api/pirate/' + pirateId);
    },
    addPirate: function (newPirateData) {
      return $http.post('/api/pirates/add', newPirateData);
    },
    deletePirate: function (pirateId) {
      return $http.delete('/api/pirates/delete/'+ pirateId);
    },
    editPirate: function (pirate){
      console.log("I got to the service");
      return $http.put('/api/pirate/edit/'+ pirate.id, pirate)
    },

  }
})
