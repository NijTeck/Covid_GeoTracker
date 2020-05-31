function country(countryInput) {
	if (countryInput == UnitedStates){
		return; 
	}
var covidURL = "https://api.covid19api.com/countries" + "" + "&appid=f877968bf7mshff9af34bbc2a8bap11856djsn5fe6819edb21";
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

