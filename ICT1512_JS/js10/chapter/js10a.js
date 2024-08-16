"use strict";
/*  JavaScript 7th Edition
    Chapter 10
    Chapter case

    Oak Top House
    Author: 
    Date:   

    Filename: js10a.js
*/


window.addEventListener("load", setupRoom);

// perform setup tasks when page first loads
function setupRoom() {
   //Page objects
   let room = document.getElementById("room");                            // banquet hall
   let storage = document.getElementsByTagName("storage");                // storage room
   let roomTables = document.querySelectorAll("#room > div.table");       // Tables in the banquet hall
   let storageTables = document.querySelectorAll("#storage > div.table"); // Tables in the storage room
   let zIndexCounter = 0;                                                 // Count the highest z-Index value
   
   // Function to calculate available seats in the room layout
   function countSeats() {
      let guests = 0;
            let seatCount = document.getElementById("seatCount");      
      let tablesToCount = document.querySelectorAll("#room > div.table");
      for (let  items of tablesToCount) {
         guests += parseInt(items.textContent);
      }
      seatCount.textContent = guests;
    }

    // Add tables from storage to the banquet hall
for (let items of storageTables) {
   items.onclick = function() {
   let storageCopy = items.cloneNode(true);
   room.appendChild(storageCopy); 
   zIndexCounter++;
storageCopy.style.zIndex = zIndexCounter; 
countSeats();

// Grab the table in response to the pointerdown event
storageCopy.addEventListener("pointerdown", grabTable); 
}
}} 

let startingX, startingY; // initial pointer coordinates 
