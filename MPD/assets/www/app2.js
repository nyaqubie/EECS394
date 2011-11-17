function getQueryVariable(variable) {
	//This function analyzes the URL and pulls out the specified variable (POST-style)
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i=0;i<vars.length;i++) {
		var pair = vars[i].split("=");
		if (pair[0] == variable) {
			return pair[1];
		}
	} 
	alert('Query Variable ' + variable + ' not found');
}

function commitToLocation(){
	var eveid = getQueryVariable('eventid');
	var locid = getQueryVariable('locationid');
	var devuuid = device.uuid;
	$.ajax({
		url: 'http://69.164.198.224/showinterest',
		type: 'GET',
		dataType: 'jsonp',
		data:{uuid: devuuid, locationid: locid, eventid:eveid},
		jsonp: 'jsoncallback',
		timeout: 10000,
		success: function(data, status){
			$('#commitlink').remove();
			var link = document.createElement('a');
			link.setAttribute('rel','external');
			link.setAttribute('data-role','button');
			link.appendChild(document.createTextNode('You are interested in this location'));
			$("#footer").before(link);	//add the link before the footer
			$("html").trigger('create')	//needed to apply jqmobile style changes on dynamic content
		},
		error: function(){
			alert('bad')
		}
	});
}

function createBackButton(){
	var eveid = getQueryVariable('eventid');
	var locid = getQueryVariable('locationid');
	var backlink = document.createElement('a');
	var devuuid = device.uuid;
	backlink.setAttribute('href','event.html?eventid=' + eveid);
	backlink.setAttribute('rel','external');
	backlink.setAttribute('data-role','button');
	backlink.appendChild(document.createTextNode('Back'));
	$("#events").after(backlink);
}

function createInterestButton(){
	var devuuid = device.uuid;
	var eveid = getQueryVariable('eventid');
	var locid = getQueryVariable('locationid');
	$.ajax({
		url: 'http://69.164.198.224/checkinterest',
		type: 'GET',
		dataType: 'jsonp',
		data:{uuid: devuuid, locationid: locid, eventid:eveid},
		jsonp: 'jsoncallback',
		timeout: 10000,
		success: function(data, status){
			var link = document.createElement('a');
			link.setAttribute('rel','external');
			link.setAttribute('data-role','button');
			link.setAttribute('id','commitlink');
			if (data == 0){
				link.setAttribute('onclick','commitToLocation()');
				link.appendChild(document.createTextNode('Show interest in this location'));
			}
			else{
				link.appendChild(document.createTextNode('You are interested in this location'));
			}
			$("#footer").before(link);	//add the link before the footer
			$("html").trigger('create')	//needed to apply jqmobile style changes on dynamic content
		},
		error: function(){
			alert('bad')
		}
	});
}

function listLocationsForEvent(){
	var eventid = getQueryVariable('eventid');
	$.ajax({
		url: 'http://69.164.198.224/getlocations',
		type: 'GET',
		dataType: 'jsonp',
		data:{eventid:eventid},
		jsonp: 'jsoncallback',
		timeout: 1000,
		success: function(data, status){
			for (var i = 0; i<data.length; i++){
				var link = document.createElement('a');
				var name = data[i][1];
				var address = data[i][2];
				var geolocation = data[i][3];
				var numinterested = data[i][4];
				
				link.setAttribute('href','location.html?eventid=' + eventid + '&locationid=' + data[i][0]);
				link.setAttribute('rel','external');
				link.setAttribute('data-role','button');
				link.appendChild(document.createTextNode(name + ' ' + numinterested));
				$("#footer").before(link);	//add the link before the footer
				$("html").trigger('create')	//needed to apply jqmobile style changes on dynamic content
			}
		},
		error: function(){
			alert('bad')
		}
	});
}

function getEvents(){
	$.ajax({
		url: 'http://69.164.198.224/getevents',
		type: 'GET',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 10000,
		success: function(data, status){
			for (var i = 0; i<data.length; i++){
			
				var container = document.getElementById('event_list');
				var li = document.createElement('li');   
				var aNode = document.createElement('a');
				aNode.setAttribute('href','event.html?eventid='+data[i][0]);
				//link.setAttribute('rel','external');
				//link.setAttribute('data-role','button');
				//link.appendChild(document.createTextNode(data[i][1] + " " + data[i][2]));
				li.appendChild(document.createTextNode(data[i][1] + " " + data[i][2]));
				container.appendChild(li);
				//$("#footer").before(li);	//add the link before the footer
				//$("#footer").before(link);	//add the link before the footer
				$("html").trigger('create')	//needed to apply jqmobile style changes on dynamic content
			}
		},
		error: function(){
			alert('bad')
		}
	});
}