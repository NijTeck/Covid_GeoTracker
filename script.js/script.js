var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://covid19-monitor-pro.p.rapidapi.com/coronavirus/cases_by_country_paginated.php?page=%3Crequired%3E&country=United%20States&limit=%3Crequired%3E",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid19-monitor-pro.p.rapidapi.com",
		"x-rapidapi-key": "b545bfc749msh27ea8a628f657c2p142142jsn1c819a1e9bc1"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});