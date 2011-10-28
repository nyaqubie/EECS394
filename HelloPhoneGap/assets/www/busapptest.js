describe("stop", function() {
	beforeEach(function() {

	});
});

describe("getTimeUntilNextBus", function() {
	beforeEach(function() {

	});
	
	it("should return something", function() {
		var stop1 = new stop("Noyes","longitude","latitude",["06:40:00 PM","06:45:00 PM","06:57:00 PM"]);
		var now = new Date("01/01/2011 12:00 PM");
		getTimeUntilNextBus(stop1.times);
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