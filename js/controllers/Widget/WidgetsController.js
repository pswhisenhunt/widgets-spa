angular.module('DashBoardApp.controllers')
  .controller('WidgetsCtrl', ['$scope', 'WidgetService', function($scope, WidgetService) {

    $scope.displayError = false;

    $scope.fetchWidgets = function() {
      WidgetService.all().then(function(data) {
          $scope.widgets = data;
          $scope.widgetsLength = data.length;
      }, function(error) {
        $scope.error = "Failed to load widgets";
        $scope.displayError = true;
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
      $scope.displayError = false;
    }

    $scope.resetForm = function() {
      $scope.newWidget = {
        ID: $scope.widgetsLength + 1,
        name: '',
        color: '',
        price: 0,
        melts: true,
        inventory: 0
      }
      $scope.setCreateWidgetFormDisplay()
    }

    $scope.createWidget = function() {
      WidgetService.create($scope.newWidget).then(function(data) {
        $scope.resetForm();
      }, function(error) {
        $scope.error = "Failed to create widget";
        $scope.displayError = true;
      }).then(function() {
        $scope.fetchWidgets();
      });
    }
}]);
