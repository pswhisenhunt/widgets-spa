angular.module('DashBoardApp.controllers')
  .controller('WidgetDetailCtrl', ['$scope', '$routeParams', 'WidgetService', function($scope, $routeParams, WidgetService) {
    WidgetService.get($routeParams.id).then(function(data) {
      $scope.widget = data;
      console.log($scope.widget)
    });
}]);
