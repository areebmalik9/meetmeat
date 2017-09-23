'use strict';

var h = screen.height;
var w = screen.width;
angular.module('meetme')
.controller('HomePageCtrl', function($scope, $location) {
	$scope.search = "";
	$scope.location = "";
	$scope.locationSearched = "";
	$scope.submitted = false;

	$scope.directPage = function(path, valid) {
		$scope.submitted = true;
		if (valid) {
			// $scope.location = {
			// 	latitude: 43.260846,
			// 	longitude: -79.919215
			// }
			sessionStorage.setItem('search', $scope.search);
			sessionStorage.setItem('locationSearched', $scope.locationSearched);
			sessionStorage.setItem('location', JSON.stringify($scope.location));
			$location.path(path);
		}
	};







	var mapOptions = {
    center: new google.maps.LatLng(37.7831,-122.4039),
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};

var map = new google.maps.Map(document.getElementById('map'), mapOptions);
var acOptions = {
  types: ['establishment']
};
var autocomplete = new google.maps.places.Autocomplete(document.getElementById('location'),acOptions);
autocomplete.bindTo('bounds',map);
var infoWindow = new google.maps.InfoWindow();
var marker = new google.maps.Marker({
  map: map
});

google.maps.event.addListener(autocomplete, 'place_changed', function() {
  infoWindow.close();
  var place = autocomplete.getPlace();
  if (place.geometry.viewport) {
    map.fitBounds(place.geometry.viewport);
  } else {
    map.setCenter(place.geometry.location);
    map.setZoom(17);
  }
  $scope.location = place.geometry.location;
  console.dir(place.geometry);
  marker.setPosition(place.geometry.location);
  infoWindow.setContent('<div><strong>' + place.name + '</strong><br>');
  infoWindow.open(map, marker);
  google.maps.event.addListener(marker,'click',function(e){

   // infoWindow.open(map, marker);

  });
});

});