angular.module('app',['ngRoute','app-directives'])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'partials/index.html',
      //controller: IndexCtrl
    }).
    otherwise({
      redirectTo: '/'
    });
  $locationProvider.html5Mode(true);
}]);
