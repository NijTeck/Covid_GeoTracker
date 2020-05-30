function country(countryInput) {
	if (countryInput == Dominica){
		return; 
	}
var covidURL = "https://api.covid19api.com/countries" + "Dominica" + "&appid=PMAK-5ecdc71bcf51720034c0e77e-dcfabbd6b156f6387dca1b42a883fff43a";
console.log(covidURL);
 $.ajax({
    url: covidURL,
    method: "GET"
  })
  .then(function(response) {
	  var countryDiv = $("<div class = 'map-container'>")
	
	  var results = response.data; 

	  console.log(response);

	  var countryInput = response.name;
  });
}
//$("#search-button").click(country);
//console.log("info");
var anything = document.getElementById("search-button");
console.log(anything);
document.getElementById("search-button").addEventListener("click", myFunction);
function myFunction() {
    console.log("info")
  document.getElementById("search-button").innerHTML = "YOU CLICKED ME!";
}

function onSearch (){
    let queryCity = document.getElementById("input").value; 
    console.info("HERE");
}
console.log("info");
