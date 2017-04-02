'use strict';

var h = screen.height;
var w = screen.width;
angular.module('meetmeat')
.controller('HomePageCtrl', function($scope, $location) {
	$scope.search = "";
	$scope.location = "";
	$scope.submitted = false;

	$scope.directPage = function(path, valid) {
		$scope.submitted = true;
		if (valid) {
			sessionStorage.setItem('search', $scope.search);
			sessionStorage.setItem('location', $scope.location);
			$location.path(path);
		}
	};

});