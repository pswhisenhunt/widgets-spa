angular.module('DashBoardApp.controllers')
  .controller('UserDetailCtrl', ['$scope', '$routeParams', 'UserService', function($scope, $routeParams, UserService) {

    $scope.displayError = false;

    UserService.get($routeParams.id).then(function(data) {
      $scope.user = data;
    }, function(error) {
      $scope.error = 'Failed to load user # ' + $routeParams.id;
      $scope.displayError = true;
    });
}]);
