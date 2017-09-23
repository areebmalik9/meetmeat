'use strict';

angular.module('meetme')
.controller('ResultCtrl', function($scope, $http) {

	$scope.search = "";
	$scope.locationSearched ="";
	$scope.location = {};

	$scope.API_KEY="AIzaSyBQxYucC78U57x9h-jvUW7tBIMNvBma2Ho";
	$scope.radius = 20*1000;
	$scope.findPlacesUrl = "https://maps.googleapis.com/maps/api/place/radarsearch/";//json?location="+$scope.location.latitude+","+$scope.location.longitude+"&radius="+$scope.radius+"&type=restaurant&key="+$scope.API_KEY;

	$scope.restaurantList = [];

	$scope.init = function(){
		$scope.search = sessionStorage.search;
		$scope.locationSearched = sessionStorage.locationSearched;
		$scope.location = JSON.parse(sessionStorage.location);
		// $scope.restaurantList = $scope.findPlacesUrl+"json?location="+$scope.location.latitude+","+$scope.location.longitude+"&radius="+$scope.radius+"&type=restaurant&key="+$scope.API_KEY;
		var url = $scope.findPlacesUrl+"json?location="+$scope.location.latitude+","+$scope.location.longitude+"&radius="+$scope.radius+"&type=restaurant&key="+$scope.API_KEY;
		
		//var xhr = createCORSRequest('GET', url);
		// if (!xhr) {
  // 			throw new Error('CORS not supported');
		// }

		//$scope.makeCorsRequest(url);
// Using YQL and JSONP
// $.ajax({
//     url: "https://maps.googleapis.com/maps/api/place/nearbysearch",

//     // The name of the callback parameter, as specified by the YQL service
//     jsonp: "callback",

//     // Tell jQuery we're expecting JSONP
//     dataType: "jsonp",

//     // Tell YQL what we want and that we want JSON
//     data: {
//         key: "AIzaSyDaUkPERVgwEgEDTcb3bwhig5ssyc52hy4",
//         location: {
//         	latitude: $scope.latitude,
//         	longitude: $scope.longitude
//         },
//         radius: $scope.radius,
//         type: 'restaurant'
//     },

//     // Work with the response
//     success: function( response ) {
//         console.log( response ); // server response
//     }
// });
		// $http.get(url)
  //   	.then(function(response) {
  //       	$scope.restaurantsRecieved(response.data);
  //  		});

 // service = new google.maps.places.PlacesService(map);
//service.nearbySearch(request, callback);
};

$scope.restaurantsRecieved = function(){
	var url = "https://api.yelp.com/v2/search/?term="+$scope.search+"&location="+$scope.locationSearched;
	console.log(url);

// var Yelp = require('yelp');

// var yelp = new Yelp({
//   consumer_key: 'ERYG6VdcBSieMlOXYblNpg',
//   consumer_secret: 'yuYc32HPxYL4kaH3oFGeoiOOEI8',
//   token: 'seGTr5rD6dKCh_-iO0NVp36EDqI3yl4X',
//   token_secret: '4OyKLf-nhHpdQP6IUeAvDv0G_z8',
// });

// // See http://www.yelp.com/developers/documentation/v2/search_api
// yelp.search({ term: $scope.search, location: $scope.locationSearched })
// .then(function (data) {
//   console.log(data);
// })
// .catch(function (err) {
//   console.error(err);
// });
	// $http.get(url)
 //    	.then(function(response) {
 //        	console.log(response.data);
 //   		});
}


//*************************************
// Create the XHR object.
$scope.createCORSRequest = function(method, url) {
	var xhr = new XMLHttpRequest();
	if ("withCredentials" in xhr) {
    // XHR for Chrome/Firefox/Opera/Safari.
    xhr.open(method, url, true);
} else if (typeof XDomainRequest != "undefined") {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
    xhr.open(method, url);
} else {
    // CORS not supported.
    xhr = null;
}
return xhr;
}

// Helper method to parse the title tag from the response.
function getTitle(text) {
	return text.match('<title>(.*)?</title>')[1];
}

// Make the actual CORS request.
$scope.makeCorsRequest = function(url) {
  // This is a sample server that supports CORS.
  // var url = $scope.findPlacesUrl+"json?location="+$scope.location.latitude+","+$scope.location.longitude+"&radius="+$scope.radius+"&type=restaurant&key="+$scope.API_KEY;

  var xhr = $scope.createCORSRequest('GET', url);
  xhr.setRequestHeader(
  	'X-Custom-Header', 'value');
  if (!xhr) {
  	alert('CORS not supported');
  	return;
  }

  // Response handlers.
  xhr.onload = function() {
  	var text = xhr.responseText;
  	var title = getTitle(text);
  	alert('Response from CORS request to ' + url + ': ' + title);
  	$scope.restaurantsRecieved(text);
  };

  xhr.onerror = function() {
  	alert('Woops, there was an error making the request.');
  };

  xhr.send();
};
//*************************************

$scope.init();



var map;
var infowindow;

function initMap() {
	console.log(parseFloat($scope.location.lat));
	console.log(parseFloat($scope.location.lng));
      // var pyrmont = {lat: 40.3439888, lng: -74.6514481};
//var pyrmont = {lat: -33.867, lng: 151.195};

// var pyrmont = {lat: 43.557777, lng: -79.729940};

var pyrmont = $scope.location;//{lat: parseFloat($scope.location.latitude), lng: parseFloat($scope.location.longitude)};

map = new google.maps.Map(document.getElementById('map'), {
	center: pyrmont,
	zoom: 15
});

infowindow = new google.maps.InfoWindow();
var service = new google.maps.places.PlacesService(map);
service.nearbySearch({
	location: pyrmont,
	radius: 5000,
	type: ['restaurant']
}, callback);
}

function callback(results, status) {
	if (status === google.maps.places.PlacesServiceStatus.OK) {
        //	$scope.restaurantList = results;
        for (var i = 0; i < results.length; i++) {
        	console.log(results[i]);
        	$scope.restaurantList.push(results[i].name);
        }
    }
    console.log($scope.restaurantList);
   // $scope.restaurantsRecieved();

}

initMap();
});