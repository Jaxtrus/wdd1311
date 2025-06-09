function submitHandler(event) {
  event.preventDefault();

  const errorMsg = document.querySelector(".errorMsg");
  errorMsg.textContent = "";

  const cardNumber = document.querySelector("#cardNumber").value.trim();
  const expiry = document.querySelector("#expiry").value;

  // Validate card number is all digits
  if (isNaN(cardNumber)) {
    errorMsg.textContent = "Card number must be numeric.";
    return;
  }

  // Validate specific card number
  if (cardNumber !== "1234123412341234") {
    errorMsg.textContent = "Card number is not valid. Use 1234123412341234.";
    return;
  }

  // Validate expiration is in the future
  const today = new Date();
  const [expYear, expMonth] = expiry.split("-");
  const expDate = new Date(expYear, expMonth);

  if (expDate <= today) {
    errorMsg.textContent = "Expiration date must be in the future.";
    return;
  }

  // If all checks pass
  alert("Payment submitted successfully!");
}

document.querySelector("#credit-card").addEventListener("submit", submitHandler);
