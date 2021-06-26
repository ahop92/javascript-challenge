// from data.js
var tableData = data;

// Confirm data import successful
console.log(data);

//Create D3 references to HTML table
var ufoTable = d3.select("table");
const tableBody = d3.select("tbody");
var dates = [];
var cities = [];
var states = [];
var countries = [];
var shapes = [];
var durations = [];

//Loop and function to append all of the given data to the HTML table
function buildTable(records) {
  records.forEach((ufoData) => {
    var row = tableBody.append("tr");
    Object.entries(ufoData).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}
//Funciton to remove table data
function resetTable() {
  d3.selectAll("#ufo-table-body").html("");
}

// Create function to compare user input to stored data
function compare(userInput, dataAttributeArray) {
  var logical = false;

  if (dataAttributeArray.includes(userInput)) {
    logical = true;
  }

  return logical;
}

//Build initial table
buildTable(tableData);

//Store data for comparator functions
tableData.forEach((ufoData) => {
  Object.entries(ufoData).forEach(([key, value]) => {
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


//Create listeners for events in filter selections
var dateFilterButton = d3.select("#date-filter-btn");
var form = d3.select("#form");

dateFilterButton.on("click", runEnter);
form.on("submit", runEnter);

// Create Function to be event in response to activity in filter selections
function runEnter() {
  // Prevent the page from refreshing
  d3.event.preventDefault();

  const dateElementText = d3.select("#datetime").property("value");
  const containsDate = compare(dateElementText, dates);
  console.log(`The user tried to search for ${dateElementText}`);
  console.log(`Data present: ${containsDate}`);

  // Process if the user entered information that matches data archive
  if (containsDate) {
    resetTable();
    var filteredData = tableData.filter(
      (row) => row.datetime === dateElementText
    );
    console.log(filteredData);

    buildTable(filteredData);
  }

  // Processes if the user input does not match anything in the archive
  else {
  }
}
