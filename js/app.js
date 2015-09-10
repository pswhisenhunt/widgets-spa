var angular = require('angular');

var DashBoardApp = angular.module('DashBoardApp', [
  require('angular-route'),
  'DashBoardApp.controllers',
  'DashBoardApp.services'
]);

DashBoardApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/users', {
        templateUrl: '../views/users/usersListView.html',
        controller: 'UsersCtrl'
      }).
      when('/users/:id', {
        templateUrl: '/views/users/userDetailView.html',
        controller: 'UserDetailCtrl'
      }).
      when('/widgets', {
        templateUrl: '/views/widgets/widgetsListView.html',
        controller: 'WidgetCtrl'
      }).
      when('/widgets/:id', {
        templateUrl: '/views/widgets/widgetDetailView.html',
        controller: 'WidgetDetailCtrl'
      }).
      otherwise({
          redirectTo: '/users'
      });
    }
]);
