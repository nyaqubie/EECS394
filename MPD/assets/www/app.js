///////////////////////////////////////////////////////////////////////////////
//AJAX Functions
///////////////////////////////////////////////////////////////////////////////

function callAjax(url, data, funct){
	$.ajax({
		url: url,
		//cache:false,
		type: 'GET',
		dataType: 'jsonp',
		data: data,
		jsonp: 'jsoncallback',
		timeout: 10000,
		success: funct,
		error: function(){
			alert('Ajax call failed')
		}
	});
}

//List all of the available upcoming events
function getEvents(){
	var url = 'http://69.164.198.224/getevents';
	var data = '';
	var funct = function (data, status){
		for (var i = 0; i<data.length; i++){
			var link = document.createElement('a');
			link.setAttribute('href','locations.html?eventid='+data[i][0]);
			link.setAttribute('rel','external');
			link.setAttribute('data-role','button');
			link.appendChild(document.createTextNode(data[i][1] + " " + data[i][2]));
			$("#footer").before(link);	//add the link before the footer
			$("html").trigger('create');	//needed to apply jqmobile style changes on dynamic content
		}
	};
	callAjax(url,data,funct);
}

//List buttons for all of the locations for an event
function listLocationsForEvent(userCoords){
	var eventid = getQueryVariable('eventid');
	var url='http://69.164.198.224/getlocationsinradius';
	var data={eventid: eventid, radius: 1, geolocation: userCoords};

	var funct = function(data, status){
		for (var i = 0; i<data.length; i++){
			var name = data[i][1];
			var address = data[i][2];
			var numinterested = data[i][3];
			var distance = data[i][4];
			
			var link = document.createElement('a');
			link.setAttribute('href','location.html?eventid=' + eventid + '&locationid=' + data[i][0]);
			link.setAttribute('rel','external');
			link.setAttribute('data-role','button');
			link.appendChild(document.createTextNode(name + ' ' + distance + 'mi ' + numinterested + ' interested' ));
			$("#footer").before(link);	//add the link before the footer
			$("html").trigger('create')	//needed to apply jqmobile style changes on dynamic content
		}
	}
	callAjax(url,data,funct);
}

//Show the information for one location
function showLocationInfo(){
	var url = 'http://69.164.198.224/getlocation';
	var data = {locationid: getQueryVariable('locationid')};
	var funct = function(data, status){
			var name = data[0][0];
			var address = data[0][1];
			
			var header = document.createElement('h2');
			header.appendChild(document.createTextNode(name));
			$("#footer").before(header);
			
			var paragraph = document.createElement('p');
			paragraph.appendChild(document.createTextNode(address));
			$("#footer").before(paragraph);
			$("html").trigger('create');
	};
	callAjax(url,data,funct);
}

//Determine if the user has expressed interest, show the appropriate button
function createInterestButton(){
	var url = 'http://69.164.198.224/checkinterest';
	var data = {uuid: device.uuid, locationid: getQueryVariable('locationid'), eventid: getQueryVariable('eventid')};
	var funct = function(data, status){
		var link = document.createElement('a');
		link.setAttribute('rel','external');
		link.setAttribute('data-role','button');
		link.setAttribute('id','interestlink');
		if (data == 0){
			link.setAttribute('onclick','showInterestInLocation()');
			link.appendChild(document.createTextNode('Show interest in this location'));
		}
		else{
			link.setAttribute('onclick','removeInterestInLocation()');
			link.appendChild(document.createTextNode('You are interested in this location'));
		}
		$("#footer").before(link);	//add the link before the footer
		$("html").trigger('create')	//needed to apply jqmobile style changes on dynamic content
	}
	callAjax(url,data,funct);
}

//This function allows the user to express interest in a specific location+event, updates the button accordingly
function showInterestInLocation(){
	var url = 'http://69.164.198.224/showinterest';
	var data = {uuid: device.uuid, locationid: getQueryVariable('locationid'), eventid: getQueryVariable('eventid')};
	var funct =  function(data, status){
		$('#interestlink').remove();
		var link = document.createElement('a');
		link.setAttribute('id','interestlink');
		link.setAttribute('rel','external');
		link.setAttribute('data-role','button');
		link.setAttribute('onclick','removeInterestInLocation()');
		link.appendChild(document.createTextNode('You are interested in this location'));
		$("#footer").before(link);	//add the link before the footer
		$("html").trigger('create')	//needed to apply jqmobile style changes on dynamic content
	};
	callAjax(url,data,funct);
}

//This function allows the user to remove interest in a specific location+event, updates the button accordingly
function removeInterestInLocation(){
	var url = 'http://69.164.198.224/removeinterest';
	var data = {uuid: device.uuid, locationid: getQueryVariable('locationid'), eventid: getQueryVariable('eventid')};
	var funct = function(data, status){
		$('#interestlink').remove();
		var link = document.createElement('a');
		link.setAttribute('id','interestlink');
		link.setAttribute('rel','external');
		link.setAttribute('data-role','button');
		link.setAttribute('onclick','showInterestInLocation()');
		link.appendChild(document.createTextNode('Show interest in this location'));
		$("#footer").before(link);	//add the link before the footer
		$("html").trigger('create')	//needed to apply jqmobile style changes on dynamic content
	}
	callAjax(url,data,funct);
}


///////////////////////////////////////////////////////////////////////////////
//Sensor Functions
///////////////////////////////////////////////////////////////////////////////

//Get the GPS location; if successful then list the event locations (using the appropriate userCoords)
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
	listLocationsForEvent(position.coords.latitude + ',' + position.coords.longitude);
}

///////////////////////////////////////////////////////////////////////////////
//Data Manipulation or Display Functions
///////////////////////////////////////////////////////////////////////////////

//Read the eventid, create the appropriate 'back' button
function createBackButton(){
	var eveid = getQueryVariable('eventid');
	var backlink = document.createElement('a');
	backlink.setAttribute('href','locations.html?eventid=' + eveid);
	backlink.setAttribute('rel','external');
	backlink.setAttribute('data-role','button');
	backlink.appendChild(document.createTextNode('Back'));
	$("#events").after(backlink);
}

//This function analyzes the URL and pulls out the specified variable (POST-style)
function getQueryVariable(variable) {
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