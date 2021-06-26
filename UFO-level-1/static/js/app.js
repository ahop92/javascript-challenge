// from data.js
var tableData = data;

// Confirm data import successful
console.log(data); 

//Create D3 references to HTML table 
var ufoTable = d3.select("table");
var tableBody = d3.select("tbody");
var dates = []; 
var cities = [];
var states = [];
var countries = [];
var shapes = [];
var durations = [];



//Loop and function to append all of the given data to the HTML table
//Store data for comparator functions
tableData.forEach((ufoData) => {
  var row = tableBody.append("tr");
  Object.entries(ufoData).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);

    switch (key) {

      case "datetime":
        if (dates.includes(value) === false) {
          dates.push(value);
        }
        break;

      case "city":
        if (cities.includes(value) === false) {
          cities.push(value);
        }
        break;

      case "state":
        if (states.includes(value) === false) {
          states.push(value);
        }
        break;

      case "country":
        if (countries.includes(value) === false) {
          countries.push(value);
        }
        break;

      case "shape":
        if (shapes.includes(value) === false) {
          shapes.push(value);
        }
        break;

      case "durationMinutes":
        if (durations.includes(value) === false) {
          durations.push(value);
        }
        break;

    }
  });
});

// Create function to compare user input to stored data
function compare(userInput, dataAttributeArray) {
  var logical = false;

  if (dataAttributeArray.includes(userInput)) {
    logical = true;
  }

  return logical;
}

//Filter date function 
var dateFilterButton = d3.select("#date-filter-btn");
var form = d3.select("#form");

dateFilterButton.on("click", runEnter);
form.on("submit", runEnter);

// Create Function to filter data according to entered date
function runEnter(){

  // Prevent the page from refreshing
  d3.event.preventDefault();

  var dateElementText = d3.select("#datetime").property("value");
  var containsDate = compare(dateElementText, dates);
  console.log(`The user tried to search for ${dateElementText}`);
  console.log(`Data present: ${containsDate}`);


}











