var directionsDisplay;
var map;
var end;
var logements = [
		{
			"name":"Hotel Le Puits d'Angle",
			"address":"2 Rue des Tilleuls, 60240 Thibivillers", 
			"web":"www.lepuitsdangle.com",
			"telephone":"03 44 84 31 10", 
			"chambres":5,
			"lat":49.303188,
			"lng":1.898918
		},
		{
			"name":"Hotel La grange Saint-Nicolas",
			"address":"17 Rue de la République, 60240 Chaumont-en-Vexin",
			"web":"www.hotel-stnicolas.fr",
			"telephone":"03 44 49 11 00",
			"chambres":21,
			"lat":49.265424,
			"lng":1.883705
		},
		{
			"name":"Hôtel Golf de Rebetz",
			"address":"Rue de Noailles, 60240 Chaumont-en-Vexin", 
			"web":"www.rebetz.com",
			"telephone":"03 44 49 15 54", 
			"chambres":73,
			"lat":49.268281,
			"lng":1.896386
		},
		{
			"name":"Hôtel de Dieppe",
			"address":"1 Avenue de la Gare, 27140 Gisors", 
			"web":"www.chassemar.com",
			"telephone":"02 32 55 25 54", 
			"chambres":8,
			"lat":49.28438,
			"lng":1.783111
		},
		{
			"name":"Hôtel le Moderne",
			"address":"1 Place de la Gare, 27140 Gisors", 
			"web":" www.hotel-moderne-gisors.com", 
			"telephone":"02 32 55 23 51",
			"chambres":34,
			"lat":49.284464,
			"lng":1.783111
		},
		{
			"name":"Hôtel Château de la Rapée",
			"address":"lieu-dit-la-rapée, Bazincourt sur Epte, 27140 Gisors", 
			"web":"www.hotelrapee.com", 
			"telephone":"02 32 55 11 61",
			"chambres":13,
			"lat":49.317737,
			"lng":1.746311
		},
		{
			"name":"Hôtel d'Evreux",
			"address":" 11 place d'Evreux, 27200 Vernon", 
			"web":" www.hoteldevreux.fr",
			"telephone":"02 32 21 16 12" 
			"chambres":12,
			"lat":49.079221,
			"lng":1.454272
		},
		{
			"name":"Hôtel La chaîne d'or",
			"address":"25-27 Rue Grande, 27700 Les Andelys", 
			"web":" www.hotel-lachainedor.com", 
			"chambres":12,
			"lat":49.24203090,
			"lng":1.39935010
		},
		{
			"name":"CdH Madame Lethiais",
			"address":"4 Rue de l'Église, 60240 Boubiers", 
			"chambres":4,
			"lat":49.22148720000001,
			"lng":1.87339560
		},
		{
			"name":"CdH Madame Trigallez",
			"address":"9 Rue Houssemagne, 60240 Lavilletertre", 
			"chambres":2,
			"telephone":"03 44 49 26 83",
			"lat":49.19654930000001,
			"lng":1.93234650
		},
		{
			"name":"CdH Château de Maudétour",
			"address":"Château de Maudétour, 95420 Maudétour-en-Vexin", 
			"web":"www.chateaudemaudetour.com",
			"telephone":"06 16 06 12 20",
			"chambres":5,
			"lat":49.098824,
			"lng":1.776867
		},
		{
			"name":"CdH Pigeonnier d'Hazeville",
			"address":"95420 Wy-dit-joli-village", 
			"chambres":2,
			"lat":49.1027220,
			"lng":1.8361780
		},
		{
			"name":"CdH Chambres du Haras",
			"address":"24 Rue Georges Joignet, 27660 Bernouville", 
			"web":"http://chambresduharas.voila.net/",
			"telephone":"02 32 27 38 10",
			"chambres":2,
			"lat":49.28782289999999,
			"lng":1.69259330
		},
		{
			"name":"CdH Les Tilleuls",
			"address":"21 Route de Sainte-Marie, 27140 Bazincourt-sur-Epte", 
			"web":"www.les8tilleuls.com",
			"telephone":"02 32 55 34 47",
			"chambres":4,
			"lat":49.3347770,
			"lng":1.76686280
		}
	];
var eglise={
	"address":"2 rue Saint Sauveur, 95420 Magny-en-Vexin",
	"lat":49.156548,
	"lng":1.786458
};
var reception={
	"address":"Château de Serans, Grande Rue, 60240 Serans",
	"lat":49.22836,
	"lng":1.829224
};

function initializeTrajet() {
	directionsDisplay = new google.maps.DirectionsRenderer();
	end = new google.maps.LatLng(eglise.lat, eglise.lng);
	var myOptions = {
      zoom: 8,
      center: end,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map_trajet"), myOptions);
    var marker = new google.maps.Marker({
        map: map,
        position: end
    });
    directionsDisplay.setMap(map);
    directionsDisplay.setPanel(document.getElementById("directionsPanel"));
}

function initializeLogement() {
	//create map
	var egl = new google.maps.LatLng(eglise.lat, eglise.lng);
	var myOptions = {
      zoom: 8,
      center: egl,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
	map = new google.maps.Map(document.getElementById("map_logement"), myOptions);
	//create geocoder
	var geocoder = new google.maps.Geocoder;
	var marker;
	//geocode each address and mark it on map
	$.each(logements, function(i,logement) {
		//geocode an address
		geocoder.geocode({address: logement.address, region:'fr'}, function(results,status) {
			if (status == google.maps.GeocoderStatus.OK) {
				marker = new google.maps.Marker({
		        	map: map,
		        	position: results[0].geometry.location
		    	});
		    } else {
	    		alert("Geocode was not successful for the following reason: " + status);
	  		}
		});
	});
	
}

function calcRoute() {
  var start = document.getElementById("start").value;
  var directionsService = new google.maps.DirectionsService();
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
	if($("#map_trajet").length>0) {
		initializeTrajet();
	}
	if($("#map_logement").length>0) {
		initializeLogement();
	}
});
 