var directionsDisplay;
var map;
var end;
var logements = [
	{"type":"Hôtel","name":"Hôtel de la Gare","rue":"4, Rue Jules Ferry","cp":"14270","ville":"Mézidon Canon","chambres":"11","web":"","telephone":"02 31 20 06 75","email":"","address":"4, Rue Jules Ferry 14270 Mézidon Canon","lat":49.0722132,"lng":-0.0744777},
	{"type":"Hôtel","name":"Hôtel Saint Pierre","rue":"74 place Charles De Gaulle","cp":"14270","ville":"Mézidon Canon","chambres":"15","web":"http://www.lesaint-pierre.fr/","telephone":"02 31 40 47 94","email":"","address":"74 place Charles De Gaulle 14270 Mézidon Canon","lat":49.0734558,"lng":-0.0695864},
	{"type":"Hôtel","name":"Auberge de la Dives","rue":"27, boulevard Collas","cp":"14170","ville":"Saint Pierre sur Dives","chambres":"5","web":"","telephone":"02 31 20 50 50","email":"","address":"27, boulevard Collas 14170 Saint Pierre sur Dives","lat":49.0217832,"lng":-0.0374737},
	{"type":"Hôtel","name":"Hôtel de la gare","rue":"47, boulevard Collas","cp":"14170","ville":"Saint Pierre sur Dives","chambres":"","web":"","telephone":"02 31 20 56 59","email":"","address":"47, boulevard Collas 14170 Saint Pierre sur Dives","lat":49.0228402,"lng":-0.0399565},
	{"type":"Hôtel","name":"Le Greenwich","rue":"5, Place Marché","cp":"14170","ville":"Saint Pierre sur Dives","chambres":"","web":"","telephone":"02 31 20 83 43 ‎","email":"","address":"5, Place Marché 14170 Saint Pierre sur Dives","lat":49.0190423,"lng":-0.0319409},
	{"type":"Hôtel","name":"Les Agriculteurs","rue":"118, rue de Falaise","cp":"14170","ville":"Saint Pierre sur Dives","chambres":"10","web":"www.lesagriculteurs.com","telephone":"02 31 20 72 78","email":"","address":"118, rue de Falaise 14170 Saint Pierre sur Dives","lat":49.0170042,"lng":-0.0344193},
	{"type":"Hôtel","name":"Auberge du Cheval Blanc","rue":"44 Route de Saint Pierre sur Dives","cp":"14340","ville":"Crevecoeur en Auge","chambres":"5","web":"","telephone":"02 31 63 03 28","email":"","address":"44 Route de Saint Pierre sur Dives 14340 Crevecoeur en Auge","lat":49.117783,"lng":0.017762},
	{"type":"Hôtel","name":"Château les Bruyères","rue":"Route du Cadran","cp":"13340","ville":"Cambremer","chambres":"13","web":"","telephone":"02 31 32 22 45","email":"","address":"Route du Cadran 13340 Cambremer","lat":49.145807,"lng":0.058113},
	{"type":"Hôtel","name":"Hôtellerie Normande","rue":"98, grande rue","cp":"14430","ville":"Dozulé","chambres":"13","web":"","telephone":"02 31 79 20 18","email":"hotellerie-normande@orange.fr","address":"98, grande rue 14430 Dozulé","lat":49.2313439,"lng":-0.0433436},
	{"type":"Hôtel","name":"Hôtel IBIS","rue":"Rue des Frères Michaut ","cp":"14700","ville":"Falaise","chambres":"40","web":"","telephone":"02 31 90 11 00","email":"","address":"Rue des Frères Michaut  14700 Falaise","lat":48.9051784,"lng":-0.2078424},
	{"type":"Chambre d'hôtes","name":"Ferme de la Londe","rue":"","cp":"14270","ville":"Mézidon Canon","chambres":"3","web":"","telephone":"02 31 20 27 49","email":"","address":" 14270 Mézidon Canon","lat":49.07351,"lng":-0.069616},
	{"type":"Chambre d'hôtes","name":"Auberge du Doux Marais","rue":"Sainte Marie aux Anglais","cp":"14270","ville":"Le Mesnil-Mauger","chambres":"5","web":"","telephone":"02 31 63 82 81","email":"","address":"Sainte Marie aux Anglais 14270 Le Mesnil-Mauger","lat":49.0721459,"lng":0.0201679},
	{"type":"Chambre d'hôtes","name":"Le Pressoir de Glatigny","rue":"","cp":"14170","ville":"Bretteville sur Dives","chambres":"4","web":"","telephone":"02 31 20 68 93","email":"","address":" 14170 Bretteville sur Dives","lat":49.038773,"lng":-0.020451},
	{"type":"Chambre d'hôtes","name":"Domaine de la Hurel","rue":"","cp":"14370","ville":"Airan","chambres":"5","web":"www.domainedelahurel.com","telephone":"02 31 44 68 85","email":"","address":" 14370 Airan","lat":49.101073,"lng":-0.151407},
	{"type":"Chambre d'hôtes","name":"La Bichonniere","rue":"Le Hameau de Carel","cp":"14170","ville":"Saint Pierre sur Dives","chambres":"2","web":"","telephone":"02 31 20 91 09","email":"","address":"Le Hameau de Carel 14170 Saint Pierre sur Dives","lat":49.0083269,"lng":-0.0434954},
	{"type":"Chambre d'hôtes","name":"Aux Pommiers de Livaye","rue":"","cp":"13340","ville":"Notre Dame de Livaye","chambres":"5","web":"","telephone":"02 31 63 01 28","email":"","address":" 13340 Notre Dame de Livaye","lat":43.026551,"lng":-75.1311874},
	{"type":"Chambre d'hôtes","name":"Manoir de la Turquelane","rue":"","cp":"13340","ville":"Notre Dame de Livaye","chambres":"6","web":"","telephone":"02 31 63 02 05","email":"s.mo.roullier@wanadoo.fr","address":" 13340 Notre Dame de Livaye","lat":43.026551,"lng":-75.1311874},
	{"type":"Chambre d'hôtes","name":"Mme Vieillard","rue":"Rue de la baronne","cp":"14140","ville":"Saint Julien le Faucon","chambres":"2","web":"","telephone":"09 61 24 36 98","email":"","address":"Rue de la baronne 14140 Saint Julien le Faucon","lat":49.069446,"lng":0.084485},
	{"type":"Chambre d'hôtes","name":"Ferme du Vieux Château","rue":"","cp":"14170","ville":"Mittois","chambres":"1","web":"","telephone":"02 31 20 73 94","email":"","address":" 14170 Mittois","lat":49.009353,"lng":0.023953},
	{"type":"Chambre d'hôtes","name":"Claque Pépins","rue":"","cp":"14140","ville":"Coupesarte","chambres":"4","web":"","telephone":"02 31 63 77 61","email":"","address":" 14140 Coupesarte","lat":49.058682,"lng":0.108701},
	{"type":"Gîte","name":"M et Mme Fache","rue":"","cp":"14270","ville":"Percy en Auge","chambres":"4p /9p","web":"","telephone":"02 31 20 08 75","email":"","address":" 14270 Percy en Auge","lat":49.056062,"lng":-0.062853},
	{"type":"Gîte","name":"Le Champ Roger","rue":"","cp":"14370","ville":"Canteloup","chambres":"9p","web":"","telephone":"02 31 23.41.37","email":"","address":" 14370 Canteloup","lat":49.135743,"lng":-0.123775},
	{"type":"Gîte","name":"Saint Loup de Fribois ","rue":"25 rue des Ecoles","cp":"14340","ville":"Crèvecoeur en Auge","chambres":"4p","web":"","telephone":"02 31 63 07 25","email":"","address":"25 rue des Ecoles 14340 Crèvecoeur en Auge","lat":49.1162631,"lng":0.0170036},
	{"type":"Gîte","name":"Manoir des Ecluses","rue":"","cp":"14270","ville":"Le Mesnil Mauger","chambres":"5p","web":"","telephone":"02 31 63 64 66","email":"lesecluses@aol.com","address":" 14270 Le Mesnil Mauger","lat":49.087016,"lng":0.015558},
	{"type":"Gîte","name":"Le Gadage","rue":"Sainte Marie aux Anglais","cp":"14270","ville":"Le Mesnil Mauger","chambres":"2","web":"","telephone":"02 31 32 98 01","email":"","address":"Sainte Marie aux Anglais 14270 Le Mesnil Mauger","lat":49.0721459,"lng":0.0201679},
	{"type":"Gîte","name":"La ferme des Monts Les Monts","rue":"","cp":"14170","ville":"Hieville","chambres":"6p","web":"","telephone":" 02 31 20 53 78 / 06 73 31 70 27","email":"","address":" 14170 Hieville","lat":49.024356,"lng":-0.01114},
	{"type":"Gîte","name":"La Folinière","rue":"","cp":"14170","ville":"Berville l'Oudon","chambres":"2p","web":"","telephone":"02 31 20 38 53","email":"","address":" 14170 Berville l'Oudon","lat":49.005814,"lng":-0.010462},
	{"type":"Gîte","name":"Manoir de la Tremblaye","rue":"","cp":"14340","ville":"Notre Dame de Livaye","chambres":"4p","web":"","telephone":"02 31 63 05 62 / 04 22 01 47 72","email":"","address":" 14340 Notre Dame de Livaye","lat":49.1144869,"lng":0.039327},
	{"type":"Gîte","name":"Le Champ Roger Le Clos Saint Anne Englesqueville 14340 Cambremer","rue":"","cp":"14340","ville":"Cambremer","chambres":"4p","web":"","telephone":"02 31 63 04 20 / 06 79 83 68 57 / 06 79 83 68 50","email":"","address":" 14340 Cambremer","lat":49.150643,"lng":0.048774},
	{"type":"Gîte","name":"Les Marronniers","rue":"4235 Route d'Engleasqueville","cp":"14340","ville":"Cambremer","chambres":"6p","web":"","telephone":"02 31 63 08 28 ","email":"","address":"4235 Route d'Engleasqueville 14340 Cambremer","lat":49.150643,"lng":0.048774}
];

