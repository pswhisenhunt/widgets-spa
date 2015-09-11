angular.module('DashBoardApp.controllers', [])
  .controller('DashboardCtrl', ['$scope', '$location', 'UserService', 'WidgetService', function($scope, $location, UserService, WidgetService) {
    $scope.go = function(path) {
      $location.path(path);
    }

    UserService.all().then(function(data) {
      $scope.users = data;
    });

    WidgetService.all().then(function(data) {
      $scope.widgets = data;
    });
}]);
