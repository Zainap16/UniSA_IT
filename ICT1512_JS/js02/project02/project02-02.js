/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Zainap Van Blerck
      Date:   2024/04/23

      Filename: project02-02.js
 */
 


function verifyForm(){

    let fname = document.getElementById("name");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");

    let message = (fname == "" && email == "" && phone == "") ? "Thank you" : "Please fill in the required information!!";

    window.alert(message);
      
};

document.getElementById("submitbutton").addEventListener("click", verifyForm);