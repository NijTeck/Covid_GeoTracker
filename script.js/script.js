
                // $(document).foundation();
 $("#search-button").click();

 $(document).ready(function () {


  
  // Get JSON data from url
  $.getJSON("https://covidtracking.com/api/states?=US", function (data) {

      var state = [];
      var negative = [];
      var hospitalizedCurrently = [];
      var recoverd = [];
      var death = [];
      var total = [];
      var dateChecked = []; 
      var score = [];
    
const total_state = "AZ";
var total_negative;
var total_hosptalizedCurrently;
var total_recovered;
var total_death;
var total_total;
var total_dateChecked; 
var total_score;


total_negative = data.negative;
total_hosptalizedCurrently = data.hospitalizedCurrently;
total_recovered = data.recoverd;
total_death = data.death;
total_total = data.total;
total_dateChecked = data.dateChecked;
total_score = data.score;


$("#negative").append(total_negative);
$("hospitalizedCurrently").append(total_hosptalizedCurrently);
$("#recovered").append(total_recovered);
$("#death").append(total_death);
$("#total").append(total_total);
$("#dateChecked").append(total_dateChecked);
$("#score").append(total_score);

//console.log(total_score);



      $.each(data.StateData, function (id, obj) {
        state.push(obj.state);
        console.log()
        negative.push(obj.confirmed);
        hospitalizedCurrently.push(obj.hospitalizedCurrently);
        recoverd.push(obj.recoverd);
        death.push(obj.death);
        total.push(obj.total);
        dateChecked.push(obj.dateChecked);
        score.push(obj.score);
        console.log(obj.hospitalizedCurrently)
      })

      state.shift();
      negative.shift();
      hospitalizedCurrently.shift();
      recoverd.shift();
      death.shift();
      total.shift();
      dateChecked.shift();
      score.shift();

   console.log(state);

   /*    $.each(data.Countries, function(id, obj) {
      
       if(obj.Slug === Slug){

                                                       console.log(obj.TotalDeaths); */
      


    })
 });

