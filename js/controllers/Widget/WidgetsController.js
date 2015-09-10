angular.module('DashBoardApp.controllers')
  .controller('WidgetsCtrl', ['$scope', 'WidgetService', function($scope, WidgetService) {
    WidgetService.all().then(function(data) {
      $scope.widgets = data;
    });
}]);
