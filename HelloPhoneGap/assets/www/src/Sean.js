function nextLocation(stopArray, currentLocation){
	var nextLocation;
		if (currentLocation == "Tech") {
			nextLocation = "Norris";
		}
		else if (currentLocation == "Norris") {
			nextLocation = "Arch";
		}
		else if (currentLocation == "Arch") {
			nextLocation = "Foster";
		}
		else if (currentLocation == "Foster") {
			nextLocation = "Tech";
		}
		else if (currentLocation == "???") {
			nextLocation ="Location Unknown";
		}
		else {
		}			
	return nextLocation;
}