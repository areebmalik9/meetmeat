'use strict';

// Declare app level module which depends on views, and components
angular.module('meetmeat', [
  'ngRoute',
  'meetmeat.homepage',
  'meetmeat.view2',
  'meetmeat.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/homepage'});
}]);
