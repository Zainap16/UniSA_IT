"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Chapter case

      Order Form Code
      Author: Zainap Van Blerck
      Date:   2024/06/21

      Filename: js06a.js
 */

      window.addEventListener("load", function() {
            let orderForm = document.forms.orderForm;
            let model = orderForm.elements.model;
            // Select Model selection list when form opens
            model.focus();

            // Calculate the cost of the order
            calcOrder();

            function calcOrder() {
                  // Determine the selected model
                  let mIndex = model.selectedIndex;
                  let mValue = model.options[mIndex].value;
                  // Determine the selected quantity
                  let qIndex = orderForm.elements.qty.selectedIndex;
                  let quantity = orderForm.elements.qty[qIndex].value;
                  // Model cost = model cost times quantity
                  let modelCost = mValue*quantity;
                  orderForm.elements.modelCost.value = modelCost;

                  // Retrieve the cost of the protection plan
                  let planValue =
                  document.querySelector('input[name="plan"]:checked').value;
                  // Charge the plan to each item ordered
                  let planCost = planValue * quantity;
                  orderForm.elements.planCost.value = planCost;
                 }
            
           });



