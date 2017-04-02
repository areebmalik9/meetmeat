'use strict';

angular.module('meetmeat.homepage', ['ngRoute','ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/homepage', {
    templateUrl: 'homepage/homepage.html',
    controller: 'HomePageCtrl'
  });
}])

.controller('HomePageCtrl', function($scope) {
	$scope.searchInput = "";

	$scope.enterFunction = function() {

	};

});