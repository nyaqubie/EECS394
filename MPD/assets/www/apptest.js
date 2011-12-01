jasmine.getFixtures().fixturesPath = '.';

describe("index.html", function() {
	beforeEach(function() {
		var fixtureUrl = "index.html";
		jasmine.getFixtures().load(fixtureUrl);
		waits(100)
	});
	
	it("should have a back button which returns to 'events.html'", function() {
		expect($('#back').attr('href')).toEqual('events.html');
	});
	
	it("should have a home button which returns you to 'index.html'", function() {
		expect($('#home').attr('href')).toEqual('index.html');
	});

	it("should load events in the background", function() {
		expect($('li').size()).toEqual(0)
		var data = [[38, "Northwestern vs. Mississippi Valley State", "12/2/2011"],[38, "Northwestern vs. Mississippi Valley State", "12/2/2011"]]
		getEventsFunct(data)
		expect($('li').size()).toBeGreaterThan(0)
	});
	
	it("should have a visible banner initially, and no visible banner after the 5 seconds", function() {
		runs( function () {
			expect($('#banner').css('display')).toEqual('inline')
			fadeBanner();
		});

		waits(6000)

		runs( function () {
			expect($('#banner').css('display')).toEqual('none')
		});
	});	
});

describe("events.html", function() {
	beforeEach(function() {
		var fixtureUrl = "events.html";
		jasmine.getFixtures().load(fixtureUrl);
		waits(100)
	});

	it("should have a back button which returns to 'events.html'", function() {
		expect($('#back').attr('href')).toEqual('events.html');
	});
	
	it("should have a home button which returns you to 'index.html'", function() {
		expect($('#home').attr('href')).toEqual('index.html');
	});
});

describe("locations.html", function() {
	beforeEach(function() {
		var fixtureUrl = "locations.html";
		jasmine.getFixtures().load(fixtureUrl);
		waits(100)
	});

	it("should have a back button which returns to 'events.html'", function() {
		expect($('#back').attr('href')).toEqual('events.html');
	});
	
	it("should have a home button which returns you to 'index.html'", function() {
		expect($('#home').attr('href')).toEqual('index.html');
	});

	it("should load the events properly", function() {
		expect($('li').size()).toEqual(0)
		var data = [[38, "Northwestern vs. Mississippi Valley State", "12/2/2011"],[38, "Northwestern vs. Mississippi Valley State", "12/2/2011"]]
		getEventsFunct(data)
		expect($('li').size()).toBeGreaterThan(0)
	});
}); 

describe("location.html", function() {
	beforeEach(function() {
		var fixtureUrl = "location.html";
		jasmine.getFixtures().load(fixtureUrl);
		waits(100)
	});
	/*it("should have a back button which returns to the correct 'locations.html' page", function() {
		var altQuery = function(){
			return '11';
		}
		spyOn(window, "getQueryVariable").andCallFake(altQuery);
		createBackButton()
		expect($('#back').attr('href')).toEqual('locations.html?eventid=11');
	});*/
	
	it("should have a home button which returns you to 'index.html'", function() {
			expect($('#home').attr('href')).toEqual('index.html');
	});
});