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
			var newLocItem = document.createElement('li');
			var link = document.createElement('a');
			
			link.setAttribute('href','locations.html?eventid='+data[i][0]);
			link.setAttribute('rel','external');
			
			var name = document.createElement('h2');
			name.appendChild(document.createTextNode(data[i][1]));
			
			var date = document.createElement('p');
			date.appendChild(document.createTextNode(data[i][2]));
			
			link.appendChild(name);
			link.appendChild(date);
			
			newLocItem.appendChild(link);
			$("#locas").append(newLocItem);	//add the link before the footer
		}
		$("#locas").listview('refresh')

	};
	callAjax(url,data,funct);
}

//List all of the locations for an event
function listLocationsForEvent(userCoords){
	var eventid = getQueryVariable('eventid');
	var url='http://69.164.198.224/getlocationsinradius';
	var rad = $('#slider').val();
	var data={eventid: eventid, radius: rad, geolocation: userCoords, uuid: device.uuid};
	var funct = function(data, status){
		for (var i = 0; i<data.length; i++){
			var name = data[i][1];
			var address = data[i][2];
			var numinterested = data[i][3];
			var userinterested = data[i][5];
			var distance = Math.round(data[i][4] * 100) / 100;
			
			var newLocItem = document.createElement('li');
			var link = document.createElement('a');
			
			link.setAttribute('href','location.html?eventid=' + eventid + '&locationid=' + data[i][0] + '&numberinterested=' + numinterested + '&address=' + address + '&name=' + name + '&userinterested=' + userinterested);
			link.setAttribute('rel','external');
			
			var headerName = document.createElement('h2');
			headerName.appendChild(document.createTextNode(name));
			
			var addressP = document.createElement('p');
			addressP.appendChild(document.createTextNode(address));
		
			var countBubble = document.createElement('span');
			countBubble.setAttribute('class','ui-li-count');
			countBubble.appendChild(document.createTextNode(distance + 'mi' + '  |  ' + 'Interest: ' + numinterested));

			link.appendChild(headerName);
			link.appendChild(addressP);
			link.appendChild(countBubble);			
			newLocItem.appendChild(link);

			$("#locas").append(newLocItem);
		}
		
		$("#locas").listview('refresh');

	}
	callAjax(url,data,funct);
}

//Show the information for one location
function showLocationInfo(){
	//Get data from URL
	var name = unescape(getQueryVariable('name'));
	var address = unescape(getQueryVariable('address'));
	var numberinterested = unescape(getQueryVariable('numberinterested'));
	var userinterested = unescape(getQueryVariable('userinterested'));

	//Display name
	var header = document.createElement('h2');	
	header.appendChild(document.createTextNode(name));
	$("#footer").before(header);
	
	//Display address
	var paragraph = document.createElement('p');
	paragraph.appendChild(document.createTextNode(address));
	$("#footer").before(paragraph);
	
	//Add a linebreak
	var brk = document.createElement('br');
	$("#footer").before(brk);
	
	//Display interest toggle
	var slider = document.createElement('select');
	slider.setAttribute('name','slider');
	slider.setAttribute('data-theme','c');
	slider.setAttribute('id','flip-a');
	slider.setAttribute('data-role','slider');
	
	var optionN = document.createElement('option');
	optionN.appendChild(document.createTextNode('No'));
	optionN.setAttribute('value','no');
	slider.appendChild(optionN)
	
	var optionY = document.createElement('option');
	optionY.appendChild(document.createTextNode('Yes'));
	optionY.setAttribute('value','yes');
	slider.appendChild(optionY)
	
	var label = document.createElement('label');
	label.appendChild(document.createTextNode('Interested?'));
	label.setAttribute('for','flip-a');
	
	$("#footer").before(label);
	$("#footer").before(slider);
	
	//Select initial button state
	if(userinterested == 0){
		$('#flip-a').val('no');
	}
	else{
		$('#flip-a').val('yes');
	}
	
	//Toggle change handler
	$('#flip-a').change( function(){
		if($('#flip-a').val() == 'yes'){
			showInterestInLocation();
		}
		else{
			removeInterestInLocation();
		}
	});
	
	$("html").trigger('create')
}

