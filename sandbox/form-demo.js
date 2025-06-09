// form-demo.js

function togglePaymentDetails(e) {
  // get a reference to the form
  const theForm = document.querySelector("#checkoutForm");

  // get containers for payment methods
  const creditCardContainer = document.getElementById("creditCardNumberContainer");
  const paypalContainer = document.getElementById("paypalUsernameContainer");

  // hide both containers
  creditCardContainer.classList.add("hide");
  paypalContainer.classList.add("hide");

  // disable required attributes
  theForm.creditCardNumber.required = false;
  theForm.paypalUsername.required = false;

  // show correct container and enable required attribute
  if (theForm.paymentMethod.value === "creditCard") {
    creditCardContainer.classList.remove("hide");
    theForm.creditCardNumber.required = true;
  } else if (theForm.paymentMethod.value === "paypal") {
    paypalContainer.classList.remove("hide");
    theForm.paypalUsername.required = true;
  }
}

// helper function to display our errors
function showErrors(errors) {
  const errorEl = document.querySelector(".errors");
  const html = errors.map((error) => `<p>${error}</p>`);
  errorEl.innerHTML = html.join("");
}

function validateForm(event) {
  const theForm = event.target;
  const errors = [];
  let isValid = true;

  // Validate credit card number
  if (theForm.paymentMethod.value === "creditCard") {
    if (theForm.creditCardNumber.value !== "1234123412341234") {
      isValid = false;
      errors.push("Invalid Credit Card Number");
    }
  }

  // Only allow "Bob" to submit
  if (theForm.fullName.value !== "Bob") {
    isValid = false;
    errors.push("Your name is not Bob");
  }

  if (!isValid) {
    event.preventDefault();
    showErrors(errors);
    return false;
  }
}

// Attach event listeners
document.querySelector("#paymentMethod").addEventListener("change", togglePaymentDetails);
document.querySelector("#checkoutForm").addEventListener("submit", validateForm);
