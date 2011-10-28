//Bus stop initialization
function stop(name, latitude, longitude, times) {
	//This is the constructor for a stop datatype
	//We don't have to use this, but it works pretty easily; just for testing, for now
	//Would probably use date objects instead of numbers when initializing
	this.name = name;
	this.geoloc = {};
	this.geoloc.latitude = latitude;
	this.geoloc.longitude = longitude;
	this.times = times;
	var now = new Date();
	for (var i = 0; i < times.length; i++) {
		this.times[i] = new Date(now.getMonth() + 1 + "/" + now.getDate() + "/" + now.getFullYear() + " " + times[i]);
	}
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

function listStopsinOptionsFormatDemo(stopList) {
	//This function takes the stops and prints them out as a list of options tags (for the drop-down menu)
	for (var i in stopList){
		document.write("<li>");
		document.write(stopList[i].name);
		document.write(" - Next bus: ");
		document.write(getTimeUntilNextBusDemo(stopList[i].times));
		document.write("<span class = 'distance' latitude ='");
		document.write(stopList[i].geoloc.latitude);
		document.write("' longitude = '");
		document.write(stopList[i].geoloc.longitude);
		document.write("'> | Distance: </span>");
		document.write("</li>");
	}
}

function getTimeUntilNextBusDemo(timeList) {
	var now = new Date();
	for (var i in timeList){
		difference = (timeList[i] - now)/1000/60
		if (difference>0 && difference < 2*60){
			return  Math.round(difference) + " minutes";
		}
	}
	
	return timeList[0].getHours() + ":" + timeList[0].getMinutes();
}

function onDeviceReady() {
				
	navigator.geolocation.getCurrentPosition(onSuccess, onError, {enableHighAccuracy: true});
}
function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}
function onSuccess(position) {
	
	var stopLat = position.coords.latitude;
	var stopLong = position.coords.longitude;
	var stopCoords = {};
	stopCoords.latitude = stopLat;
	stopCoords.longitude = stopLong;
	$('.distance').each(function(index) {
		var userLat = $(this).attr('latitude');
		var userLong = $(this).attr('longitude');
		var userCoords = {};
		userCoords.latitude = userLat;
		userCoords.longitude = userLong;
		
		var distance = distanceBetweenCoords(userCoords, stopCoords);
		$(this).text(" | Distance: " + distance + " miles");
	});
}

/*
//Currently unused functions
function getTimeUntilNextBus(curtime, stopList){
	for (i in stopList){
		difference = (stopList[i] - curtime)/1000/60
		if (difference>0){
			return  Math.round(difference) 
		}
	}
	tomorrowStop = stopList[0]
	tomorrowStop.setDate(tomorrowStop.getDate()+1)
	return Math.round( (tomorrowStop - curtime)/1000/60 )
}

function listStopsinOptionsFormat(){
	//This function takes the stops and prints them out as a list of options tags (for the drop-down menu)
	for (i in stops){
		document.write("<option value=" + i + ">");
		document.write(stops[i].name);
		document.write("</option>");
	}

	function selectedRedirect(selectObject){
	//This function redirects the app to the showstop page, and appends the stop ID
	//This is run when the dropdown menu changes
		if (selectObject.value != ''){
			window.location = 'showstop.html?stop=' + selectObject.value;
		}
	}
}

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
*/
