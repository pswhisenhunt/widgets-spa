angular.module('DashBoardApp.controllers', [])
  .controller('DashboardCtrl', ['$scope', 'UserService', 'WidgetService', function($scope, UserService, WidgetService) {
    UserService.all().then(function(data) {
      $scope.users = data;
    });

    WidgetService.all().then(function(data) {
      $scope.widgets = data;
    });
}]);
