angular.module('DashBoardApp.controllers')
  .controller('WidgetDetailCtrl', ['$scope', '$routeParams', 'WidgetService', function($scope, $routeParams, WidgetService) {

    $scope.fetchWidget = function() {
      WidgetService.get($routeParams.id).then(function(data) {
        $scope.widget = data;
      });
    }

    $scope.fetchWidget()

    $scope.showEditWidgetForm = false;

    $scope.setEditWidgetFormDisplay = function() {
      $scope.showEditWidgetForm = !$scope.showEditWidgetForm;
    }

    $scope.resetForm = function() {
      $scope.fetchWidget();
      $scope.setEditWidgetFormDisplay();
    }

    $scope.widgetColors = [
     {value: 1, color: 'red'},
     {value: 2, color: 'purple'},
     {value: 3, color: 'black'},
     {value: 4, color: 'green'},
     {value: 5, color: 'magenta'},
     {value: 6, color: 'white'},
     {value: 7, color: 'depends on the viewing angle'}
   ];

   $scope.hasMelts = [
     {id: 1, value: true},
     {id: 2, value: false}
   ]

}]);
