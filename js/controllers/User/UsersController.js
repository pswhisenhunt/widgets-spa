angular.module('DashBoardApp.controllers')
  .controller('UsersCtrl', ['$scope', 'UserService', function($scope, UserService) {
    UserService.all().then(function(data) {
      $scope.users = data;
    });
}]);
