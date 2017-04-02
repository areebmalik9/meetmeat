'use strict';

// Declare app level module which depends on views, and components
angular.module('meetmeat', [
  'ui.bootstrap',
  'ngRoute',
  'meetmeat.homepage',
  'meetmeat.result',
  'meetmeat.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/homepage'});
}]);
