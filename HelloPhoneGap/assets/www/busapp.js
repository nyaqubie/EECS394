//Bus stop initialization

function stop(name, latitude, longitude, times){
	//This is the constructor for a stop datatype
	//We don't have to use this, but it works pretty easily; just for testing, for now
	//Would probably use date objects instead of numbers when initializing
	this.name=name;
	this.geoloc = {};
	this.geoloc.latitude = latitude;
	this.geoloc.longitude = longitude;
	this.times=times;
	var now = new Date();
	for (i in times){
		this.times[i] = new Date(now.getMonth()+1 + "/" + now.getDate() + "/" + now.getFullYear() + " " + times[i]);
	}
}

function distanceBetweenCoords(p1, p2){
    var R = 3958.75587
    var dLat = 0.0174532925*(p2.latitude - p1.latitude)
    var dLong = 0.0174532925*(p2.longitude - p1.longitude)

    var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(0.0174532925*(p1.latitude)) * Math.cos(0.0174532925*(p2.latitude)) * Math.sin(dLong/2) * Math.sin(dLong/2)
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
    var d = R * c
	
	console.log(d)

    return Math.round(d)
}

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
}

function selectedRedirect(selectObject){
	//This function redirects the app to the showstop page, and appends the stop ID
	//This is run when the dropdown menu changes
	if (selectObject.value != ''){
		window.location = 'showstop.html?stop=' + selectObject.value;
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

function getGeoLoc() {
	navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

// onSuccess Geolocation
function onDeviceReady(position) {
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
	alert(longitude)
	alert(latitude)
}
