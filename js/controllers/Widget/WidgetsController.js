angular.module('DashBoardApp.controllers')
  .controller('WidgetsCtrl', ['$scope', 'WidgetService', function($scope, WidgetService) {

    $scope.fetchWidgets = function() {
      WidgetService.all().then(function(data) {
          $scope.widgets = data;
          $scope.widgetsLength = data.length;
      });
    }

    $scope.fetchWidgets();

    $scope.showCreateWidgetForm = false;

    $scope.newWidget = {
      ID: $scope.widgetsLength + 1,
      name: '',
      color: '',
      price: '',
      melts: false,
      inventory: ''
    }

    $scope.setCreateWidgetFormDisplay = function() {
      $scope.showCreateWidgetForm = !$scope.showCreateWidgetForm;
    }


    $scope.resetForm = function() {
      $scope.newWidget = {
        ID: $scope.widgetsLength + 1,
        name: '',
        color: '',
        price: 0,
        melts: false,
        inventory: 0
      }
      $scope.setCreateWidgetFormDisplay()
    }

    $scope.createWidget = function() {
      WidgetService.create($scope.newWidget).then(function(data) {
        $scope.resetForm();
      }).then(function() {
        $scope.fetchWidgets();
      });
    }
}]);
