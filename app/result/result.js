'use strict';

angular.module('meetmeat.result', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/result', {
    templateUrl: 'result/result.html',
    controller: 'ResultCtrl'
  });
}])

.controller('ResultCtrl', [function() {

}]);