angular.module('DashBoardApp.controllers')
  .controller('WidgetsCtrl', ['$scope', 'WidgetService', function($scope, WidgetService) {

    $scope.fetchWidgets = function() {
      WidgetService.all().then(function(data) {
          $scope.widgets = data;
      });
    }

    $scope.fetchWidgets();

    $scope.showCreateWidgetForm = false;

    $scope.newWidget = {
      ID: 0,
      name: '',
      color: '',
      price: 0,
      melts: false,
      inventory: 0
    }

    $scope.setCreateWidgetFormDisplay = function() {
      $scope.showCreateWidgetForm = !$scope.showCreateWidgetForm;
    }


    $scope.createWidget = function() {
      WidgetService.create($scope.newWidget).then(function(data) {
        $scope.resetForm();
      }).then(function() {
        $scope.fetchWidgets();
      });
    }

    $scope.resetForm = function() {
      $scope.newWidget = {
        ID: 0,
        name: '',
        color: '',
        price: 0,
        melts: false,
        inventory: 0
      }
      $scope.setCreateWidgetFormDisplay()
    }
}]);
