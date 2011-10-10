describe("nextLocation", function(){
	
	beforeEach(function(){
	});
	
	it("should return the next stop location", function () {
		stopArray = new Array("Tech", "Norris", "Arch", "Foster");
		expect (nextLocation(stopArray, "Tech")).toEqual("Norris");
		expect (nextLocation(stopArray, "Norris")).toEqual("Arch");
		expect (nextLocation(stopArray, "Arch")).toEqual("Foster");
		expect (nextLocation(stopArray, "Foster")).toEqual("Tech");
	});
	
	it("if it cannot be tracked, should return 'Location Unknown'", function() {
		stopArray = new Array("Tech", "Norris", "Arch", "Foster");
		expect (nextLocation(stopArray, "???")).toEqual("Location Unknown");
	});
	
	it("should fail if an invalid Location is given", function(){
		stopArray = new Array("Tech", "Norris", "Arch", "Foster");
		expect (nextLocation(stopArray, "Ryan")).toEqual(undefined);
	});
});
	