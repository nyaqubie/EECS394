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

/* 	beforeEach(function() {	
		var altQuery = function(){
			return '11';
		}
		spyOn(window, "getQueryVariable").andCallFake(altQuery);

		var testarea = document.createElement('div');
		testarea.setAttribute('id','testarea');
		$('html').append(testarea);
		
		var backlink = document.createElement('h1')
		backlink.setAttribute('id','events');
		$('#testarea').append(backlink)
	});
	
	it("should create a button as a sibling of 'h1#events' with the proper href attribute", function() {
		createBackButton()	
		expect($('#events').next().attr('href')).toEqual('locations.html?eventid=11')
	});
	
	afterEach(function() {
		$('#testarea').remove()


/*describe("distanceBetweenCoords tests", function(){
	it("should return '3265' when geocoords '12,14' and '-32,-4' are given", function() {
		var locationCoords1 = {};
		locationCoords1.latitude = '12';
		locationCoords1.longitude = '14';
		
		var locationCoords2 = {};
		locationCoords2.latitude = '-32';
		locationCoords2.longitude = '-4';
		
		distance = distanceBetweenCoords(locationCoords1, locationCoords2)
		expect(distance).toEqual(3265)
	});
});*/

/*describe("getEvents tests", function(){
	beforeEach(function() {	
		var testarea = document.createElement('div');
		testarea.setAttribute('id','testarea');
		$('html').append(testarea);
	});
	
	it("should return the proper set of events as buttons", function() {
		console.log(getEvents)
	});
	
	afterEach(function() {
		$('#testarea').remove()
	});
	//getEvents()
	
});*/