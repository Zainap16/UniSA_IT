/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Zainap Van Blerck
      Date:   2024/04/23

      Filename: project02-02.js
 */
 


function verifyForm(){

      let fName = document.getElementById("name").value;
      let fEmail = document.getElementById("email").value;
      let fPhone = document.getElementById("phone").value;

      let message =(fName !== "" && fEmail !== "" && fPhone !== "") ? "Thank you" : "Please fill in all fields";

      alert(message);

      
};

document.getElementById("submitbutton").addEventListener("click", verifyForm);