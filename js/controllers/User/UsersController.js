angular.module('DashBoardApp.controllers')
  .controller('UsersCtrl', ['$scope', 'UserService', function($scope, UserService) {

    $scope.displayError = false;

    UserService.all().then(function(data) {
      $scope.users = data;
    }, function(error){
      $scope.error = 'Failed to load users';
      $scope.displayError = true;
    });
}]);
