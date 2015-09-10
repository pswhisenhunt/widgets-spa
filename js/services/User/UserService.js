angular.module('DashBoardApp.services')
  .factory('UserService', ['$http', function($http) {
    var baseUrl = "http://spa.tglrw.com:4000/users";
    return {
      all: function() {
        return $http.get(baseUrl).then(function(users) {
          return users.data;
        });
      },
      get: function(id) {
        return $http.get(baseUrl + '/' + id).then(function(user) {
          return user.data;
        })
      }
    }
  }
]);
