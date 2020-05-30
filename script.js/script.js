function country() {
var covidURL = "https://api.covid19api.com/countries" + " " + "&appid=PMAK-5ecdc71bcf51720034c0e77e-dcfabbd6b156f6387dca1b42a883fff43a";
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
function onButtonClick(button){
    if(!button) {
        return; 
    };
}
function onSearch (){
    let queryCity = document.getElementById("input").value; 
    console.info("HERE");
}
console.log("info");
