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
			"telephone":"02 32 21 16 12", 
			"chambres":12,
			"lat":49.079221,
			"lng":1.454272
		},
		{
			"name":"Hôtel La Chaîne d'or",
			"address":"25-27 Rue Grande, 27700 Les Andelys", 
			"web":" www.hotel-lachainedor.com",
			"telephone":"02 32 54 00 31", 
			"chambres":12,
			"lat":49.24203090,
			"lng":1.39935010
		},
		{
			"name":"CdH Madame Lethiais",
			"address":"4 Rue de l'Église, 60240 Boubiers",
			"telephone":"03 44 49 30 00", 
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
			"web":"chambresduharas.voila.net/",
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
	"name":"Notre-Dame De Magny En Vexin",
	"address":"2 rue Saint Sauveur, 95420 Magny-en-Vexin",
	"lat":49.156548,
	"lng":1.786458
};
var reception={
	"name":"Château de Serans",
	"address":"Château de Serans, Grande Rue, 60240 Serans",
	"lat":49.22836,
	"lng":1.829224
};
var pathToVendorImages='/assets/';
var iconEglise=pathToVendorImages+'chapel-2.png';
var iconReception=pathToVendorImages+'bar_coktail.png';
var iconLogement=pathToVendorImages+'lodging_0star.png';

function placeMarker(map,position,icon,title) {
	
}

function initializeTrajet() {
	directionsDisplay = new google.maps.DirectionsRenderer();
	end = new google.maps.LatLng(eglise.lat, eglise.lng);
	var myOptions = {
      zoom: 8,
      center: end,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map_trajet"), myOptions);
    var infowindow = new google.maps.InfoWindow();
    var markerEglise = new google.maps.Marker({
        map: map,
        position: end,
        icon: iconEglise
    });
    google.maps.event.addListener(markerEglise, 'click', (function(markerEglise) {
        	return function() {
        		infowindowContent = "<address><strong>"+eglise.name+"</strong><br>";
    			infowindowContent += "Messe à <br>";
    			infowindowContent += eglise.address+"<br>";
    			infowindowContent += "</address>";
          		infowindow.setContent(infowindowContent);
          		infowindow.open(map, markerEglise);
        	}
      	})(markerEglise));
    directionsDisplay.setMap(map);
    directionsDisplay.setPanel(document.getElementById("directionsPanel"));
}

function initializeLogement() {
	//create map
	var egl = new google.maps.LatLng(eglise.lat, eglise.lng);
	var myOptions = {
      zoom: 10,
      center: egl,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
	map = new google.maps.Map(document.getElementById("map_logement"), myOptions);
	var infowindow = new google.maps.InfoWindow();
	var marker;
	var latlng;
	var infowindowContent;
	$.each(logements, function(i,logement) {
		marker = new google.maps.Marker({
        	map: map,
        	position: new google.maps.LatLng(logement.lat,logement.lng),
        	icon:iconLogement,
        	title:logement.name
    	});
    	
    	google.maps.event.addListener(marker, 'click', (function(marker) {
        	return function() {
        		infowindowContent = "<address><strong>"+logement.name+"</strong><br>";
    			infowindowContent += logement.address+"<br>";
    			if(logement.telephone !== undefined){infowindowContent += logement.telephone+"<br>";}
    			if(logement.web !== undefined){infowindowContent += "<a href='http://"+logement.web+"'>"+logement.web+"</a>";}
    			infowindowContent += "</address>";
          		infowindow.setContent(infowindowContent);
          		infowindow.open(map, marker);
        	}
      	})(marker));
	});
	var markerEglise = new google.maps.Marker({
    	map: map,
    	position: egl,
    	icon:iconEglise,
    	title:"Eglise"
	});
	google.maps.event.addListener(markerEglise, 'click', (function(markerEglise) {
        	return function() {
        		infowindowContent = "<address><strong>"+eglise.name+"</strong><br>";
    			infowindowContent += "Messe à <br>";
    			infowindowContent += eglise.address+"<br>";
    			infowindowContent += "</address>";
          		infowindow.setContent(infowindowContent);
          		infowindow.open(map, markerEglise);
        	}
      	})(markerEglise));
	var markerReception = new google.maps.Marker({
    	map: map,
    	position: new google.maps.LatLng(reception.lat, reception.lng),
    	icon:iconReception,
    	title:"Réception"
	});
	google.maps.event.addListener(markerReception, 'click', (function(markerReception) {
        	return function() {
        		infowindowContent = "<address><strong>"+reception.name+"</strong><br>";
    			infowindowContent += "Réception à <br>";
    			infowindowContent += reception.address+"<br>";
    			infowindowContent += "</address>";
          		infowindow.setContent(infowindowContent);
          		infowindow.open(map, markerReception);
        	}
      	})(markerReception));
	
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
	/*
	trajet
	*/
	//generate map
	if($("#map_trajet").length>0) {
		initializeTrajet();
	}
	//request-itinerary
	$("#form-trajet").submit(function() {
		calcRoute();
		return false;
	});
	//print button
	$("#print-itinerary").click(function() {
		window.print();
		return false;
	});
	$("#request-itinerary").click(function() {
		$("#print-itinerary").show();
	});
	/*
	logement
	*/
	//generate map
	if($("#map_logement").length>0) {
		initializeLogement();
	}
	
});
 