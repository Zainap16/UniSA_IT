/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Zainap Van Blerck
      Date:   2024/06/18

      Filename: project03-01.js
*/

 // Function to display a numeric value as a text string in the format $##.## 
 let menuItems = document.getElementsByClassName("menuItem");

for (let i = 0; i < menuItems.length ; i++){

     menuItems[i].addEventListener("click",calcTotal());

}

function calcTotal(){
      let orderTotal = 0;
      for (let i = 0; i < menuItems.length ; i++){
            if (menuItems[i].checked.checked) {
                  orderTotal += Number(menuItems[i].value) ;
            }
      }

      document.querySelector("#billTotal").innerHTML = formatCurrency(orderTotal);
}

 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }