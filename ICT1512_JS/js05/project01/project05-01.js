"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Zainap Van Blerck
      Date:   2024/07/23
      Filename: project05-01.js
*/

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 20;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands
// and the node list for questions
let timeID;
let questionList = document.querySelectorAll("div#quiz input");

startQuiz.onclick = function () {
//sets overlay class to showquiz
   overlay.className = "showquiz";

//time
timeID = setInterval(countdown, 1000);

function countdown(){

if (timeLeft === 0) {
   clearInterval(timeID);
   let totalCorrect = checkAnswers();


if (totalCorrect === correctAnswers.length){
   alert("congratrs on getting 100%!")
}else {
      alert(totalCorrect + " out of "+ correctAnswers.length
      );
      timeLeft = quizTime;
      quizClock.value = timeLeft;
      overlay.className = "hidequiz";
   }

} else if (timeLeft != 0){

   timeLeft = timeLeft - 1;
   quizClock.value = timeLeft;
}

}
} 


/*
things i got wrong:

- should use setInterval instead of setTimeout
- used = instead of ==/===
- onclick !


*/


















/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
   let correctCount = 0;
   
   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "";
      } else {
         questionList[i].className = "wronganswer";
      }      
   }
   return correctCount;
}