//This function allows the user to express interest in a specific location+event, updates the button accordingly
function showInterestInLocation(){
	var url = 'http://69.164.198.224/showinterest';
	var data = {uuid: device.uuid, locationid: getQueryVariable('locationid'), eventid: getQueryVariable('eventid')};
	var funct =  function(data, status){
	};
	callAjax(url,data,funct);
}

//This function allows the user to remove interest in a specific location+event, updates the button accordingly
function removeInterestInLocation(){
	var url = 'http://69.164.198.224/removeinterest';
	var data = {uuid: device.uuid, locationid: getQueryVariable('locationid'), eventid: getQueryVariable('eventid')};
	var funct = function(data, status){
	}
	callAjax(url,data,funct);
}

///////////////////////////////////////////////////////////////////////////////
//Sensor Functions
///////////////////////////////////////////////////////////////////////////////

//Get the GPS location; if successful then list the event locations (using the appropriate userCoords)
function getGPSLocation() {	
	//Get the last GPS coordinates from the database
	function queryDB(tx) {
		tx.executeSql('CREATE TABLE IF NOT EXISTS GEOLOC (geoloc, timestamp)');
		tx.executeSql('SELECT * FROM GEOLOC', [], querySuccess, errorCB);
	}
	function querySuccess(tx, results) {
		//If there's something returned from the query
		if (results.rows.length > 0){
			//Geocoords is over 30 seconds old (too old); call the GPS function
			if ((new Date().getTime()) - results.rows.item(0).timestamp > 30*1000){
				navigator.geolocation.getCurrentPosition(GPSSuccess, GPSError, {enableHighAccuracy: true});
			}
			//Recent geocoords; don't call GPS, use the database's geocoords
			else{
				listLocationsForEvent(results.rows.item(0).geoloc);
				$(".ui-slider").bind("vmouseup", function () {
					$('li').remove();
					listLocationsForEvent(results.rows.item(0).geoloc);
				});
			}
		}
		//If the query was empty, call the GPS function
		else{
			navigator.geolocation.getCurrentPosition(GPSSuccess, GPSError, {enableHighAccuracy: true});
		}
	}
	function errorCB(err) {
		console.log("Error processing SQL: "+err.code);
	}
	var db = window.openDatabase("persistent", "1.0", "Persistent Data", 2000);
	db.transaction(queryDB, errorCB);
}
function GPSError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}
function GPSSuccess(position) {
	//Update database with new values
	function populateDB(tx) {
		tx.executeSql('DROP TABLE GEOLOC');
		tx.executeSql('CREATE TABLE GEOLOC (geoloc, timestamp)');
		tx.executeSql('INSERT INTO GEOLOC (geoloc, timestamp) VALUES ("'+ position.coords.latitude + ',' + position.coords.longitude+'", "'+position.timestamp+'")');
	}
	function errorCB(err) {
		console.log("Error processing SQL: "+err.code);
	}
	function successCB() {
		//Process the geocoords
		var userLat = position.coords.latitude;
		var userLong = position.coords.longitude;
		var userCoords = {};
		userCoords.latitude = userLat;
		userCoords.longitude = userLong;
		listLocationsForEvent(position.coords.latitude + ',' + position.coords.longitude);
		$(".ui-slider").bind("vmouseup", function () {
			$('li').remove();
			listLocationsForEvent(position.coords.latitude + ',' + position.coords.longitude);
		});
	}
	var db = window.openDatabase("persistent", "1.0", "Persistent Data", 2000);
	db.transaction(populateDB, errorCB, successCB);
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

// This function forward index page to events page after northwestern logo disappear
function move() {
	window.location = 'events.html'
}