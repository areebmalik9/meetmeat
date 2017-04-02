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
			$scope.location = {
				latitude: 43.260846,
				longitude: -79.919215
			}
			sessionStorage.setItem('search', $scope.search);
			sessionStorage.setItem('location', JSON.stringify($scope.location));
			$location.path(path);
		}
	};

});