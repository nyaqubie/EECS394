function getStops(){
	//This is a placeholder until we have the actual functionality to get the stops
	var stops = new Array();
	stops[0] = "";
	stops[1] = "Stop1";
	stops[2] = "Stop2";
	return stops;
}

function listStopsinOptionsFormat(){
	stops = getStops();
	for (i in stops){
		document.write("<option value=" + i + ">");
		document.write(stops[i]);
		document.write("</option>");
	}
}

function selectedRedirect(thingy){
	window.location = 'showstop.html?stop=' + thingy.value;
}

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