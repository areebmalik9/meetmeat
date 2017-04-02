'use strict';

angular.module('meetmeat.homepage', ['ngRoute','ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/homepage', {
    templateUrl: 'homepage/homepage.html',
    controller: 'HomePageCtrl'
  });
}])

.controller('HomePageCtrl', function($scope, $location) {
	$scope.search = "";
	$scope.location = "";
	$scope.submitted = false;
	var valid = false;

	$scope.directPage = function(path) {
		$scope.submitted = true;
		if (valid) {
			sessionStorage.setItem('search', $scope.search);
			sessionStorage.setItem('location', $scope.location);
			$location.path(path);
		}
	};

});