var eglise={
	"name":"Eglise Saint-Martin",
	"address":"Rue Saint-Martin, 61200 Argentan",
	"lat":48.747021,
	"lng":-0.023389
};
var reception={
	"name":"Château de Canon",
	"address":"Château de Canon, 14270 Mézidon-Canon",
	"lat":49.07842,
	"lng":-0.094757
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
        		infowindowContent = "<div class='infowindow-text'><address><strong>"+eglise.name+"</strong><br>";
    			infowindowContent += "Messe à <br>";
    			infowindowContent += eglise.address+"<br>";
    			infowindowContent += "</address></div>";
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
	var rec = new google.maps.LatLng(reception.lat, reception.lng);
	var myOptions = {
      zoom: 10,
      center: rec,
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
        		infowindowContent = "<div class='infowindow-text'><address><strong>"+logement.name+"</strong><br>";
    			infowindowContent += logement.address+"<br>";
    			if(logement.telephone !== undefined){infowindowContent += logement.telephone+"<br>";}
    			if(logement.web !== undefined){infowindowContent += "<a href='http://"+logement.web+"' target='_blank'>"+logement.web+"</a>";}
    			infowindowContent += "</address></div>";
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
        		infowindowContent = "<div class='infowindow-text'><address><strong>"+eglise.name+"</strong><br>";
    			infowindowContent += "Messe à <br>";
    			infowindowContent += eglise.address+"<br>";
    			infowindowContent += "</address></div>";
          		infowindow.setContent(infowindowContent);
          		infowindow.open(map, markerEglise);
        	}
      	})(markerEglise));
	var markerReception = new google.maps.Marker({
    	map: map,
    	position: rec,
    	icon:iconReception,
    	title:"Réception"
	});
	google.maps.event.addListener(markerReception, 'click', (function(markerReception) {
        	return function() {
        		infowindowContent = "<div class='infowindow-text'><address><strong>"+reception.name+"</strong><br>";
    			infowindowContent += "Réception à <br>";
    			infowindowContent += reception.address+"<br>";
    			infowindowContent += "</address></div>";
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
 