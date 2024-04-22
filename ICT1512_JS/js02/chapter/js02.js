/*    JavaScript 7th Edition
      Chapter 2
      Chapter case

      Fan Trick Fine Art Photography
      Variables and functions
      Author: Zainap Van Blerck
      Date:   2024/04/19

      Filename: js02.js
 */

// declare global constants for the application

const EMP_COSST = 100; //cost of photographers per hour
const BOOK_COST = 350; //cost of memory book
const REPRO_COST = 1250; //cost of reproduction rights
const TRAVEL_COST = 2;  //cost of travel per mile 


// setup the form when the page loads
window.addEventListener("load", setupForm);


//set the form's default values

function setupForm(){

      document.getElementById("photoNum").value = 1;
      document.getElementById("photoHrs").value = 2;
      document.getElementById("makeBook").checked = false;
      document.getElementById("photoRights").checked = false;
      document.getElementById("photoDist").value = 0;

}

// estimate the total cost of the service

function getEstimate(){

      let totalCost = 0;
      let photographers = document.getElementById("photoNum").value; // gets the value
      let hours = document.getElementById("photoHrs").value;
      let distance = document.getElementById("photoDist").value;

}





