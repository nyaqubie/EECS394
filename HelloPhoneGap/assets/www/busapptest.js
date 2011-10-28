describe("stop", function() {
	beforeEach(function() {	
		var stop2 = new stop("Yesno","latitude","longitude",["10:34:00 PM","10:39:00 PM"]);
	});

	it("Stop's name will be accurate in the stop object", function() {
		expect(stop2.name).toEqual("Yesno");
	});
	
	it("Stop's geolocation data will be accurate in the stop object", function() {
		expect(stop2.latitude).toEqual("latitude");
		expect(stop2.longitude).toEqual("longitude");
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