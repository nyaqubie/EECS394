function getCurrTime() { 
	var now = new Date();
	var hours = now.getHours();
	var mins = now.getMinutes() + (hours * 60);
	return mins;
}

function convertToClockTime(time) {
	var timeString;
	
	if (time >= 0  && time <= 1440) {
		var mins = time % 60;
		var hours = (time - mins) / 60;
		var sign = "AM";
		if (hours > 12){
			sign = "PM";
			hours = hours - 12;
		}
		
		timeString = hours + ':' + mins + ' ' + sign;
	}
	
	return timeString;
}