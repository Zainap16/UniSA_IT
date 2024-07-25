"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Chapter case   

      Draw Poker Game using Object Oriented Programming
      Author: Zainap Van Blerck
      Date: 2024/07/25     

      Filename:       js08.js
 */

window.addEventListener("load", playDrawPoker);

function playDrawPoker() {
   // Reference buttons and images within the Poker Game page
   let dealButton = document.getElementById("dealB");
   let drawButton = document.getElementById("drawB");
   let standButton = document.getElementById("standB");
   let resetButton = document.getElementById("resetB");
   let statusBox = document.getElementById("status");
   let betSelection = document.getElementById("bet");
   let bankBox = document.getElementById("bank");
   let cardImages = document.querySelectorAll("img.cardImg");

   // Set the initial bank and bet values
pokerGame.currentBank = 500;
pokerGame.currentBet = 25;

// Create a deck of shuffled cards
let myDeck = new pokerDeck();
myDeck.shuffle();s

// Create an empty poker hand object
let myHand = new pokerHand(5);

// Display the current bank value
bankBox.value = pokerGame.currentBank;

// Change the bet when the selection changes
betSelection.onchange = function() {
   pokerGame.currentBet = parseInt(this.value);//Use the parseInt() function to change the selected text to a number


   }
    
   
      dealButton.addEventListener("click", function() {
         if (pokerGame.currentBank >= pokerGame.currentBet) {
        // Enable the Draw and Stand buttons after the initial deal
         dealButton.disabled = true;        // Turn off the Deal button
         betSelection.disabled = true;      // Turn off the Bet Selection list
         drawButton.disabled = false;       // Turn on the Draw button
         standButton.disabled = false;      // Turn on the Stand Button
         statusBox.textContent = "";        // Erase any status messages

         // Reduce the bank by the size of the bet
bankBox.value = pokerGame.placeBet(); 
} else {
   statusBox.textContent = "Insufficient Funds";
   }
         
   });
   
   
   drawButton.addEventListener("click", function() {
      // Enable the Deal and Bet options when the player chooses to draw new cards
      dealButton.disabled = false;        // Turn on the Deal button
      betSelection.disabled = false;      // Turn on the Bet Selection list
      drawButton.disabled = true;         // Turn off the Draw button
      standButton.disabled = true;        // Turn off the Stand Button

   });
   
    
   standButton.addEventListener("click", function() {
      // Enable the Deal and Bet options when the player chooses to stand with their hand 
      dealButton.disabled = false;        // Turn on the Deal button
      betSelection.disabled = false;      // Turn on the Bet Selection list
      drawButton.disabled = true;         // Turn off the Draw button
      standButton.disabled = true;        // Turn off the Stand Button  

    });
   
   
   // Reload the current page when the Reset button is clicked
   resetButton.addEventListener("click", function() {
      location.reload();
   });
}