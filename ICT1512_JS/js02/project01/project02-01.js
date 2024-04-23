/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: Zainap Van Blerck
      Date:   2024/04/22 

      Filename: project02-01.js
 */

// Celsius 5 (Fahrenheit 2 32)/1.8

// Fahrenheit 5 Celsius 3 1.8 1 32

function FahrenheitToCelsius(degree){

      return (degree - 32) / 1.8;
};

function CelsiusToFahrenheit(degree){

      return (degree * 1.8) + 32;
};

//stores the cValue
const cValueElement = document.getElementById("cValue");

cValueElement.onchange = function() {

      let cDegree = cValueElement.value;

      document.getElementById("fValue").value = CelsiusToFahrenheit(cDegree);

};

//attaches value
const fValueElement = document.getElementById("fValue");
//anon function using onchange
fValueElement.onchange = function(){
//store fDegree everytime it changes since onchange
      let fDegree = fValueElement.value;

      document.getElementById("cValue").value = FahrenheitToCelsius(fDegree);

};

