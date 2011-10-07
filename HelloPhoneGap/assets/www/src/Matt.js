function nextStop(scheduleArray, currentTime) {
	var nextStop;
		for (i=0; i<scheduleArray.length ; i++){
			if (scheduleArray[i] >= currentTime ){
				nextStop = scheduleArray[i];
				break;
			}
			else{
				nextStop = -1;
			}
		}
	return nextStop;
}