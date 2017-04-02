'use strict';

// Declare app level module which depends on views, and components
angular.module('meetmeat', [
  'ui.bootstrap',
  'ngRoute'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	$routeProvider.when('/homepage', {
		templateUrl: 'homepage/homepage.html',
		controller: 'HomePageCtrl'
	})
	.when('/result', {
		templateUrl: 'result/result.html',
		controller: 'ResultCtrl'
	})
	.otherwise({redirectTo: '/homepage'});
}]);
