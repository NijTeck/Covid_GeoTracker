<<<<<<< HEAD
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

=======


  $("#search-button").click(CovidApi);

function CovidApi () {
  var Slug = $("#Slug").value;
  var apiURL= "https://api.covid19api.com//dayone/country/"+Slug;
    $.getJSON(apiURL, function (data) {
      console.log(data);
       Country = [];
      let totalDeath = [];
          totalConfirmed = [];
      let totalRecovered = [];
           console.log(data);

   
      /*var total_Country = "";
      var total_Deaths = "";
      var total_Confirmed = "";
      var total_Recovered = "";


      total_Country = data.Countries[0].Country;
      total_Death = data.Countries[0].totalDeaths;
      total_Confirmed = data.Countries[0].totalConfirmed;
      total_Recovered = data.Countries[0].totalRecovered;*/


      // calling a particular country 
    

    $.each(data.Countries, function(id, obj) {
      
       if(obj.Slug === Slug){

                                                       console.log(obj.TotalDeaths);

        Country.push(obj.Countries);
        totalDeath.push(obj.TotalDeaths);
        totalConfirmed.push(obj.TotalConfirmed);
        totalRecovered.push(obj.TotalRecovered);
        
      
      

        totalConfirmed.push(obj.total_Confirmed);
        //totalDeaths.push(obj.TotalDeaths);
      

        Country.push(obj.Countries);
       
       } 
    })

    });
  }



  /*Country: "United States of America"
CountryCode: "US"
Date: "2020-05-30T18:20:41Z"
NewConfirmed: 24266
NewDeaths: 1193
NewRecovered: 6455
Slug: "united-states"
TotalConfirmed: 1746019
TotalDeaths: 102809
TotalRecovered: 406446 */
>>>>>>> master
