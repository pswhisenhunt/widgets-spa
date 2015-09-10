angular.module('DashBoardApp.services')
  .factory('WidgetService', ['$http', function($http) {
    var baseUrl = "http://spa.tglrw.com:4000/widgets";
    return {
      all: function() {
        return $http.get(baseUrl).then(function(widgets) {
          return widgets.data;
        });
      },
      get: function(id) {
        return $http.get(baseUrl + '/' + id).then(function(widget) {
          return widget.data;
        })
      }
    }
  }
]);
