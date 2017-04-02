'use strict';

angular.module('meetmeat')
.controller('ResultCtrl', function($scope) {

	$scope.search = "";
	$scope.location = "";

	$scope.init = function(){
		$scope.search = sessionStorage.search;
		$scope.location = sessionStorage.location;
	};

	$scope.init();
});