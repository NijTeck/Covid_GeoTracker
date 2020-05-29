var covidURL = "https://api.covid19api.com/countries" + " " + "PMAK-5ecdc71bcf51720034c0e77e-dcfabbd6b156f6387dca1b42a883fff43a";
console.log(covidURL);

return $.ajax({
    url: chicagoURL,
    method: "GET"


})

//.then(function(response) {
var mapContainer = $("<div class = 'map-container'>")
    //console.log("response");
var results = response.data;
console.log(response);
var country = response.name;

});
/*
$("#submit").on("click", function(event) {
    event.preventDefault();
    console.log("click");
    //$(".united-states").html("");
    // $(".map-container").show();


})
*/