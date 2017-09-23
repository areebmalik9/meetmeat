'use strict';

// Declare app level module which depends on views, and components
angular.module('meetme', [
  'ui.bootstrap',
  'ngRoute'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	$routeProvider.when('/login', {
		templateUrl: 'login/login.html',
		controller: 'LogInCtrl'
	})
	.when('/homepage', {
		templateUrl: 'homepage/homepage.html',
		controller: 'HomePageCtrl'
	})
	.when('/result', {
		templateUrl: 'result/result.html',
		controller: 'ResultCtrl'
	})
	.otherwise({redirectTo: '/login'});
}]);
