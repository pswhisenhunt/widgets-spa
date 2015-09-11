angular.module('DashBoardApp.controllers', [])
  .controller('DashboardCtrl', ['$scope', '$location', 'UserService', 'WidgetService', function($scope, $location, UserService, WidgetService) {
    $scope.go = function(path) {
      $location.path(path);
    }

    $scope.fetchUsers = function() {
      UserService.all().then(function(data) {
        $scope.users = data;
      });
    }

    $scope.fetchWidgets = function() {
      WidgetService.all().then(function(data) {
        $scope.widgets = data;
      });
    }

    $scope.fetchUsers();

    $scope.fetchWidgets();
}]);
