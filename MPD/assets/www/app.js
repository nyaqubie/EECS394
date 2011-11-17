function getQueryVariable(variable) {
	//This function analyzes the URL and pulls out the specified variable (POST-style)
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i=0;i<vars.length;i++) {
		var pair = vars[i].split("=");
		if (pair[0] == variable) {
			return pair[1];
		}
	} 
	alert('Query Variable ' + variable + ' not found');
}

function commitToLocation(){
	var eveid = getQueryVariable('eventid');
	var locid = getQueryVariable('locationid');
	var devuuid = device.uuid;
	$.ajax({
		url: 'http://69.164.198.224/showinterest',
		type: 'GET',
		dataType: 'jsonp',
		data:{uuid: devuuid, locationid: locid, eventid:eveid},
		jsonp: 'jsoncallback',
		timeout: 10000,
		success: function(data, status){
			$('#commitlink').remove();
			var link = document.createElement('a');
			link.setAttribute('rel','external');
			link.setAttribute('data-role','button');
			link.appendChild(document.createTextNode('You are interested in this location'));
			$("#footer").before(link);	//add the link before the footer
			$("html").trigger('create')	//needed to apply jqmobile style changes on dynamic content
		},
		error: function(){
			alert('bad')
		}
	});
}

function createBackButton(){
	var eveid = getQueryVariable('eventid');
	var locid = getQueryVariable('locationid');
	var backlink = document.createElement('a');
	var devuuid = device.uuid;
	backlink.setAttribute('href','event.html?eventid=' + eveid);
	backlink.setAttribute('rel','external');
	backlink.setAttribute('data-role','button');
	backlink.appendChild(document.createTextNode('Back'));
	$("#events").after(backlink);
}

function createInterestButton(){
	var devuuid = device.uuid;
	var eveid = getQueryVariable('eventid');
	var locid = getQueryVariable('locationid');
	$.ajax({
		url: 'http://69.164.198.224/checkinterest',
		type: 'GET',
		dataType: 'jsonp',
		data:{uuid: devuuid, locationid: locid, eventid:eveid},
		jsonp: 'jsoncallback',
		timeout: 10000,
		success: function(data, status){
			var link = document.createElement('a');
			link.setAttribute('rel','external');
			link.setAttribute('data-role','button');
			link.setAttribute('id','commitlink');
			if (data == 0){
				link.setAttribute('onclick','commitToLocation()');
				link.appendChild(document.createTextNode('Show interest in this location'));
			}
			else{
				link.appendChild(document.createTextNode('You are interested in this location'));
			}
			$("#footer").before(link);	//add the link before the footer
			$("html").trigger('create')	//needed to apply jqmobile style changes on dynamic content
		},
		error: function(){
			alert('bad')
		}
	});
}

function showLocationInfo(){
	var locationid = getQueryVariable('locationid');
	$.ajax({
		url: 'http://69.164.198.224/getlocation',
		type: 'GET',
		dataType: 'jsonp',
		data:{locationid:locationid},
		jsonp: 'jsoncallback',
		timeout: 1000,
		success: function(data, status){
			var name = data[0][0];
			var address = data[0][1];
			
			var header = document.createElement('h2');
			header.appendChild(document.createTextNode(name));
			$("#footer").before(header);	//add the link before the footer
			
			var paragraph = document.createElement('p');
			paragraph.appendChild(document.createTextNode(address));
			$("#footer").before(paragraph);	//add the link before the footer
		},
		error: function(){
			alert('bad');
		}
	});
}

function listLocationsForEvent(userCoords){
	var eventid = getQueryVariable('eventid');
	$.ajax({
		url: 'http://69.164.198.224/getlocations',
		type: 'GET',
		dataType: 'jsonp',
		data:{eventid:eventid},
		jsonp: 'jsoncallback',
		timeout: 1000,
		success: function(data, status){
			for (var i = 0; i<data.length; i++){
				var link = document.createElement('a');
				var name = data[i][1];
				var address = data[i][2];
				var geolocation = data[i][3];
				var numinterested = data[i][4];
				
				var locationCoords = {};
				locationCoords.latitude = geolocation.split(',')[0];
				locationCoords.longitude = geolocation.split(',')[1];
				var distance = distanceBetweenCoords(locationCoords, userCoords);
				
				link.setAttribute('href','location.html?eventid=' + eventid + '&locationid=' + data[i][0]);
				link.setAttribute('rel','external');
				link.setAttribute('data-role','button');
				link.appendChild(document.createTextNode(name + ' ' + distance + 'mi, ' + numinterested + ' interested' ));
				$("#footer").before(link);	//add the link before the footer
				$("html").trigger('create')	//needed to apply jqmobile style changes on dynamic content
			}
		},
		error: function(){
			alert('bad')
		}
	});
}

function getEvents(){
	$.ajax({
		url: 'http://69.164.198.224/getevents',
		type: 'GET',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 10000,
		success: function(data, status){
			for (var i = 0; i<data.length; i++){
				var link = document.createElement('a');
				link.setAttribute('href','event.html?eventid='+data[i][0]);
				link.setAttribute('rel','external');
				link.setAttribute('data-role','button');
				link.appendChild(document.createTextNode(data[i][1] + " " + data[i][2]));
				$("#footer").before(link);	//add the link before the footer
				$("html").trigger('create')	//needed to apply jqmobile style changes on dynamic content
			}
		},
		error: function(){
			alert('bad')
		}
	});
}

function distanceBetweenCoords(p1, p2) {
    var R = 3958.75587;
    var dLat = 0.0174532925*(p2.latitude - p1.latitude);
    var dLong = 0.0174532925*(p2.longitude - p1.longitude);

    var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(0.0174532925*(p1.latitude)) * Math.cos(0.0174532925*(p2.latitude)) * Math.sin(dLong/2) * Math.sin(dLong/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;
	
    return Math.round(d);
}

function getGPSLocation() {	
		navigator.geolocation.getCurrentPosition(GPSSuccess, GPSError, {enableHighAccuracy: true});
}
function GPSError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}
function GPSSuccess(position) {
	var userLat = position.coords.latitude;
	var userLong = position.coords.longitude;
	var userCoords = {};
	userCoords.latitude = userLat;
	userCoords.longitude = userLong;
	listLocationsForEvent(userCoords);
}