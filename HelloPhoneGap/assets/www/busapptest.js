describe("stop", function() {
	beforeEach(function() {	
		
	});

	it("Stop's name will be accurate in the stop object", function() {
		var stop2 = new stop("Fisk Hall","42.050655","-87.673677",["12:21:00 AM","12:56:00 AM","01:31:00 AM","02:06:00 AM","02:41:00 AM","06:01:00 PM","06:36:00 PM","07:11:00 PM","07:46:00 PM","08:21:00 PM","09:26:00 PM","10:01:00 PM","10:36:00 PM","11:11:00 PM","11:46:00 PM"]);
		expect(stop2.name).toEqual("Fisk Hall");
	});
	
	it("Stop's geolocation data will be accurate in the stop object", function() {
		var stop2 = new stop("Fisk Hall","42.050655","-87.673677",["12:21:00 AM","12:56:00 AM","01:31:00 AM","02:06:00 AM","02:41:00 AM","06:01:00 PM","06:36:00 PM","07:11:00 PM","07:46:00 PM","08:21:00 PM","09:26:00 PM","10:01:00 PM","10:36:00 PM","11:11:00 PM","11:46:00 PM"]);
	});
	
	it("Stop times will be created properly in the stop object", function() {
		//Need to fake the time for this
	});

});
describe("distanceBetweenCoords", function() {
	beforeEach(function() {
		
	});

	it("", function() {
		var stop5 = new stop("Tech Institute","42.057944","-87.677105",["12:25:00 AM","01:00:00 AM","01:35:00 AM","02:10:00 AM","02:45:00 AM","06:05:00 PM","06:40:00 PM","07:15:00 PM","07:50:00 PM","08:25:00 PM","09:30:00 PM","10:05:00 PM","10:40:00 PM","11:15:00 PM","11:50:00 PM"]);
		var stop6 = new stop("Noyes/Sherman","42.058494","-87.681445",["12:27:00 AM","01:02:00 AM","01:37:00 AM","02:12:00 AM","02:47:00 AM","06:07:00 PM","06:42:00 PM","07:17:00 PM","07:52:00 PM","08:27:00 PM","09:32:00 PM","10:07:00 PM","10:42:00 PM","11:17:00 PM","11:52:00 PM"]);
		distanceBetweenCoords(stop5.geoloc, stop6.geoloc)
	});
});


describe("getTimeUntilNextBus", function() {
	beforeEach(function() {

	});


});

describe("listStopsinOptionsFormat", function() {
	beforeEach(function() {

	});
});

describe("selectedRedirect", function() {
	beforeEach(function() {

	});
});

describe("getQueryVariable", function() {
	beforeEach(function() {

	});
	
});