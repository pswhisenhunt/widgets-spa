angular.module('DashBoardApp.filters', [])
  .filter('isTrue', function() {
    return function(condition) {
      return condition ? '\u2713' : '\u2718';
    }
});
