angular.module('DashBoardApp.controllers')
  .controller('UserDetailCtrl', ['$scope', '$routeParams', 'UserService', function($scope, $routeParams, UserService) {
    UserService.get($routeParams.id).then(function(data) {
      $scope.user = data;
    });
  }]);
