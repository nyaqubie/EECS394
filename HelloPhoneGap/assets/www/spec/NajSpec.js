describe ("getCurrTime", function() {
	beforeEach(function() { 
	
	});
	
	it ("should return a valid time between 0-1440 minutes", function() {
		currtime = getCurrTime();
		expect (currtime).toBeGreaterThan(0);
		expect (currtime).toBeLessThan(1441);
	});
	
	it ("should never return a null value", function() {
		expect (getCurrTime()).toBeDefined();
	});
});

describe ("convertToClockTime", function() {
	beforeEach(function() { 
	
	});
	
	it ("should return correct format of time", function() {
		expect (convertToClockTime(200)).toEqual("3:20 AM");
	});
	
	it ("should not return time in military hours", function() {
		expect (convertToClockTime(1400)).toEqual("11:20 PM");
	});
	
	it ("should return time with correct AM/PM signifier", function() {
		expect (convertToClockTime(200)).toEqual("3:20 AM");
		expect (convertToClockTime(1400)).toEqual("11:20 PM");
	});
	
	it ("should return null if given an invalid time", function() {
		expect (convertToClockTime(-1)).toBeUndefined();
		expect (convertToClockTime(1441)).toBeUndefined();
	});
});
