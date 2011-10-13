describe("nextStop", function() {

	beforeEach(function() {

	});

	it("should return the next available stop", function() {
		scheduleArray = new Array(0, 1, 60, 120, 600, 1439, 1440);
		expect (nextStop(scheduleArray, 30)).toEqual(60);
		expect (nextStop(scheduleArray, 61)).toEqual(120);
		expect (nextStop(scheduleArray, 120)).toEqual(120);
		expect (nextStop(scheduleArray, 0)).toEqual(0);
		expect (nextStop(scheduleArray, 1)).toEqual(1);
		expect (nextStop(scheduleArray, 1439)).toEqual(1439);
		expect (nextStop(scheduleArray, 1440)).toEqual(1440);
	});
	
	it("if there are no next available stops, should return -1", function() {
		scheduleArray = new Array(0, 1, 60, 120, 600, 1439, 1440);
		expect (nextStop(scheduleArray, 1441)).toEqual(-1);
	});
	
	it("should fail gracefully if an invalid scheduleArray is given", function(){
		scheduleArray = new Array();
		expect (nextStop(scheduleArray, 24)).toEqual(undefined);
	});
});
