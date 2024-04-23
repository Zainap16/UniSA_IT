/*    JavaScript 7th Edition
      Chapter 2
      Project 02-03

      Application to return the shape of a clicked object
      Author: Zainap Van Blerck
      Date:   2024/04/23

      Filename: project02-03.js
 */



 const square = document.getElementById("sqaure");
 const triangle = document.getElementById("triangle");
 const circle = document.getElementById("circle");

square.onmouseover = function(){

      document.getElementById("feedback").innerHTML = "You're hovering over the square";

};

square.onmouseout = function(){

      document.getElementById("feedback").innerHTML = "";

};

triangle.onmouseover = function(){

      document.getElementById("feedback").innerHTML = "You're hovering over the triangle";

};

triangle.onmouseout = function(){

      document.getElementById("feedback").innerHTML = "";

};

circle.onmouseover = function(){

      document.getElementById("feedback").innerHTML = "You're hovering over the circle";

};

circle.onmouseout = function(){

      document.getElementById("feedback").innerHTML = "";

};