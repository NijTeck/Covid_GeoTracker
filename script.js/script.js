
function storeSummaryData(){
  //promises continues to excute function without going off the rails. 
  let covidPromise = $.ajax ({
     url : "https://api.covid19api.com/summary",
     method: "GET"
  }).then(parseJSON);
//calles to second API 
  let popPromise = $.ajax ({
    url: "https://ajayakv-rest-countries-v1.p.rapidapi.com/rest/v1/all",
    method: "GET",
    beforeSend: addHeaders
  }).then(afterPopReturns);
//executes after previous promises 
  Promise.all([covidPromise, popPromise])
    .then(afterBothFinish);
}
//authentication for second API 
function addHeaders (req){
  req.setRequestHeader("x-rapidapi-host","ajayakv-rest-countries-v1.p.rapidapi.com");
  req.setRequestHeader("x-rapidapi-key","b545bfc749msh27ea8a628f657c2p142142jsn1c819a1e9bc1");
  req.setRequestHeader("useQueryString","true");
}

function afterPopReturns(data){
  return data;
}
//parses JSON and stores into local storage 
function parseJSON(data){
  if (!data){
    return; 
  }

  let countryList = [];
//array of countries and populate dropdown 
  for (let i =0; i < data.Countries.length; i++){
    let countryName = data.Countries[i].Country;
    let countryCode = data.Countries[i].CountryCode;
    let countryJson = JSON.stringify(data.Countries[i]);
 
    window.localStorage.setItem(countryCode, countryJson);
    countryList.push({
      name: countryName,
      code: countryCode
    });
  }

  refreshSelection(countryList);

  return countryList;
}
//puts population into summary of country 
function afterBothFinish(values){
  let popData = values[1];
  let countryList = values[0];



  for (let i = 0; i < popData.length; i++){
//allows abreviated log equal full name of country 
    let lookupJson = window.localStorage.getItem(popData[i].alpha2Code);



//creates string value 
    if(!lookupJson)
      continue; 
//turns string into obj
    let lookupObj = JSON.parse(lookupJson);
    //add population tag to summary of country 
    lookupObj["totalPop"] = popData[i].population; 

    window.localStorage.setItem(popData[i].alpha2Code, JSON.stringify(lookupObj));
  }
}
//drop down function 
function refreshSelection(Countries){
  let selection = $("#Slug");

  if (!selection){
    return;
  }

  selection = selection[0];
//add each item individually 
  for(let i =0; i <Countries.length; i++){
    let countryOption = document.createElement("option");
    countryOption.value = Countries[i].code;
    countryOption.innerHTML = Countries[i].name;

    selection.appendChild(countryOption);
  }
}
//attaches search to button 
function onSearch(){
  let selectedValue = $("#Slug")[0].value; 

  let selectedOBJ = JSON.parse(window.localStorage.getItem(selectedValue));

  console.info(selectedOBJ);

  //TODO: display to screen goes here!!!!!!!!!!!!!!!
  //Country, deaths, population, 

}
