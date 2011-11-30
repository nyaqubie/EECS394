jasmine.getFixtures().fixturesPath = '.';

describe("index.html", function() {

 	it("should have a visible banner initially, and no visible banner after the 5 seconds", function() {
		var fixtureUrl = "index.html";
		jasmine.getFixtures().load(fixtureUrl);
		waits(100)
		
		runs( function () {
			expect($('#banner').css('display')).toEqual('inline')
			fadeBanner();
		});

		waits(5000)

		runs( function () {
			expect($('#banner').css('display')).toEqual('none')
		});
	});	 	 

	it("should load events in the background", function() {
		var fixtureUrl = "index.html";
		jasmine.getFixtures().load(fixtureUrl);
		waits(100)
		
		runs( function () {
			expect($('li').size()).toEqual(0)
			var data = [[38, "Northwestern vs. Mississippi Valley State", "12/2/2011"],[38, "Northwestern vs. Mississippi Valley State", "12/2/2011"]]
			getEventsFunct(data)
			expect($('li').size()).toBeGreaterThan(0)
		});
	});
}); 

describe("events.html", function() {

	it("should .....", function() {
		var fixtureUrl = "events.html";
		jasmine.getFixtures().load(fixtureUrl);
		waits(100)

		runs( function () {
		});
	});

}); 

describe("locations.html", function() {

	it("should .....", function() {
		var fixtureUrl = "locations.html";
		jasmine.getFixtures().load(fixtureUrl);
		waits(100)

		runs( function () {
		});
	});

}); 

describe("location.html", function() {
	it("should create the correct back button", function() {
		var fixtureUrl = "location.html";
		jasmine.getFixtures().load(fixtureUrl);
		waits(100)
		
		var altQuery = function(){
			return '11';
		}

		runs( function () {
			spyOn(window, "getQueryVariable").andCallFake(altQuery);
			createBackButton()
			expect($('#back').attr('href')).toEqual('locations.html?eventid=11');
			console.log($('#jasmine-fixtures'))
		});
	});
});