/*    JavaScript 7th Edition
     Chapter 3
     Chapter case

     Tipton Turbines
     Program to display games results in a web table
      Author: Zainap Van Blerck
      Date:   2024/05/03

     Filename: js03.js
 */

//days of the weeek

let weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

window.addEventListener("load", addWeekDays);
// Function to write weekday names into the calendar

function addWeekDays() {
  let i = 0; //intial counter value

  // reference the collection of heading cells
  let headingCells = document.getElementsByTagName("th");

  // write each of the seven days into a heading cell
  while (i < 7) {
    headingCells[i].innerHTML = weekDays[i];
    i++; // increase the counter by 1
  }
}

window.addEventListener("load", showGames);

// Function to write game information into the calendar

function showGames() {
  for (let i = 0; i < gameDates.length; i++) {
    let gameInfo = "";
    //open the paragraph
    gameInfo += "<p>";

    //include the opponent
    gameInfo += gameOpponents[i] + "<br>";

    //include the result and score
    gameInfo +=
      gameResults[i] + ": (" + runsScored[i] + " - " + runsAllowed[i] + ") ";

    //close paragraph
    gameInfo += "</p>";

    //write the information into a table cell
    let tableCell = document.getElementById(gameDates[i]);
    tableCell.insertAdjacentHTML("beforeEnd", gameInfo);
  }
}
