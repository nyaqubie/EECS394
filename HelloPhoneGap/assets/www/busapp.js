function getStops(){
	//This is a placeholder until we have the actual functionality to get the stops from the CSV file
	//It will eventually just return a list of the stops
	var stops = new Array();
	stops[0] = "";
	stops[1] = "Stop1";
	stops[2] = "Stop2";
	return stops;
}

function listStopsinOptionsFormat(){
	//This function takes the stops in the format from getStops() and prints them out as a list of
	//options tags (for the drop-down menu)
	stops = getStops();
	for (i in stops){
		document.write("<option value=" + i + ">");
		document.write(stops[i]);
		document.write("</option>");
	}
}

function selectedRedirect(thingy){
	//This function redirects the app to the showstop page, and appends the stop ID
	//This is run when the dropdown menu changes
	window.location = 'showstop.html?stop=' + thingy.value;
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