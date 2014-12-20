jQuery(document).ready(function($) { 
	$.ajaxSetup ({
		cache: false
	});
	$.ajax({
		url : "http://api.wunderground.com/api/cf27f3bd448ee3b9/geolookup/conditions/q/NY/New_York.json",
		dataType : "jsonp",
		success : function(parsed_json) {
			var jloc	= parsed_json['location']['city'],
				jtemp	= parsed_json['current_observation']['temp_f'],
				hum		= parsed_json['current_observation']['relative_humidity'],
				jhum	= hum.replace("%",""),
				jindex	= parsed_json['current_observation']['feelslike_f'],
				wind	= parsed_json['current_observation']['wind_dir'],
				jwind	= wind.toUpperCase(),
				jgust	= parsed_json['current_observation']['wind_gust_mph'];
		}
	});
}, 50);