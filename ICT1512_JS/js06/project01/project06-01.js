"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-01

      Project to validate a form used for setting up a new account
      Author: Zainap Van Blerck
      Date:   2024/06/21

      Filename: project06-01.js
*/

let submitButton = document.querySelector("#submitButton");
let pwd = document.querySelector("#pwd");
let pwd2 = document.querySelector("#pwd2");

submitButton.addEventListener("click", function(){
      if(pwd.validity.patternMismatch)
      {
            pwd.setCustomValidity("Your password must be at least 8 characters with at least one letter and one number");
      }else if (pwd != pwd2){

            pwd2.setCustomValidity("password does not match");

      }else{
            pwd.setCustomValidity("");
      }
})

