# UFO Sighting Data Analysis


## Background 

The purpose of this assignment was to develop multiple javascript functions that populate and reset a table according to user input to filter through provided data. The data.js and index.html were provided.


## Level 1: Automatic Table and Date Search


Using the UFO dataset provided in the form of an array of JavaScript objects, code that appends a table to the web page and then adds new rows of data for each UFO sighting was approached using the following functions:

1. buildTable() - using fat arrow notation and the forEach method, the data.js was imported and appended to the HTML table using D3. 

2. resetTable() - using the .html() method, this function allows the table to be cleared. 

The resulting table contained the following columns: date/time, city, state, country, shape, and comment at the very least.

Using the form in the provided HTML document, JavaScript code was developed to listen for user input to filter through the data according to the date using the following functions: 

1. Compare() - checking that the user entered input exists in the provided dataset. 

2. runEnter() - resulting function once the user hits the enter key or clicks the button "Filter Table." 
