// Get all input elements and their corresponding error message spans
const cardholderNameInput = document.getElementById("cardholderName");
const cardNumberInput = document.getElementById("cardNumber");
const expMonthInput = document.getElementById("expMonth");
const expYearInput = document.getElementById("expYear");
const cvcInput = document.getElementById("cvc");

const cardholderNameError = document.getElementById("cardholderNameError");
const cardNumberError = document.getElementById("cardNumberError");
const expiryDateError = document.getElementById("expiryDateError");
const cvcError = document.getElementById("cvcError");

// Get display elements for the card
const cardHolderNameDisplay = document.getElementById("cardHolderNameDisplay");
const cardNumberDisplay = document.getElementById("cardNumberDisplay");
const expiryDateDisplay = document.getElementById("expiryDateDisplay");
const cvcDisplay = document.getElementById("cvcDisplay");
const paymentForm = document.getElementById("paymentForm");

// Get container elements for showing/hiding states
const formContainer = document.getElementById("formContainer");
const successContainer = document.getElementById("successContainer");
const continueButton = document.getElementById("continueButton");

// Real-time Card Updates

// Update cardholder name display
cardholderNameInput.addEventListener("input", (e) => {
  cardHolderNameDisplay.textContent =
    e.target.value.toUpperCase() || "JANE APPLESEED";
  clearError(cardholderNameInput, cardholderNameError);
});

// Update card number display with formatting
cardNumberInput.addEventListener("input", (e) => {
  let value = e.target.value.replace(/\D/g, ""); // Remove non-digits
  value = value.replace(/(\d{4})(?=\d)/g, "$1 "); // Add space every 4 digits
  cardNumberDisplay.textContent = value || "0000 0000 0000 0000";
  e.target.value = value; // Update input field with formatted value
  clearError(cardNumberInput, cardNumberError); // Clear error on input
});

// Update expiry date display
expMonthInput.addEventListener("input", updateExpiryDate);
expYearInput.addEventListener("input", updateExpiryDate);

function updateExpiryDate() {
  const month = expMonthInput.value.padStart(2, "0");
  const year = expYearInput.value.padStart(2, "0");
  expiryDateDisplay.textContent = `${month}/${year}` || "00/00";
  clearError(expMonthInput, expiryDateError); 
  clearError(expYearInput, expiryDateError); 
}

// Update CVC display
cvcInput.addEventListener("input", (e) => {
  cvcDisplay.textContent = e.target.value || "000";
  clearError(cvcInput, cvcError); 
});

// Form Validation

paymentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();
});

function validateForm() {
  let isValid = true;

  // Validate Cardholder Name
  if (cardholderNameInput.value.trim() === "") {
    showError(
      cardholderNameInput,
      cardholderNameError,
      "Cardholder name cannot be empty"
    );
    isValid = false;
  } else {
    clearError(cardholderNameInput, cardholderNameError);
  }

  // Validate Card Number
  const rawCardNumber = cardNumberInput.value.replace(/\s/g, "");
  if (rawCardNumber === "") {
    showError(cardNumberInput, cardNumberError, "Card number cannot be empty");
    isValid = false;
  } else if (!/^\d{16}$/.test(rawCardNumber)) {
    showError(
      cardNumberInput,
      cardNumberError,
      "Wrong format, 16 digits required"
    );
    isValid = false;
  } else {
    clearError(cardNumberInput, cardNumberError);
  }

  // Validate Expiry Date (Month and Year)
  const currentYear = new Date().getFullYear() % 100; // Get last two digits of current year
  const currentMonth = new Date().getMonth() + 1; // Month is 0-indexed

  const expMonth = parseInt(expMonthInput.value, 10);
  const expYear = parseInt(expYearInput.value, 10);

  if (expMonthInput.value.trim() === "" || expYearInput.value.trim() === "") {
    showError(expMonthInput, expiryDateError, "Can't be blank");
    isValid = false;
  } else if (isNaN(expMonth) || expMonth < 1 || expMonth > 12) {
    showError(expMonthInput, expiryDateError, "Invalid month");
    isValid = false;
  } else if (
    isNaN(expYear) ||
    expYear < currentYear ||
    (expYear === currentYear && expMonth < currentMonth)
  ) {
    showError(expYearInput, expiryDateError, "Invalid year or expired");
    isValid = false;
  } else {
    clearError(expMonthInput, expiryDateError);
    clearError(expYearInput, expiryDateError);
  }

  // Validate CVC
  if (cvcInput.value.trim() === "") {
    showError(cvcInput, cvcError, "CVC cannot be empty");
    isValid = false;
  } else if (!/^\d{3,4}$/.test(cvcInput.value)) {
    showError(cvcInput, cvcError, "Wrong format");
    isValid = false;
  } else {
    clearError(cvcInput, cvcError);
  }

  if (isValid) {
    // If the form is valid, hide the form and show the success message
    formContainer.style.display = "none";
    successContainer.style.display = "flex";
  }
}

function showError(inputElement, errorElement, message) {
  inputElement.classList.add("input-error");
  errorElement.textContent = message;
  errorElement.style.display = "block";
}

function clearError(inputElement, errorElement) {
  inputElement.classList.remove("input-error");
  errorElement.textContent = "";
  errorElement.style.display = "none";
}

// Continue Button Logic
continueButton.addEventListener("click", () => {
  // Reset form and card displays
  paymentForm.reset();
  cardHolderNameDisplay.textContent = "JANE APPLESEED";
  cardNumberDisplay.textContent = "0000 0000 0000 0000";
  expiryDateDisplay.textContent = "00/00";
  cvcDisplay.textContent = "000";

  // Hide success message and show the form
  successContainer.style.display = "none";
  formContainer.style.display = "block"; 
});

// Initial display update
updateExpiryDate();
