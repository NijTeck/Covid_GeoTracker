

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
