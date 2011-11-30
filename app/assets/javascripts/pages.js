var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;
var end;

function initializeTrajet() {

    
	var geocoder = new google.maps.Geocoder;
	directionsDisplay = new google.maps.DirectionsRenderer();

	var address = "Brive la Gaillarde, France";

	geocoder.geocode( { address: address, region: 'fr'}, function(results, status) {
	  if (status == google.maps.GeocoderStatus.OK) {
	  	end = results[0].geometry.location;
	  	var myOptions = {
	      zoom: 8,
	      center: end,
	      mapTypeId: google.maps.MapTypeId.ROADMAP
	    };
	    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	    var marker = new google.maps.Marker({
	        map: map,
	        position: results[0].geometry.location
	    });
	    directionsDisplay.setMap(map);
	    directionsDisplay.setPanel(document.getElementById("directionsPanel"));
	  } else {
	    alert("Geocode was not successful for the following reason: " + status);
	  }
	});
}

function calcRoute() {
  var start = document.getElementById("start").value;
  var request = {
    origin:start,
    destination:end,
    travelMode: google.maps.TravelMode.DRIVING,
    region: 'fr'
  };
  directionsService.route(request, function(result, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(result);
    }
  });
}

$(document).ready(function() {
	
	initializeTrajet();
});
 