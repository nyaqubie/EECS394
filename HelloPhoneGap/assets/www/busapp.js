function stop(name, times){
	//This is the constructor for a stop datatype
	//We don't have to use this, but it works pretty easily; just for testing, for now
	//Would probably use date objects instead of numbers when initializing
	this.name=name;
	this.times=[];
	var now = new Date();
	for (i in times){
		this.times[i] = new Date(now.getMonth()+1 + "/" + now.getDate() + "/" + now.getFullYear() + " " + times[i])
	}
}

//Bus stop initialization
var stop1 = new stop("Noyes",["06:40:00 PM","06:45:00 PM","06:57:00 PM"]);
var stop2 = new stop("Yesno",["10:34:00 PM","10:39:00 PM"]);
var stops = [stop1,stop2];

/*function getStops(){
	//This is a placeholder until we have the actual functionality to get the stops from the CSV file
	//It will eventually just return a list of the stops
	var stops = new Array();
	stops[0] = "";
	stops[1] = "Stop1";
	stops[2] = "Stop2";
	return stops;
}*/

function getTimeUntilNextBus(stopList){
	var now = new Date();
	
	for (i in stopList){
		difference = (stopList[i] - now)/1000/60
		if (difference>0){
			return difference 
		}
	}
	
	tomorrowStop = stopList[0]
	tomorrowStop.setDate(tomorrowStop.getDate()+1)
	
	return (tomorrowStop - now)/1000/60
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