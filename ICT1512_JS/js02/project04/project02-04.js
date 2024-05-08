/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Zainap Van Blerck
      Date:   2024/04/23

      Filename: project02-04.js
 */
const CHICKEN_PRICE = 10.95,
  HALIBUT_PRICE = 13.95,
  BURGER_PRICE = 9.95,
  SALMON_PRICE = 18.95,
  SALAD_PRICE = 7.95,
  SALES_TAX = 0.07;

// Function to display a numeric value as a text string in the format $##.##
function formatCurrency(value) {
  return "$" + value.toFixed(2);
}

document.getElementById("chicken").addEventListener("click", calcTotal);
document.getElementById("halibut").addEventListener("click", calcTotal);
document.getElementById("burger").addEventListener("click", calcTotal);
document.getElementById("salmon").addEventListener("click", calcTotal);
document.getElementById("salad").addEventListener("click", calcTotal);

function calcTotal() {
  cost = 0;
  //declare the checkbox barianles

  let buyChicken = document.getElementById("chicken").checked;
  let buyHalibut = document.getElementById("halibut").checked;
  let buyBurger = document.getElementById("burger").checked;
  let buySalmon = document.getElementById("salmon").checked;
  let buySalad = document.getElementById("salad").checked;

  if (buyChicken == true) {
    cost += BURGER_PRICE;
  }
  if (buyHalibut) {
    cost += HALIBUT_PRICE;
  }
  if (buyBurger) {
    cost += BURGER_PRICE;
  }
  if (buySalmon) {
    cost += SALMON_PRICE;
  }
  if (buySalad) {
    cost += SALAD_PRICE;
  }

  document.getElementById("foodTotal").innerHTML = formatCurrency(cost);

  let tax = cost * SALES_TAX;

  document.getElementById("foodTax").innerHTML = formatCurrency(tax);

  let totalCost = cost + tax;
  document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);
}
