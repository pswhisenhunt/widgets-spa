angular.module('DashBoardApp.controllers')
  .controller('WidgetDetailCtrl', ['$scope', '$routeParams', 'WidgetService', function($scope, $routeParams, WidgetService) {

    $scope.displayError = false;

    $scope.fetchWidget = function() {
      WidgetService.get($routeParams.id).then(function(data) {
        $scope.widget = data;
      }, function(error) {
        $scope.error = 'Failed to load widget';
        $scope.displayError = true;
      });
    };

    $scope.fetchWidget();

    $scope.updateWidget = function() {
      // xeditable (library I'm using for edit-in-place) uses an object for editable-select statements.
      // We need to store the color value as a string and the melts value as a boolean, not object values.
      // These conditional statements determine if the color or melts values are objects.
      // If they are, then set the correct value before updating the widget on the server.

      if ($scope.widget.color instanceof Object) {
        $scope.widget.color = $scope.widget.color.value;
      }
      if($scope.widget.melts instanceof Object) {
        $scope.widget.melts = $scope.widget.melts.value;
      }

      WidgetService.update($scope.widget).then(function(data) {
        if ($scope.showEditWidgetForm) {
          $scope.resetForm();
        }
      }, function(error) {
        $scope.error = "Failed to update widget";
        $scope.displayError = true;
      });
    };

    $scope.showEditWidgetForm = false;

    $scope.setEditWidgetFormDisplay = function() {
      $scope.showEditWidgetForm = !$scope.showEditWidgetForm;
    };

    $scope.resetForm = function() {
      $scope.fetchWidget();
      $scope.setEditWidgetFormDisplay();
    };

    // xeditable's editable-select feature expects an array of key-pair values
    $scope.widgetColors = [
     {value: 'red'},
     {value: 'purple'},
     {value: 'black'},
     {value: 'green'},
     {value: 'magenta'},
     {value: 'white'},
     {value: 'depends on the viewing angle'}
   ];

   $scope.hasMelts = [
     {value: true},
     {value: false}
   ];
}]);
