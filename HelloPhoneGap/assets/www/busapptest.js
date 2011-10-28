describe("stop", function() {
	beforeEach(function() {	
		var stop2 = new stop("Fisk Hall","42.050655","-87.673677",["12:21:00 AM","12:56:00 AM","01:31:00 AM","02:06:00 AM","02:41:00 AM","06:01:00 PM","06:36:00 PM","07:11:00 PM","07:46:00 PM","08:21:00 PM","09:26:00 PM","10:01:00 PM","10:36:00 PM","11:11:00 PM","11:46:00 PM"]);
	});

	it("Stop's name will be accurate in the stop object", function() {
		var stop2 = new stop("Fisk Hall","42.050655","-87.673677",["12:21:00 AM","12:56:00 AM","01:31:00 AM","02:06:00 AM","02:41:00 AM","06:01:00 PM","06:36:00 PM","07:11:00 PM","07:46:00 PM","08:21:00 PM","09:26:00 PM","10:01:00 PM","10:36:00 PM","11:11:00 PM","11:46:00 PM"]);
		expect(stop2.name).toEqual("Fisk Hall");
	});
	
	it("Stop's geolocation data will be accurate in the stop object", function() {
		var stop2 = new stop("Fisk Hall","42.050655","-87.673677",["12:21:00 AM","12:56:00 AM","01:31:00 AM","02:06:00 AM","02:41:00 AM","06:01:00 PM","06:36:00 PM","07:11:00 PM","07:46:00 PM","08:21:00 PM","09:26:00 PM","10:01:00 PM","10:36:00 PM","11:11:00 PM","11:46:00 PM"]);
		expect(stop2.latitude).toEqual("42.050655");
		expect(stop2.longitude).toEqual("-87.673677");
	});
	
	it("Stop times will be created properly in the stop object", function() {
		//Need to fake the time for this
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