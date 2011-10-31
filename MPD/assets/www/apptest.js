describe("sample", function() {
	beforeEach(function() {	
		
	});
	
	it("", function() {
		//Set fake date function
		var actualDateFunction = Date;
		Date = function () {
		   return new actualDateFunction('03/08/1980');
		}

		//Run tests
		var x = new Date();
		expect(x.getFullYear()).toEqual(1980);

		Date = function () {
		   return new actualDateFunction();
		}

	});
	
});