angular.module('DashBoardApp.controllers')
  .controller('WidgetDetailCtrl', ['$scope', '$routeParams', 'WidgetService', function($scope, $routeParams, WidgetService) {

    $scope.fetchWidget = function() {
      WidgetService.get($routeParams.id).then(function(data) {
        $scope.widget = data;
      });
    }

    $scope.fetchWidget()

    
}]);
